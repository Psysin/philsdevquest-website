// netlify/functions/subscribe.js
// Ablegen unter: PhilsDevQuest-Website/netlify/functions/subscribe.js

export default async (request) => {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  let email, firstname;
  try {
    const body = await request.json();
    email     = body.email?.trim().toLowerCase();
    firstname = body.firstname?.trim() || "";
  } catch {
    return new Response(JSON.stringify({ error: "Ungültige Anfrage." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ error: "Bitte gib eine gültige E-Mail-Adresse ein." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY nicht gesetzt");
    return new Response(
      JSON.stringify({ error: "Serverkonfiguration fehlerhaft. Bitte später erneut versuchen." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  // Kontakt-Payload aufbauen
  const payload = {
    email: email,
    listIds: [3],
    updateEnabled: true,
  };

  // Vorname nur mitsenden wenn angegeben
  if (firstname) {
    payload.attributes = { FIRSTNAME: firstname };
  }

  try {
    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (brevoResponse.status === 201 || brevoResponse.status === 204) {
      const name = firstname ? `, ${firstname}` : "";
      return new Response(
        JSON.stringify({
          success: true,
          message: `Du bist dabei${name}! Willkommen bei PhilsDevQuest Weekly. 🎉`,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const errorData = await brevoResponse.json();
    console.error("Brevo Fehler:", brevoResponse.status, errorData);
    return new Response(
      JSON.stringify({ error: "Anmeldung fehlgeschlagen. Bitte versuche es erneut." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("Netzwerkfehler:", err);
    return new Response(
      JSON.stringify({ error: "Verbindungsfehler. Bitte versuche es erneut." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const config = {
  path: "/api/subscribe",
};
