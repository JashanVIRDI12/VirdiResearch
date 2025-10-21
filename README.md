# Virdi Research

A modern research and market intelligence platform built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Interactive Navigation**: Smooth page transitions with Framer Motion
- **Multiple Pages**: Home, Research, Market Dashboard, About, and Contact

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── market-dashboard/page.tsx
│   ├── research/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    └── Navigation.tsx
```

## Pages

- **Home** (`/`) - Landing page with company overview
- **Research** (`/research`) - Research portfolio and publications
- **Market Dashboard** (`/market-dashboard`) - Real-time market data and insights
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact form and information

## Development

To start developing:

```bash
npm run dev
```

The application will be available at `http://localhost:3000` with hot reloading enabled.