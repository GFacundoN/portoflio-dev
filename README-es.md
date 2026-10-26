<div align="center">

# 🚀 Portfolio - Facundo Gandolfo

### Front-End Developer | React & JavaScript Specialist

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-gfacundon.dev-00EC7A?style=for-the-badge)](https://gfacundon.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gfacundon/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GFacundoN)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

![Portfolio Preview](https://gfacundon.dev/og-facundo-gandolfo.jpg)

**Español** | **[English](./README.md)**

</div>

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [SEO & Performance](#-seo--performance)
- [Deploy](#-deploy)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Sobre el Proyecto

Portfolio personal desarrollado con **React** y **Vite**, diseñado para mostrar mi experiencia, educación y proyectos como desarrollador Front-End. El sitio está completamente optimizado para SEO, es responsive, accesible, y cuenta con soporte multiidioma (Español/Inglés).

### ✨ Visita el Portfolio
🔗 **[https://gfacundon.dev](https://gfacundon.dev)**

---

## 🌟 Características

- ✅ **Diseño Moderno y Responsive** - Adaptado a todos los dispositivos
- 🌓 **Modo Oscuro/Claro** - Toggle con persistencia en localStorage
- 🌍 **Multiidioma (i18n)** - Español e Inglés con react-i18next
- ⚡ **Optimizado para Performance** - Build con Vite, carga rápida
- 🎨 **UI/UX Profesional** - TailwindCSS + DaisyUI
- 📱 **PWA Ready** - Manifest y service worker configurados
- 🔍 **SEO Optimizado** - Meta tags, Open Graph, JSON-LD, sitemap.xml
- ♿ **Accesible** - Semántica HTML5, ARIA labels
- 📊 **Google Analytics** - Tracking integrado (gtag.js)
- 🎭 **Animaciones Suaves** - Transiciones y efectos CSS
- 📧 **Contacto Directo** - Enlaces a email y redes sociales

---

## 🛠️ Tecnologías

### Core

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Estilos

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5.0.54-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-8.5.6-DD3A0A?style=flat-square&logo=postcss&logoColor=white)

### Internacionalización

![i18next](https://img.shields.io/badge/i18next-25.4.2-26A69A?style=flat-square&logo=i18next&logoColor=white)
![react-i18next](https://img.shields.io/badge/react--i18next-15.7.3-26A69A?style=flat-square)

### Herramientas de Desarrollo

![ESLint](https://img.shields.io/badge/ESLint-9.33.0-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![SVGR](https://img.shields.io/badge/SVGR-4.5.0-FF6C37?style=flat-square)

---

## 📦 Instalación

### Prerrequisitos

- Node.js >= 18.x
- npm o yarn

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/GFacundoN/portoflio-dev.git
cd portoflio-dev
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en desarrollo**

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

4. **Build para producción**

```bash
npm run build
```

5. **Preview del build**

```bash
npm run preview
```

---

## 📁 Estructura del Proyecto

```
my-portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-facundo-gandolfo.jpg # Open Graph image
│   ├── apple-touch-icon.png
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── profile.jpg
│   ├── manifest.json          # PWA manifest
│   ├── robots.txt             # SEO crawler rules
│   ├── sitemap.xml            # Sitemap para SEO
│   └── .htaccess              # Apache config
├── src/
│   ├── assets/
│   │   ├── certificates/      # Imágenes de certificados
│   │   ├── icons/             # Iconos SVG (React components)
│   │   ├── projects/          # Screenshots de proyectos
│   │   └── pfp.jpg            # Foto de perfil
│   ├── components/
│   │   ├── AboutMe.jsx        # Sección sobre mí
│   │   ├── Education.jsx      # Certificaciones
│   │   ├── Experience.jsx     # Experiencia laboral
│   │   ├── Hero.jsx           # Hero section
│   │   ├── Navbar.jsx         # Navegación
│   │   ├── ProjectCard.jsx    # Card de proyecto
│   │   └── Projects.jsx       # Sección proyectos
│   ├── data/
│   │   └── projectsData.js    # Data de proyectos
│   ├── i18n/
│   │   ├── index.js           # Config i18next
│   │   ├── en.json            # Traducciones inglés
│   │   └── es.json            # Traducciones español
│   ├── App.jsx                # Componente principal
│   ├── main.jsx               # Entry point
│   └── index.css              # Estilos globales
├── index.html                 # HTML template con SEO tags
├── package.json
├── tailwind.config.js
├── vite.config.js
├── LICENSE                    # Licencia MIT
├── README.md                  # Documentación en inglés
└── README-es.md               # Documentación en español
```

---

## 🔍 SEO & Performance

### Optimizaciones SEO Implementadas

- ✅ **Meta Tags Completos** - Title, description, keywords, author
- ✅ **Open Graph** - Facebook, LinkedIn sharing optimizado
- ✅ **Twitter Cards** - Preview cards para Twitter
- ✅ **JSON-LD Schema** - Structured data (Person schema)
- ✅ **Canonical URL** - Evita contenido duplicado
- ✅ **Sitemap.xml** - Mapa del sitio para crawlers
- ✅ **Robots.txt** - Control de crawling
- ✅ **Images Alt Text** - Todas las imágenes con alt descriptivo
- ✅ **Semantic HTML5** - Estructura semántica correcta
- ✅ **Mobile-Friendly** - 100% responsive
- ✅ **Fast Loading** - Vite build optimization
- ✅ **HTTPS** - Deployed con SSL
- ✅ **Analytics** - Google Analytics (gtag.js) integrado

### Performance

- ⚡ **Vite** - Build tool ultrarrápido
- 🗜️ **GZIP Compression** - Archivos comprimidos
- 📦 **Code Splitting** - Carga optimizada
- 🖼️ **WebP Images** - Imágenes optimizadas
- 🎨 **CSS Purge** - TailwindCSS purge en producción
- 💾 **Browser Caching** - Cache de 1 mes para assets

---

## 🚀 Deploy

El sitio está desplegado en **Vercel** con las siguientes configuraciones:

### Build Settings

```
Build command: npm run build
Publish directory: dist
```

### Variables de Entorno

No se requieren variables de entorno para este proyecto.

### Post-Deploy Checklist

- ✅ Verificar en Google Search Console
- ✅ Enviar sitemap a Google
- ✅ Validar W3C HTML
- ✅ Test Mobile-Friendly de Google
- ✅ PageSpeed Insights check
- ✅ Verificar Analytics tracking

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

## 📞 Contacto

**Facundo Nicolás Gandolfo**

- 🌐 Portfolio: [gfacundon.dev](https://gfacundon.dev)
- 💼 LinkedIn: [linkedin.com/in/gfacundon](https://www.linkedin.com/in/gfacundon/)
- 🐙 GitHub: [github.com/GFacundoN](https://github.com/GFacundoN)
- 📧 Email: gandolfofacundonicolas@gmail.com
- 💻 Fiverr: [es.fiverr.com/s/WExrzyE](https://es.fiverr.com/s/WExrzyE)

---

<div align="center">

### ⭐ Si te gustó este proyecto, dale una estrella!

**Desarrollado con ❤️ por Facundo N. Gandolfo**

[![React](https://img.shields.io/badge/Made_with-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/Styled_with-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Built_with-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

</div>
