# Andala Kavi Babu — Portfolio

Premium personal portfolio built with React + Vite + Tailwind CSS.

## Tech Stack
- **React 18** — UI library
- **Vite 5** — Build tool & dev server
- **Tailwind CSS 3** — Utility-first styling
- **Lucide React** — Icon library

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# Opens at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   └── photo.jpeg          # Your professional photo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── FeaturedProject.jsx
│   │   ├── Projects.jsx
│   │   ├── LeetCode.jsx
│   │   ├── GitHub.jsx
│   │   ├── Education.jsx
│   │   ├── Leadership.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── CursorSpotlight.jsx
│   │   └── ParticleBackground.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── vercel.json
```

## Deploy to Vercel

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: GitHub → Vercel
# Push to GitHub, import in vercel.com
# Build command: npm run build
# Output dir: dist
```

## Customization

- **Colors**: Edit `tailwind.config.js` and CSS variables in `index.css`
- **Content**: Update personal info directly in each component
- **Photo**: Replace `public/photo.jpeg` with your photo
