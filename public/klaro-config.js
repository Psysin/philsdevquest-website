// public/klaro-config.js
// Klaro Cookie Consent Konfiguration für PhilsDevQuest
// DSGVO-konform, Deutsch, Earthy Warm Design

var klaroConfig = {
  // Sprache
  lang: 'de',

  // Banner erscheint unten
  htmlTexts: true,
  cookieName: 'pdq-consent',
  cookieExpiresAfterDays: 365,

  // Alles standardmäßig DEAKTIVIERT (DSGVO-konform)
  default: false,

  // Zustimmung erforderlich bevor Dienste laden
  mustConsent: false,

  // Datenschutz-Link
  privacyPolicy: '/datenschutz',

  translations: {
    de: {
      consentNotice: {
        description:
          'Wir nutzen Cookies und externe Dienste um dir die beste Erfahrung zu bieten. Bitte wähle welche Dienste du erlaubst. Mehr dazu in unserer <a href="/datenschutz">Datenschutzerklärung</a>.',
        learnMore: 'Einstellungen',
      },
      consentModal: {
        title: 'Cookie-Einstellungen',
        description:
          'Hier kannst du einsehen und anpassen welche Informationen wir über dich sammeln. Einträge ohne Umschalter sind technisch notwendig und können nicht deaktiviert werden.',
        privacyPolicy: {
          text: 'Weitere Informationen findest du in unserer {privacyPolicy}.',
          name: 'Datenschutzerklärung',
        },
      },
      acceptAll: 'Alle akzeptieren',
      declineAll: 'Ablehnen',
      acceptSelected: 'Auswahl speichern',
      close: 'Schließen',
      poweredBy: '',
      purposes: {
        essential: 'Notwendig',
        analytics: 'Analyse',
        advertising: 'Werbung',
        newsletter: 'Newsletter',
      },
    },
  },

  services: [
    // ── Technisch notwendig (immer aktiv) ──────────────────────────────────
    {
      name: 'session',
      title: 'Session & Sicherheit',
      purposes: ['essential'],
      required: true,
      translations: {
        de: {
          description:
            'Notwendige Cookies für die Grundfunktionen der Website (z.B. Formular-Schutz).',
        },
      },
    },

    // ── Google AdSense ──────────────────────────────────────────────────────
    {
      name: 'google-adsense',
      title: 'Google AdSense',
      purposes: ['advertising'],
      default: false,
      translations: {
        de: {
          description:
            'Google AdSense zeigt personalisierte Werbeanzeigen. Google kann dabei Daten über dein Surfverhalten sammeln.',
        },
      },
      // AdSense Script wird erst nach Zustimmung geladen
      onAccept: `
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1972800950201366';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      `,
      onDecline: `
        // Alle adsbygoogle ins entfernen falls vorhanden
        document.querySelectorAll('.adsbygoogle').forEach(function(el) {
          el.style.display = 'none';
        });
      `,
    },

    // ── Brevo Newsletter ────────────────────────────────────────────────────
    {
      name: 'brevo',
      title: 'Brevo Newsletter',
      purposes: ['newsletter'],
      default: false,
      translations: {
        de: {
          description:
            'Brevo verwaltet unseren Newsletter. Wenn du dich anmeldest, wird deine E-Mail-Adresse bei Brevo gespeichert.',
        },
      },
    },
  ],
};
