# SecureList - Astro Landing Page

A modern, high-performance landing page for SecureList built with Astro, featuring a clean design and interactive elements.

## 🚀 Features

- **Astro Framework**: Static site generation with optimal performance
- **React Components**: Interactive elements where needed (Product Demo)
- **Tailwind CSS**: Modern, responsive styling with custom design system
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Meta tags, semantic HTML, and fast loading times

## 🛠 Tech Stack

- **Astro** 4.16+ - Static Site Generator
- **React** 18+ - For interactive components
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library

## 📁 Project Structure

```
/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── components/         # Astro & React components
│   │   ├── Navigation.astro
│   │   ├── HeroSection.astro
│   │   ├── TrustIndicators.astro
│   │   ├── ProductDemo.tsx    # Interactive React component
│   │   ├── FeaturesGrid.astro
│   │   ├── PricingSection.astro
│   │   ├── FinalCTA.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro       # Base layout
│   ├── pages/
│   │   └── index.astro        # Main landing page
│   ├── styles/
│   │   └── global.css         # Global styles and design system
│   └── lib/
│       └── utils.ts           # Utility functions
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎨 Design System

### Colors

- **Primary**: `#1a1a1a` (secure-black)
- **Secondary**: `#666666` (secure-gray)
- **Accent**: `#22c55e` (secure-green)
- **Background**: `#fefefe` (secure-bg)
- **Light**: `#f8fafc` (secure-light)

### Typography

- **Font**: Inter (Google Fonts)
- **Hero Title**: 64px, weight 700
- **Section Titles**: 48px, weight 700
- **Body**: 16-18px

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Deployment

This Astro site can be deployed to any static hosting provider:

- **Netlify**: Connect your Git repository for automatic deploys
- **Vercel**: Import project and deploy with zero configuration
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Cloudflare Pages**: Connect Git and deploy globally

## 📄 Key Sections

1. **Navigation** - Fixed header with smooth scroll navigation
2. **Hero Section** - Large impact section with gradient background
3. **Trust Indicators** - Social proof with animated counter
4. **Product Demo** - Interactive dashboard mockup (React component)
5. **Features Grid** - 6-card feature showcase
6. **Pricing** - 3-tier pricing with highlighted popular plan
7. **Final CTA** - Dark call-to-action section
8. **Footer** - Organized links and company information

## 🔧 Interactive Features

- **Smooth scrolling** navigation
- **Responsive mobile menu** with hamburger toggle
- **Interactive dashboard demo** with working IP management
- **Animated counters** and scroll-triggered animations
- **Hover effects** on cards and buttons
- **Success states** in the product demo

## 🎯 Performance

- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Build Size**: Optimized with Astro's static generation
- **Loading Speed**: Sub-second load times with proper image optimization
- **Mobile Experience**: Fully responsive design with touch-friendly interactions

---

Built with ❤️ using Astro and modern web technologies.
