# Shiva Vilayanur - Personal Profile Website

A modern, responsive personal profile website for Shiva Vilayanur, Fractional CFO & Strategic Finance Partner. Built with SvelteKit, TypeScript, and TailwindCSS v4.1, featuring WCAG AAA accessibility compliance and offline support.

## Features

- **Fully Responsive**: Optimized for both desktop and mobile devices with adaptive layouts
- **Dark Mode Support**: Automatic theme switching with manual override, respecting system preferences
- **Offline Support**: Service worker caches all assets for offline access and improved performance
- **WCAG AAA Compliant**: Highest level of accessibility standards (7:1 contrast ratio for normal text, 4.5:1 for large text)
- **Performance Optimized**: Fast loading with local caching and optimized asset delivery
- **Modern Design**: Clean, professional interface using TailwindCSS v4.1 with CSS-based theme configuration
- **Type-Safe**: Full TypeScript support for enhanced developer experience

## Tech Stack

- **SvelteKit 2.50+** - Full-stack framework with file-based routing
- **Svelte 5.49+** - Latest version with runes ($state, $derived, $effect, $props)
- **TypeScript 5.9+** - Type safety and enhanced IDE support
- **TailwindCSS 4.1.18** - Utility-first CSS framework with CSS-based `@theme` configuration
- **Vite 7.3+** - Fast build tool and dev server
- **Service Worker** - Offline caching and PWA capabilities
- **PostCSS** - CSS processing with autoprefixer

## Architecture

### System Architecture Diagram

```mermaid
graph TB
    subgraph "Client Browser"
        A[User Request] --> B[SvelteKit App]
        B --> C[Service Worker]
        C --> D{Cache Available?}
        D -->|Yes| E[Serve from Cache]
        D -->|No| F[Network Request]
        F --> G[Update Cache]
        G --> E
    end
    
    subgraph "Application Layer"
        B --> H[+layout.svelte]
        H --> I[+page.svelte]
        I --> J[Navbar Component]
        I --> K[Hero Component]
        I --> L[EngagementModel Component]
        I --> M[WhyMe Component]
        I --> N[Clientele Component]
        I --> O[ProfessionalHistory Component]
        I --> P[Education Component]
    end
    
    subgraph "Data Layer"
        Q[data.ts] --> I
        Q --> K
        Q --> L
        Q --> M
        Q --> N
        Q --> O
        Q --> P
    end
    
    subgraph "Styling Layer"
        R[app.css] --> H
        S[@theme Directive] --> R
        T[CSS Variables] --> R
        T --> U[Light Mode]
        T --> V[Dark Mode]
    end
    
    subgraph "Build System"
        W[Vite] --> X[TailwindCSS Vite Plugin]
        X --> Y[PostCSS]
        Y --> Z[Autoprefixer]
        Z --> AA[Optimized CSS]
    end
```

### Component Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      +layout.svelte                         │
│  (Root Layout: Theme Management, Global Styles, Meta Tags)  │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                        +page.svelte                         │
│                    (Main Page Container)                    │
└───────┬─────────────────────────────────────────────────────┘
        │
        ├──► Navbar Component (Floating, Responsive Navigation)
        │
        ├──► Hero Component (Profile, Statement, Contact Buttons)
        │
        ├──► EngagementModel Component (3 Models + Methodology)
        │
        ├──► WhyMe Component (3-Column Experience Cards)
        │
        ├──► Clientele Component (Carousel with Testimonials)
        │
        ├──► ProfessionalHistory Component (Timeline View)
        │
        └──► Education Component (Education & Certificates)
```

### Data Flow

```
data.ts (Centralized Content)
    │
    ├──► Profile Information
    ├──► Engagement Models
    ├──► Methodology Steps
    ├──► Why Me Sections
    ├──► Clientele Engagements
    ├──► Professional History
    └──► Education & Certificates
         │
         └──► Components (Read-only, Display)
