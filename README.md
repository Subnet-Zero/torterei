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

- Format: PNG
- Empfohlene Breite: 800–1200 px
- Namensschema: `torte-[name]-[nummer].jpg`
- Ablageort: `assets/images/`

### Deployment

Automatisiert per **GitHub Actions über SSH/rsync**: Bei jedem Push auf `main`
lädt der Workflow `.github/workflows/deploy.yml` alle Dateien auf den Webserver
hoch (`--delete` spiegelt auch Löschungen). `.git`, `.github`, `README.md` und
`CLAUDE.md` werden dabei ausgeschlossen.

Manuell auslösbar über den Reiter **Actions → Deploy per SSH → Run workflow**.

#### Benötigte GitHub Secrets

Unter **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Beschreibung | Beispiel |
|---|---|---|
| `SSH_HOST` | Servername oder IP | `web.beispiel.de` |
| `SSH_USER` | SSH-Benutzer | `torterei` |
| `SSH_PORT` | SSH-Port (optional, Standard `22`) | `22` |
| `SSH_PRIVATE_KEY` | Privater SSH-Schlüssel (kompletter Inhalt) | `-----BEGIN OPENSSH PRIVATE KEY----- …` |
| `DEPLOY_PATH` | Zielverzeichnis auf dem Server | `/var/www/torterei` |

#### Schlüsselpaar erzeugen

```bash
ssh-keygen -t ed25519 -f deploy_key -C "github-deploy-torterei" -N ""
```

- `deploy_key` (privat) → als Secret `SSH_PRIVATE_KEY` einfügen
- `deploy_key.pub` (öffentlich) → auf dem Server an `~/.ssh/authorized_keys`
  des Deploy-Benutzers anhängen

- **Domain**: Noch nicht registriert (Stand: Juni 2026)

---

## Änderungshistorie

| Datum | Beschreibung |
|---|---|
| 2026-06-13 | Initiale Projektstruktur: index.html, style.css, CLAUDE.md, README.md |
| 2026-06-13 | Torten-Karten für Moana-Torte und Blaue Ombré-Torte eingepflegt; Bildplatzhalter durch echte `<img>`-Tags ersetzt |
| 2026-06-13 | Grüne Drip-Torte und Landschaftstorte hinzugefügt |
| 2026-06-13 | Elsa-Torte, Schokoladen-Drip-Torte, Regenbogen-Torte und Schmetterlings-Torte hinzugefügt |
| 2026-06-13 | Home-Assistant-Torte, Ohnezahn-Torte und Monster-Truck-Torte hinzugefügt — alle 11 Torten erfasst |
| 2026-06-13 | CSS-Lightbox mit Durchklick-Navigation hinzugefügt (kein JavaScript) |
| 2026-06-13 | Impressum (impressum.html) nach § 5 TMG erstellt |
| 2026-06-13 | Datenschutzerklärung (datenschutz.html) nach DSGVO erstellt |
| 2026-06-13 | Englische Version (en/index.html) und Sprachumschalter DE\|EN hinzugefügt |
| 2026-06-13 | Tote Lightbox-Verweise auf nicht vorhandene Bilder entfernt |
| 2026-06-13 | Social-Preview (Open Graph & Twitter Card) auf allen Seiten ergänzt |
| 2026-06-13 | SVG-Favicon (Torten-Motiv) hinzugefügt und auf allen Seiten verlinkt |
| 2026-06-13 | CSS aufgeräumt: leere Regelblöcke und veraltete Kommentare entfernt |
| 2026-07-11 | Automatisiertes Deployment per GitHub Actions über SSH/rsync eingerichtet (`.github/workflows/deploy.yml`); GitHub Pages abgelöst |
| 2026-07-11 | Tortenbestand aus der Kundendatenbank deployt (12 Torten) |
| 2026-07-11 | Tortenbestand aus der Kundendatenbank deployt (12 Torten) |
| 2026-07-11 | Karten-Struktur dokumentiert: Torten-Name ist nicht mehr optional (immer vorhanden), Anlass und „Überreicht am" bleiben optional |
| 2026-07-12 | Tortenbestand aus der Kundendatenbank deployt (10 Torten) |
| 2026-07-12 | Tortenbestand aus der Kundendatenbank deployt (10 Torten) |
| 2026-07-16 | Tortenbestand aus der Kundendatenbank deployt (10 Torten) |
| 2026-07-16 | Tortenbestand aus der Kundendatenbank deployt (11 Torten) |
| 2026-07-16 | Lightbox-Schließen springt nicht mehr an den Seitenanfang: Karten haben nun `id`s, Schließen-Links zeigen auf die jeweilige Karte statt auf `#torten` |
