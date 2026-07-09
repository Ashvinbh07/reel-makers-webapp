import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Reel Makers",
  description:
    "Read the Privacy Policy of Reel Makers to understand how we collect, use, store, and protect your personal information.",
};

const policySections = [
  {
    title: "Information We Collect",
    content: [
      "When you contact Reel Makers, request a quote, apply for a role, or work with us on a creative project, we may collect information such as your name, email address, phone number, company name, project requirements, contact form messages, and communication preferences.",
      "For career enquiries, we may collect application details, portfolio links, resumes, work samples, and other information you choose to submit. We may also collect browser, device, and analytics information to understand how visitors use our website.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use your information to respond to enquiries, understand project requirements, deliver creative services, manage project communication, provide client support, review recruitment applications, improve our website, and comply with legal or administrative obligations.",
      "We do not sell your personal information. We use the information you provide only for legitimate business purposes connected to Reel Makers services and operations.",
    ],
  },
  {
    title: "Client Media and Project Assets",
    content: [
      "Client-provided videos, images, logos, scripts, brand assets, references, and project materials are used only to deliver the requested services. These materials may be reviewed by our creative, editing, strategy, and production teams as required for the project.",
      "We do not share client media or project assets publicly without permission. Portfolio use, case studies, testimonials, or public previews are shared only when approved by the client or otherwise permitted by the project agreement.",
    ],
  },
  {
    title: "Cookies and Tracking",
    content: [
      "Our website may use cookies and similar technologies to keep the site functional, understand traffic patterns, improve performance, and measure content effectiveness.",
      "Analytics information may include pages visited, approximate location, device type, browser type, referral source, and time spent on the website. You can manage cookies through your browser settings.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "We may use trusted third-party services to operate our business and communicate with you, including WhatsApp, email services, Google Forms, Google Analytics, and similar tools.",
      "If payment providers, cloud storage, or file storage services are added later, they may process information necessary for billing, project delivery, file transfer, or secure storage. These services are governed by their own privacy policies and security practices.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We take reasonable technical and organizational measures to protect personal information and client materials from unauthorized access, misuse, loss, alteration, or disclosure.",
      "No online system can be guaranteed to be completely secure, but we work to maintain careful access practices and use information only for the purposes described in this Privacy Policy.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain personal information, enquiry details, project communication, and client materials only for as long as needed to provide services, maintain business records, handle support, meet legal obligations, or resolve disputes.",
      "When information is no longer required, we may delete, archive, or anonymize it according to our operational and legal requirements.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Depending on applicable law, you may request access to your personal information, ask us to correct inaccurate information, request deletion, withdraw consent where consent applies, or object to certain uses of your information.",
      "To make a privacy-related request, contact us using the details below. We may need to verify your identity before responding to certain requests.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Reel Makers services are intended for businesses, creators, professionals, and adult users. We do not knowingly collect personal information from children.",
      "If you believe a child has provided personal information to us, please contact us so we can review and take appropriate action.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, tools, legal requirements, or business practices.",
      "When we make updates, we will revise the Last Updated date on this page. Continued use of our website or services after an update means the revised policy applies.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-5 text-base leading-8 text-zinc-300 sm:text-lg">
              Your privacy matters to us. This Privacy Policy explains how Reel
              Makers collects, uses, stores, and protects your information when
              you use our website, contact us, apply for careers, or work with
              us.
            </p>
            <p className="mt-6 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              Last Updated: July 2026
            </p>
          </header>

          <div className="mt-12 grid gap-5">
            {policySections.map((section, index) => (
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
            aria-labelledby="privacy-contact-title"
            className="mt-8 overflow-hidden rounded-3xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_36%),rgba(255,255,255,0.055)] p-6 shadow-[0_28px_90px_rgba(8,145,178,0.14)] backdrop-blur-2xl sm:p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                  Privacy Contact
                </p>
                <h2
                  id="privacy-contact-title"
                  className="mt-3 text-3xl font-semibold text-white"
                >
                  Questions about your privacy?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                  If you have questions about this Privacy Policy or your
                  personal information, contact us.
                </p>
              </div>

              <address className="grid gap-3 not-italic text-sm text-zinc-300 sm:grid-cols-2 lg:min-w-[420px] lg:grid-cols-1">
                <a
                  href="mailto:admin@reelmakersrm.org"
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 transition duration-300 hover:border-cyan-300/40 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                  aria-label="Email Reel Makers about privacy"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Email
                  </span>
                  admin@reelmakersrm.org
                </a>
                <a
                  href="tel:+918147722626"
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 transition duration-300 hover:border-cyan-300/40 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                  aria-label="Call Reel Makers about privacy"
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
