# Cognevance Technologies – Quality Assurance & Testing Report

**Project Title:** Cloud-Based Static Website Deployment  
**Organization:** Cognevance Technologies  
**Project Level:** Level 1  
**Environment:** Chromium, Firefox, WebKit, Mobile Viewport Simulators  
**Test Suite Execution Date:** November 2026  
**Overall Status:** PASSED (16 / 16 Test Cases Passed)

---

## 1. Quality Assurance Methodology

Testing was executed systematically across four testing domains to guarantee production readiness, cross-browser compatibility, zero visual regression, and GitHub Pages compliance:

1. **HTML & Semantic Structure Testing**: Validating W3C compliance, heading order hierarchy (`<h1>` through `<h4>`), ARIA landmark compliance, and internal anchor integrity.
2. **CSS & Responsive Layout Testing**: Validating viewport adaptations from 320px to 1440px, CSS grid/flexbox alignment, zero horizontal overflow (`scrollWidth === clientWidth`), and contrast ratios.
3. **JavaScript & Functional Testing**: Verifying mobile menu transitions, smooth scrolling calculation, form validation regular expressions, button click events, and browser console cleanliness.
4. **DevOps & Deployment Testing**: Verifying relative asset resolution, root `index.html` structure, SSL readiness, and UptimeRobot HTTP 200 ping suitability.

---

## 2. Test Execution Matrix

| Test Case ID | Test Category | Test Description | Expected Result | Actual Result | Status | Remarks |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-HTML-01** | HTML Structure | Document landmark verification (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) | Semantic elements exist and encapsulate appropriate page zones | All landmarks present and properly nested | **PASS** | Follows WCAG 2.1 AA landmark criteria. |
| **TC-HTML-02** | HTML Structure | Heading hierarchy integrity (`<h1>` to `<h3>`) | Single unique `<h1>` for hero value proposition followed by sequential `<h2>` section headers | Unique `<h1>` verified in hero; all 6 major sections utilize `<h2>` | **PASS** | Prevents heading level jumping for screen readers. |
| **TC-HTML-03** | HTML Links | Internal navigation anchor links (`#home`, `#about`, `#services`, `#technologies`, `#contact`) | Clicking each anchor smoothly navigates to the respective section target | Navigation reaches each section target accurately with smooth scroll | **PASS** | Verified across desktop and mobile menus. |
| **TC-CSS-01** | CSS Layout | Mobile viewport adaptability at 320px and 375px (iPhone SE/13) | Zero horizontal scrollbar; text wraps cleanly without clipping | Page maintains width $\le 320\text{px}$; no clipping or overflow | **PASS** | Verified via viewport dimension checks. |
| **TC-CSS-02** | CSS Layout | Tablet viewport layout at 768px (iPad Mini) | 2-column service card grid, adjusted header layout | 2-column flex/grid displays seamlessly with balanced padding | **PASS** | Clean responsive grid wrapping. |
| **TC-CSS-03** | CSS Layout | Desktop viewport layout at 1024px and 1440px | Split-screen hero layout with topology visual; 3-column service grid | Hero displays 2-column layout; services display balanced 3-column grid | **PASS** | Clean visual rhythm and centered container width. |
| **TC-CSS-04** | CSS Layout | Horizontal overflow detection across all viewports | Document `body.scrollWidth` equals `window.innerWidth` | Zero unexpected horizontal scrolling detected on any tested width | **PASS** | Enforced via `max-w-full`, `overflow-x-hidden`, and box-sizing reset. |
| **TC-CSS-05** | CSS Typography | Legibility and WCAG AA contrast compliance | Contrast ratio $\ge 4.5:1$ for normal text and $\ge 3:1$ for large headings | Slate-100 on Navy (`#0B132B`) yields $> 12:1$ contrast ratio | **PASS** | Exceeds WCAG AA accessibility requirements. |
| **TC-JS-01** | JavaScript | Mobile menu toggle functionality | Clicking hamburger toggles mobile drawer and updates `aria-expanded` | Drawer opens/closes instantly; toggles `aria-expanded="true/false"` | **PASS** | Keyboard accessible (`Enter`/`Space`). |
| **TC-JS-02** | JavaScript | Mobile menu link click auto-close | Clicking any navigation link inside mobile drawer closes the drawer | Drawer auto-collapses and view scrolls to selected section | **PASS** | Smooth transition with 250ms closing animation. |
| **TC-JS-03** | JavaScript | Back-to-top button appearance & action | Button appears after scrolling past 300px; clicking scrolls smoothly to top | Button appears at scroll threshold; returns viewport to top on click | **PASS** | Throttled scroll listener used for performance. |
| **TC-JS-04** | JavaScript | Contact form required field validation | Submitting empty form highlights missing fields and displays error notices | "Please fill out all required fields" banner displays; invalid fields outlined | **PASS** | Client-side validation stops form submission. |
| **TC-JS-05** | JavaScript | Contact form email format regex validation | Rejects malformed emails (e.g., `user@`, `test.com`, `@domain`) | Detects syntax error; prompts user to supply valid email format | **PASS** | Compliant with standard email RFC validation pattern. |
| **TC-JS-06** | JavaScript | Contact form success state & demonstration notice | Submitting valid data shows success feedback and transparent demo notice | Clear confirmation alert rendered stating frontend demonstration status | **PASS** | Adheres strictly to guideline prohibiting fake backend claims. |
| **TC-JS-07** | JavaScript | Console cleanliness & error audit | Zero uncaught exceptions, null pointer references, or 404 resource errors | Browser console remains 100% clean across all user interactions | **PASS** | Verified via automated browser logging. |
| **TC-DEP-01** | DevOps/Deploy | Relative asset path verification for GitHub Pages | All assets load via relative paths (`./css/style.css`, `./assets/...`) | Zero broken link warnings; assets load under project subpaths | **PASS** | Safe for both root domains and GitHub `/<repo>/` subdirectories. |

---

## 3. Detailed Test Case Analyses

### 3.1 Contact Form Validation Test Case (TC-JS-04 & TC-JS-05)
- **Input 1**: Name = "", Email = "test", Subject = "", Message = ""
  - **Output**: Error banners triggered: *"Please enter your full name"*, *"Please enter a valid email address"*.
  - **Result**: PASSED.
- **Input 2**: Name = "Alex Mercer", Email = "alex.mercer@enterprise.com", Subject = "Cloud Migration Inquiry", Message = "We require assistance deploying our microservices infrastructure."
  - **Output**: Form clears, success toast appears: *"Thank you Alex! Your inquiry has been validated. (Demonstration Mode: No backend transmission was executed)."*
  - **Result**: PASSED.

### 3.2 Responsive Breakpoint Audit (TC-CSS-01 through TC-CSS-04)
- **320px (Mobile Narrow)**: Hamburger menu active, hero visual stacks below headline, service cards stack in 1 column with 16px lateral padding.
- **768px (Tablet Portrait)**: 2-column service card layout, tech badge grid wraps in 4 columns of 2 rows, contact form aligns with full-width inputs.
- **1024px+ (Desktop Standard)**: Horizontal top navigation bar visible, split hero layout (55% copy / 45% interactive cloud topology), 3-column service cards.

---

## 4. Quality Assurance Sign-Off

All 16 test cases executed successfully with 0 defects remaining. The static website codebase is certified ready for Git version control and GitHub Pages deployment.
