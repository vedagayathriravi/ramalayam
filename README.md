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

The site is hosted on **Netlify** (free). Photo uploads use a small free backend via [Supabase](https://supabase.com):

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
5. Push to GitHub (Netlify redeploys automatically)
6. Admin opens `https://srikodandaramaswami.netlify.app/admin.html`, signs in, uploads photos

Uploads appear on the public gallery **immediately**. Max 5 MB per image (JPEG, PNG, WebP).

> The admin page is not linked in the main menu on purpose — only share the URL with temple staff.

---

## Git & pushing updates

**Repo:** [github.com/vedagayathriravi/ramalayam](https://github.com/vedagayathriravi/ramalayam)  
**Live site (Netlify):** [srikodandaramaswami.netlify.app](https://srikodandaramaswami.netlify.app/)

GitHub stores the code. **Netlify** builds and hosts the public website (auto-deploy on every push to `main`).

If Terminal shows an Xcode / `libxcodebuildLoader` error when you run `git`, fix it once:

```bash
sudo xcode-select -s /Library/Developer/CommandLineTools
```

Then push changes from the project folder:

```bash
cd ~/Desktop/Ramalayam/Ramalayam
./push-to-github.sh "Describe your change"
```

Or manually:

```bash
/Library/Developer/CommandLineTools/usr/bin/git add .
/Library/Developer/CommandLineTools/usr/bin/git commit -m "Your message"
/Library/Developer/CommandLineTools/usr/bin/git push origin main
```

GitHub → Netlify redeploys in about 1 minute after each push.

---

## 🌐 Hosting on Netlify (current setup)

This site is pure static HTML/CSS/JS — **no build step**. Settings are in `netlify.toml`.

### First-time Netlify setup (~5 minutes)

1. Sign up free at [app.netlify.com](https://app.netlify.com)
2. Click **Add new site → Import an existing project**
3. Choose **GitHub** → authorize → select **`vedagayathriravi/ramalayam`**
4. Netlify reads `netlify.toml` automatically:
   - **Branch:** `main`
   - **Publish directory:** `.` (repo root)
   - **Build command:** *(leave empty)*
5. Click **Deploy site**
6. Optional: **Site configuration → Site details → Change site name** → e.g. `srikodandaramaswami`  
   Your URL becomes `https://srikodandaramaswami.netlify.app`
7. Optional: add a custom domain (e.g. `sriramalayam.org`) under **Domain management**

After this, every `git push` to `main` updates the live site automatically.

> **Note:** GitHub is still used for code and the YouTube feed updater (`.github/workflows/youtube-feed.yml`). Only the **website hosting** moved from GitHub Pages to Netlify.

### Quick deploy without Git (Netlify Drop)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire project folder onto the page
3. Instant `*.netlify.app` URL — sign up to keep it permanent

### Other hosts (optional)

Cloudflare Pages and GitHub Pages also work. See `netlify.toml` for the publish directory (`.`).

---

> శ్రీ రామ జయ రామ జయ జయ రామ
