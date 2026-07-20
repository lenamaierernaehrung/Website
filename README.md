# Ernaehrungsberatung Lena Maier

Website fuer die Ernaehrungsberatung von Lena Maier, erstellt mit React, Vite und Tailwind CSS.

## Lokal starten

```bash
npm ci
npm run dev
```

Der lokale Server ist danach unter der von Vite ausgegebenen Adresse erreichbar.

## Produktions-Build

```bash
npm run build
```

Die fertige statische Website wird im Ordner `dist` erstellt.

## Auf GitHub hochladen

1. Auf GitHub ein neues leeres Repository anlegen.
2. Im Projektordner diese Befehle ausfuehren und die Repository-URL einsetzen:

```bash
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/DEIN-BENUTZERNAME/DEIN-REPOSITORY.git
git push -u origin main
```

## Mit Vercel verbinden

1. Auf [Vercel](https://vercel.com/new) das GitHub-Repository importieren.
2. Vercel erkennt die Vite-Anwendung automatisch.
3. Die Build-Einstellungen sind bereits in `vercel.json` hinterlegt:
  - Install Command: `npm ci`
  - Build Command: `npm run build`
  - Output Directory: `dist`
4. Auf **Deploy** klicken. Kuenftige Pushes auf `main` werden automatisch veroeffentlicht.
  