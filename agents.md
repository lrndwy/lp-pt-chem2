# Agent Instructions: PT CHEM ENERGY SEMESTA Landing Page

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS
- Animation: Framer Motion
- Components: Shadcn/UI

## Branding Guidelines
- Primary Color: Green (Eco/Environment) & Blue (Corporate/Professional)
- Font: Modern Sans-serif (Inter/Montserrat)
- Reference Style: Clean, high white-space, smooth scroll transitions (easindo.co.id).

## Core Task
1. Read `data.md` to get all copy and content.
2. Build responsive sections: Hero, Our Services (Bento Grid), Strategic Partners (Slider), and Training List.
3. Ensure SEO optimization for keywords: "Konsultasi PROPER", "HAZOP Study Indonesia", "Distributor Gas Detector".

## 📁 File Structure
/ (Root Project)
├── agents.md             # Instruksi & panduan teknis untuk AI Agent
├── data.md               # Sumber konten tekstual hasil ekstraksi PDF
├── .env.local            # Environment variables
├── package.json
├── tailwind.config.ts
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout (Metadata, Font, Navbar/Footer)
│   ├── page.tsx          # Homepage (Hero, Overview Services)
│   ├── about/            # Halaman Profil & Nilai Perusahaan
│   ├── services/         # Halaman Detail Jasa (PROPER, Noise, HAZOP)
│   ├── retail/           # Katalog Produk (Gas Detector, PPE)
│   └── training/         # Daftar Sertifikasi & Pelatihan
├── components/           # Reusable UI Components
│   ├── ui/               # Base components (Shadcn/ui)
│   ├── shared/           # Navbar.tsx, Footer.tsx
│   └── sections/         # Hero.tsx, ServiceGrid.tsx, PartnerSlider.tsx
├── constants/            # Data Statis (Mapping dari data.md)
│   ├── services.ts       
│   ├── partners.ts       # List mitra (LSP, ISC, Honeywell)
│   └── training-list.ts  
├── public/               # Static Assets
│   └── assets/           # Logo, Ikon, Gambar Produk
└── lib/                  # Helper functions & Utils