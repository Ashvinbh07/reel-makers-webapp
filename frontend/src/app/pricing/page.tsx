const packages = [
  {
    name: "Starter Project",
    audience: "Best for small businesses and first-time clients",
    includes: [
      "1-3 Reels",
      "Basic Promo Script",
      "1 Poster Creative",
      "Simple Editing",
      "1 Revision Round",
    ],
    button: "Request Quote",
  },
  {
    name: "Campaign Package",
    audience: "Best for launches, promotions, and Meta ads",
    includes: [
      "5-10 Reels",
      "Promo Script Writing",
      "Meta Ad Creatives",
      "Posters / Thumbnails",
      "2 Revision Rounds",
    ],
    button: "Plan Campaign",
    highlighted: true,
  },
  {
    name: "Production Package",
    audience: "Best for micro-drama, AI video, and high-volume content",
    includes: [
      "Bulk Reel Editing",
      "Micro Drama Promos",
      "AI Video Assets",
      "Advanced Editing",
      "Dedicated Creative Support",
    ],
    button: "Contact Team",
  },
  {
    name: "Custom Package",
    audience: "Best for agencies, brands, and long-term production needs",
    includes: [
      "Custom Deliverables",
      "AI Reels / Posters / Videos",
      "Meta Ads",
      "Promo Scripts",
      "Priority Support",
    ],
    button: "Get Custom Quote",
  },
];

const addOns = [
  "Extra Revisions",
  "Thumbnail Design",
  "Voiceover Script",
  "AI Poster Set",
  "Meta Ads Variations",
  "Urgent Delivery",
];

const faqs = [
  {
    question: "Is pricing fixed?",
    answer:
      "No. Pricing is quote-based and depends on content volume, creative complexity, timeline, and deliverables.",
  },
  {
    question: "Can I request only one reel?",
    answer:
      "Yes. You can request a single reel or a small starter project if you want to test the workflow first.",
  },
  {
    question: "Can you create Meta ad creatives?",
    answer:
      "Yes. We create campaign-ready Meta ad creatives, including video variations, hooks, posters, and promotional assets.",
  },
  {
    question: "Do you work on micro-drama content?",
    answer:
      "Yes. Our team supports micro-drama promos, episode cuts, short-form hooks, and campaign assets for serialized content.",
  },
  {
    question: "How do revisions work?",
    answer:
      "Each package includes a defined revision scope. Extra revisions can be added based on the project needs.",
  },
  {
    question: "How fast can you deliver?",
    answer:
      "Delivery depends on the project size and urgency. We confirm timelines before production begins.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.12),transparent_28%),#030303]">
      <section className="mx-auto w-full max-w-[1400px] px-4 pb-6 pt-10 sm:px-6 lg:px-8 lg:pt-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mx-auto mb-4 w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Reel Makers Pricing
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Project-Based Creative Packages
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
            Choose a package based on the type of content you need. Final
            pricing depends on volume, complexity, timeline, and creative
            requirements.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid auto-rows-fr items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((plan) => (
            <article
              key={plan.name}
              className={`group relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-2xl border p-4 shadow-xl transition duration-300 hover:-translate-y-1 sm:p-5 ${
                plan.highlighted
                  ? "border-cyan-300/45 bg-cyan-300/[0.09] shadow-cyan-950/35"
                  : "border-white/10 bg-white/[0.04] shadow-cyan-950/10 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-cyan-950/30"
              }`}
            >
              <div
                className={`absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${
                  plan.highlighted
                    ? "via-cyan-300/80 opacity-100"
                    : "via-cyan-300/50 opacity-0 transition duration-300 group-hover:opacity-100"
                }`}
              />

              {plan.highlighted ? (
                <span className="mb-4 w-fit rounded-full border border-cyan-200/60 bg-cyan-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-black shadow-[0_0_22px_rgba(34,211,238,0.22)]">
                  Most Popular
                </span>
              ) : (
                <div className="mb-4 h-7" />
              )}

              <div className="flex flex-1 flex-col">
                <div>
                  <h2 className="text-2xl font-semibold leading-tight text-white">
                    {plan.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-cyan-200/75">
                    {plan.audience}
                  </p>
                </div>

                <div className="my-5 h-px bg-white/10" />

                <ul className="flex-1 space-y-2.5">
                  {plan.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/10 text-xs font-bold leading-none text-cyan-200">
                        +
                      </span>
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/contact"
                className={`mt-auto inline-flex w-full justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 ${
                  plan.highlighted
                    ? "bg-cyan-400 text-black shadow-[0_0_28px_rgba(34,211,238,0.28)] hover:bg-cyan-300"
                    : "border border-cyan-300/35 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300 hover:text-black"
                }`}
              >
                {plan.button}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Add-On Services
          </h2>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((service) => (
            <article
              key={service}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-lg shadow-cyan-950/10 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-cyan-950/30"
            >
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <h3 className="text-sm font-semibold leading-5 text-white">
                {service}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-[1400px] px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-5 grid max-w-5xl gap-2.5">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-cyan-950/10 transition duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-cyan-950/30"
            >
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-5 text-zinc-400">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
