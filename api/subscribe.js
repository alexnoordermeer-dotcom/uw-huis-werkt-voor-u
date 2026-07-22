/**
 * Vercel Serverless Function — EmailOctopus v2 API
 * Endpoint: POST /api/subscribe
 *
 * Ontvangt formulierdata van REKENT1.HTM en schrijft de lead weg
 * naar een EmailOctopus-lijst. De API-sleutel en het list-ID blijven
 * op de server — die komen nooit in de browser terecht.
 */

// ── EmailOctopus API v2 ──────────────────────────────────────────
const EMAILOCTOPUS_API = "https://emailoctopus.com/api/1.6";

async function addContact(apiKey, listId, contact) {
  const url = `${EMAILOCTOPUS_API}/lists/${listId}/contacts`;

  const body = {
    api_key: apiKey,
    email_address: contact.email_address,
    fields: contact.fields || {},
    tags: contact.tags || [],
    status: "SUBSCRIBED",  // single opt-in: direct actief
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    const msg =
      data?.error?.message ||
      data?.message ||
      `EmailOctopus returned ${res.status}`;
    throw new Error(msg);
  }

  return data;
}

// ── Vercel handler ────────────────────────────────────────────────
export default async function handler(req, res) {
  // Alleen POST toestaan
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Lees de secrets uit omgevingsvariabelen (Vercel dashboard)
  const apiKey = process.env.EMAILOCTOPUS_API_KEY;
  const listId = process.env.EMAILOCTOPUS_LIST_ID;

  if (!apiKey || !listId) {
    console.error("Missing EMAILOCTOPUS_API_KEY or EMAILOCTOPUS_LIST_ID");
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    const { naam, email, telefoon, woningwaarde, hypotheek, geboortedatum,
            partner, eenmaligBedrag,
            maandbedrag_indicatief } = req.body;

    // E-mail is verplicht voor EmailOctopus
    if (!email) {
      return res.status(400).json({ error: "E-mailadres is verplicht" });
    }

    // Splits volledige naam in voor- en achternaam
    const naamParts = (naam || "").trim().split(/\s+/);
    const firstName = naamParts[0] || "";
    const lastName = naamParts.slice(1).join(" ") || "";

    const contact = {
      email_address: email,
      fields: {
        FirstName: firstName,
        LastName: lastName,
        Telefoon: telefoon || "",
        IndicatiefMaandbedrag: maandbedrag_indicatief != null ? String(maandbedrag_indicatief) : "",
        Woningwaarde: woningwaarde != null ? String(woningwaarde) : "",
        GeboortedatumJongsteBewoner: geboortedatum || "",
        OpenstaandeHypotheek: hypotheek != null ? String(hypotheek) : "",
        PartnerInwonend: partner || "",
        VoorschotBedrag: eenmaligBedrag != null ? String(eenmaligBedrag) : "",
      },
      tags: ["Rekentool"],
    };

    const result = await addContact(apiKey, listId, contact);
    console.log("✅ Contact toegevoegd aan EmailOctopus:", result.id);
    return res.status(200).json({ ok: true, id: result.id });
  } catch (err) {
    console.error("❌ EmailOctopus fout:", err.message);
    return res.status(502).json({ error: err.message });
  }
}
