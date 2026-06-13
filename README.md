# Torterei Marienfeldt

Statische Webseite zur Präsentation selbstgebackener Torten.

## Technische Dokumentation

### Stack

| Komponente | Technologie |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (Flexbox, Grid, Custom Properties) |
| Skripte | keine |
| Build-Tools | keine |
| Abhängigkeiten | keine |

### Browserunterstützung

Alle modernen Browser (Chrome, Firefox, Safari, Edge) ab 2022. Kein IE-Support.

### Dateistruktur

```
torterei/
├── index.html              # Startseite
├── assets/
│   ├── css/
│   │   └── style.css       # Globales Stylesheet
│   └── images/             # Tortenfotos
├── README.md               # Diese Datei
└── CLAUDE.md               # Entwicklungshinweise für KI-Assistenten
```

### Lokal öffnen

Da kein JavaScript oder serverseitige Logik verwendet wird, genügt es, `index.html` direkt im Browser zu öffnen:

```
open index.html
```

Alternativ mit einem einfachen HTTP-Server (empfohlen für korrekte MIME-Types):

```bash
python3 -m http.server 8080
# http://localhost:8080
```

### Bilder

- Format: JPG oder WebP
- Empfohlene Breite: 800–1200 px
- Namensschema: `torte-[name]-[nummer].jpg`
- Ablageort: `assets/images/`

### Deployment

Statische Dateien, kein Build-Schritt nötig. Optionen:

- **GitHub Pages**: Repository-Einstellungen → Pages → Branch `main` / Ordner `/`
- **FTP/SFTP**: Alle Dateien auf Webserver hochladen
- **Domain**: Noch nicht registriert (Stand: Juni 2026)

---

## Änderungshistorie

| Datum | Beschreibung |
|---|---|
| 2026-06-13 | Initiale Projektstruktur: index.html, style.css, CLAUDE.md, README.md |
| 2026-06-13 | Torten-Karten für Moana-Torte und Blaue Ombré-Torte eingepflegt; Bildplatzhalter durch echte `<img>`-Tags ersetzt |
| 2026-06-13 | Grüne Drip-Torte und Landschaftstorte hinzugefügt |
