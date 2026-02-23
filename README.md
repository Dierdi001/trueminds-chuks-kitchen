# Chuks Kitchen - Food Ordering & Customer Management System

## Project Overview

**Chuks Kitchen** is a digital transformation project for Mr. Chukwudi Okorie (Mr. Chuks), aimed at digitizing his food business. This project converts a Figma UI design into a functional, responsive frontend application where customers can browse meals, place orders, and track their activity.

This repository focuses on the frontend implementation, delivering a pixel-perfect representation of the designed interface with a focus on clean layout, responsiveness, and visual hierarchy.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Inter, Poppins, Jost, and Island Moments (via `@fontsource`)

## Project Structure

The project follows the standard Next.js App Router organization:

- `app/`: Contains the main application routing and logic.
  - `(authentication)/`: Login and Sign-up screens.
  - `(public)/`: Main kitchen interface, explore page, and order tracking.
  - `(welcome)/`: Landing and onboarding screens.
  - `components/`: Reusable UI components (Cards, Layouts, Forms).
  - `hooks/`: Custom React hooks for UI logic.
  - `types/`: TypeScript definitions.
- `public/`: Static assets including images and icons.

## Design Interpretation

The conversion from Figma to code was executed with high fidelity, following these principles:

- **Layout:** Replicated using a combination of **Flexbox** and **CSS Grid** to ensure precise alignment and spacing consistent with the Figma source.
- **Hierarchy:** Maintained visual priority through careful use of typography sizes, font weights, and color contrast.
- **Responsiveness:** Implemented a "Mobile-First" approach (where applicable) using Tailwind's responsive utilities to ensure the layout remains stable across different screen sizes.
- **Interactions:** Subtle micro-animations were added using Framer Motion to enhance the "premium" feel of the interface.

**Assumptions Made:**

- Missing Hover States: Defined interactive states for buttons and cards that were not explicitly detailed in the static Figma screens.
- Empty States: Created basic empty state layouts for the orders and explore pages where mock data was unavailable.

## Limitations & Improvements

### Limitations

- **No Backend:** This is a pure frontend demonstration. No real data is persisted, and no actual API calls are made.
- **Static Flow:** Navigation is implemented, but state management for a shopping cart or user session is local and transient.
- **Incomplete Screens:** 7 out of 12 screens were prioritized for this deliverable.

### Future Improvements

- **State Management:** Implement Redux or Zustand for complex cart and order logic.
- **Dark Mode:** Add support for a dark theme using Tailwind's dynamic classes.
- **Performance:** Optimize image assets and implement lazy loading for heavy component sections.
- **Accessibility:** Conduct a full ARIA audit to ensure the application is screen-reader friendly.

---

_Developed for TrueMinds Innovations Ltd._
# trueminds-chuks-kitchen
