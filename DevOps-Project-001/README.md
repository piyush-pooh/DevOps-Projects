# DevOps-Project-001

Project setup in progress.

Piyush.Cloud - Cloud & DevOps Portfolio

A modern, responsive portfolio website showcasing cloud engineering expertise, projects, and professional journey. Built with React, TypeScript, and Tailwind CSS.

🌐 Live Demo

View Live Portfolio - Your published Replit link

📋 Table of Contents

Overview
Features
Tech Stack
Project Structure
Getting Started
Customization
Deployment
License
📌 Overview

Piyush.Cloud is a professional portfolio website designed for cloud engineers and DevOps practitioners. It showcases:

Professional Profile - A compelling introduction with professional portrait
Project Portfolio - Detailed case studies of cloud infrastructure projects
Career Timeline - Experience and education history with technical skills
Technical Blog - Integration with daily Hashnode blogs
Contact Section - Easy way for potential collaborators to connect
The site emphasizes "consistency compounds" — a philosophy of continuous learning and public documentation.

✨ Features

✅ Fully Responsive - Mobile-first design that works on all devices
✅ Fast Performance - Optimized with Vite and React 19
✅ Dark Mode Support - Modern color system supporting light and dark themes
✅ Smooth Animations - Page transitions and micro-interactions with Framer Motion
✅ SEO Optimized - Meta tags and semantic HTML structure
✅ Accessible - WCAG compliant with proper semantic markup
✅ Easy to Customize - Clean, well-organized component structure

🛠️ Tech Stack

Frontend

React 19 - UI library
TypeScript - Type-safe development
Tailwind CSS v4 - Utility-first styling
Framer Motion - Smooth animations
Shadcn/UI - Pre-built accessible components
Lucide React - Beautiful icon library
Routing

Wouter - Lightweight client-side routing
Build & Deployment

Vite - Fast build tool
Replit - Cloud deployment platform
📁 Project Structure

.
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.tsx          # Main layout wrapper with nav & footer
│   │   │   └── ui/                 # Shadcn UI components
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Hero & featured projects
│   │   │   ├── Projects.tsx        # Project showcase grid
│   │   │   ├── Career.tsx          # Experience & education timeline
│   │   │   ├── Blog.tsx            # Blog posts & Hashnode integration
│   │   │   ├── About.tsx           # About & contact form
│   │   │   └── not-found.tsx       # 404 page
│   │   ├── lib/
│   │   │   └── utils.ts            # Helper functions
│   │   ├── App.tsx                 # Main router setup
│   │   ├── main.tsx                # React entry point
│   │   └── index.css               # Global styles & theme variables
│   └── index.html                  # HTML template with meta tags
├── attached_assets/
│   └── generated_images/           # Portfolio images
├── package.json                    # Dependencies
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
🚀 Getting Started

Prerequisites

Node.js 18+
npm or yarn package manager
Git
Installation

Clone the repository
git clone <repository-url>
cd portfolio
Install dependencies
npm install
Start development server
npm run dev:client
Open in browser
Navigate to http://localhost:5000
You should see your portfolio live with hot-reload enabled
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

Add/remove work experiences
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
  // Add more navigation items here
];
Change Colors & Theme

Edit client/src/index.css to customize the color palette:

:root {
  --background: 40 8% 97%;           /* Background color */
  --foreground: 0 0% 10%;            /* Text color */
  --primary: 29 100% 38%;            /* Accent/primary color (orange) */
  --secondary: 0 0% 94%;             /* Secondary color */
  /* ... more colors ... */
}
Update Social Links

Edit footer links in client/src/components/Layout.tsx:

<a href="https://linkedin.com/in/your-profile" target="_blank">
  <Linkedin size={20} />
</a>
Replace Images

Place your images in attached_assets/ and import them:

import myImage from "@assets/my-image.png";
🌍 Deployment

Option 1: Deploy on Replit (Recommended)

Push your code to Replit
Click the Publish button in the top right
Choose your deployment type:
Static Deployment (Free for portfolios)
Autoscale (Pay-as-you-go)
Reserved VM (Predictable pricing)
Your site will be live with a .replit.app domain
Option 2: Deploy on Vercel

Push to GitHub
Import project in Vercel
Set build command: npm run build
Deploy automatically on every push
Option 3: Deploy on Netlify

Build the project:
npm run build
Deploy the dist folder to Netlify
📝 Build & Production

Build for Production

npm run build
This creates an optimized build in the dist/ directory.

Type Checking

npm run check
Validates TypeScript types and catches errors before deployment.

🎨 Design Philosophy

This portfolio follows:

Editorial Design - Clean typography with Playfair Display + DM Sans
Minimalist Aesthetic - Generous whitespace and focused content
Modern UI - Subtle shadows, smooth transitions, and interactive elements
Accessibility First - Semantic HTML and WCAG compliance
📱 Responsive Design

The portfolio is fully responsive:

Desktop - Multi-column layouts with full navigation
Tablet - Optimized spacing and touch-friendly buttons
Mobile - Single column with collapsible menu
Test responsiveness by resizing your browser or using DevTools.

🔗 Social Integration

The portfolio integrates with:

Hashnode - Daily technical blog posts
LinkedIn - Professional profile
GitHub - Code repositories (add your links in Footer)
Email - Direct contact form
📚 Resources

React Documentation
Tailwind CSS
Shadcn/UI Components
Framer Motion
Replit Docs
🤝 Contributing

To improve this portfolio:

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
💼 LinkedIn: LinkedIn Profile
📝 Blog: Hashnode
📍 Location: Palampur, Himachal Pradesh, India
🙏 Acknowledgments

Built with Replit
Designed with Tailwind CSS
Icons from Lucide React
Components from Shadcn/UI
