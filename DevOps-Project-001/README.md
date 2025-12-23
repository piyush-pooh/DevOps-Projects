# Piyush.Cloud – Cloud & DevOps Portfolio ☁️🚀

A modern, responsive portfolio website showcasing cloud engineering expertise, real-world projects, and professional growth.  
Built with **React**, **TypeScript**, and **Tailwind CSS**.

---

## 🌐 Live Demo

🔗 **View Live Portfolio**  
_(Add your published Replit link here)_

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [License](#-license)

---

## 📌 Overview

**Piyush.Cloud** is a professional portfolio website designed for **Cloud Engineers** and **DevOps Practitioners**.  
It highlights both technical expertise and a philosophy of continuous learning.

### What it showcases:

- **Professional Profile** – A concise introduction with professional branding
- **Project Portfolio** – Real-world cloud and DevOps case studies
- **Career Timeline** – Experience, education, and technical skills
- **Technical Blog** – Integration with daily Hashnode blogs
- **Contact Section** – Easy communication for collaboration opportunities

> _“Consistency compounds”_ — the guiding philosophy behind this portfolio.

---

## ✨ Features

- ✅ Fully responsive, mobile-first design
- ✅ High performance using Vite & React 19
- ✅ Light & dark mode support
- ✅ Smooth animations with Framer Motion
- ✅ SEO-friendly semantic HTML
- ✅ Accessibility-first (WCAG compliant)
- ✅ Clean, modular, and easy-to-customize codebase

---

## 🛠️ Tech Stack

### Frontend
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Shadcn/UI**
- **Lucide React**

### Routing
- **Wouter** – Lightweight client-side routing

### Build & Deployment
- **Vite**
- **Replit**

---

## 📁 Project Structure

```text
.
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.tsx
│   │   │   └── ui/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Career.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── About.tsx
│   │   │   └── not-found.tsx
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── attached_assets/
│   └── generated_images/
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md

## 🚀 Getting Started

### Prerequisites

- Node.js **18+**
- npm or yarn package manager
- Git

### Installation

#### Clone the repository
```bash
git clone <repository-url>
cd portfolio
Install dependencies
npm install
Start development server
npm run dev:client
Open in browser
Navigate to:
👉 http://localhost:5000
You should see your portfolio live with hot-reload enabled.

✏️ Customization
Update Personal Information
Home Page (client/src/pages/Home.tsx)
Change the headline and description
Update the hero section text
Modify featured project details
About Page (client/src/pages/About.tsx)
Edit bio and introduction
Update email and location
Customize contact form fields
Career Page (client/src/pages/Career.tsx)
Add or remove work experiences
Update company names, roles, and dates
Modify education details
Change skills and technologies
Projects Page (client/src/pages/Projects.tsx)
Add new projects to the projects array
Update project titles, descriptions, and tags
Change project categories
Blog Page (client/src/pages/Blog.tsx)
Update blog post titles and dates
Link to your Hashnode profile
Customize the blog description
Update Navigation
Edit client/src/components/Layout.tsx:
const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
];
Change Colors & Theme
Edit client/src/index.css:
:root {
  --background: 40 8% 97%;
  --foreground: 0 0% 10%;
  --primary: 29 100% 38%;
  --secondary: 0 0% 94%;
}
Update Social Links
Edit footer links in client/src/components/Layout.tsx:
<a href="https://linkedin.com/in/your-profile" target="_blank">
  <Linkedin size={20} />
</a>
Replace Images
Place images in attached_assets/ and import them:
import myImage from "@assets/my-image.png";
🌍 Deployment
Option 1: Deploy on Replit (Recommended)
Push your code to Replit
Click Publish (top-right)
Choose deployment type:
Static Deployment (Free for portfolios)
Autoscale (Pay-as-you-go)
Reserved VM (Predictable pricing)
Your site will be live with a .replit.app domain.
Option 2: Deploy on Vercel
Push the project to GitHub
Import the repository in Vercel
Set build command:
npm run build
Deploy automatically on every push
Option 3: Deploy on Netlify
npm run build
Deploy the dist/ folder to Netlify.
📝 Build & Production
Build for Production
npm run build
Creates an optimized build in the dist/ directory.
Type Checking
npm run check
Validates TypeScript types and catches errors before deployment.
🎨 Design Philosophy
This portfolio follows:
Editorial Design – Clean typography with Playfair Display + DM Sans
Minimalist Aesthetic – Generous whitespace and focused content
Modern UI – Subtle shadows and smooth transitions
Accessibility First – Semantic HTML and WCAG compliance
📱 Responsive Design
The portfolio is fully responsive:
Desktop – Multi-column layouts with full navigation
Tablet – Optimized spacing and touch-friendly buttons
Mobile – Single-column layout with collapsible menu
Test responsiveness using browser resize or DevTools.
🔗 Social Integration
The portfolio integrates with:
Hashnode – Daily technical blog posts
LinkedIn – Professional profile
GitHub – Code repositories
Email – Direct contact form
📚 Resources
React Documentation
Tailwind CSS
Shadcn/UI Components
Framer Motion
Replit Docs
🤝 Contributing
To contribute:
Create a new branch
Make your changes
Test thoroughly
Submit a pull request
📄 License
This project is open source and available under the MIT License.
👤 About the Creator
Piyush Sharma
Cloud & DevOps Engineer | AWS | Kubernetes | Terraform
📧 Email: work.sharmapiyush@gmail.com
💼 LinkedIn: Add link
📝 Blog: Hashnode
📍 Palampur, Himachal Pradesh, India

🙏 Acknowledgments
Built with Replit
Designed using Tailwind CSS
Icons from Lucide React
Components from Shadcn/UI
