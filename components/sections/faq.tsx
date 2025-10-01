export default function FAQSection() {
  return (
    <div className="mx-auto max-w-3xl">
      <h2 id="faq-title" className="mb-6 text-2xl font-semibold text-pretty">
        Frequently Asked Questions
      </h2>
      <dl className="space-y-6">
        <div>
          <dt className="text-base font-medium">Where are you based?</dt>
          <dd className="mt-2 text-sm text-foreground/80">
            I’m based in India and work remotely with teams across time zones.
          </dd>
        </div>
        <div>
          <dt className="text-base font-medium">Are you available for internships or freelance?</dt>
          <dd className="mt-2 text-sm text-foreground/80">
            Yes — I’m open to internships and select freelance projects. Reach me at{" "}
            <a
              href="mailto:hello@example.com"
              className="underline decoration-primary underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              hello@example.com
            </a>
            .
          </dd>
        </div>
        <div>
          <dt className="text-base font-medium">What are your core skills?</dt>
          <dd className="mt-2 text-sm text-foreground/80">
            Full‑stack web development with Next.js, TypeScript, and Tailwind; UI systems (shadcn/ui); accessibility;
            performance; and product UX.
          </dd>
        </div>
        <div>
          <dt className="text-base font-medium">Where can I see your projects?</dt>
          <dd className="mt-2 text-sm text-foreground/80">
            Browse highlights in the{" "}
            <a href="#projects" className="underline decoration-primary underline-offset-4">
              Projects
            </a>{" "}
            section.
          </dd>
        </div>
        <div>
          <dt className="text-base font-medium">How can I contact you?</dt>
          <dd className="mt-2 text-sm text-foreground/80">
            Use the{" "}
            <a href="#contact" className="underline decoration-primary underline-offset-4">
              Contact
            </a>{" "}
            section or email me directly.
          </dd>
        </div>
      </dl>
    </div>
  )
}
