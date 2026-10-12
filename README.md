# Pétanque-Turnierleitung

Turnierleitung für Pétanque als installierbare Web-App: Supermêlée, Schweizer System, K.-o. und Maastrichter. Läuft nach der ersten Installation komplett offline. Die Turnierdaten bleiben im jeweiligen Gerät.

**App öffnen und installieren:** https://bonhomme12345-rgb.github.io/Turniersoftware/

- Chrome oder Edge am PC: Symbol „App installieren“ rechts in der Adressleiste.
- Android: Menü → „App installieren“ bzw. „Zum Startbildschirm hinzufügen“.
- iPad/iPhone (Safari): Teilen → „Zum Home-Bildschirm“.

Neue Versionen werden beim nächsten Start mit Internet automatisch geladen und sind beim übernächsten Start aktiv.

## Dateien

- `index.html` – die komplette App
- `manifest.webmanifest` – Name, Farben und Symbole für die Installation
- `sw.js` – Offline-Speicher
- `icons/` – App-Symbole

## Windows-Programm

Der Ordner `desktop/` enthält das Windows-Programm (Electron). Es nutzt dieselbe `index.html` wie die Web-App.

Bei jeder Änderung baut GitHub das Programm automatisch neu: **Actions → „Windows-Programm bauen“ → letzter Lauf → unten bei „Artifacts“ „Turnierleitung-Windows“ herunterladen** (dafür muss man bei GitHub angemeldet sein). Die ZIP-Datei enthält den Installer und die portable Version.
