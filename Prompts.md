# Prodesk IT Sprint 1 — AI Prompt Log & Development Notes

**Student / Developer:** Kritika Rungta  
**Project:** Prodesk IT Digital Marketing Landing Page (Sprint 1)  
**Tools Used:** VS Code, GitHub Copilot / AI Assistant  

This document tracks the prompts given to the AI assistant in sequence to build the landing page step-by-step according to the sprint instructions, along with brief notes on what was implemented and checked at each stage.

---

## Phase 1: Base MVP Setup

### Prompt 01 — Inspect Workspace & Initial Plan
```text
I am building a landing page for the digital marketing wing of Prodesk IT for Sprint 1. First inspect the current workspace and tell me whether it already contains a project or files. Do not overwrite or delete anything. The mandatory requirements are: a responsive navbar with logo on the left and Home, About, Services, Contact links on the right; a hero section with a headline, supporting text, and Get Started CTA; three service cards; and a footer with copyright and social links. Use semantic HTML, raw CSS with Flexbox/Grid, and vanilla JavaScript only. Do not use Bootstrap, Tailwind, React, or other UI frameworks in Phases 1 and 2. Give me a short implementation plan before editing files.
```
*Notes:* Workspace was empty. The AI proposed a simple 3-file plan (`index.html`, `styles.css`, `script.js`) strictly using plain HTML, CSS Flexbox/Grid, and vanilla JS without any external UI libraries.

---

### Prompt 02 — File Structure
```text
Based on the plan we agreed on, create a simple beginner-friendly static website structure for the Prodesk IT landing page. Prefer index.html, styles.css, and script.js, plus an assets folder only if needed. If the workspace already has a suitable structure, reuse it rather than creating duplicate files. Do not add a framework, package, or build system. Explain what each file is responsible for.
```
*Notes:* Set up the basic file structure with `index.html`, `styles.css`, and `script.js`. Kept everything static without build tools or npm packages for the initial MVP.

---

### Prompt 03 — Semantic HTML Markup
```text
Implement the HTML for the Prodesk IT landing page in index.html. Include a semantic header and navbar, main element, hero section, About section, Services section with exactly three cards (SEO, Web Development, and Digital Marketing), a contact/CTA section, and a footer with copyright and social links. Use accessible link and button labels, sensible heading hierarchy, and placeholder copy where needed. Link styles.css and script.js correctly. Do not write inline CSS or inline JavaScript. Do not use external UI libraries. Keep the markup clean and easy for a beginner to understand.
```
*Notes:* Built semantic HTML with proper landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`). Ensured exactly three cards were created: SEO, Web Development, and Digital Marketing, with clean placeholder copy.

---

### Prompt 04 — Visual Design System (CSS)
```text
Style the existing Prodesk IT landing page using only styles.css and plain CSS. Create a polished, professional digital-agency aesthetic with a clear visual hierarchy, consistent spacing, readable typography, a restrained color palette, and a strong primary CTA. Use CSS custom properties for reusable colors, spacing, and layout values. Do not change the HTML structure unless absolutely necessary, and explain any required HTML change before making it. Do not use Tailwind, Bootstrap, or any other CSS framework.
```
*Notes:* Created `:root` CSS custom properties for colors, spacing, and typography. Used a clean blue (`#2563eb`) and neutral slate theme. Kept the look simple and corporate, avoiding messy over-the-top styling.

---

### Prompt 05 — Desktop Navbar
```text
Refine the navbar using raw CSS Flexbox. On desktop, the logo must be aligned to the left and the Home, About, Services, and Contact links aligned to the right. Keep spacing consistent, ensure the navbar has sufficient contrast, and make focus states visible for keyboard users. Do not use a CSS framework. Check the result at a desktop width of approximately 1440px.
```
*Notes:* Used Flexbox for the desktop header (`justify-content: space-between`). Brand logo placed on left, links and CTA button aligned on right. Added visible `:focus-visible` rings for keyboard navigation.

---

