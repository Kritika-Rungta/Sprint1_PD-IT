# Prodesk IT Sprint 1 — Copilot Prompt Log

This file records the prompts used to build the Prodesk IT digital-marketing landing page. Add each prompt to Copilot in sequence. Keep the original prompts here so the AI-use log reflects the development process.

## How to use this file

1. Open the project folder in VS Code and start with Prompt 01.
2. Paste **one prompt at a time** into Copilot Chat.
3. Review the generated changes, run the site, and understand the code before proceeding.
4. If Copilot changes more files than requested, inspect the diff and undo unwanted changes.
5. Replace the bracketed placeholders in this file with the actual prompt or a short note if you materially change a prompt.
6. Keep this file in the repository as `Prompts.md`.

---

## Phase 1 — Base MVP (Mandatory)

### Prompt 01 — Inspect the workspace and plan the project

```text
I am building a landing page for the digital marketing wing of Prodesk IT for Sprint 1. First inspect the current workspace and tell me whether it already contains a project or files. Do not overwrite or delete anything. The mandatory requirements are: a responsive navbar with logo on the left and Home, About, Services, Contact links on the right; a hero section with a headline, supporting text, and Get Started CTA; three service cards; and a footer with copyright and social links. Use semantic HTML, raw CSS with Flexbox/Grid, and vanilla JavaScript only. Do not use Bootstrap, Tailwind, React, or other UI frameworks in Phases 1 and 2. Give me a short implementation plan before editing files.
```

### Prompt 02 — Create the file structure

```text
Based on the plan we agreed on, create a simple beginner-friendly static website structure for the Prodesk IT landing page. Prefer index.html, styles.css, and script.js, plus an assets folder only if needed. If the workspace already has a suitable structure, reuse it rather than creating duplicate files. Do not add a framework, package, or build system. Explain what each file is responsible for.
```

### Prompt 03 — Build the semantic HTML

```text
Implement the HTML for the Prodesk IT landing page in index.html. Include a semantic header and navbar, main element, hero section, About section, Services section with exactly three cards (SEO, Web Development, and Digital Marketing), a contact/CTA section, and a footer with copyright and social links. Use accessible link and button labels, sensible heading hierarchy, and placeholder copy where needed. Link styles.css and script.js correctly. Do not write inline CSS or inline JavaScript. Do not use external UI libraries. Keep the markup clean and easy for a beginner to understand.
```

### Prompt 04 — Establish the visual design

```text
Style the existing Prodesk IT landing page using only styles.css and plain CSS. Create a polished, professional digital-agency aesthetic with a clear visual hierarchy, consistent spacing, readable typography, a restrained color palette, and a strong primary CTA. Use CSS custom properties for reusable colors, spacing, and layout values. Do not change the HTML structure unless absolutely necessary, and explain any required HTML change before making it. Do not use Tailwind, Bootstrap, or any other CSS framework.
```

### Prompt 05 — Align and style the desktop navbar

```text
Refine the navbar using raw CSS Flexbox. On desktop, the logo must be aligned to the left and the Home, About, Services, and Contact links aligned to the right. Keep spacing consistent, ensure the navbar has sufficient contrast, and make focus states visible for keyboard users. Do not use a CSS framework. Check the result at a desktop width of approximately 1440px.
```

### Prompt 06 — Build the hero section

```text
Refine the hero section in styles.css. It must contain a prominent high-conversion headline similar to “We Build Digital Experiences”, a concise supporting paragraph, and a visible “Get Started” primary CTA. Use a balanced content width, clear typography, appropriate whitespace, and a responsive layout. Keep the content readable on small screens and do not add unnecessary decorative elements or external dependencies.
```

### Prompt 07 — Style the three service cards

```text
Style the three existing service cards for SEO, Web Development, and Digital Marketing. Use CSS Grid or Flexbox, consistent card padding, aligned headings and descriptions, and a clear visual hierarchy. Cards should form a neat row on wide screens and stack appropriately on narrow screens. Use plain CSS only. Do not add extra service cards or install a library.
```

### Prompt 08 — Add About and Contact content

