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

## Inhalte pflegen

### Neue Torte hinzufügen

1. Foto unter `assets/images/` ablegen
2. In `index.html` eine neue `<article class="torte-card">` in den Abschnitt `<section class="torten-galerie">` einfügen
3. `README.md` aktualisieren (Datum, Änderungsbeschreibung)

### Struktur einer Torten-Karte

```html
<article class="torte-card">
  <img src="assets/images/torte-[name]-1.jpg" alt="[Beschreibung]" loading="lazy">
  <div class="torte-card__info">
    <h2 class="torte-card__name">[Name]</h2>
    <p class="torte-card__beschreibung">[kurze Beschreibung]</p>
  </div>
</article>
```

## Deployment

Statische Dateien — direkt per FTP/SFTP auf Webserver hochladen oder per GitHub Pages bereitstellen.