### Prompt 06 — Hero Section
```text
Refine the hero section in styles.css. It must contain a prominent high-conversion headline similar to “We Build Digital Experiences”, a concise supporting paragraph, and a visible “Get Started” primary CTA. Use a balanced content width, clear typography, appropriate whitespace, and a responsive layout. Keep the content readable on small screens and do not add unnecessary decorative elements or external dependencies.
```
*Notes:* Styled the hero with headline *"We Build Digital Experiences That Drive Growth"*, a clear paragraph, and two action buttons (`Get Started` leading to `#services` and `Learn More` leading to `#about`).

---

### Prompt 07 — Three Service Cards
```text
Style the three existing service cards for SEO, Web Development, and Digital Marketing. Use CSS Grid or Flexbox, consistent card padding, aligned headings and descriptions, and a clear visual hierarchy. Cards should form a neat row on wide screens and stack appropriately on narrow screens. Use plain CSS only. Do not add extra service cards or install a library.
```
*Notes:* Formatted the 3 cards into a 3-column CSS Grid. Added SVG icons, consistent card borders, padding, and checkmark feature lists.

---

### Prompt 08 — About and Contact Content
```text
Make the About and Contact/CTA sections visually consistent with the rest of the Prodesk IT landing page. Use concise placeholder copy, clear section headings, readable line lengths, and appropriate spacing. The Get Started CTA should lead to the contact section or a meaningful contact link; do not create a fake form submission or claim that a backend exists. Keep the design and HTML/CSS architecture simple.
```
*Notes:* Added 3 value-proposition cards in the About section (*Mission*, *Approach*, *Why Prodesk IT*). Created a contact box with email, phone, and business hours. Updated hours to `10:00 AM - 5:00 PM`.

---

### Prompt 09 — Footer
```text
Style the footer with copyright text and social media links/icons. Use accessible names for icon-only links. If you use inline SVG icons, keep them small and simple; otherwise use text links instead of adding a large icon library. Do not invent real social profile URLs: use clearly marked placeholders until I provide the correct links. Ensure the footer wraps neatly on mobile.
```
*Notes:* Styled the footer in dark slate (`#0f172a`). Included copyright text (`© 2026 Prodesk IT`) and clean SVG social links for LinkedIn, Twitter, Facebook, and Instagram with accessible labels.

---

### Prompt 10 — Responsive Media Queries
```text
Audit and fix the entire page for responsive behavior using raw CSS media queries, Flexbox, and Grid. Check narrow mobile widths around 320px, 375px, and 430px, tablet widths around 768px, and desktop widths around 1024px and 1440px. Prevent horizontal overflow, clipped text, overlapping sections, tiny tap targets, and awkward card widths. The navbar must collapse into a hamburger menu or a clear stacked layout on mobile. Do not use a CSS framework. Tell me which breakpoints and rules you changed.
```
*Notes:* Added media queries at `992px`, `768px`, and `480px`. Verified cards stack cleanly to 1 column on mobile and ensured minimum 44px touch targets. Tested `overflow-x: hidden` to avoid horizontal scroll on small devices.

---

### Prompt 11 — Mobile Navigation
```text
Implement a functional mobile navigation in vanilla JavaScript in script.js, with any necessary CSS in styles.css. On small screens, provide a clearly labelled menu button that opens and closes the navigation. Update aria-expanded correctly, support keyboard activation, close the menu after a navigation link is selected, and ensure the menu does not cover content unexpectedly. Keep desktop navigation working. Do not use a library or inline JavaScript. If a mobile menu already exists, improve it instead of duplicating it.
```
*Notes:* Implemented vanilla JS hamburger menu toggle. Updates `aria-expanded` dynamically, animates bars to `X`, closes on link click or outside click, and closes when pressing the `Escape` key.

---

### Prompt 12 — Accessibility & Code Quality Check
```text
Review the current HTML, CSS, and JavaScript for basic accessibility and quality. Check semantic landmarks, heading order, link and button names, keyboard focus visibility, image alt text if images exist, color contrast, mobile menu accessibility, and console errors. Fix only issues you can identify from the code. Do not claim a Lighthouse score without actually running Lighthouse. Summarize the changes and any remaining manual checks.
```
*Notes:* Checked heading levels (`h1` -> `h2` -> `h3`), focus outlines, button labels, and color contrast. Cleaned up code to ensure zero console errors.

