const services = [
  {
    title: "Micro Drama Promotions",
    description:
      "Episode promos, Hindi narration, hooks, thumbnails, and short-form drama edits.",
  },
  {
    title: "Meta Ads Creatives",
    description:
      "Performance-focused ad creatives, UGC-style videos, product ads, and campaign variations.",
  },
  {
    title: "AI Generated Reels",
    description:
      "AI-assisted reel concepts, scripts, visuals, voiceovers, captions, and final editing.",
  },
  {
    title: "Promo Script Writing",
    description:
      "Scroll-stopping hooks, emotional narration, CTAs, and storytelling angles for promos.",
  },
  {
    title: "AI Poster Design",
    description:
      "Posters for launches, offers, festivals, micro-drama campaigns, and social media promotions.",
  },
  {
    title: "AI Video Generation",
    description:
      "AI-assisted product videos, explainer clips, short promos, and creative video assets.",
  },
];

const deliverySteps = [
  {
    title: "Brief & Goal Understanding",
    description:
      "We clarify your campaign goal, audience, formats, timeline, and creative direction.",
  },
  {
    title: "Script & Creative Direction",
    description:
      "Our team shapes hooks, scripts, concepts, references, and production notes.",
  },
  {
    title: "AI + Human Production",
    description:
      "AI workflows speed up assets while editors and writers refine the final creative.",
  },
  {
    title: "Review & Final Delivery",
    description:
      "You review the work, request changes, and receive polished campaign-ready files.",
  },
];

const serviceDetails = [
  {
    title: "Micro Drama Content",
    includes: [
      "Episode selection",
      "Promo scripts",
      "Hook writing",
      "Reel editing direction",
      "Thumbnail ideas",
    ],
  },
  {
    title: "Advertising Creatives",
    includes: [
      "Meta ads",
      "UGC-style scripts",
      "Product promos",
      "Ad variations",
      "Campaign assets",
    ],
  },
  {
    title: "AI Content Production",
    includes: [
      "AI reels",
      "AI voiceovers",
      "AI posters",
      "AI videos",
      "Human final editing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.12),transparent_28%),#030303]">
      <section className="relative mx-auto w-full max-w-[1400px] px-4 pb-6 pt-10 sm:px-6 lg:px-8 lg:pt-12">
        <div className="pointer-events-none absolute -left-16 top-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative max-w-5xl">
          <p className="mb-4 w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Reel Makers Services
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Creative Services for Modern Brands
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            From micro-drama promotions and Meta ad creatives to AI-powered
            content, reels, scripts, posters, and videos, Reel Makers helps
            brands produce high-quality short-form content faster.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black shadow-[0_0_28px_rgba(34,211,238,0.28)] transition duration-200 hover:bg-cyan-300"
            >
              Start a Project
            </a>
            <a
              href="/portfolio"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition duration-200 hover:border-cyan-300/40 hover:bg-white/10"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-cyan-950/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-cyan-950/30"
            >
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-xs font-bold text-cyan-200">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="text-xl font-semibold text-white">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            How We Deliver
          </h2>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {deliverySteps.map((step, index) => (
            <article
              key={step.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-cyan-950/10 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-cyan-950/30"
            >
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-200">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-tight text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3">
          {serviceDetails.map((detail) => (
            <article
              key={detail.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-cyan-950/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.055] hover:shadow-cyan-950/30"
            >
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <h2 className="text-2xl font-semibold leading-tight text-white">
                {detail.title}
              </h2>
              <div className="my-5 h-px bg-white/10" />
              <ul className="space-y-2.5">
                {detail.includes.map((item) => (
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
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-[1400px] px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_48%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(34,211,238,0.05))] px-5 py-8 text-center shadow-2xl shadow-cyan-950/30 sm:px-8 sm:py-10">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Need creative content for your next campaign?
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              Tell us what you need and our team will help you plan the right
              content package.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black shadow-[0_0_28px_rgba(34,211,238,0.28)] transition duration-200 hover:bg-cyan-300"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
