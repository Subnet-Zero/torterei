# CLAUDE.md — Torterei Marienfeldt

## Projektübersicht

Statische Webseite für die "Torterei Marienfeldt". Präsentiert selbstgebackene Torten von Marienfeldt.
Keine Domain registriert (Stand: Juni 2026).

## Technische Grundsätze

- HTML5 & CSS3 — kein Framework, keine Build-Tools
- JavaScript: **ausschließlich** `assets/js/theme.js` für den Dark-Mode-Schalter (localStorage). Kein weiteres JS.
- Keine externen Abhängigkeiten (keine CDNs, keine npm-Pakete)
- Mobile-first, responsives Layout via CSS Flexbox/Grid
- Alle Bilder lokal unter `assets/images/` (Format: PNG)

## Dateistruktur

```
torterei/
├── index.html          # Startseite mit Tortenübersicht
├── assets/
│   ├── css/
│   │   └── style.css   # Einzige Stylesheet-Datei
│   └── images/         # Tortenfotos (JPG/WebP)
├── README.md           # Technische Dokumentation
└── CLAUDE.md           # Diese Datei
```

## Konventionen

- HTML-Einrückung: 2 Leerzeichen
- CSS-Klassen: BEM-Notation (`block__element--modifier`)
- Bildnamen: `torte-[name]-[nummer].png` (Kleinbuchstaben, Bindestriche)
- Keine Inline-Styles im HTML
- Keine Kommentare im HTML/CSS außer bei nicht-offensichtlichem Code
- **Geteilte Bausteine immer auf ALLEN Seiten gleich halten**: Header, Hauptnavigation
  und Footer existieren auf jeder Seite (`index.html`, `impressum.html`,
  `datenschutz.html`). Ändert sich einer davon, alle Seiten gemeinsam anpassen.

## Inhalte pflegen

### Neue Torte hinzufügen

1. Foto unter `assets/images/` ablegen
2. In `index.html` eine neue `<div class="torte-card">` in den Abschnitt `<section class="torten-galerie">` einfügen
3. `README.md` aktualisieren (Datum, Änderungsbeschreibung)

### Struktur einer Torten-Karte

```html
<div class="torte-card">
  <a href="#lb-[name]-1" class="torte-card__bild-link">
    <img class="torte-card__bild" src="assets/images/torte-[name]-1.png" alt="[Beschreibung]" loading="lazy">
  </a>
  <div class="torte-card__info">
    <h3 class="torte-card__name">[Name]</h3>
    <p class="torte-card__beschreibung">[kurze Beschreibung]</p>
  </div>
</div>
```

## Deployment

Statische Dateien — direkt per FTP/SFTP auf Webserver hochladen oder per GitHub Pages bereitstellen.
