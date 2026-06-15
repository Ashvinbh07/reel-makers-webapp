export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.14),transparent_28%),#030303] pb-20">
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        
        {/* LEFT SIDE */}
        <div className="flex max-w-3xl flex-col justify-center">
          {/* BADGE */}
          <p className="mb-5 w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-cyan-200">
            AI video systems for brands that move fast
          </p>
          
          {/* HEADING */}
          <h1 className="text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            AI-Powered Reels That Turn Views Into Customers.
          </h1>
          
          {/* DESCRIPTION */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            We create AI-powered reels, promo scripts, posters, videos, and
            social media campaigns for brands that want to grow faster.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black hover:bg-cyan-300"
            >
              Start a Project
            </a>

            <a
              href="/portfolio"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              View Work
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_45%)]" />

          <div className="relative">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">Reel Makers Workflow</p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  From idea to final reel
                </h3>
              </div>

              <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                AI + Editors
              </div>
            </div>

            <div className="space-y-3">
              {[
                ["01", "AI Script", "Hook, story, CTA"],
                ["02", "Storyboard", "Visual plan for editors"],
                ["03", "Editing", "Human edit + AI assets"],
                ["04", "Final Delivery", "Client-ready reel"],
              ].map(([number, title, desc]) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/35 p-3"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-black">
                    {number}
                  </div>
              
                  <div>
                    <h4 className="font-semibold text-white">{title}</h4>
                    <p className="mt-1 text-sm text-zinc-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-4">
              <p className="text-sm text-zinc-300">
                Built for fast-moving brands that need consistent reels, posters,
                promo scripts, and AI video content every month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["10,000+", "Reels"],
            ["100+", "Brands"],
            ["47", "Editors"],
            ["95%", "Satisfaction"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center shadow-lg shadow-cyan-950/10"
            >
              <h3 className="text-3xl font-bold text-cyan-300">{number}</h3>
              <p className="mt-2 text-sm text-zinc-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto mt-20 w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            What We Create
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            AI-powered content systems for modern brands.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "AI Generated Reels",
              "High-retention reels built with strong hooks, AI-assisted concepts, and human editing.",
            ],
            [
              "Promo Script Writing",
              "Scroll-stopping scripts with hooks, storytelling, emotional triggers, and strong CTAs.",
            ],
            [
              "AI Posters",
              "Brand-ready posters for offers, launches, festivals, and social media campaigns.",
            ],
            [
              "AI Video Generation",
              "AI-assisted product videos, explainer clips, ad creatives, and promo visuals.",
            ],
            [
              "Content Strategy",
              "Monthly content planning, campaign ideas, creative direction, and posting structure.",
            ],
            [
              "Social Media Ads",
              "Performance-focused ad creatives designed for attention, clicks, and conversions.",
            ],
          ].map(([service, description], index) => (
            <div
              key={service}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-cyan-950/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-cyan-950/30"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="mb-8 flex size-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-bold text-cyan-200">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-semibold text-white">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF OF WORK */}
      <section className="mx-auto mt-20 w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Proof of Work
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Campaigns, edits, ads, and AI content delivered at scale.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {[
            [
              "Micro Drama Production",
              "Series editing, promo cuts, thumbnails, and short-form episode campaigns.",
              ["50+ Series", "1000+ Episodes", "15M+ Views"],
            ],
            [
              "Meta Ads Creative Studio",
              "Performance ad creatives, UGC-style edits, hooks, variations, and campaign assets.",
              ["500+ Creatives", "200+ Campaigns", "High CTR Assets"],
            ],
            [
              "AI Content Creation",
              "AI reels, posters, videos, promo scripts, and monthly content systems.",
              ["10000+ Reels", "AI Posters", "Promo Scripts"],
            ],
          ].map(([title, description, metrics], index) => (
            <div
              key={String(title)}
              className="group grid gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-cyan-950/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.05] hover:shadow-cyan-950/30 md:grid-cols-[1fr_auto] md:items-center"
            >
              <div className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-200 shadow-lg shadow-cyan-950/20">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                    {description}
                  </p>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-3 md:min-w-[460px]">
                {(metrics as string[]).map((metric) => (
                  <div
                    key={metric}
                    className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-center"
                  >
                    <p className="text-sm font-bold text-cyan-300">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
