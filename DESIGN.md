# DESIGN.md - Satu Inti Portfolio

## 1. Identity & Purpose
- **Brand:** Satu Inti (Matthew Marvelino / Anthos)
- **Role:** Freelance Systems & Full-Stack Engineer (Cloud, Integrations, Apps)
- **Audience:** International clients (Upwork, agencies, small teams). English only.
- **Positioning:** I build and run the systems small teams depend on.
- **Differentiator:** IT operations day job (SOPs, AWS, support), so every project ends with documentation and a real handover.

## 2. Personality & Mood
- **Aesthetic:** Minimalist Technical, Architectural, High-Precision.
- **Tone:** Honest, concrete, verified. No marketing buzzwords, no fake numbers or testimonials.
- **Copy rule:** Lead with the outcome for the client in plain English; stack and jargon go in chips and the case study modal.
- **Visual rule:** Mono font only for numbers, code, and stack chips. Prefer real screenshots; draw a system sketch when none exist.

## 3. Palette (Derived from Satu Inti Logo & satuinti-ui)
- **Primary Brand (Slate Blue):** `#2B5C9E` (Active hover: `#23508C`)
- **Secondary Brand (Royal Purple):** `#6C3483` (Active hover: `#5B2C6F`)
- **Canvas / Background:** `#f8fafc` (Light Theme Only)
- **Surface / Card:** `#ffffff`
- **Surface Muted:** `#f1f5f9` / `#e2e8f0`
- **Borders:** `rgba(15, 23, 42, 0.10)` / `#e2e8f0`
- **Primary Text:** `#0f172a` (WCAG AA ratio > 12:1)
- **Muted Text:** `#475569` (WCAG AA ratio > 6:1)
- **Dim Text:** `#94a3b8`

## 4. Typography
- **Primary Body & Display:** `Plus Jakarta Sans` (sans-serif)
- **Technical & Spec Labels:** `JetBrains Mono` (monospace)

## 5. Dials & Rules
- **ENERGY:** 2 / 5 (Calm, structured technical focus)
- **RHYTHM:** 3 / 5 (Modular component blocks, clean spacing)
- **MOTION:** 2 / 5 (Subtle hover transforms and clean modal transitions)
- **Inline Styles:** BANNED in JSX. All styling via Tailwind and `@satuinti/ui` token classes.
- **Theme:** Strict Light Theme only (`[data-theme='light']`).
