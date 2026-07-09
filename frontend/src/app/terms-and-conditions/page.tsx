import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Reel Makers",
  description:
    "Read the Terms & Conditions of Reel Makers for using our website, services, creative work, project communication, payments, and client responsibilities.",
};

const termsSections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing the Reel Makers website, contacting us, requesting a quote, or working with us on a creative project, you agree to these Terms & Conditions.",
      "If you do not agree with these terms, please do not use our website or services. Any separate written agreement, proposal, invoice, or project scope may include additional terms that apply to the specific engagement.",
    ],
  },
  {
    title: "Services We Provide",
    content: [
      "Reel Makers provides AI-powered creative services including AI reels, promo scripts, AI posters, AI videos, social media campaign creatives, and brand content support.",
      "Our services may include creative direction, scripting, editing, visual ideation, AI-assisted asset generation, campaign variations, and project-based content delivery based on the selected package or written agreement.",
    ],
  },
  {
    title: "Client Responsibilities",
    content: [
      "Clients are responsible for providing accurate project details, campaign goals, brand guidelines, required brand assets, images, videos, logos, scripts, references, and any other materials needed for the project.",
      "Clients must ensure they have the necessary permissions, licenses, and rights to use any submitted media, brand assets, music, footage, images, logos, or third-party material provided to Reel Makers.",
    ],
  },
  {
    title: "Project Requirements and Communication",
    content: [
      "Clear project requirements help us deliver better creative work. Clients should share complete instructions, target audience details, platform requirements, preferred formats, deadlines, and approval contacts before production begins.",
      "Project communication may take place through WhatsApp, email, forms, calls, shared documents, or other agreed channels. Delayed responses, incomplete information, or changing instructions may affect timelines and delivery quality.",
    ],
  },
  {
    title: "Payments and Pricing",
    content: [
      "Pricing may vary based on project scope, creative complexity, quantity of deliverables, turnaround time, revisions, usage needs, and selected package.",
      "Payment terms, advance payments, milestones, taxes, and final delivery conditions will be communicated through the applicable proposal, invoice, message, or written agreement. Work may be paused if payments are delayed.",
    ],
  },
  {
    title: "Revisions and Approvals",
    content: [
      "Revision availability depends on the selected package or written agreement. Revisions are intended to refine agreed deliverables, not to restart the project with a new direction or expanded scope.",
      "Major scope changes, new concepts, additional formats, extra deliverables, fresh scripts, replacement assets, or significant creative changes may require additional charges and revised timelines.",
    ],
  },
  {
    title: "Delivery Timelines",
    content: [
      "Delivery timelines depend on project size, client response time, asset readiness, revision rounds, creative complexity, platform requirements, and team availability.",
      "We make reasonable efforts to meet agreed timelines, but delays may occur if approvals, assets, feedback, or payments are not received on time.",
    ],
  },
  {
    title: "Client Content and Usage Rights",
    content: [
      "Clients retain responsibility for the legality, accuracy, permissions, and usage rights of content they provide to Reel Makers.",
      "Final approved deliverables are provided to the client based on the agreed terms, package, payment status, and intended use described in the project scope.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "After full payment and approval, final deliverables may be used by the client according to the agreed project terms. Source files, editable working files, raw project files, and internal production materials are not included unless specifically agreed in writing.",
      "Reel Makers may retain rights to internal templates, workflows, concepts, tools, prompts, editing systems, reusable creative structures, and production methods used to create or support the work.",
    ],
  },
  {
    title: "Portfolio Usage",
    content: [
      "Reel Makers may display completed work, project outcomes, creative previews, thumbnails, testimonials, or selected deliverables in its portfolio, social media, presentations, or marketing materials.",
      "If a project is confidential, the client should request confidentiality in writing before or during the project. We respect written confidentiality requests and can discuss private handling of sensitive work.",
    ],
  },
  {
    title: "Prohibited Use",
    content: [
      "Clients may not use Reel Makers services for unlawful, misleading, harmful, defamatory, abusive, infringing, fraudulent, or unauthorized purposes.",
      "We may decline or stop work on projects involving illegal content, impersonation, hate, harassment, explicit exploitation, unsafe claims, intellectual property violations, or content that conflicts with our professional standards.",
    ],
  },
  {
    title: "Third-Party Tools and Services",
    content: [
      "We may use third-party tools and services to communicate, collect project details, generate or edit creative assets, transfer files, manage workflows, and support payments.",
      "These may include WhatsApp, email services, Google Forms, AI tools, cloud or file storage services, and payment providers if added later. Third-party services are governed by their own terms, policies, and technical limitations.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Reel Makers aims to provide professional creative services, but we do not guarantee specific business outcomes, sales, views, engagement, conversions, ad performance, or platform approvals.",
      "To the maximum extent permitted by law, Reel Makers will not be liable for indirect, incidental, consequential, or special damages arising from use of our website, services, deliverables, third-party tools, or client-provided content.",
    ],
  },
  {
    title: "Cancellation and Refunds",
    content: [
      "Cancellation and refund eligibility depend on the selected package, stage of work completed, resources allocated, and any written agreement between the client and Reel Makers.",
      "Once strategy, scripting, editing, design, AI generation, production, or delivery work has started, fees may be partially or fully non-refundable depending on the work completed and project commitments.",
    ],
  },
  {
    title: "Changes to These Terms",
    content: [
      "We may update these Terms & Conditions from time to time to reflect changes in our services, pricing practices, tools, legal requirements, or operating processes.",
      "When updates are made, the Last Updated date on this page will be revised. Continued use of our website or services after changes are posted means the updated terms apply.",
    ],
  },
  {
    title: "Contact Information",
    content: [
      "For questions about these Terms & Conditions, project terms, usage rights, confidentiality, payments, or client responsibilities, contact Reel Makers using the details provided below.",
    ],
  },
];

export default function TermsAndConditionsPage() {
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
              Terms & Conditions
            </h1>
            <p className="mt-5 text-base leading-8 text-zinc-300 sm:text-lg">
              These Terms & Conditions explain the rules for using the Reel
              Makers website and working with us for AI-powered reels, promo
              scripts, posters, videos, and creative campaigns.
            </p>
            <p className="mt-6 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              Last Updated: July 2026
            </p>
          </header>

          <div className="mt-12 grid gap-5">
            {termsSections.map((section, index) => (
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
            aria-labelledby="terms-contact-title"
            className="mt-8 overflow-hidden rounded-3xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_36%),rgba(255,255,255,0.055)] p-6 shadow-[0_28px_90px_rgba(8,145,178,0.14)] backdrop-blur-2xl sm:p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                  Terms Contact
                </p>
                <h2
                  id="terms-contact-title"
                  className="mt-3 text-3xl font-semibold text-white"
                >
                  Questions about these Terms?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                  If you have questions about these Terms & Conditions, contact
                  us.
                </p>
              </div>

              <address className="grid gap-3 not-italic text-sm text-zinc-300 sm:grid-cols-2 lg:min-w-[420px] lg:grid-cols-1">
                <a
                  href="mailto:admin@reelmakersrm.org"
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 transition duration-300 hover:border-cyan-300/40 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                  aria-label="Email Reel Makers about terms and conditions"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Email
                  </span>
                  admin@reelmakersrm.org
                </a>
                <a
                  href="tel:+918147722626"
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 transition duration-300 hover:border-cyan-300/40 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                  aria-label="Call Reel Makers about terms and conditions"
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