---

## Phase 2: UI/UX Enhancements

### Prompt 13 — Dark/Light Theme Toggle
```text
Add a dark/light theme toggle to the navbar using vanilla JavaScript. The control should toggle a theme class or data attribute on the body or document root, and CSS custom properties should control the colors. Make sure text, cards, navbar, footer, borders, and buttons remain readable in both themes. Use an accessible button label and update its state appropriately. Do not use a theme library. Test both themes and ensure the page does not become unreadable if JavaScript is unavailable.
```
*Notes:* Added a theme button in the navbar with moon/sun icons. Toggles `data-theme="dark"` on `document.documentElement` and remembers the user's choice via `localStorage`. Both light and dark modes have clean contrast.

---

### Prompt 14 — CTA Micro-Interactions
```text
Add restrained hover, active, and keyboard-focus interactions to all CTA buttons using raw CSS. Use subtle color, shadow, or scale transitions without excessive movement. Include a prefers-reduced-motion media query so users who request reduced motion are respected. Keep buttons responsive and avoid animations that shift surrounding layout.
```
*Notes:* Added subtle `translateY(-2px)` hover effect and soft shadow to buttons. Added `@media (prefers-reduced-motion: reduce)` to disable motion for users with motion sensitivity.

---

### Prompt 15 — Service Card Hover Effects
```text
Add a subtle service-card hover effect using CSS transforms and transitions so cards lift slightly along the z-axis when hovered. Provide an equivalent visible focus treatment where relevant, respect prefers-reduced-motion, and ensure the effect does not cause clipping or horizontal overflow. Keep the effect restrained and consistent.
```
*Notes:* Added a smooth 4px vertical lift (`translateY(-4px)`) and subtle shadow spread when hovering or tabbing into cards (`:focus-within`).

---

### Prompt 16 — Sticky Navbar
```text
Make the navbar sticky at the top of the viewport while scrolling. Prefer position: sticky unless a fixed position is genuinely required. Ensure the navbar does not cover section headings or anchor targets, and check stacking order, spacing, and mobile behavior. Do not introduce JavaScript for scrolling unless necessary. Keep the navbar usable in both light and dark themes.
```
*Notes:* Applied `position: sticky; top: 0; z-index: 100;` on the header. Added `scroll-padding-top` to `html` so navigating to section anchors doesn't get hidden behind the header.

---

### Prompt 17 — Glassmorphism Effect
```text
If the sticky navbar is already working correctly, apply a subtle frosted-glass effect using backdrop-filter and a translucent background. Preserve sufficient text contrast and provide a readable fallback for browsers that do not support backdrop-filter. Do not sacrifice accessibility for appearance. Keep this enhancement optional and do not add a framework.
```
*Notes:* Applied frosted glass using `backdrop-filter: blur(10px)` with translucent white / dark slate backgrounds, plus a fallback for older browsers.

---

## Phase 3: Tailwind CSS Migration (Stretch Goal)

### Prompt 18 — Tailwind Migration Plan
```text
The sprint's stretch goal asks for a complete styling migration to Tailwind CSS. Before changing anything, inspect the current static HTML/CSS project and explain the smallest reliable setup for adding Tailwind to this project. Identify which CSS rules will be replaced and how responsive breakpoints, theme handling, and custom effects will be preserved. Do not start the migration until you show me the plan. Keep the existing working version recoverable through Git.
```
*Notes:* Initialized Git and committed the working plain CSS baseline on `main` branch. Created a migration plan using the official Tailwind CLI without adding heavy bundlers.

---

### Prompt 19 — Tailwind CSS Implementation
```text
Proceed with the approved Tailwind migration plan. Refactor the page styling into Tailwind utility classes and retain only the minimal custom CSS needed for features that are not practical with the chosen Tailwind setup. Follow the current official Tailwind setup instructions for the installed version; do not assume an outdated configuration. Preserve all required sections, mobile navigation, theme toggle, responsive layouts, focus states, hover effects, and reduced-motion behavior. Do not use Bootstrap or another UI framework. Explain the setup commands and the purpose of each changed file.
```
*Notes:* Created a separate `tailwind-migration` branch. Installed `tailwindcss@3.4.17`, configured `tailwind.config.js` with `darkMode: ['selector', '[data-theme="dark"]']`, set up `src/input.css`, refactored `index.html` with utility classes, and compiled a minified 19KB `styles.css`. Committed to Git.

