# Rahul Dhamecha — Personal Marketing Portfolio

A fast, fully static, responsive personal portfolio website built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript**. Requires **zero dependencies, no React, no Node.js, and no build step**.

---

## 📁 Clean Folder Structure

```
d:\My resume/
│
├── index.html                   # ⭐ All portfolio sections & content in clean semantic HTML
│
├── css/
│   └── style.css                # Mobile-first styles with light/dark themes & print-ready layout
│
├── js/
│   └── main.js                  # Pure vanilla JS: theme toggle, mobile menu, email copy toast
│
├── assets/
│   ├── favicon.svg              # Browser tab icon (RD monogram)
│   ├── profile-placeholder.svg  # Professional profile placeholder (replace with your photo)
│   └── resume.pdf               # Resume document (replace with your actual resume PDF)
│
├── run.bat                      # Double-click to start local server on http://localhost:3000
├── open.bat                     # Double-click to open index.html directly in browser
├── serve.ps1                    # Pure PowerShell static web server (no Node.js needed)
└── README.md                    # Instructions for editing and free deployment
```

---

## 🚀 How to Preview Locally

Because this is a 100% static site, you can view it immediately on any device without installing anything!

### Method 1: Direct Double-Click (Fastest)
- Double-click **`open.bat`** or **`index.html`** in Windows File Explorer.
- Opens instantly in Google Chrome, Microsoft Edge, or your default browser.

### Method 2: Local Server (via `run.bat`)
- Double-click **`run.bat`** in `d:\My resume`.
- Runs a lightweight local web server on [**http://localhost:3000/**](http://localhost:3000/) and launches your browser automatically.

---

## ✏️ How to Edit Content

All your text, internships, case studies, and skills are right inside **[`index.html`](file:///d:/My%20resume/index.html)**. Each section is clearly marked with large header comments:

### 1. Edit Any Text or Descriptions
Open `index.html` in VS Code or Notepad and find the section you want to edit:
- `<!-- 1. HERO SECTION -->`: Name, headline, positioning, quick stats.
- `<!-- 2. ABOUT ME SECTION -->`: Candidate summary and core pillars.
- `<!-- 3. EXPERIENCE SECTION -->`: Internship timeline cards, dates, metrics, and bullet points.
- `<!-- 4. PROJECTS SECTION -->`: Case study cards (Goal, What I Did, Tools, Outcome).
- `<!-- 5. SKILLS SECTION -->`: Categorized skill chips (Marketing, Analytics & Tools, Business & Communication).
- `<!-- 6. CERTIFICATIONS SECTION -->`: Certifications from Accenture, Anthropic, and IIM Ahmedabad.
- `<!-- 7. EDUCATION SECTION -->`: MBA and BCA cards.
- `<!-- 8. CONTACT SECTION -->`: Direct email, LinkedIn link, and location.

### 2. Replace Your Profile Photo
1. Place your photo inside the `assets/` folder and name it `profile.jpg` (or `profile.png`).
2. In `index.html`, find `assets/profile-placeholder.svg` and change it to:
   ```html
   <img src="assets/profile.jpg" alt="Rahul Dhamecha Profile Photo" class="hero-avatar-img">
   ```
3. Refresh your browser to see your updated portrait.

### 3. Replace Your Resume PDF
1. Save your completed PDF resume inside `assets/` and name it `resume.pdf`.
2. All **"Download Resume"** buttons will automatically download your real resume.

### 4. Fill in Case Study Project Outcomes
In `index.html`, locate `<!-- 4. PROJECTS SECTION -->`. Replace the `[EDITABLE PLACEHOLDER]` text with your real measurable results (e.g., *"Increased engagement by 35% across visual formats"*).

---

## 🌐 How to Deploy for Free

You can publish this static website to the web for **100% free** with global CDN hosting and automatic HTTPS in under 1 minute.

---

### Option A: Deploy on Netlify (Fastest — 30 Seconds, No Git Needed)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `d:\My resume` folder directly into the browser.
3. Your site is instantly live at a free URL (e.g., `https://rahul-dhamecha.netlify.app`).
4. *(Optional)* Go to **Site Configuration → Change site name** to choose a custom free subdomain or connect your own domain (e.g., `rahuldhamecha.com`).

---

### Option B: Deploy on GitHub Pages (Free)

1. Go to [GitHub.com](https://github.com/) and create a new **Public** repository named `portfolio` (or `rahuldhamecha.github.io`).
2. Upload the files:
   - Drag and drop `index.html`, the `css/`, `js/`, and `assets/` folders, and `README.md`.
   - Click **Commit changes**.
3. Enable GitHub Pages:
   - Go to repository **Settings** → **Pages** (in the left sidebar).
   - Under **Branch**, select `main` (or `master`) and folder `/(root)`.
   - Click **Save**.
4. In under 2 minutes, your website is live at:
   `https://<your-username>.github.io/portfolio/`

---

## 🌟 Key Features Built-In

- **Pure HTML5 / CSS3 / Vanilla JS**: Zero dependencies, 0ms framework initialization, 100% offline reliability.
- **Light & Dark Theme Toggle**: Saves visitor preference to `localStorage` and automatically syncs with system OS preferences.
- **Recruiter-First Layout**: Highlights key numbers upfront (*3 Internships, 100+ Daily Outreach Calls, 500+ Leads Managed, MBA '27*).
- **Case-Study Style Cards**: Structured into *Goal, What I Did, Tools Used, and Measurable Outcome*.
- **Accessible & SEO Ready**: Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`), Open Graph metadata, Twitter Cards, SVG favicon, and visible keyboard focus rings.
- **Privacy First**: Direct `mailto:` button and LinkedIn links; no contact form backend vulnerabilities and phone number is completely excluded.
- **Print / PDF Friendly**: Built-in `@media print` styling formats the page as a clean 1–2 page resume if printed or saved to PDF directly from the browser.
