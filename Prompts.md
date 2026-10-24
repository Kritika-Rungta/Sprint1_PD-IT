# Prodesk IT Sprint 1 — AI Development Log

A record of the prompts used with the AI coding assistant to build, style, enhance, and migrate the Prodesk IT Digital Marketing landing page for Sprint 1.

---

## 1. Semantic HTML & Structure

### Prompt 01 — Building the Semantic HTML Foundation
```text
Implement the HTML for the Prodesk IT landing page in index.html. Include a semantic header and navbar, main element, hero section, About section, Services section with exactly three cards (SEO, Web Development, and Digital Marketing), a contact/CTA section, and a footer with copyright and social links. Use accessible link and button labels, sensible heading hierarchy, and placeholder copy where needed. Link styles.css and script.js correctly. Do not write inline CSS or inline JavaScript. Do not use external UI libraries. Keep the markup clean and easy for a beginner to understand.
```
*Notes:* Created the complete semantic HTML5 skeleton. Ensured exactly three service cards were created (SEO, Web Development, and Digital Marketing) with SVG icons and feature checklists.

---

## 2. Styling & Layout (Plain CSS)

### Prompt 02 — Design System & Custom Properties
```text
Style the existing Prodesk IT landing page using only styles.css and plain CSS. Create a polished, professional digital-agency aesthetic with a clear visual hierarchy, consistent spacing, readable typography, a restrained color palette, and a strong primary CTA. Use CSS custom properties for reusable colors, spacing, and layout values. Do not change the HTML structure unless absolutely necessary, and explain any required HTML change before making it. Do not use Tailwind, Bootstrap, or any other CSS framework.
```
*Notes:* Established `:root` CSS custom properties for primary blue (`#2563eb`), neutral slates, typography, and spacing tokens without any external frameworks.

---

### Prompt 03 — Desktop Header & Navigation
```text
Refine the navbar using raw CSS Flexbox. On desktop, the logo must be aligned to the left and the Home, About, Services, and Contact links aligned to the right. Keep spacing consistent, ensure the navbar has sufficient contrast, and make focus states visible for keyboard users. Do not use a CSS framework. Check the result at a desktop width of approximately 1440px.
```
*Notes:* Aligned brand logo on left and navigation links/CTA on right using Flexbox. Added visible `:focus-visible` keyboard rings.

---

### Prompt 04 — Hero Section
```text
Refine the hero section in styles.css. It must contain a prominent high-conversion headline similar to “We Build Digital Experiences”, a concise supporting paragraph, and a visible “Get Started” primary CTA. Use a balanced content width, clear typography, appropriate whitespace, and a responsive layout. Keep the content readable on small screens and do not add unnecessary decorative elements or external dependencies.
```
*Notes:* Styled the hero section with headline *"We Build Digital Experiences That Drive Growth"*, supporting copy, and action buttons.

---

### Prompt 05 — Three Service Cards (CSS Grid)
```text
Style the three existing service cards for SEO, Web Development, and Digital Marketing. Use CSS Grid or Flexbox, consistent card padding, aligned headings and descriptions, and a clear visual hierarchy. Cards should form a neat row on wide screens and stack appropriately on narrow screens. Use plain CSS only. Do not add extra service cards or install a library.
```
*Notes:* Used CSS Grid (`grid-template-columns: repeat(3, 1fr)`) on desktop. Cards have consistent borders, soft shadows, and aligned bullet points.

---

### Prompt 06 — About & Contact Sections
```text
Make the About and Contact/CTA sections visually consistent with the rest of the Prodesk IT landing page. Use concise placeholder copy, clear section headings, readable line lengths, and appropriate spacing. The Get Started CTA should lead to the contact section or a meaningful contact link; do not create a fake form submission or claim that a backend exists. Keep the design and HTML/CSS architecture simple.
```
*Notes:* Added 3 about feature cards and a contact banner with direct email, phone, and business hours (`Monday – Friday, 10:00 AM – 5:00 PM`).

---

### Prompt 07 — Footer
```text
Style the footer with copyright text and social media links/icons. Use accessible names for icon-only links. If you use inline SVG icons, keep them small and simple; otherwise use text links instead of adding a large icon library. Do not invent real social profile URLs: use clearly marked placeholders until I provide the correct links. Ensure the footer wraps neatly on mobile.
```
*Notes:* Styled the footer in dark slate with copyright and inline SVG social links for LinkedIn, Twitter, Facebook, and Instagram.

---

## 3. Responsiveness & Mobile Interaction

