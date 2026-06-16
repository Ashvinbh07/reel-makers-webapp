const services = [
  "AI Reels",
  "Promo Script Writing",
  "AI Posters",
  "AI Video Generation",
  "Meta Ads Creatives",
  "Micro Drama Production",
];

const stats = [
  ["10000+", "Reels Delivered"],
  ["100+", "Brands Served"],
  ["48+", "Editors"],
  ["500+", "Ad Creatives"],
  ["50+", "Micro Drama Series"],
  ["95%", "Client Satisfaction"],
];

const reasons = [
  "AI + Human Creativity",
  "Fast Turnaround",
  "Dedicated Team",
  "Scalable Production",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.12),transparent_28%),#030303]">
      <section className="mx-auto w-full max-w-[1400px] px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mx-auto mb-5 w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            About Reel Makers
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            AI-Powered Content Creation Built for Scale
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Reel Makers combines AI workflows with human creativity to help
            brands, creators, and entertainment companies produce
            high-performing content faster.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-cyan-950/10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:p-7">
          <div>
            <p className="text-sm font-medium text-cyan-300">Our Story</p>
            <h2 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">
              How Reel Makers Started
            </h2>
          </div>
          <p className="text-base leading-8 text-zinc-300">
            Reel Makers was built to solve a growing demand for high-quality
            short-form content. Today, our team produces reels, promo videos,
            Meta ad creatives, AI-generated assets, posters, and micro-drama
            content for brands and media companies.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A complete creative production stack for modern content teams.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-cyan-950/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-cyan-950/30"
            >
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="mb-5 flex size-11 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-xs font-bold text-cyan-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-white">{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(([number, label]) => (
            <article
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center shadow-lg shadow-cyan-950/10"
            >
              <h3 className="text-3xl font-bold text-cyan-300">{number}</h3>
              <p className="mt-2 text-sm text-zinc-400">{label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Why Clients Choose Us
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason}
              className="group relative flex min-h-28 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center shadow-lg shadow-cyan-950/10 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-cyan-950/30"
            >
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <h3 className="text-sm font-semibold leading-6 text-white">
                {reason}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-[1400px] px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_48%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(34,211,238,0.05))] px-5 py-8 text-center shadow-2xl shadow-cyan-950/30 sm:px-8 sm:py-10">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Ready to grow your content?
            </h2>
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