```

## Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd Shiva-Vilayanur

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# The site will be available at http://localhost:5173
```

The development server includes:
- Hot Module Replacement (HMR)
- Fast refresh for instant updates
- Source maps for debugging
- TypeScript type checking

### Build

```bash
# Create production build
npm run build

# Output will be in .svelte-kit/output/
```

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

### Type Checking

```bash
# Run TypeScript type checking
npm run check

# Watch mode for continuous type checking
npm run check:watch
```

## Project Structure

```
shiva-vilayanur/
├── src/
│   ├── lib/
│   │   ├── components/          # Reusable Svelte components
│   │   │   ├── Navbar.svelte    # Floating navigation bar
│   │   │   ├── Hero.svelte      # Hero section with profile
│   │   │   ├── EngagementModel.svelte  # Engagement models section
│   │   │   ├── WhyMe.svelte     # Why Me section
│   │   │   ├── Clientele.svelte # Client carousel
│   │   │   ├── ProfessionalHistory.svelte  # Timeline view
│   │   │   └── Education.svelte # Education section
│   │   └── data.ts              # Centralized content data
│   ├── routes/
│   │   ├── +layout.svelte       # Root layout (theme, meta)
│   │   └── +page.svelte         # Home page (main content)
│   ├── app.css                  # Global styles & TailwindCSS @theme
│   ├── app.d.ts                 # TypeScript declarations
│   ├── app.html                 # HTML template
│   └── service-worker.ts        # Service worker for caching
├── static/                      # Static assets (images, etc.)
├── .svelte-kit/                 # Build output (gitignored)
├── node_modules/                # Dependencies (gitignored)
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # TailwindCSS config (minimal for v4.1)
├── vite.config.ts              # Vite configuration
├── postcss.config.js            # PostCSS configuration
└── README.md                    # This file
```

## Content Sections

The website consists of six main content sections:

1. **Hero Section** - Profile photo placeholder, name, title, personal statement, and contact buttons (LinkedIn, Email)
2. **Engagement Model** - Three engagement models (Diagnostic Sprint, System Build, Interim Leadership) with methodology
3. **Why Me** - Three-column layout showcasing:
   - Functional Role Experience (Fintech/SaaS DNA)
   - Industry Type Experience (Venture Capital Insight)
   - Work Type Experience (Fractional CFO Experience)
4. **Clientele** - Revolving carousel displaying client engagements with crisis, action, outcome, and testimonials
5. **Professional History** - Chronological timeline of work experience with accomplishments and investments
6. **Education** - Education credentials, certificates, and honors/awards

## Customization

### Updating Content

All content is centralized in `src/lib/data.ts`. Edit this file to update:

- Profile information (name, title, tagline, contact details)
- Engagement models and methodology
- Client testimonials and engagements
- Professional history entries
- Education and certificates
- Honors and awards

### Adding Profile Photo

1. Place your profile image in the `static/` directory
2. Update the `Hero` component in `src/routes/+page.svelte`:

```svelte
<Hero imageSrc="/your-image.jpg" />
```

### Color Scheme & Theming

Colors are configured using TailwindCSS v4.1's `@theme` directive in `src/app.css`:

- **Light Mode**: Defined in `:root` CSS variables
- **Dark Mode**: Defined in `.dark` CSS variables
- **Theme Registration**: Colors are registered with Tailwind via `@theme` block

To modify colors:

1. Update CSS variables in `src/app.css`:
   ```css
   :root {
     --color-primary: #your-color;
   }
   
   .dark {
     --color-primary: #your-dark-color;
   }
   ```

2. Colors are automatically available as Tailwind utilities:
   - `bg-primary`, `text-primary`, `border-primary`, etc.
   - `bg-primary-dark` for darker variant

### TailwindCSS v4.1 Configuration

This project uses TailwindCSS v4.1 with CSS-based theme configuration:

- **Theme Definition**: `@theme` directive in `src/app.css`
- **Config File**: `tailwind.config.ts` (minimal - only content paths, plugins, darkMode)
- **Build Integration**: `@tailwindcss/vite` plugin handles processing
- **CSS Variables**: Dynamic theme switching via CSS custom properties

## Styling Architecture

### TailwindCSS v4.1 Features Used

- **CSS-based Theme**: `@theme` directive for design tokens
- **CSS Variables**: Runtime theme switching with `:root` and `.dark`
- **Vite Integration**: Direct Vite plugin for faster builds
- **Custom Colors**: Registered via `@theme` for utility class generation

### Color System

The color system ensures WCAG AAA compliance:

- **Normal Text**: 7:1 contrast ratio minimum
- **Large Text**: 4.5:1 contrast ratio minimum
- **Interactive Elements**: High contrast for buttons and links
- **Dark Mode**: All colors verified for readability

## Accessibility

This website adheres to WCAG AAA standards:

- ✅ **Semantic HTML5** elements (`<nav>`, `<main>`, `<article>`, `<section>`)
- ✅ **ARIA labels** and roles where appropriate
- ✅ **Keyboard navigation** support throughout
- ✅ **Screen reader** compatibility
- ✅ **High contrast ratios** (7:1 normal, 4.5:1 large text)
- ✅ **Focus indicators** for all interactive elements
- ✅ **Reduced motion** support via `prefers-reduced-motion`
- ✅ **Proper heading hierarchy** (h1 → h2 → h3 → h4)

## Performance

### Optimization Strategies

- **Service Worker**: Caches assets for offline access
- **Code Splitting**: Automatic via SvelteKit
- **Lazy Loading**: Images use `loading="lazy"` attribute
- **CSS Optimization**: TailwindCSS purges unused styles
- **TypeScript**: Compile-time error checking
- **Vite**: Fast HMR and optimized builds

### Build Output

Production builds are optimized:
- Minified CSS and JavaScript
- Tree-shaken dependencies
- Optimized assets
- Source maps for debugging (optional)

## Browser Support

- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Progressive enhancement for older browsers

## Development Workflow

### Recommended Workflow

1. **Content Updates**: Edit `src/lib/data.ts`
2. **Component Changes**: Modify components in `src/lib/components/`
3. **Styling**: Update TailwindCSS classes or CSS variables in `src/app.css`
4. **Type Checking**: Run `npm run check` before committing
5. **Testing**: Test in both light and dark modes
6. **Build**: Run `npm run build` to verify production build

### Code Quality

- **TypeScript**: Strict type checking enabled
- **Svelte Check**: Component validation
- **ESLint**: Code quality (if configured)
- **Prettier**: Code formatting (if configured)

## Deployment

### Build for Production

```bash
npm run build
```

### Deployment Options

This project can be deployed to:

- **Vercel**: Automatic deployment with `@sveltejs/adapter-auto`
- **Netlify**: Static site deployment
- **Cloudflare Pages**: Edge deployment
- **GitHub Pages**: Static hosting
- **Node.js Server**: Using `@sveltejs/adapter-node`

### Environment Variables

No environment variables required for basic functionality. Add `.env` file if needed for:
- API endpoints
- Analytics keys
- Other configuration

## Troubleshooting

### Common Issues

**Issue**: Styles not applying
- **Solution**: Ensure `src/app.css` is imported in `+layout.svelte`

**Issue**: Dark mode not working
- **Solution**: Check that `darkMode: 'class'` is set in `tailwind.config.ts`

**Issue**: Type errors
- **Solution**: Run `npm run check` to see detailed error messages

**Issue**: Build fails
- **Solution**: Clear `.svelte-kit` directory and rebuild

## License

Private project for Shiva Vilayanur. All rights reserved.

## Credits

Built with:
- [SvelteKit](https://kit.svelte.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

For questions or issues, please contact the project maintainer.