---

## Testing, QA & Final Delivery

### Prompt 20 — Pre-Testing Review & Checklist
```text
Inspect the current project and create a checklist against the Prodesk IT Sprint 1 requirements. Separate completed, incomplete, and manually verifiable items. Confirm the project has the required navbar, hero, three service cards, footer, mobile layout, and—if implemented—theme toggle, hover effects, and sticky navigation. Do not mark an item complete unless the code supports it. Do not deploy or publish anything yet.
```
*Notes:* Ran a full code review against the sprint rubrics. Grouped into completed features, pending items (deployment/real URLs), and manual browser checks.

---

### Prompt 21 — Manual Browser Testing Checklist
```text
Give me a practical browser-testing checklist for this static landing page. Include desktop and mobile viewport checks, navbar links, mobile menu open/close behavior, theme toggle, CTA navigation, keyboard-only navigation, focus visibility, horizontal overflow, and console errors. Tell me how to perform each check in Chrome DevTools. Do not claim that tests passed unless I report the result or you can actually run them.
```
*Notes:* Outlined a manual testing guide using Chrome DevTools (Device toolbar, 320px–1440px viewports, overflow test script, tab keyboard navigation, and console error check).

---

### Prompt 22 — Lighthouse Audit Guidance
```text
Guide me through running Google Lighthouse in Chrome DevTools for the deployed or locally served page. Explain how to run Performance and Accessibility audits and how to inspect the specific opportunities and failures. Do not fabricate scores. After I share the real report or screenshots, help me prioritize fixes. The stretch goal is 100/100 for Performance and Accessibility, but explain any remaining constraints honestly.
```
*Notes:* Provided instructions on serving the site via `npx serve .` and running mobile/desktop Lighthouse audits in Chrome DevTools for Performance, Accessibility, Best Practices, and SEO.

---

### Prompt 23 — README Documentation
```text
Create or update README.md for the Prodesk IT Sprint 1 landing page. Include the project overview, features actually implemented, technologies used, local run instructions, project file structure, deployment platform, live URL placeholder, and a screenshot placeholder. Do not invent a live URL or claim deployment is complete. Add a clear reminder to replace placeholders with the actual deployed URL and screenshot before submission.
```
*Notes:* Wrote the complete `README.md` containing project details, features across all three phases, local setup steps, architecture tree, and deployment guides.

---

### Prompt 24 — Organize Prompts Log
```text
Review the existing Prompts.md and organize the prompts actually used during this project in chronological order. Preserve the original prompt wording as accurately as possible; do not claim that unused prompts were used. Include the tool name and a short purpose/usage note for each entry. Make sure the file is valid Markdown and is suitable for the Prodesk IT Sprint 1 AI-use requirement.
```
*Notes:* Cleaned and updated `Prompts.md` in chronological order with natural developer notes for the submission portfolio.

---

### Prompt 25 — GitHub & Deployment Setup
```text
Give me step-by-step instructions to commit this project to a public GitHub repository and deploy it to Vercel or Netlify. First inspect the project's actual structure and whether it is plain static HTML/CSS/JavaScript or has a build system. Provide the correct commands for this project only. Do not expose secrets, overwrite an existing remote, force-push, or claim the repository or deployment exists before I confirm it. Explain how to verify the public repository and live URL.
```
*Notes:* Documented Git push commands for both branches (`main` and `tailwind-migration`) and provided Vercel / Netlify setup steps.

---

### Prompt 26 — 2-Minute Demo Video Script
```text
Create a concise two-minute demo-video script for the completed Prodesk IT Sprint 1 landing page. It must show the site on desktop, resize the browser to demonstrate mobile responsiveness, demonstrate implemented interactions, and briefly show the code structure. Mention only features that are actually implemented. Provide a timestamped sequence and a final submission checklist.
```
*Notes:* Prepared a 0:00–2:00 timestamped narration walkthrough and final pre-submission checklist.
