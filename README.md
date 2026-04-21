# Personal Profile Website

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## 📌 Summary

**Personal Profile Website** is a fully custom, animated developer portfolio built by **Pathi Tarun Naidu** using React and Vite. It serves as a central hub to showcase personal projects, technical skills, and professional background — with a modern dark aesthetic, smooth animations, and a downloadable resume.

The site is built entirely from scratch — no UI libraries, no templates. Every section is hand-crafted with a focus on clean design, performance, and a great first impression. It highlights Tarun's work in AI, Python, and full-stack development, with the flagship project being **Elli**, a custom-built AI assistant with memory and real-time responses.

---

## ⚙️ How It Works

The portfolio is a single-page React app where each section is its own component, rendered in sequence from top to bottom inside `App.jsx`.

### 1. Entry Point
`index.html` loads the app via `main.jsx`, which mounts the `<App />` component into the DOM. Global styles and the design system (colors, fonts, spacing) are all defined in `index.css` as CSS custom properties.

### 2. Sections & Components
Each visual section of the page is a standalone React component:

| Component | What it does |
|---|---|
| `Navbar.jsx` | Fixed top navigation with smooth scroll links and a Resume download button |
| `Hero.jsx` | Landing section with an animated particle canvas (Canvas API), an abstract SVG avatar, and a typewriter effect that cycles through roles |
| `About.jsx` | A brief bio with animated stat counters (projects, stacks, passion) |
| `Skills.jsx` | A grid showcasing the tech stack with icons and labels |
| `Projects.jsx` | Filterable project cards (by tag: AI / Web / Tools) with tech badges and GitHub links |
| `Contact.jsx` | Email and social links with a call-to-action |

### 3. Scroll Reveal Animations
A custom React hook `useReveal.js` uses the **Intersection Observer API** to detect when a section enters the viewport. When it does, a `.visible` CSS class is added, triggering a fade-in + slide-up transition defined in `index.css`.

### 4. Particle Canvas
The `Hero` section renders an animated `<canvas>` element. On mount, 70 floating particles are drawn and connected with lines when they come within 120px of each other — all driven by `requestAnimationFrame` for smooth 60fps animation.

### 5. Typewriter Effect
A `useEffect` loop in `Hero.jsx` cycles through an array of roles (`AI Developer`, `Python Engineer`, etc.), adding one character every 80ms to simulate typing, then deleting at 40ms, and moving to the next role.

### 6. Resume Download
The resume (`public/resume.pdf`) is served as a static asset by Vite. Both the Navbar button and the Hero CTA button use an `<a href="/resume.pdf" download>` tag — no backend required.

### 7. Project Filtering
The Projects section holds a local `activeFilter` state. Clicking a filter tab updates the state, and the card list re-renders showing only projects whose `tag` matches the selected filter (or all, if "All" is selected).

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Vanilla CSS (custom design system) |
| Animations | CSS keyframes + Canvas API |
| Fonts | Google Fonts (Inter) |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Live at **http://localhost:5173**

```bash
# Build for production
npm run build
```

---

## 📁 Project Structure

```
myprofile-website/
├── public/
│   └── resume.pdf             # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   └── useReveal.js       # Scroll reveal via Intersection Observer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              # Design system + all styles
├── index.html
└── vite.config.js
```

---

## 📬 Contact

- **GitHub**: [github.com/Pathitharun](https://github.com/Pathitharun)

---

*Built from scratch with ❤️ — no templates, no UI kits.*
