# Samavia Awan — React Developer Portfolio

A modern, luxury dark-themed personal portfolio built with React, Tailwind CSS, and Vite.

---

## ✦ Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI framework (functional components + hooks) |
| **Tailwind CSS 3** | Utility-first styling |
| **Vite 5** | Dev server & bundler |
| **Google Fonts** | Playfair Display + Outfit |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## 📁 Folder Structure

```
samavia-portfolio/
├── index.html                  # HTML entry with Google Fonts
├── vite.config.js              # Vite config
├── tailwind.config.js          # Tailwind theme (colors, fonts, animations)
├── postcss.config.js           # PostCSS
├── package.json
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root — scroll observer + cursor
    ├── index.css               # Tailwind + custom CSS utilities
    └── components/
        ├── Navbar.jsx          # Fixed nav with mobile hamburger
        ├── Hero.jsx            # Hero with animated card + CTAs
        ├── About.jsx           # About with code block decoration
        ├── Skills.jsx          # 7 skill cards with progress bars
        ├── Projects.jsx        # 3 project cards with hover overlays
        ├── Contact.jsx         # Contact form + 4 contact links
        └── Footer.jsx          # Footer with nav + socials
```

---

## 🎨 Design System

### Colors (defined in `tailwind.config.js`)
| Token | Value | Use |
|-------|-------|-----|
| `gold` | `#C9A84C` | Primary accent |
| `gold-light` | `#E2C97E` | Hover states |
| `navy` | `#050A18` | Background |
| `navy-mid` | `#0B1225` | Section backgrounds |
| `navy-card` | `#0D1526` | Card backgrounds |

### Typography
- **Display / Headings**: Playfair Display (serif, italic for emphasis)
- **Body / UI**: Outfit (clean, geometric sans-serif)

---

## ✏️ Customisation

### Update personal info
- **Name/tagline**: `src/components/Hero.jsx` — top of file
- **About text**: `src/components/About.jsx`
- **Email/links**: `src/components/Contact.jsx` — `contactLinks` array
- **Skills**: `src/components/Skills.jsx` — `skills` array
- **Projects**: `src/components/Projects.jsx` — `projects` array

### Update project images
Replace Unsplash URLs in `projects` array with your own screenshots or local images:
```jsx
image: "/path/to/your-screenshot.png"
```

### Change accent color
In `tailwind.config.js`, update the `gold` values under `colors`.

---

## 📦 Features

- ✅ Fully responsive (mobile / tablet / desktop)
- ✅ Smooth scroll between sections
- ✅ IntersectionObserver scroll-reveal animations  
- ✅ Custom gold cursor dot
- ✅ Mobile hamburger navigation
- ✅ Contact form with success state
- ✅ Reusable card components
- ✅ Tailwind CSS custom theme
- ✅ Luxury dark aesthetic
