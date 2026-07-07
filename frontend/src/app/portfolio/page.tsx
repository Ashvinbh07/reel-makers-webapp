"use client";

import { useState } from "react";

const categories = [
  "All",
  "Micro Drama",
  "Meta Ads",
  "AI Reels",
  "Posters",
  "Promo Scripts",
];

const projects = [
  {
    title: "Micro Drama Promo Campaign",
    category: "Micro Drama",
    description:
      "Short-form episode promos created for high-retention drama content.",
    deliverables: ["Episode Cuts", "Hook Scripts", "Thumbnails", "Promo Edits"],
    metrics: ["50+ Promos", "15M+ Views"],
  },
  {
    title: "Meta Ads Creative Pack",
    category: "Meta Ads",
    description:
      "Performance-focused ad creatives for Meta campaigns and product promotions.",
    deliverables: ["UGC Ads", "Product Videos", "Variations", "Ad Hooks"],
    metrics: ["500+ Creatives", "200+ Campaigns"],
  },
  {
    title: "AI Reel Series",
    category: "AI Reels",
    description:
      "AI-assisted reel concepts edited by human creators for consistent brand growth.",
    deliverables: ["Reel Scripts", "AI Concepts", "Editing", "Captions"],
    metrics: ["10000+ Reels", "Fast Turnaround"],
  },
  {
    title: "AI Poster Campaign",
    category: "Posters",
    description:
      "Brand-ready poster creatives for offers, festivals, launches, and campaigns.",
    deliverables: ["Posters", "Promo Creatives", "Brand Assets"],
    metrics: ["300+ Posters", "Multi-Industry"],
  },
  {
    title: "Promo Script System",
    category: "Promo Scripts",
    description:
      "Scroll-stopping promo scripts with hooks, emotional triggers, and CTAs.",
    deliverables: ["Hooks", "Scripts", "CTAs", "Story Angles"],
    metrics: ["1000+ Scripts", "High Engagement"],
  },
  {
    title: "AI Video Content Pack",
    category: "AI Videos",
    description:
      "AI-assisted videos for product promos, explainers, and social ad creatives.",
    deliverables: ["AI Visuals", "Explainer Clips", "Product Promos"],
    metrics: ["AI Videos", "Ad Ready"],
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.12),transparent_28%),#030303]">
      <section className="mx-auto w-full max-w-[1400px] px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto mb-5 w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Reel Makers Portfolio
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Our Work
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Micro dramas, Meta ad creatives, AI reels, posters, and promo
            content built for modern brands.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-xl shadow-cyan-950/10">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 ${
                  isActive
                    ? "border-cyan-200/70 bg-cyan-300 text-black shadow-[0_0_24px_rgba(34,211,238,0.24)]"
                    : "border-white/10 bg-black/25 text-zinc-300 hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg shadow-cyan-950/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.055] hover:shadow-cyan-950/30"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.2),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(3,7,8,0.95))]">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-cyan-300/25 bg-black/55 px-3 py-1 text-xs font-semibold text-cyan-200 backdrop-blur">
                  {project.category}
                </span>
                <div className="grid size-20 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_34px_rgba(34,211,238,0.18)]">
                  <span className="text-lg font-black text-cyan-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h2 className="text-2xl font-semibold leading-tight text-white">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                    Deliverables
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-zinc-300"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-center"
                    >
                      <p className="text-sm font-bold text-cyan-200">
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="mt-5 inline-flex w-full justify-center rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition duration-200 hover:bg-cyan-300 hover:text-black"
                >
                  View Case Study
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-[1400px] px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_48%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(34,211,238,0.05))] px-5 py-8 text-center shadow-2xl shadow-cyan-950/30 sm:px-8 sm:py-10">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Want us to build content like this for your brand?
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
