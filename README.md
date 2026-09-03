# Gymi-Vorbereitung Zürich

Statische Website für 1:1-Nachhilfe zur Vorbereitung auf die kantonale Gymi-Aufnahmeprüfung Zürich.

## Struktur

- `index.html` – Hauptseite (Hero, Über mich, Angebot, Ablauf, Preise, FAQ, Kontakt)
- `impressum.html`, `datenschutz.html` – rechtliche Seiten (Platzhalter für Name/Adresse)
- `css/style.css` – gesamtes Styling
- `js/main.js` – Navigation, FAQ-Akkordeon, Scroll-Animationen, Kontaktformular (mailto)

Keine Build-Tools, kein Backend nötig – reines HTML/CSS/JS.

## Vor der Veröffentlichung anpassen

1. **Impressum & Datenschutz**: Platzhalter in eckigen Klammern (`[Vor- und Nachname]`, Adresse) in `impressum.html` und `datenschutz.html` ausfüllen – in der Schweiz für kommerzielle Websites Pflicht (Art. 3 UWG).
2. **Preise**: Beträge im Abschnitt "Preise" in `index.html` an die eigene Preisgestaltung anpassen.
3. **Kontaktformular**: Aktuell öffnet das Formular das lokale E-Mail-Programm (mailto-Link) – kein Server nötig. Für eine direkte serverseitige Zustellung kann später ein Formular-Service (z. B. Formspree) angebunden werden.

## Lokal ansehen

Einfach `index.html` im Browser öffnen, oder mit einem lokalen Server:

```bash
python3 -m http.server 8000
```

und danach `http://localhost:8000` öffnen.

## Deployment

Da es sich um eine reine statische Website handelt, kann sie direkt auf GitHub Pages, Netlify, Vercel oder einem beliebigen Webhosting-Anbieter veröffentlicht werden.
