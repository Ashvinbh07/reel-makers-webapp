import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Reel Makers",
  description:
    "Read the Refund Policy of Reel Makers to understand payments, cancellations, revisions, refunds, and service delivery terms.",
};

const refundSections = [
  {
    title: "Overview",
    content: [
      "This Refund Policy explains how payments, cancellations, revisions, and refund requests are handled for Reel Makers services.",
      "Reel Makers provides custom creative and AI-assisted services including AI reels, promo scripts, AI posters, AI videos, social media campaign creatives, and brand content support. Because our work is tailored to each client, refund eligibility is reviewed case-by-case.",
    ],
  },
  {
    title: "Service-Based Nature of Our Work",
    content: [
      "Our services involve time, planning, creative direction, scripting, editing, AI generation, design, production, and project coordination. Much of this work begins before a final file is delivered.",
      "For this reason, fees may cover both visible deliverables and behind-the-scenes creative effort, research, planning, and production resources used for the project.",
    ],
  },
  {
    title: "Payments and Advance Fees",
    content: [
      "Payments or advance fees may be required before project work begins. The required amount depends on the selected package, project scope, timeline, and agreement with the client.",
      "Work may start only after payment confirmation, required project details, and necessary assets are received. Payment gateway, bank, or transaction charges may be deducted from any approved refund.",
    ],
  },
  {
    title: "Cancellation Before Work Starts",
    content: [
      "If the client cancels before any creative work, planning, scripting, editing, AI generation, or production has started, a refund may be considered.",
      "Refund approval will depend on the payment method, administrative effort already completed, third-party charges, and any written agreement connected to the project.",
    ],
  },
  {
    title: "Cancellation After Work Starts",
    content: [
      "If creative work, planning, scripting, editing, AI generation, design, production, or project coordination has started, refunds may not be available.",
      "In some cases, Reel Makers may offer partial credit, adjusted deliverables, or revisions instead of a refund, depending on the project stage and work completed.",
    ],
  },
  {
    title: "Revisions Instead of Refunds",
    content: [
      "When deliverables need improvement or adjustment, revisions are preferred over refunds. Our goal is to refine the creative work so it better matches the agreed project direction.",
      "Revision limits depend on the selected package or agreement. Requests outside the original scope, new concepts, major style changes, or additional deliverables may require extra charges.",
    ],
  },
  {
    title: "Non-Refundable Services",
    content: [
      "Services may be non-refundable once strategy, scripting, editing, AI generation, design, production, consultation, or delivery work has started.",
      "Rush work, custom concepts, approved drafts, delivered files, completed scripts, AI-generated assets, edited videos, campaign creatives, and other custom deliverables may not qualify for refunds unless otherwise agreed in writing.",
    ],
  },
  {
    title: "Delayed Projects",
    content: [
      "Delivery timelines depend on project size, creative complexity, client response time, asset readiness, feedback speed, and approval cycles.",
      "Delays caused by missing client assets, late feedback, incomplete requirements, unclear instructions, approval delays, or delayed payments are not eligible for refund.",
    ],
  },
  {
    title: "Client Responsibilities",
    content: [
      "Clients are responsible for sharing accurate project requirements, brand guidelines, required assets, images, videos, logos, scripts, references, access details, and feedback on time.",
      "Clients must ensure they have permission to use any submitted media. Delays, quality issues, or legal concerns caused by incomplete, incorrect, or unauthorized client materials do not create automatic refund eligibility.",
    ],
  },
  {
    title: "Approved Deliverables",
    content: [
      "Approved final deliverables are not refundable. Approval may include written confirmation, payment completion, acceptance of final files, download of final assets, or use of the deliverables in campaigns or public channels.",
      "After approval, any additional changes may be treated as a new revision request or a new project, depending on the scope and selected package.",
    ],
  },
  {
    title: "Refund Request Process",
    content: [
      "To request a refund review, contact Reel Makers with your name, project details, payment reference, reason for the request, and any relevant communication or deliverable concerns.",
      "Refund eligibility is reviewed case-by-case based on the project stage, work completed, selected package, payment status, client communication, and the terms agreed before work began.",
    ],
  },
  {
    title: "Processing Time",
    content: [
      "If a refund is approved, it may take 7-14 business days to process after confirmation. Actual credit time may vary based on the bank, payment method, payment gateway, or transaction provider.",
      "Any payment gateway, bank, currency conversion, or transaction charges may be deducted from the refund amount where applicable.",
    ],
  },
  {
    title: "Changes to This Refund Policy",
    content: [
      "We may update this Refund Policy from time to time to reflect changes in our services, payment methods, project processes, legal requirements, or operating practices.",
      "When updates are made, the Last Updated date on this page will be revised. Continued use of our website or services after changes are posted means the updated policy applies.",
    ],
  },
  {
    title: "Contact Information",
    content: [
      "For questions about this Refund Policy, payment status, cancellation eligibility, revision options, or refund requests, contact Reel Makers using the details below.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <section className="relative px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(20,184,166,0.13),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_34%)]" />
        <div className="relative mx-auto max-w-5xl">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
              Reel Makers Legal
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Refund Policy
            </h1>
            <p className="mt-5 text-base leading-8 text-zinc-300 sm:text-lg">
              This Refund Policy explains how payments, cancellations,
              revisions, and refund requests are handled for Reel Makers&apos;
              AI-powered reels, promo scripts, posters, videos, and creative
              campaign services.
            </p>
            <p className="mt-6 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              Last Updated: July 2026
            </p>
          </header>

          <div className="mt-12 grid gap-5">
            {refundSections.map((section, index) => (
              <article
                key={section.title}
                className="group relative overflow-hidden rounded-3xl border border-cyan-300/15 bg-white/[0.045] p-5 shadow-[0_22px_70px_rgba(8,145,178,0.08)] backdrop-blur-2xl transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.055] hover:shadow-[0_26px_86px_rgba(34,211,238,0.12)] sm:p-7"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent opacity-70" />
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                  <span
                    aria-hidden="true"
                    className="grid size-11 shrink-0 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.09] text-sm font-bold text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-300 sm:text-base">
                      {section.content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section
            aria-labelledby="refund-contact-title"
            className="mt-8 overflow-hidden rounded-3xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_36%),rgba(255,255,255,0.055)] p-6 shadow-[0_28px_90px_rgba(8,145,178,0.14)] backdrop-blur-2xl sm:p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                  Refund Support
                </p>
                <h2
                  id="refund-contact-title"
                  className="mt-3 text-3xl font-semibold text-white"
                >
                  Need help with a refund request?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                  If you have questions about this Refund Policy or want to
                  discuss a refund request, contact us with your project details
                  and payment reference.
                </p>
              </div>

              <address className="grid gap-3 not-italic text-sm text-zinc-300 sm:grid-cols-2 lg:min-w-[420px] lg:grid-cols-1">
                <a
                  href="mailto:admin@reelmakersrm.org"
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 transition duration-300 hover:border-cyan-300/40 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                  aria-label="Email Reel Makers about a refund request"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Email
                  </span>
                  admin@reelmakersrm.org
                </a>
                <a
                  href="tel:+918147722626"
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 transition duration-300 hover:border-cyan-300/40 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                  aria-label="Call Reel Makers about a refund request"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Phone
                  </span>
                  +91 81477 22626
                </a>
                <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 sm:col-span-2 lg:col-span-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Location
                  </span>
                  Vijay Nagar, Indore, Madhya Pradesh, India
                </div>
              </address>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
