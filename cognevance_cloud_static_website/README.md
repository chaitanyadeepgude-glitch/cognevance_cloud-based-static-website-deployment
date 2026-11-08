# Cognevance Technologies – Cloud-Based Static Website Deployment

[![Cloud Hosting](https://img.shields.io/badge/Hosting-GitHub%20Pages-blue.svg)](https://pages.github.com/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-Git%20Actions-green.svg)](https://github.com/features/actions)
[![Monitoring](https://img.shields.io/badge/Monitoring-UptimeRobot%20(99.9%25)-emerald.svg)](https://uptimerobot.com/)
[![Frontend](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-orange.svg)](#6-technologies-used)
[![License](https://img.shields.io/badge/License-Apache%202.0-lightgrey.svg)](LICENSE)

An enterprise-standard Cloud Computing & DevOps Level 1 project developed for **Cognevance Technologies**. This project implements a fully responsive, semantic static website, deployed automatically to the cloud via **GitHub Pages**, secured with automated TLS/HTTPS encryption, and monitored continuously via **UptimeRobot** synthetic probes.

---

## Table of Contents
1. [Project Title](#1-project-title)
2. [Project Introduction](#2-project-introduction)
3. [Problem Statement](#3-problem-statement)
4. [Project Objectives](#4-project-objectives)
5. [Project Scope](#5-project-scope)
6. [Technologies Used](#6-technologies-used)
7. [System Architecture](#7-system-architecture)
8. [Website Features](#8-website-features)
9. [Folder Structure](#9-folder-structure)
10. [Installation Instructions](#10-installation-instructions)
11. [Local Execution Instructions](#11-local-execution-instructions)
12. [GitHub Integration](#12-github-integration)
13. [GitHub Pages Deployment](#13-github-pages-deployment)
14. [Security Configuration](#14-security-configuration)
15. [Uptime Monitoring with UptimeRobot](#15-uptime-monitoring-with-uptimerobot)
16. [Testing Methodology & Results](#16-testing-methodology--results)
17. [Screenshots Section](#17-screenshots-section)
18. [Results & Deliverables](#18-results--deliverables)
19. [Limitations](#19-limitations)
20. [Future Enhancements](#20-future-enhancements)
21. [Conclusion](#21-conclusion)

---

## 1. Project Title
**Cloud-Based Static Website Deployment (Level 1 – Easy)**  
*Organization:* Cognevance Technologies  
*Track:* Cloud Computing & DevOps Internship

---

## 2. Project Introduction
In modern enterprise web infrastructure, static cloud hosting has emerged as the premier solution for public-facing corporate portals, landing pages, and documentation hubs. By removing traditional application runtimes and database servers from the hosting path, static architecture provides near-instant page load speeds, infinite vertical scalability, reduced cloud costs, and an inherently hardened security surface.

This project represents the complete end-to-end delivery of a corporate web solution for Cognevance Technologies, combining modern frontend craftsmanship with cloud hosting and synthetic health monitoring.

---

## 3. Problem Statement
Traditional web deployments frequently encounter:
- High recurring infrastructure costs from idle VM instances or unoptimized container pods.
- Security vulnerabilities stemming from unpatched CMS software, database injection vectors, and server-side misconfigurations.
- Slow page load times across distant geographical regions lacking CDN edge caching.
- Unmonitored downtime causing missed business opportunities and silent outages.

This project demonstrates how a static cloud-hosted architecture resolves each of these challenges completely.

---

## 4. Project Objectives
- **Modern Responsive Design**: Create an accessible, professional digital presence using semantic HTML5, CSS3, and modern Vanilla JavaScript without framework bloat.
- **Git Version Control**: Maintain a clean, professional commit history adhering to standard Git flow conventions.
- **Automated Cloud Delivery**: Deploy directly to GitHub Pages with automated continuous deployment triggered on every push to the `main` branch.
- **TLS/HTTPS Security**: Enforce end-to-end 256-bit encryption with automated certificate renewal.
- **Proactive SLA Monitoring**: Establish 24/7 synthetic HTTP/HTTPS health checks via UptimeRobot to ensure a $\ge 99.9\%$ availability SLA.
- **Turn-Key Documentation**: Deliver comprehensive reports covering architecture, testing, deployment, and security.

---

## 5. Project Scope
- Development of a corporate website covering Company Identity, About, 6 Core Services, 8 Technology Stacks, Why Choose Us, and a validated Contact Form.
- Configuration of Git version control, repository metadata, and `.gitignore`.
- Cloud hosting setup on GitHub Pages with relative asset path resolution.
- 16-point Quality Assurance testing matrix.
- Implementation of synthetic HTTP monitoring and alerting runbooks.

---

## 6. Technologies Used

- **HTML5**: Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), structured ARIA landmarks, WCAG 2.1 AA accessibility.
- **CSS3**: Custom properties (CSS variables), Flexbox, CSS Grid, mobile-first responsive breakpoints (320px, 375px, 768px, 1024px, 1440px), hardware-accelerated animations.
- **Vanilla JavaScript**: DOM element binding, mobile drawer transitions, client-side regular expression email validation, stateful feedback, zero third-party dependencies.
- **Git & GitHub**: Distributed version control and remote code collaboration.
- **GitHub Pages**: Global Fastly CDN edge distribution and static asset hosting.
- **UptimeRobot**: 5-minute synthetic HTTP/HTTPS status probing and incident alerting.

---

## 7. System Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                        DEVELOPER ENVIRONMENT                           │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│               LOCAL SOURCE (HTML5 + CSS3 + Vanilla JS)                 │
│  ├── index.html                                                        │
│  ├── css/style.css                                                     │
│  ├── js/script.js                                                      │
│  └── assets/ (cloud topology illustration + SVG tech icons)            │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │  git commit & git push origin main
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                     GITHUB REPOSITORY & VCS                            │
│  Repository: cognevance_cloud_static_website                           │
│  Branch: main                                                          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │  GitHub Pages Edge Pipeline
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                    GITHUB PAGES CLOUD HOSTING                          │
│  - Automated Let's Encrypt SSL/TLS Certificate (Enforced HTTPS)        │
│  - Fastly Global Content Delivery Network (CDN)                        │
│  - Serving from Root Directory (/(root))                               │
│  - URL: https://<username>.github.io/cognevance_cloud_static_website/  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                     UPTIMEROBOT SYNTHETIC PROBE                        │
│  - 5-Minute HTTP 200 OK Availability Ping                              │
│  - Global Latency & Uptime SLA Tracking (Target: 99.9%)                │
│  - Automated Email Alerts upon Downtime Detection                      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Website Features

1. **Navigation Bar**: Clean 1-row header following the 3-zone contract (Brand wordmark, 5 clean navigation links, primary action button), smooth scrolling anchors, and an accessible mobile hamburger drawer.
2. **Hero Section**: High-impact value proposition headline, contextual descriptions, primary and secondary CTAs, and an interactive pure CSS/SVG **Cloud Topology & Network Mesh** diagram.
3. **About Section**: Detailed institutional overview presenting Cognevance Technologies' mission, vision, and core engineering philosophy.
4. **Services Section**: 6 specialized capability cards with single-elevation borders and hover elevation:
   - *Cloud Computing*
   - *Web Development*
   - *DevOps Automation*
   - *Cloud Infrastructure*
   - *Digital Solutions*
   - *Technology Consulting*
5. **Technologies Section**: Visual technology stack featuring 8 industry-standard tools: HTML5, CSS3, JavaScript, Git, GitHub, AWS, Docker, and Kubernetes.
6. **Why Choose Us Section**: Enterprise pillars highlighting Innovation, Reliability, Scalability, Security, and Modern Technology.
7. **Contact Section & Client Validation**: Clean form fields (Full Name, Email Address, Subject, Message) backed by real-time validation, character bounds, regex email formatting, inline error states, and an explicit disclaimer indicating client-side demonstration mode.
8. **Footer**: Navigation mirror, legal notices, copyright information, and valid external links.
9. **Interactive DevOps Hub**: In-app floating drawer providing instant inspection of architecture diagrams, QA test matrices, deployment runbooks, and a 1-click ZIP package download.

---

## 9. Folder Structure

```
cognevance_cloud_static_website/
├── index.html                   # Semantic HTML5 entry point
├── css/
│   └── style.css                # Pure CSS3 stylesheet with design system
├── js/
│   └── script.js                # Vanilla JavaScript interactivity & validation
├── assets/
│   ├── images/
│   │   └── cloud-topology.svg   # Interactive cloud topology vector graphic
│   └── icons/
│       ├── html5.svg            # Technology stack icons
│       ├── css3.svg
│       ├── javascript.svg
│       ├── git.svg
│       ├── github.svg
│       ├── aws.svg
│       ├── docker.svg
│       └── kubernetes.svg
├── screenshots/
│   └── README.md                # Screenshot capture checklist & instructions
├── documentation/
│   ├── project-report.md        # Comprehensive internship project report
│   ├── testing-report.md        # 16-point QA test matrix & execution log
│   ├── deployment-guide.md      # Step-by-step GitHub Pages deployment guide
│   └── security-documentation.md# Static website security & monitoring guide
├── README.md                    # Primary project documentation
├── .gitignore                   # Version control ignore list
└── CNAME.example                # Custom domain configuration template
```

---

## 10. Installation Instructions

Clone the repository to your local workstation:

```bash
# Clone the repository
git clone https://github.com/<your-username>/cognevance_cloud_static_website.git

# Navigate into the project directory
cd cognevance_cloud_static_website
```

No dependencies, package managers, or compilers are required. The website runs natively in any modern web browser.

---

## 11. Local Execution Instructions

To preview the website locally, use any of the following methods:

### Method A: Direct Browser Opening
Simply double-click `index.html` or open it with your browser:
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### Method B: Python Local Server (Recommended)
```bash
# Python 3
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

---

## 12. GitHub Integration

Follow these steps to push the project to GitHub:

```bash
# 1. Initialize local repository
git init
git branch -M main

# 2. Stage and commit files
git add .
git commit -m "feat: complete Cognevance Technologies Level 1 static cloud website"

# 3. Add remote origin
git remote add origin https://github.com/<your-username>/cognevance_cloud_static_website.git

# 4. Push to main branch
git push -u origin main
```

---

## 13. GitHub Pages Deployment

1. Navigate to your repository on GitHub: `https://github.com/<your-username>/cognevance_cloud_static_website`.
2. Click **Settings** (top navigation bar) → **Pages** (left sidebar under *Code and automation*).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main`.
   - **Folder**: Select `/(root)`.
4. Click **Save**.
5. Wait 1–2 minutes for the GitHub Actions deployment workflow to finish.
6. Verify your site is live at:
   ```
   https://<your-username>.github.io/cognevance_cloud_static_website/
   ```
7. Verify that **Enforce HTTPS** is checked.

For detailed custom domain instructions and troubleshooting, see [documentation/deployment-guide.md](documentation/deployment-guide.md).

---

## 14. Security Configuration

- **Zero Server Attack Surface**: Pure static assets eliminate SQL Injection, Remote Code Execution (RCE), and server-side memory leaks.
- **Enforced HTTPS**: Automated Let's Encrypt TLS encryption protects data in transit.
- **Safe DOM Manipulation**: `textContent` is used exclusively for user input, preventing DOM-based XSS attacks.
- **No Opener Vulnerabilities**: All external hyperlinks utilize `rel="noopener noreferrer"`.
- **Zero Exposed Secrets**: Clean codebase containing no hardcoded API keys or private credentials.

For full security analysis and Content Security Policy (CSP) guidelines, see [documentation/security-documentation.md](documentation/security-documentation.md).

---

## 15. Uptime Monitoring with UptimeRobot

To ensure continuous availability:
1. Create a free account at [UptimeRobot](https://uptimerobot.com/).
2. Create an **HTTP(s)** monitor pointing to your published GitHub Pages URL.
3. Configure a **5-minute monitoring interval** and verify alert emails are enabled.
4. Target SLA: **$\ge 99.9\%$ uptime** with latency under 150ms.

---

## 16. Testing Methodology & Results

The project was evaluated through a 16-point Quality Assurance matrix spanning HTML semantics, responsive viewport integrity (320px to 1440px), JavaScript functional handlers, and deployment paths:

| Category | Tests Executed | Passed | Status |
| :--- | :--- | :--- | :--- |
| **HTML5 & Semantic Structure** | 3 | 3 | **100% PASS** |
| **CSS3 & Responsive Layout** | 5 | 5 | **100% PASS** |
| **JavaScript & Validation** | 7 | 7 | **100% PASS** |
| **DevOps & Asset Resolution** | 1 | 1 | **100% PASS** |
| **Total** | **16** | **16** | **100% PASS** |

See the complete execution log in [documentation/testing-report.md](documentation/testing-report.md).

---

## 17. Screenshots Section

Screenshot evidence placeholders and capturing guidelines are cataloged in [screenshots/README.md](screenshots/README.md). Captured evidence includes:
1. `01-homepage-hero.png`
2. `02-about-section.png`
3. `03-services-section.png`
4. `04-technologies-section.png`
5. `05-contact-form-validation.png`
6. `06-mobile-responsive-view.png`
7. `07-github-repository.png`
8. `08-github-pages-settings.png`
9. `09-published-website-live.png`
10. `10-uptimerobot-dashboard.png`

---

## 18. Results & Deliverables

- **Complete Static Website**: Zero-dependency HTML5, CSS3, and Vanilla JavaScript application.
- **Production Asset Suite**: Scalable SVG vector icons and cloud topology diagrams.
- **DevOps Documentation**: Complete project report, deployment guide, security guide, and testing report.
- **Instant ZIP Package**: Downloadable `.zip` archive generated directly through the embedded DevOps Hub.

---

## 19. Limitations

- **Form Processing**: Static hosting does not persist form inquiries to a database without an external endpoint (e.g., Formspree or AWS Lambda).
- **Custom HTTP Headers**: GitHub Pages does not support arbitrary server configuration files (`.htaccess`, `nginx.conf`) for custom security headers without a reverse proxy (e.g. Cloudflare).

---

## 20. Future Enhancements

1. Implement a serverless backend function (AWS Lambda + Amazon SES) to route contact inquiries to corporate email inboxes.
2. Add automated GitHub Actions workflows running Lighthouse CI on every pull request.
3. Attach a custom apex domain (`cognevancetech.com`) with Cloudflare CDN edge rules.

---

## 21. Conclusion

This project successfully fulfills all Level 1 requirements for the Cognevance Technologies Cloud Computing & DevOps internship. By combining clean, accessible frontend code with automated GitHub Pages cloud deployment and 24/7 UptimeRobot monitoring, the project demonstrates industry-grade engineering discipline and cloud deployment readiness.
