

# Teknify Landing Page — Implementation Plan

## Overview
Build a pixel-perfect recreation of the Teknify "Home One" SaaS landing page as a React app with Tailwind CSS. The page features a light/warm gradient hero, dashboard mockup, trusted logos, feature stats, services grid, and multiple CTA sections.

## Design Tokens
- **Primary orange**: `#E8612D` (used for "Technology" highlight, CTA accents, icons)
- **Dark text/backgrounds**: `#1A1A2E`, `#0D0D0D`
- **Light background**: `#FAF8F5` warm off-white with peach/orange gradient in hero
- **Gray text**: `#6B7280` for body copy
- **Card backgrounds**: `#FFFFFF` with subtle shadows
- **Purple accents**: `#7C3AED` for chart elements in dashboard
- **Font**: Inter (or system sans-serif)
- **Top banner**: Orange-to-purple gradient (`#E8612D` to `#7C3AED`)

## Page Sections (top to bottom)

### 1. Announcement Banner
- Full-width gradient bar (orange to purple)
- "30% Discount On Every Plan!" + "Claim Now" outlined button

### 2. Header
- Logo "Teknify" with icon, nav links (Home, Service, Pages, Blog, Shop, Contact) with dropdown chevrons
- Cart icon with badge, "Get Started" button (dark with arrow icon)

### 3. Hero Section
- Pill badge: "Technology For The Future" (outlined)
- Large heading: "Redefining **Technology** For A Better Tomorrow" (Technology in orange)
- Subtitle paragraph
- "Get Started Today" dark button with arrow icon
- Background: warm peach/orange gradient fade

### 4. Dashboard Preview
- Large laptop/tablet mockup showing a dashboard UI
- Dashboard contains: Business Revenue / Monthly Growth / Branding tabs, AVG Order Value cards ($21,450), team members list, 20.59% stat, 99% Accurate Prediction, line chart with Hotline/Balance/Total, 92% Project Management donut chart, Best Features bars, Mark Anderson profile
- Slight perspective/shadow effect on the device frame

### 5. Trusted By / Logos Row
- "Our Customers Trust Us" small label
- Row of partner logos (ZeroTech, FutureEdge, RealWave, etc.) — use placeholder text logos

### 6. Feature Stats Section
- "Driving Progress With Smart Technology" heading
- 3 cards in a row: revenue chart card, circular progress card, analytics bar chart card
- Each card has icon, title, stat, and mini visualization

### 7. Split Feature Section
- Left: heading "Building Smarter Systems For The Future", bullet points with checkmark icons, description text
- Right: gradient card with dashboard preview image and person photo overlay

### 8. CTA Banner
- Full-width coral/orange gradient background
- "Start Your Journey To Seamless Efficiency" text
- Arrow button on right side

### 9. Services Grid
- "Breaking Barriers With Tech Solutions" heading
- 5-6 service cards with icons: Tech Improvement, Advanced Information, Better Technologies, Optimized Systems, Smart Intelligence
- Cards with icons, titles, descriptions, arrow links

### 10. Progress Section
- "Powering Progress Through Technology" heading
- Left: text + features list
- Right: person image with floating stat cards (85% circular progress, connectivity icons)

### 11. Gradient Strip
- 3-column dark background section
- "Digitalization", "Factors Driving Better", "Solutions That Simplify"
- "Transforming Challenges Into Opportunities" heading

### 12. Analytics Section
- "The Heartbeat Of Digital Transformation" heading
- Feature cards with stat displays
- "Smart Tools For Smarter Decisions"

### 13. Bottom CTA Panel
- "Delivering Impact Through Smart Tools"
- Person avatars, revenue stat card ($2564.00)
- Dark background with orange accents

### 14. Footer
- Dark background
- Logo, description, contact info column
- Useful Links column, Quick Links column
- Social icons, copyright

## File Structure
```
src/
  components/
    common/Header.tsx, Footer.tsx
    sections/Hero.tsx, DashboardPreview.tsx, TrustedBy.tsx,
             FeatureStats.tsx, SplitFeature.tsx, CTA.tsx,
             Services.tsx, ProgressSection.tsx, GradientStrip.tsx,
             Analytics.tsx, BottomCTA.tsx, AnnouncementBar.tsx
    ui/Button.tsx (extend existing), StatCard.tsx, ServiceCard.tsx,
       FloatingCard.tsx
  pages/Index.tsx (compose all sections)
```

## Technical Notes
- All sections use `max-w-7xl mx-auto` container pattern
- Dashboard preview will be a styled div composition (not an image) using cards, charts approximated with CSS/divs
- Floating cards use `absolute` positioning with shadows
- Charts approximated using colored divs/bars (no charting library needed)
- Responsive: `lg:grid-cols-3`, `md:grid-cols-2`, `sm:flex-col`
- Update `src/index.css` with custom CSS variables for the orange/coral palette
- Use Lucide React icons throughout (ArrowRight, Check, ChevronDown, ShoppingBag, etc.)

## Implementation Order
1. Design tokens + CSS variables in index.css and tailwind.config.ts
2. Reusable UI components (Button, StatCard, ServiceCard, FloatingCard)
3. Header + AnnouncementBar + Footer
4. Hero section
5. Dashboard Preview (complex — styled div composition)
6. Remaining sections in page order
7. Compose all in Index.tsx
8. Responsive adjustments

