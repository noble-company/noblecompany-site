# Noble AI Landing Site - Copilot Instructions

## Project Overview

**Noble AI** is a React/TypeScript landing site for a legal tech AI solution. It's a single-page application with routing (landing page + privacy policy) built with Vite, showcasing how AI agents automate law firm workflows.

### Tech Stack
- **Frontend Framework**: React 18.3 + React Router 7.12
- **Build Tool**: Vite 6.0 with SWC compilation
- **Styling**: Tailwind CSS 3.4 + Montserrat font
- **Animation**: Framer Motion 12.29
- **Analytics**: Meta Pixel, GTM/GA4 event tracking
- **Component Library**: Lucide React icons

## Architecture & Data Flow

### Component Structure
```
src/
├── pages/         # Route pages (Index.tsx, PrivacyPolicy.tsx)
├── components/
│   ├── layout/    # Header, Footer, WhatsAppButton (persistent across pages)
│   └── sections/  # Reusable marketing sections on landing page
├── hooks/         # useWhatsAppTracking, useUTMParams (analytics)
└── lib/           # Utilities (cn, WhatsApp link, tracking) + project data
```

### Page Composition Pattern
The landing page ([Index.tsx](src/pages/Index.tsx)) is a vertical stack of **marketing sections** (Hero, Benefits, FAQSection, etc.). Each section is a self-contained component with internal state for animations and interactions. **No shared state management** (Redux/Zustand) — each section manages its own UI state.

### Critical Integration: WhatsApp Tracking
Every CTA button triggers `handleWhatsAppClick()` from the `useWhatsAppTracking` hook, which:
1. **Captures context**: Button location (e.g., `hero_section`, `benefits`) for attribution
2. **Reads UTM params** from URL via `useUTMParams` hook
3. **Fires analytics events** to GTM dataLayer, GA4, and Meta CAPI
4. **Redirects to WhatsApp** with the [predefined message](src/lib/utils.ts#L8-L9) + event deduplication ID

**Why this matters**: The site is a lead funnel. Every WhatsApp click must be tracked with UTM parameters and button location to measure campaign effectiveness.

## Key Files & Patterns

### Color & Theme Configuration
- **CSS variables** defined in [src/index.css](src/index.css#L6-L25) (dark mode by default)
- **Tailwind colors** use HSL CSS vars: `primary` (red #FF0050), `secondary` (purple), `noble-dark`, `noble-black`
- **Custom classes**: `noble-dark/95` (with opacity), `text-primary` for red text
- **No dark mode toggle**: This is a dark-themed site by design

### Analytics & UTM Integration
- **UTM params captured** in [useUTMParams.ts](src/hooks/useUTMParams.ts) on page load
- **Three tracking systems** integrated:
  1. **GTM dataLayer push** — for GA4
  2. **GA4 direct calls** — via window.gtag
  3. **Meta Pixel** — via window.fbq with deduplication
- **WhatsApp as primary CTA** — not a traditional form; tracking happens via click handler

### Content Data
- **Projects data** ([projectData.ts](src/lib/projectData.ts)): YouTube case studies (currently 1 project)
- **FAQ/Benefits hardcoded** in component files (no external data source)
- **Images in public/**: Logo, hero background, client logos, mobile assets

## Development Workflow

### Commands
```bash
npm run dev          # Vite dev server on http://localhost:8080
npm run build        # Production build → dist/
npm run build:dev    # Development build (with componentTagger for debugging)
npm run preview      # Serve dist/ locally
```

### Vite Configuration
- **Base path**: `./` (relative, for subpath deployment)
- **Import alias**: `@` → `/src` (use in imports like `@/components/Hero`)
- **Component tagger**: Enabled in dev mode for debugging

### Build & Deployment
- **Output**: `dist/` folder
- **Root file**: `index.html` (must contain `<div id="root">`)
- **Static assets**: `public/` (images copied as-is; CNAME file for GitHub Pages)
- **No server-side rendering** — this is a static SPA

## Common Tasks & Patterns

### Adding a New Section
1. Create component in `src/components/sections/SectionName.tsx`
2. Import `motion` from framer-motion for animations
3. Use `useWhatsAppTracking` if adding CTA buttons
4. Use Tailwind classes matching existing color scheme (primary, secondary, muted)
5. Add to [Index.tsx](src/pages/Index.tsx) in correct visual order

### Adding a CTA Button
```tsx
const { handleWhatsAppClick } = useWhatsAppTracking();
<button onClick={() => handleWhatsAppClick("button_location")}>Text</button>
```
Replace `button_location` with a semantic ID (e.g., `benefits_section`, `footer_cta`).

### Updating Analytics Events
Edit [useWhatsAppTracking.ts](src/hooks/useWhatsAppTracking.ts) to add fields to `eventData` object, which is pushed to GTM, GA4, and Meta simultaneously.

### Styling New Components
- Use existing Tailwind variables: `text-primary`, `bg-noble-dark`, `border-noble-red/20`
- Opacity syntax: `bg-secondary/80`, `text-foreground/50`
- Responsive: `md:text-2xl`, `lg:px-8`
- Animations: Wrap with `<motion.div>` from framer-motion

## Known Quirks & Constraints

1. **No TypeScript strict mode** — Some implicit `any` types in event handlers (window.dataLayer)
2. **Analytics script injection**: Tracking scripts (GTM, GA4, Meta Pixel) must be added to `index.html` manually (not in React code)
3. **WhatsApp message hardcoded** — Change in [utils.ts](src/lib/utils.ts#L9) if message needs updating
4. **Privacy Policy is separate HTML** — Not a React route; served from `sub-pag/politica-de-privacidade.html` (legacy routing)
5. **No form validation** — All CTAs redirect to WhatsApp; no email capture in app
