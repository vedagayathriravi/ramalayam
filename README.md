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

### YouTube channel (Videos & Shorts section)

The site pulls your latest uploads automatically via YouTube RSS — **no API key needed**.

1. Open `script.js` and find `YOUTUBE_CONFIG` at the top.
2. Set **`channelId`** to your Channel ID (starts with `UC…`):
   - YouTube Studio → **Settings** → **Advanced settings** → copy **Channel ID**
   - Or open your channel page → View Page Source → search for `"channelId":"UC`
3. Optionally set **`channelHandle`** (e.g. `vedagayathriravi`) for the Subscribe link.
4. The section auto-refreshes every 20 minutes and shows a **NEW** badge when a fresh upload appears.

---

## Admin gallery (upload photos without coding)

The site stays on free GitHub Pages, but **photo uploads need a small free backend**. We use [Supabase](https://supabase.com) (free tier):

| Role | What they do |
|---|---|
| **Public visitors** | See photos in the Gallery section automatically |
| **Temple admin** | Sign in at `admin.html`, upload/delete photos |

### One-time setup (~10 minutes)

1. Create a free project at [supabase.com](https://supabase.com)
2. Open **SQL Editor** → paste and run the entire `supabase-setup.sql` file
3. Go to **Authentication → Users → Add user** — create one admin email + password for temple staff
4. Go to **Project Settings → API** — copy:
   - Project URL → `config.js` → `supabaseUrl`
   - `anon` `public` key → `config.js` → `supabaseAnonKey`
5. Push to GitHub (Pages redeploys automatically)
6. Admin opens `https://vedagayathriravi.github.io/ramalayam/admin.html`, signs in, uploads photos

Uploads appear on the public gallery **immediately**. Max 5 MB per image (JPEG, PNG, WebP).

> The admin page is not linked in the main menu on purpose — only share the URL with temple staff.

---

## 🌐 Deploying (free hosting)

This site is fully static. Three excellent free options for public hosting:

### Option A · Cloudflare Pages (recommended for Indian audience)

Cloudflare has edge servers in **Mumbai, Delhi, Hyderabad, Chennai, Bengaluru** — fastest for visitors in India.

1. Push this repo to GitHub (`gh repo create ramalayam --public --source=. --push`).
2. Go to <https://pages.cloudflare.com> → **Create a project** → **Connect to Git**.
3. Select the repo. Build settings: leave **Framework preset = None**, **Build command = (empty)**, **Build output directory = /**.
4. Click **Deploy**. You'll get `ramalayam.pages.dev` in ~30 seconds.

### Option B · Netlify Drop (easiest, no GitHub)

1. Go to <https://app.netlify.com/drop>.
2. Drag the entire `Ramalayam/` folder onto the page.
3. You get a live `*.netlify.app` URL instantly.
4. Sign up (free) to keep it permanent.

### Option C · GitHub Pages

1. `gh repo create ramalayam --public --source=. --push`
2. On GitHub: **Settings → Pages → Source = Deploy from branch → main → / (root)**.
3. Live at `https://<your-username>.github.io/ramalayam/`.

### Custom domain

Once deployed, all three platforms support free custom domains. Buy a domain from **Cloudflare Registrar** (cheapest, no markup) or Namecheap, then add it in your hosting dashboard.

---

> శ్రీ రామ జయ రామ జయ జయ రామ
