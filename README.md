# TechGigz Solutions - Website

A modern, high-performance website for TechGigz Solutions, showcasing IT services, digital marketing, and custom software development solutions.

## 🚀 Features

- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile devices
- **Modern Tech Stack** — Built with React, TypeScript, Vite, and Tailwind CSS
- **Fast Performance** — Optimized for speed and SEO
- **Beautiful Animations** — Framer Motion for smooth, engaging interactions
- **Professional UI** — Polished components and design system
- **Contact Forms** — Web3Forms integration for contact inquiries
- **Service Showcase** — Detailed service pages and case studies

## 📋 Tech Stack

- **Frontend Framework** — React 18+
- **Language** — TypeScript
- **Build Tool** — Vite
- **Styling** — Tailwind CSS
- **Animations** — Framer Motion
- **Icons** — Lucide React
- **Routing** — React Router
- **Form Handling** — Web3Forms
- **UI Components** — Custom components + shadcn/ui

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd pixel-perfect-ui
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```
Add your Web3Forms access key to `.env`:
```
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

4. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── common/         # Header, Footer, etc.
│   ├── sections/       # Page sections
│   └── ui/            # UI components
├── pages/             # Page components
├── data/              # Static data and configurations
├── assets/            # Images and static files
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── App.tsx            # Main app component
```

## 🔧 Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## 📄 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms API key for contact forms | `5f359fba-831d-...` |

Keep `.env` file private and never commit it to version control.

## 🌐 Pages

- **Home** `/` — Landing page with service overview
- **About** `/about` — Company information and team details
- **Services** `/services` — All available services
- **Service Detail** `/services/:slug` — Detailed service pages
- **Projects** `/projects` — Case studies and completed projects
- **Project Detail** `/projects/:id` — Individual project details
- **Contact** `/contact` — Contact form and business information

## 📧 Contact Form Setup

The contact form uses Web3Forms for email submissions:

1. Get your free access key from [Web3Forms](https://web3forms.com)
2. Add it to your `.env` file as `VITE_WEB3FORMS_ACCESS_KEY`
3. Emails will be sent to `solutions@techgigz.com.au`

## 🎨 Customization

### Colors & Branding
- Tailwind colors are configured in `tailwind.config.js`
- CSS variables defined in `src/index.css`

### Content
- Service data: `src/data/serviceCategories.ts`
- Project data: `src/data/projects.ts`
- Contact info: Update in relevant components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### To Vercel
1. Push code to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

The `vercel.json` file is configured for SPA routing.

## 📞 Contact & Support

- **Email:** solutions@techgigz.com.au
- **Phone:** (08) 6383 9983
- **WhatsApp:** +61 403 499 150
- **Address:** Suite 11b/5 Cressall Rd, Balcatta WA 6021

## 📜 License

All rights reserved © 2026 TechGigz Solutions