```text
Make the About and Contact/CTA sections visually consistent with the rest of the Prodesk IT landing page. Use concise placeholder copy, clear section headings, readable line lengths, and appropriate spacing. The Get Started CTA should lead to the contact section or a meaningful contact link; do not create a fake form submission or claim that a backend exists. Keep the design and HTML/CSS architecture simple.
```

### Prompt 09 — Build the footer

```text
Style the footer with copyright text and social media links/icons. Use accessible names for icon-only links. If you use inline SVG icons, keep them small and simple; otherwise use text links instead of adding a large icon library. Do not invent real social profile URLs: use clearly marked placeholders until I provide the correct links. Ensure the footer wraps neatly on mobile.
```

### Prompt 10 — Make the page responsive

```text
Audit and fix the entire page for responsive behavior using raw CSS media queries, Flexbox, and Grid. Check narrow mobile widths around 320px, 375px, and 430px, tablet widths around 768px, and desktop widths around 1024px and 1440px. Prevent horizontal overflow, clipped text, overlapping sections, tiny tap targets, and awkward card widths. The navbar must collapse into a hamburger menu or a clear stacked layout on mobile. Do not use a CSS framework. Tell me which breakpoints and rules you changed.
```

### Prompt 11 — Implement the mobile navigation

```text
Implement a functional mobile navigation in vanilla JavaScript in script.js, with any necessary CSS in styles.css. On small screens, provide a clearly labelled menu button that opens and closes the navigation. Update aria-expanded correctly, support keyboard activation, close the menu after a navigation link is selected, and ensure the menu does not cover content unexpectedly. Keep desktop navigation working. Do not use a library or inline JavaScript. If a mobile menu already exists, improve it instead of duplicating it.
```

### Prompt 12 — Check accessibility and basic quality

```text
Review the current HTML, CSS, and JavaScript for basic accessibility and quality. Check semantic landmarks, heading order, link and button names, keyboard focus visibility, image alt text if images exist, color contrast, mobile menu accessibility, and console errors. Fix only issues you can identify from the code. Do not claim a Lighthouse score without actually running Lighthouse. Summarize the changes and any remaining manual checks.
```

---

## Phase 2 — UI/UX Enhancements (Recommended)

### Prompt 13 — Add dark/light theme toggle

```text
Add a dark/light theme toggle to the navbar using vanilla JavaScript. The control should toggle a theme class or data attribute on the body or document root, and CSS custom properties should control the colors. Make sure text, cards, navbar, footer, borders, and buttons remain readable in both themes. Use an accessible button label and update its state appropriately. Do not use a theme library. Test both themes and ensure the page does not become unreadable if JavaScript is unavailable.
```

### Prompt 14 — Add CTA micro-interactions

```text
Add restrained hover, active, and keyboard-focus interactions to all CTA buttons using raw CSS. Use subtle color, shadow, or scale transitions without excessive movement. Include a prefers-reduced-motion media query so users who request reduced motion are respected. Keep buttons responsive and avoid animations that shift surrounding layout.
```

### Prompt 15 — Add service-card lift effects

```text
Add a subtle service-card hover effect using CSS transforms and transitions so cards lift slightly along the z-axis when hovered. Provide an equivalent visible focus treatment where relevant, respect prefers-reduced-motion, and ensure the effect does not cause clipping or horizontal overflow. Keep the effect restrained and consistent.
```

### Prompt 16 — Make the navbar sticky

```text
Make the navbar sticky at the top of the viewport while scrolling. Prefer position: sticky unless a fixed position is genuinely required. Ensure the navbar does not cover section headings or anchor targets, and check stacking order, spacing, and mobile behavior. Do not introduce JavaScript for scrolling unless necessary. Keep the navbar usable in both light and dark themes.
```

### Prompt 17 — Add optional glassmorphism

```text
If the sticky navbar is already working correctly, apply a subtle frosted-glass effect using backdrop-filter and a translucent background. Preserve sufficient text contrast and provide a readable fallback for browsers that do not support backdrop-filter. Do not sacrifice accessibility for appearance. Keep this enhancement optional and do not add a framework.
```

---

## Phase 3 — Stretch Goals (Only after Phases 1 and 2 work)

### Prompt 18 — Plan the Tailwind migration

