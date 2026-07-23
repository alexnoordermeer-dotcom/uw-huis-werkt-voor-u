// api/subscribe.js
// Vercel serverless functie: stuurt een nieuwe lead naar EmailOctopus (API v2)
// en verstuurt een notificatie-mail via SMTP.

const nodemailer = require("nodemailer");

const API_KEY = process.env.EMAILOCTOPUS_API_KEY;
const LIST_ID = process.env.EMAILOCTOPUS_LIST_ID;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL;

module.exports = async (req, res) => {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!API_KEY || !LIST_ID) {
    console.error("EMAILOCTOPUS_API_KEY of EMAILOCTOPUS_LIST_ID ontbreekt");
    res.status(500).json({ error: "Server configuratiefout" });
    return;
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const { email, phone, fields = {} } = body;

    if (!email) {
      res.status(400).json({ error: "E-mailadres ontbreekt" });
      return;
    }

    // ── EmailOctopus: contact toevoegen ──
    var eoFields = {};
    if (fields) {
      Object.keys(fields).forEach(function (k) {
        eoFields[k] = fields[k];
      });
    }
    if (phone) eoFields["Telefoon"] = phone;

    const response = await fetch(
      `https://api.emailoctopus.com/lists/${LIST_ID}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
          fields: eoFields,
          status: "subscribed",
        }),
      }
    );

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      const alreadyExists =
        response.status === 409 ||
        (data.errors || []).some((e) =>
          (e.detail || "").toLowerCase().includes("already exists")
        );
      if (!alreadyExists) {
        res.status(502).json({ error: "EmailOctopus weigerde", detail: data });
        return;
      }
    }

    // ── Notificatie-mail versturen ──
    if (SMTP_HOST && SMTP_USER && SMTP_PASS && NOTIFY_EMAIL) {
      try {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: parseInt(SMTP_PORT || "465"),
          secure: true,
          auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
          },
        });

        // Bouw een overzichtelijk mailtje
        var veldenTekst = "";
        var v = eoFields;
        if (v.FirstName || v.LastName) veldenTekst += "Naam: " + (v.FirstName || "") + " " + (v.LastName || "") + "\n";
        if (phone) veldenTekst += "Telefoon: " + phone + "\n";
        if (v.Woningwaarde) veldenTekst += "Woningwaarde: €" + Number(v.Woningwaarde).toLocaleString("nl-NL") + "\n";
        if (v.OpenstaandeHypotheek) veldenTekst += "Openstaande hypotheek: €" + Number(v.OpenstaandeHypotheek).toLocaleString("nl-NL") + "\n";
        if (v.IndicatiefMaandbedrag) veldenTekst += "Indicatief maandbedrag: €" + Number(v.IndicatiefMaandbedrag).toLocaleString("nl-NL") + "\n";
        if (v.VoorschotBedrag && Number(v.VoorschotBedrag) > 0) veldenTekst += "Voorschot bedrag: €" + Number(v.VoorschotBedrag).toLocaleString("nl-NL") + "\n";
        if (v.PartnerInwonend) veldenTekst += "Partner inwonend: " + v.PartnerInwonend + "\n";

        await transporter.sendMail({
          from: '"Consumentenzaken" <' + SMTP_USER + ">",
          to: NOTIFY_EMAIL,
          subject: "Nieuwe lead via Overwaarde-berekening — " + (email || "onbekend"),
          text:
            "Er is een nieuwe lead binnengekomen via de Overwaarde-berekening.\n\n" +
            "E-mail: " + email + "\n" +
            veldenTekst +
            "\n—\nBekijk alle leads: https://emailoctopus.com",
        });

        console.log("Notificatie verzonden naar " + NOTIFY_EMAIL);
      } catch (mailErr) {
        console.error("Notificatie-mail mislukt:", mailErr.message);
      }
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Serverfout", detail: String(err) });
  }
};
