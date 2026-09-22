# 🚀 Modern Software Engineer Portfolio

A sleek, responsive, and production-ready portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed specifically for software engineers and frontend developers to showcase technical expertise, production projects, and direct contact avenues.

---

## 🌟 Features

- **Personal Branding & Hero Section**: Includes interactive CTAs for viewing and downloading the resume (`resume.jpeg`), along with custom avatar image support (`profile.jpg`).
- **Technical Skills Matrix**: Visual indicator cards displaying proficiency across frontend, backend, and database technologies.
- **Featured Projects**: Clickable project cards with live application URLs (e.g., [ApexBuild](https://apexbuild-website.vercel.app/)) and GitHub repository links.
- **Interactive Contact Form**: Integrated communication form connected with `mailto:` direct email functionality (`wazeemaamir145@gmail.com`).
- **Responsive Navigation**: Mobile-first design with modern backdrop-blur navbar, active section links, and branded initial badge (`<WA/>`).
- **Optimized Performance**: Pre-rendered Next.js pages with optimized asset rendering and fast deployment configuration on Vercel.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **ORM / Database**: [Prisma ORM](https://www.prisma.io/) / PostgreSQL
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
.
├── public/
│   ├── favicon.ico       # Custom browser tab icon
│   ├── profile.jpg       # Profile picture used in Hero section
│   └── resume.jpeg       # Resume file for preview & download
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout & page metadata
│   │   ├── page.tsx      # Main landing page (Hero, Resume modal)
│   │   └── globals.css   # Global Tailwind CSS directives
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx   # Sticky navbar with logo & responsive menu
│   │   └── sections/
│   │       ├── Skills.tsx   # Technical Skills matrix component
│   │       ├── Projects.tsx # Interactive project cards
│   │       └── Contact.tsx  # Get In Touch section & contact form
│   ├── data/
│   │   ├── projects.ts   # Project structured data & deployment links
│   │   └── skills.ts     # Skill levels & categories dataset
│   └── lib/
│       └── prisma.ts     # Database client configuration
├── package.json
└── tsconfig.json
