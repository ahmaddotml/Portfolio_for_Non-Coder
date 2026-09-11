# Muhammad Ahmad — Data Scientist Portfolio

A modern, dark-themed personal portfolio website for a Junior Data Scientist & Machine Learning Engineer. Built with pure HTML, CSS, and JavaScript — zero frameworks, zero build tools, zero dependencies.

> **Live in minutes** — open `index.html` and you're done. Deploy for free on Cloudflare Pages with a single drag-and-drop.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-64ffda?style=for-the-badge&logo=cloudflare)](YOUR_LIVE_DEMO_URL_HERE)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Sections](#sections)
- [Customization](#customization)
- [Contact Form Setup](#contact-form-setup)
- [Deployment](#deployment)
  - [Cloudflare Pages (Recommended — Free)](#cloudflare-pages-recommended--free)
  - [GitHub Pages](#github-pages)
  - [Netlify](#netlify)
  - [Vercel](#vercel)
- [License](#license)

---

## Overview

This portfolio showcases the skills, education, and professional background of **Muhammad Ahmad**, a Python Developer specializing in Machine Learning and Deep Learning. The site features a clean, developer-inspired dark theme with teal (`#64ffda`) accents, smooth animations, and a fully responsive layout across all device sizes.

All content — name, bio, skills, social links, and contact details — is driven by a single `config.js` file. No need to touch the HTML.

---

## Features

| Feature | Details |
|---|---|
| **Dark Theme** | Professional dark navy palette (`#0a192f` / `#112240`) with teal highlights |
| **Fully Responsive** | Adapts from desktop to mobile (breakpoints at 1024px, 768px, 480px, 360px) |
| **Animated Skill Bars** | Progress bars animate on scroll using `IntersectionObserver` |
| **Scroll Reveal** | Sections fade in as the user scrolls down |
| **Sticky Navigation** | Fixed navbar with blur backdrop on scroll |
| **Mobile Menu** | Slide-out hamburger navigation with overlay |
| **Scroll Spy** | Active nav link updates based on current scroll position |
| **Smooth Scrolling** | Native CSS smooth scroll with offset padding |
| **Contact Form** | Client-side validation + success message; supports Formspree, Web3Forms, EmailJS |
| **Config-Driven** | All content defined in one `config.js` file |
| **Accessible** | Respects `prefers-reduced-motion`; semantic HTML; ARIA labels on icons |
| **No Dependencies** | Zero npm packages, zero build step |
| **Clean Scrollbar** | Scrollbar hidden for a polished look while maintaining scroll functionality |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure & semantic markup |
| CSS3 | Styling, animations, responsive design (custom properties, flexbox, grid) |
| JavaScript (ES6+) | Dynamic content rendering, scroll interactions, form handling |
| Font Awesome 6.5.1 | Icons via CDN |

No frameworks. No bundlers. No server required.

---

## Project Structure

```
PortFolio/
├── index.html        # Page structure & markup — do not edit for content changes
├── style.css         # All styles — colors, layout, animations, responsive design
├── script.js         # Website logic — scroll effects, animations, form handling
├── config.js         # ★ Your content lives here — edit this file only
└── Assits/
    └── person.png    # Profile photo (used in hero & about sections)
```

> **Only 4 files.** To personalize the portfolio, you only ever need to edit `config.js` and swap out `person.png`. Everything else runs itself.

---

## Getting Started

1. **Download or clone** this repository:

   ```bash
   git clone https://github.com/ahmaddotml/portfolio.git
   ```

2. **Open `index.html`** in your browser — that's it. No installs, no terminal, no server.

3. **Edit `config.js`** to add your name, bio, skills, links, and contact details.

4. **Swap `Assits/person.png`** with your own photo.

Done — your portfolio is ready.

---

## Configuration

Everything you need to personalize is in `config.js`. Edit this file once — no HTML changes required.

```js
const CONFIG = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    tagline: "Your tagline here...",
    image: "Assits/person.png",
    resumeUrl: "#",
    email: "youremail@example.com",
    phone: "+92 XXX XXXXXXX",
    location: "Your City, Country"
  },

  social: {
    github:   "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
    twitter:  "https://x.com/yourusername"
  },

  about: {
    heading: "Your heading here...",
    paragraphs: ["Paragraph 1...", "Paragraph 2...", "Paragraph 3..."],
    stats: [
      { value: "Stat Value", label: "Stat Label" }
    ]
  },

  skills: [
    { name: "Python", icon: "fa-brands fa-python", category: "Language", progress: 95 },
    // Add more skills...
  ],

  contact: {
    email: "youremail@example.com",
    phone: "+92 XXX XXXXXXX",
    location: "Your City, Country",
    heading: "Let's connect",
    description: "Your contact description..."
  },

  form: {
    endpoint: "",  // Leave empty for demo mode, or paste your service endpoint
    successMessage: "Message sent — I'll get back to you soon."
  },

  footer: {
    copyright: "2026 Your Name."
  }
};
```

### Skill Object Reference

Each entry in the `skills` array accepts four properties:

| Property   | Type   | Description |
|---|---|---|
| `name`     | string | Display name, e.g. `"PyTorch"` |
| `icon`     | string | Font Awesome class, e.g. `"fas fa-fire"` |
| `category` | string | Group label, e.g. `"ML / AI"` |
| `progress` | number | Proficiency percentage 0–100 |

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Full-height landing with name, title, tagline, CTA buttons, social icons, and profile photo |
| 2 | **About** | Two-column layout with bio, profile image, and stat cards |
| 3 | **Education** | Timeline-style card with degree, institution, dates, and description |
| 4 | **Skills** | Responsive grid of skill cards with icons, category labels, and animated progress bars |
| 5 | **Contact** | Split layout with contact info panel and a validated contact form |
| 6 | **Footer** | Logo and copyright text |

---

## Customization

### Colors

All colors are CSS custom properties defined in `style.css`:

```css
:root {
  --bg-dark:    #0a192f;   /* Main background */
  --bg-light:   #112240;   /* Card / section background */
  --accent:     #64ffda;   /* Teal accent — highlights, buttons, links */
  --text-light: #ccd6f6;   /* Headings */
  --text-muted: #8892b0;   /* Body text */
  --text-dim:   #495670;   /* Subtle text */
  --white:      #e6f1ff;   /* Bright white */
  --border:     #233554;   /* Borders */
}
```

### Profile Photo

Replace `Assits/person.png` with your own image, then update the path in `config.js` → `personal.image`.

### Fonts

Body text uses system fonts (`Segoe UI`, `Helvetica Neue`, `Arial`). Monospace elements use `Consolas`. To use custom fonts, link them in `index.html` and update `--font-main` / `--font-mono` in `style.css`.

---

## Contact Form Setup

### Demo Mode (default)

Leave `form.endpoint` as an empty string. The form validates inputs and displays a success message without sending any data — perfect for testing.

### Production Mode

Connect a real form backend:

| Service | How to set up |
|---|---|
| **Formspree** | Sign up at [formspree.io](https://formspree.io), create a form, paste the endpoint URL into `config.js` |
| **Web3Forms** | Sign up at [web3forms.com](https://web3forms.com), get your access key, use `https://api.web3forms.com/submit` as the endpoint |
| **EmailJS** | Sign up at [emailjs.com](https://emailjs.com) and follow their JavaScript integration guide |

---

## Deployment

This is a fully static site — no server, no backend, no build step required. Just upload the files and it works. Deploy anywhere in minutes.

---

### Cloudflare Pages (Recommended — Free)

Cloudflare Pages offers free hosting with a global CDN, automatic HTTPS, and custom domain support — making it the best free option for a static portfolio.

**Option A — Drag & Drop (Fastest)**

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and log in (or create a free account).
2. Click **Create a project** → **Direct Upload**.
3. Give your project a name (e.g. `my-portfolio`).
4. **Drag and drop your entire project folder** into the upload area, or click to browse and select all files.
5. Click **Deploy site**.
6. Cloudflare assigns you a free URL like `my-portfolio.pages.dev` — your site is live instantly.

**Option B — Connect GitHub (Recommended for ongoing updates)**

1. Push your portfolio to a GitHub repository.
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com) → **Create a project** → **Connect to Git**.
3. Authorize Cloudflare and select your repository.
4. Configure the build settings:

   | Setting | Value |
   |---|---|
   | **Framework preset** | `None` |
   | **Build command** | *(leave blank)* |
   | **Build output directory** | `/` *(root)* |

5. Click **Save and Deploy**.
6. Every `git push` to your main branch will automatically redeploy your site.

**Adding a Custom Domain (Optional)**

1. In your Cloudflare Pages project, go to **Custom domains** → **Set up a custom domain**.
2. Enter your domain (e.g. `ahmaddotml.dev`).
3. If your domain is already on Cloudflare, the DNS records are added automatically. Otherwise follow the provided DNS instructions.
4. HTTPS is provisioned automatically — no extra configuration needed.

---

### GitHub Pages

1. Push your project to a GitHub repository.
2. Go to **Settings** → **Pages**.
3. Under **Source**, select your main branch and root (`/`) folder.
4. Click **Save** — your site will be live at `https://yourusername.github.io/repository-name`.

---

### Netlify

1. Go to [netlify.com](https://netlify.com) and log in.
2. Click **Add new site** → **Deploy manually**.
3. Drag and drop your project folder onto the Netlify dashboard.
4. Your site is live instantly at a `*.netlify.app` URL.

---

### Vercel

1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **Add New** → **Project** → Import your GitHub repository.
3. No build configuration needed — Vercel detects a static site automatically.
4. Click **Deploy**.

---

## License

Free to use, modify, and distribute for personal or commercial projects. Attribution appreciated but not required.

---

> Built with passion for Data Science — Peshawar, Khyber Pakhtunkhwa, Pakistan