### Prompt 08 — Responsive Media Queries
```text
Audit and fix the entire page for responsive behavior using raw CSS media queries, Flexbox, and Grid. Check narrow mobile widths around 320px, 375px, and 430px, tablet widths around 768px, and desktop widths around 1024px and 1440px. Prevent horizontal overflow, clipped text, overlapping sections, tiny tap targets, and awkward card widths. The navbar must collapse into a hamburger menu or a clear stacked layout on mobile. Do not use a CSS framework. Tell me which breakpoints and rules you changed.
```
*Notes:* Implemented media queries at `768px` and `480px`. Cards stack to 1 column, buttons expand full width on small screens, and `overflow-x: hidden` prevents horizontal scrolling.

---

### Prompt 09 — Vanilla JS Mobile Navigation
```text
Implement a functional mobile navigation in vanilla JavaScript in script.js, with any necessary CSS in styles.css. On small screens, provide a clearly labelled menu button that opens and closes the navigation. Update aria-expanded correctly, support keyboard activation, close the menu after a navigation link is selected, and ensure the menu does not cover content unexpectedly. Keep desktop navigation working. Do not use a library or inline JavaScript. If a mobile menu already exists, improve it instead of duplicating it.
```
*Notes:* Created the mobile menu toggle in `script.js`. Added `aria-expanded` updates, animated hamburger-to-X transition, and closed the menu on link clicks or `Escape` key press.

---

## 4. UI/UX Enhancements

### Prompt 10 — Dark / Light Mode Toggle
```text
Add a dark/light theme toggle to the navbar using vanilla JavaScript. The control should toggle a theme class or data attribute on the body or document root, and CSS custom properties should control the colors. Make sure text, cards, navbar, footer, borders, and buttons remain readable in both themes. Use an accessible button label and update its state appropriately. Do not use a theme library. Test both themes and ensure the page does not become unreadable if JavaScript is unavailable.
```
*Notes:* Added `#theme-toggle` in the navbar with moon and sun SVGs. Toggles `data-theme="dark"` on `document.documentElement` and persists the user preference in `localStorage`.

---

### Prompt 11 — Button & Card Micro-Interactions
```text
Add restrained hover, active, and keyboard-focus interactions to all CTA buttons and service cards using raw CSS. Use subtle color, shadow, or scale transitions without excessive movement. Cards should lift slightly along the z-axis when hovered. Include a prefers-reduced-motion media query so users who request reduced motion are respected. Keep buttons responsive and avoid animations that shift surrounding layout.
```
*Notes:* Added `translateY(-2px)` on button hover, `translateY(-4px)` on card hover/focus-within, and disabled animations for users with `prefers-reduced-motion`.

---

### Prompt 12 — Sticky Frosted Header
```text
Make the navbar sticky at the top of the viewport while scrolling. Apply a subtle frosted-glass effect using backdrop-filter and a translucent background. Preserve sufficient text contrast and provide a readable fallback for browsers that do not support backdrop-filter. Ensure the navbar does not cover section headings on anchor click.
```
*Notes:* Set `position: sticky; top: 0;` with `backdrop-filter: blur(10px)`. Added `scroll-padding-top` to `html` so anchors scroll to the right offset without getting cut off.

---

## 5. Tailwind CSS Migration (Stretch Goal)

### Prompt 13 — Migrate to Tailwind CSS
```text
Refactor the Prodesk IT landing page styling into Tailwind CSS utility classes using the official Tailwind CLI. Retain only minimal custom CSS in src/input.css for animations or components that need it. Configure tailwind.config.js to support the existing data-theme dark mode toggle. Preserve all required sections, mobile navigation drawer, theme toggle, responsive breakpoints, card lift effects, and reduced-motion behavior.
```
*Notes:* Installed `tailwindcss@3.4.17` via npm CLI on a `tailwind-migration` branch. Configured `tailwind.config.js` with `darkMode: ['selector', '[data-theme="dark"]']`. Refactored `index.html` with Tailwind utilities, and compiled minified production CSS (~19KB).

---

## 6. Project Documentation

### Prompt 14 — Project README
```text
Create or update README.md for the Prodesk IT Sprint 1 landing page. Include the project overview, features actually implemented across all phases, technologies used, local run instructions, project file structure, deployment platform, live URL placeholder, and a screenshot placeholder.
```
*Notes:* Generated a clean `README.md` covering all implemented features, local run options, Tailwind build scripts, and Vercel/Netlify deployment steps.
