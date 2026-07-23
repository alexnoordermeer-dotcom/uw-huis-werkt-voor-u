// api/subscribe.js
// Vercel serverless functie: stuurt een nieuwe lead naar EmailOctopus (API v2).

const API_KEY = process.env.EMAILOCTOPUS_API_KEY;
const LIST_ID = process.env.EMAILOCTOPUS_LIST_ID;

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

    if (response.ok) {
      res.status(200).json({ ok: true });
      return;
    }

    const data = await response.json().catch(() => ({}));

    const alreadyExists =
      response.status === 409 ||
      (data.errors || []).some((e) =>
        (e.detail || "").toLowerCase().includes("already exists")
      );
    if (alreadyExists) {
      res.status(200).json({ ok: true, note: "bestond al" });
      return;
    }

    res.status(502).json({ error: "EmailOctopus weigerde", detail: data });
  } catch (err) {
    res.status(500).json({ error: "Serverfout", detail: String(err) });
  }
};
