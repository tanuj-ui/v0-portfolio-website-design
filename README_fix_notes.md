- app/page.tsx
  - Added role="main" to <main id="content"> and removed stray rendered comment near main open.
  - Removed literal "// ..." text inside hero paragraph; kept intended “Based in India…” sentence.
  - Fixed Projects images to valid local files: premium-portfolio-website-glassmorphism.jpg, futuristic-neon-dashboard-ui.jpg, premium-portfolio-website.jpg.
  - Removed debug console.log from Contact form submit handler.
  - Added aria-live="polite" to inline error <p> elements.
  - Updated contact microcopy: “Available for internships/freelance — based in India. Email: …”.

- components/navbar.tsx / components/gaming/navbar.tsx
  - Added role="banner" to <header>. Added role="navigation" and aria-label on gaming/nav.

- components/footer.tsx / components/gaming/footer.tsx
  - Added role="contentinfo" to <footer>.

- components/sections/about.tsx
  - Added loading="lazy" to non-hero <img> for performance.

- app/globals.css
  - Added @media (prefers-reduced-motion: reduce) to reduce animation/transition globally.
  - Skip-link CSS already present; focus styles already present.

Notes:
- Project images now use local assets in /public. If you prefer different thumbnails, replace the file paths in app/page.tsx accordingly.
- Visual design, colors, spacing, and animations remain unchanged aside from reduced motion preference.
