<div align="center">

# 🚀 Portfolio - Facundo Gandolfo

### Front-End Developer | React & JavaScript Specialist

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-gfacundon.dev-00EC7A?style=for-the-badge)](https://gfacundon.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gfacundon/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GFacundoN)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

![Portfolio Preview](https://gfacundon.dev/og-image.jpg)

**[Español](./README-es.md)** | **English**

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technologies](#️-technologies)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [SEO & Performance](#-seo--performance)
- [Deployment](#-deployment)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About the Project

Personal portfolio developed with **React** and **Vite**, designed to showcase my experience, education, and projects as a Front-End Developer. The site is fully optimized for SEO, responsive, accessible, and features multilingual support (Spanish/English).

### ✨ Visit the Portfolio
🔗 **[https://gfacundon.dev](https://gfacundon.dev)**

---

## 🌟 Features

- ✅ **Modern & Responsive Design** - Adapted to all devices
- 🌓 **Dark/Light Mode** - Toggle with localStorage persistence
- 🌍 **Multilingual (i18n)** - Spanish and English with react-i18next
- ⚡ **Performance Optimized** - Built with Vite, fast loading
- 🎨 **Professional UI/UX** - TailwindCSS + DaisyUI
- 📱 **PWA Ready** - Manifest and service worker configured
- 🔍 **SEO Optimized** - Meta tags, Open Graph, JSON-LD, sitemap.xml
- ♿ **Accessible** - Semantic HTML5, ARIA labels
- 📊 **Google Analytics** - Integrated tracking (gtag.js)
- 🎭 **Smooth Animations** - CSS transitions and effects
- 📧 **Direct Contact** - Links to email and social media

---

## 🛠️ Technologies

### Core

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Styling

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5.0.54-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-8.5.6-DD3A0A?style=flat-square&logo=postcss&logoColor=white)

### Internationalization

![i18next](https://img.shields.io/badge/i18next-25.4.2-26A69A?style=flat-square&logo=i18next&logoColor=white)
![react-i18next](https://img.shields.io/badge/react--i18next-15.7.3-26A69A?style=flat-square)

### Development Tools

![ESLint](https://img.shields.io/badge/ESLint-9.33.0-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![SVGR](https://img.shields.io/badge/SVGR-4.5.0-FF6C37?style=flat-square)

---

## 📦 Installation

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/GFacundoN/portoflio-dev.git
cd portoflio-dev
```

2. **Install dependencies**

```bash
npm install
```

3. **Run in development mode**

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

4. **Build for production**

```bash
npm run build
```

5. **Preview the build**

```bash
npm run preview
```

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg           # Open Graph image
│   ├── apple-touch-icon.png
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── profile.jpg
│   ├── manifest.json          # PWA manifest
│   ├── robots.txt             # SEO crawler rules
│   ├── sitemap.xml            # SEO sitemap
│   └── .htaccess              # Apache config
├── src/
│   ├── assets/
│   │   ├── certificates/      # Certificate images
│   │   ├── icons/             # SVG icons (React components)
│   │   ├── projects/          # Project screenshots
│   │   └── pfp.jpg            # Profile picture
│   ├── components/
│   │   ├── AboutMe.jsx        # About me section
│   │   ├── Education.jsx      # Certifications
│   │   ├── Experience.jsx     # Work experience
│   │   ├── Hero.jsx           # Hero section
│   │   ├── Navbar.jsx         # Navigation
│   │   ├── ProjectCard.jsx    # Project card
│   │   └── Projects.jsx       # Projects section
│   ├── data/
│   │   └── projectsData.js    # Projects data
│   ├── i18n/
│   │   ├── index.js           # i18next config
│   │   ├── en.json            # English translations
│   │   └── es.json            # Spanish translations
│   ├── App.jsx                # Main component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template with SEO tags
├── package.json
├── tailwind.config.js
├── vite.config.js
├── LICENSE                    # MIT License
├── README.md                  # English documentation
└── README-es.md               # Spanish documentation
```

---

## 🔍 SEO & Performance

### Implemented SEO Optimizations

- ✅ **Complete Meta Tags** - Title, description, keywords, author
- ✅ **Open Graph** - Optimized for Facebook, LinkedIn sharing
- ✅ **Twitter Cards** - Preview cards for Twitter
- ✅ **JSON-LD Schema** - Structured data (Person schema)
- ✅ **Canonical URL** - Prevents duplicate content
- ✅ **Sitemap.xml** - Site map for crawlers
- ✅ **Robots.txt** - Crawling control
- ✅ **Images Alt Text** - All images with descriptive alt text
- ✅ **Semantic HTML5** - Correct semantic structure
- ✅ **Mobile-Friendly** - 100% responsive
- ✅ **Fast Loading** - Vite build optimization
- ✅ **HTTPS** - Deployed with SSL
- ✅ **Analytics** - Google Analytics (gtag.js) integrated

### Performance

- ⚡ **Vite** - Ultra-fast build tool
- 🗜️ **GZIP Compression** - Compressed files
- 📦 **Code Splitting** - Optimized loading
- 🖼️ **WebP Images** - Optimized images
- 🎨 **CSS Purge** - TailwindCSS purge in production
- 💾 **Browser Caching** - 1 month cache for assets

---

## 🚀 Deployment

The site is deployed on **Vercel** with the following configurations:

### Build Settings

```
Build command: npm run build
Publish directory: dist
```

### Environment Variables

No environment variables are required for this project.

### Post-Deploy Checklist

- ✅ Verify on Google Search Console
- ✅ Submit sitemap to Google
- ✅ Validate W3C HTML
- ✅ Google Mobile-Friendly Test
- ✅ PageSpeed Insights check
- ✅ Verify Analytics tracking

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 📞 Contact

**Facundo Nicolás Gandolfo**

- 🌐 Portfolio: [gfacundon.dev](https://gfacundon.dev)
- 💼 LinkedIn: [linkedin.com/in/gfacundon](https://www.linkedin.com/in/gfacundon/)
- 🐙 GitHub: [github.com/GFacundoN](https://github.com/GFacundoN)
- 📧 Email: gandolfofacundonicolas@gmail.com
- 💻 Fiverr: [es.fiverr.com/s/WExrzyE](https://es.fiverr.com/s/WExrzyE)

---

<div align="center">

### ⭐ If you liked this project, give it a star!

**Developed with ❤️ by Facundo N. Gandolfo**

[![React](https://img.shields.io/badge/Made_with-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/Styled_with-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Built_with-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

</div>