```text
The sprint's stretch goal asks for a complete styling migration to Tailwind CSS. Before changing anything, inspect the current static HTML/CSS project and explain the smallest reliable setup for adding Tailwind to this project. Identify which CSS rules will be replaced and how responsive breakpoints, theme handling, and custom effects will be preserved. Do not start the migration until you show me the plan. Keep the existing working version recoverable through Git.
```

### Prompt 19 — Migrate to Tailwind CSS

```text
Proceed with the approved Tailwind migration plan. Refactor the page styling into Tailwind utility classes and retain only the minimal custom CSS needed for features that are not practical with the chosen Tailwind setup. Follow the current official Tailwind setup instructions for the installed version; do not assume an outdated configuration. Preserve all required sections, mobile navigation, theme toggle, responsive layouts, focus states, hover effects, and reduced-motion behavior. Do not use Bootstrap or another UI framework. Explain the setup commands and the purpose of each changed file.
```

---

## QA, GitHub, and Deployment

### Prompt 20 — Review the project before testing

```text
Inspect the current project and create a checklist against the Prodesk IT Sprint 1 requirements. Separate completed, incomplete, and manually verifiable items. Confirm the project has the required navbar, hero, three service cards, footer, mobile layout, and—if implemented—theme toggle, hover effects, and sticky navigation. Do not mark an item complete unless the code supports it. Do not deploy or publish anything yet.
```

### Prompt 21 — Prepare manual browser testing

```text
Give me a practical browser-testing checklist for this static landing page. Include desktop and mobile viewport checks, navbar links, mobile menu open/close behavior, theme toggle, CTA navigation, keyboard-only navigation, focus visibility, horizontal overflow, and console errors. Tell me how to perform each check in Chrome DevTools. Do not claim that tests passed unless I report the result or you can actually run them.
```

### Prompt 22 — Lighthouse audit guidance

```text
Guide me through running Google Lighthouse in Chrome DevTools for the deployed or locally served page. Explain how to run Performance and Accessibility audits and how to inspect the specific opportunities and failures. Do not fabricate scores. After I share the real report or screenshots, help me prioritize fixes. The stretch goal is 100/100 for Performance and Accessibility, but explain any remaining constraints honestly.
```

### Prompt 23 — Create README.md

```text
Create or update README.md for the Prodesk IT Sprint 1 landing page. Include the project overview, features actually implemented, technologies used, local run instructions, project file structure, deployment platform, live URL placeholder, and a screenshot placeholder. Do not invent a live URL or claim deployment is complete. Add a clear reminder to replace placeholders with the actual deployed URL and screenshot before submission.
```

### Prompt 24 — Prepare the final Prompts.md log

```text
Review the existing Prompts.md and organize the prompts actually used during this project in chronological order. Preserve the original prompt wording as accurately as possible; do not claim that unused prompts were used. Include the tool name and a short purpose/usage note for each entry. Make sure the file is valid Markdown and is suitable for the Prodesk IT Sprint 1 AI-use requirement.
```

### Prompt 25 — GitHub and deployment instructions

```text
Give me step-by-step instructions to commit this project to a public GitHub repository and deploy it to Vercel or Netlify. First inspect the project's actual structure and whether it is plain static HTML/CSS/JavaScript or has a build system. Provide the correct commands for this project only. Do not expose secrets, overwrite an existing remote, force-push, or claim the repository or deployment exists before I confirm it. Explain how to verify the public repository and live URL.
```

### Prompt 26 — Plan the two-minute demo video

```text
Create a concise two-minute demo-video script for the completed Prodesk IT Sprint 1 landing page. It must show the site on desktop, resize the browser to demonstrate mobile responsiveness, demonstrate implemented interactions, and briefly show the code structure. Mention only features that are actually implemented. Provide a timestamped sequence and a final submission checklist.
```

---

## Development Notes

- Keep the sprint's original constraint in mind: raw CSS is required for Phases 1 and 2; Tailwind belongs only to the Phase 3 stretch goal.
- Do not submit a localhost URL. Deploy the site and replace all README placeholders with the real live URL and screenshot.
- Do not invent social links, test results, Lighthouse scores, or deployment status.
- AI assistance must be understood and reviewed, not blindly copied.
- This is a prompt plan, not proof that every prompt was run. Keep only the prompts actually used in the final log, and update the file if the real prompts differ.
