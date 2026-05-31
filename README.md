# Sri Ramalayam · Ramnagar, Ongole

A modern, devotional website for **Sri Sita Rama Chandra Swamy Devasthanam (Ramalayam)** at **F2PX+7XM, Ramnagar 8th Line, Ongole, Andhra Pradesh — 523001**.

Pure static HTML/CSS/JS — no build step, no frameworks.

---

## ✨ Features

- **Welcome intro screen** with Sri Rama photo (`rama.jpeg`), Telugu chant *"శ్రీ రామ జయ రామ జయ జయ రామ"*, and an "Enter the Temple" button.
- **Bilingual (English ⇄ Telugu)** language toggle in the header.
- **Falling flower petals** continuously across the page.
- **Daily Panchangam card** in the hero — auto-shows today's *Vaaram, Tithi, Nakshatram & Paksham* in Telugu, calculated from the moon's sidereal longitude (Lahiri ayanamsa).
- **Stotra Library** — a floating button (bottom-right) and a `Stotras` section with a side drawer + reader. Includes complete Telugu texts of:
  - శ్రీ హనుమాన్ చాలీసా (40 verses)
  - శ్రీ ఆదిత్య హృదయం (31 shlokas)
  - శ్రీ రామ రక్షా స్తోత్రం
  - శ్రీ విష్ణు సహస్రనామ స్తోత్రం (dhyanam + key shlokas + phalashruti)
  - శ్రీ రామ అష్టోత్తర శతనామావళి (108 names)
  - ప్రాతః స్మరణ — daily morning prayers (Karagre, Gayatri, etc.)
  - శ్రీ రామ స్తుతిః — Mangalam shlokas
- **Google Maps** embedded with the precise Plus Code **F2PX+7XM** location, plus a "Open in Google Maps" deep link.
- Sections: Hero · About · Daily Darshan · Sevas · Festivals · Gallery · Stotras · Donate · Contact.
- Fully responsive, sticky header, smooth scrolling, scroll-reveal animations, font-size controls in the stotra reader.

---

## 📁 Files

```
Ramalayam/
├── index.html      # All page content & structure
├── styles.css      # Design tokens, layout, intro, petals, panchangam, stotras
├── script.js       # Translations, intro, petals, panchangam, stotra UI
├── stotras.js      # All Telugu stotra texts (easy to add more)
├── rama.jpeg       # Sri Rama photo (intro screen)
└── README.md       # This file
```

### Adding more stotras

Open `stotras.js` and copy any existing entry — change the `id`, `title_en`, `title_te`, and the list of `verses`. Each verse is an object:

```js
{ type: 'shloka', n: 1, text: 'మీ తెలుగు శ్లోకం ఇక్కడ ...' }
```

Supported `type` values: `shloka`, `chaupai`, `doha`, `note`. The website automatically picks up new entries — no other code changes needed.

---

## 🚀 Run it locally

For best results (so the Google Map iframe loads):

```bash
cd ~/Desktop/Ramalayam
python3 -m http.server 8080
```

Open <http://localhost:8080>.

Or just double-click `index.html` — everything works except the embedded map.

---

## ✏️ Customize

Open `index.html` and replace:

| Where | What |
|---|---|
| `tel:+910000000000` | Real phone number |
| `contact@ramalayam-ongole.org` | Real email |
| Bank `dl` block in **Donate** | Account no., IFSC, UPI handle |
| Seva pricing | Current dakshina amounts |

For Telugu copy, see the `translations.te` object in `script.js`.

---

## 🌐 Deploying

This site is static — host it anywhere:

- **GitHub Pages**, **Netlify**, **Cloudflare Pages**, **Vercel**, or any traditional web host.

---

> శ్రీ రామ జయ రామ జయ జయ రామ
