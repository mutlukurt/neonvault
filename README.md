# NEONVAULT

Live Demo: [https://neonvault-five.vercel.app/](https://neonvault-five.vercel.app/)

NEONVAULT is a premium cyberpunk AI digital collectibles marketplace landing page built with Next.js. It presents a complete creator and collector experience: featured drops, bidding surfaces, collection creation, editorial content, contact flow, and locally generated visual assets.

The project is designed as a polished frontend prototype for an AI-art marketplace where creators can launch collection-ready vaults and collectors can discover, inspect, and bid on futuristic digital assets.

## What This Project Does

- Presents NEONVAULT as an AI digital collectibles marketplace.
- Showcases a cinematic hero section with creator positioning, CTA actions, live-style bid context, floating chips, and countdown cards.
- Displays market stats, featured drops, bid cards, creator spotlight, creation workflow, art grid, collector flow, blog content, contact form, and footer navigation.
- Uses locally generated cyberpunk artwork instead of remote/hotlinked images.
- Includes custom cropped/cleaned artwork assets for marketplace cards.
- Includes custom blog artwork generated specifically for each article topic.
- Implements a Caldera-inspired interaction logic while preserving the NEONVAULT brand, palette, and cyberpunk concept.

## Key Features

### Premium Landing Page Flow

The page is structured as a complete single-page marketplace experience:

1. Header / navigation
2. Hero
3. Market stats
4. Explore drops
5. Highest bid feature
6. Creator spotlight
7. Create collection
8. Explore artwork grid
9. Collection systems
10. Collector flow
11. Blog / journal
12. Contact desk
13. Footer

### Header Behavior

The navbar was refined to mimic the intended Caldera-style behavior:

- Full open navigation at the top of the page.
- On scroll, it switches into a smaller floating oval-corner navbar.
- Compact navbar keeps a small top offset instead of sticking to the browser edge.
- Brand, nav links, and wallet CTA visually compress toward one another with a spring-like feel.
- Mobile navigation uses a separate animated dropdown.

### Generated Artwork

All artwork is stored locally in `public/generated`. The project does not rely on external image URLs.

Implemented visual asset groups:

- Hero creator artwork
- Featured bid artworks
- Marketplace art cards
- Creator spotlight image
- Explore drops image
- Create collection studio image
- Blog-specific editorial images

Several marketplace images were cleaned and cropped to remove unwanted white edges or margins so the cards feel production-ready.

### Blog Section

The Blog section includes three editorial cards with unique generated images:

- `blog-collector-trust.webp`
- `blog-creator-vault.webp`
- `blog-bid-momentum.webp`

Each image was created to match its article theme rather than reusing the same generic artwork.

### Contact Section

The Contact section includes:

- Creator support path
- Verification path
- Partnership path
- Contact form with name, email, request type, and message fields
- Supporting response/review/status metrics

### Visual Direction

The visual language combines:

- Cyberpunk AI marketplace atmosphere
- Neon magenta and cyan accents
- Dark vault-like backgrounds
- Premium glass/dark card surfaces
- Caldera-inspired shape logic and spacing
- Large arcade-like display typography
- Oval-corner controls instead of overly pill-shaped UI
- Local generated imagery as first-class visual content

## Tech Stack

### Framework

- Next.js `16.2.6`
- React `19.2.6`
- React DOM `19.2.6`
- TypeScript `6.0.3`

### Styling

- Tailwind CSS `3.4.19`
- PostCSS
- Autoprefixer
- Custom global CSS tokens and utility classes

### Animation

- Framer Motion `12.38.0`

Used for:

- Hero entrance sequencing
- Floating hero artwork motion
- Scroll-aware navbar state
- Card entrance animations
- Mobile menu transitions
- Hover and tap micro-interactions

### Icons

- Lucide React `1.16.0`
- Simple Icons `16.19.0`

Simple Icons is used for brand-accurate icon rendering where needed, including the Ethereum icon treatment.

### Fonts

Loaded through `next/font/google`:

- Orbitron for display/headline typography
- Rajdhani for UI/body typography

## Project Structure

```text
app/
  globals.css        Global styles, component classes, page background
  layout.tsx         Metadata, fonts, root layout
  page.tsx           Main landing page composition

components/
  Header.tsx
  Hero.tsx
  MarketStats.tsx
  ExploreDrops.tsx
  HighestBid.tsx
  CreatorSpotlight.tsx
  CreateCollection.tsx
  ExploreArt.tsx
  CollectionChannels.tsx
  CollectorFlow.tsx
  BlogSection.tsx
  ContactSection.tsx
  Footer.tsx
  ArtworkCard.tsx
  FloatingChip.tsx
  SimpleBrandIcon.tsx

public/generated/
  Local generated artwork and optimized WebP assets
```

## Main Components

- `Header`: responsive navigation with full and compact scroll states.
- `Hero`: primary brand section with CTAs, generated hero art, highest bid card, chips, and countdown.
- `MarketStats`: marketplace status metrics.
- `ExploreDrops`: drop discovery section.
- `HighestBid`: featured bid surface.
- `CreatorSpotlight`: cinematic creator feature.
- `CreateCollection`: collection-building workflow and studio visual.
- `ExploreArt`: marketplace artwork grid.
- `ArtworkCard`: reusable NFT/art card component.
- `CollectionChannels`: marketplace system cards.
- `CollectorFlow`: collector journey steps.
- `BlogSection`: editorial content cards with custom generated artwork.
- `ContactSection`: creator/contact request surface.
- `Footer`: brand footer and navigation links.

## Design Tokens And Styling

The project extends Tailwind with a NEONVAULT palette:

- `vault.ink`: `#06000f`
- `vault.night`: `#090014`
- `vault.plum`: `#1a0731`
- `vault.magenta`: `#ff2ea6`
- `vault.violet`: `#9d52ff`
- `vault.cyan`: `#38dbff`

Important global classes:

- `glass-panel`: premium dark glass/card surface.
- `neon-button`: primary neon CTA treatment.
- `section-shell`: centered 1200px layout shell.
- `hero-title`: large display hero type.
- `display-type`: section/card headline style.
- `tech-label`: small uppercase technical label.
- `ui-type`: UI/body type helper.

## Local Assets

Generated assets are stored under:

```text
public/generated/
```

The project includes WebP files for production-friendly loading. New blog images were generated and optimized as WebP using the local `sharp` package.

Asset prompts and generation notes are documented in:

```text
public/generated/IMAGE_PROMPTS.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

If port `3000` is already in use, Next.js may ask to run on another port such as `3001`.

## Available Scripts

```bash
npm run dev
```

Starts the Next.js development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Runs the production build.

```bash
npm run lint
```

Runs ESLint across the project.

## Verification

The project has been verified with:

```bash
npm run lint
npm run build
```

Both commands pass successfully.

## Current Status

NEONVAULT is currently a polished frontend landing page/prototype. It does not include a real backend, wallet connection, blockchain minting, payment processing, or persistent form submission yet. The current implementation focuses on presentation quality, responsive layout, generated visual assets, interaction polish, and a convincing marketplace product narrative.

## Future Improvements

Potential next steps:

- Add real wallet connection.
- Add artwork detail pages.
- Add collection creation dashboard.
- Wire the contact form to an email/API endpoint.
- Add blog article pages.
- Add real bid data and filtering.
- Add accessibility pass for keyboard focus and reduced-motion preferences.
- Add image metadata and asset inventory documentation.
