"use client";

import { useMemo, useState, type MouseEvent } from "react";
import Image from "next/image";

const categories = [
  "All",
  "Micro Drama",
  "Meta Ads",
  "AI Reels",
  "Posters",
  "Promo Scripts",
];

const featuredProjects = [
  {
    title: "KukuTV Micro Drama Promotions",
    category: "Micro Drama",
    thumbnailSrc: "/portfolio/kukutv/kukutv-promo-thumb-1.jpg",
    mediaSrc: "/portfolio/kukutv/kukutv-promo-1.mp4",
    mediaType: "video",
    description:
      "Promo campaigns created for short-form drama content using strong hooks, Hindi narration, episode selection, and editing direction.",
    deliverables: [
      "Promo Narration",
      "Hook Writing",
      "Episode Selection",
      "Hindi Copywriting",
      "Reel Editing Direction",
    ],
  },
  {
    title: "Meta Ad Creatives",
    category: "Meta Ads",
    thumbnailSrc: "/portfolio/meta-ads/meta-ad-thumb-1.jpg",
    mediaSrc: "/portfolio/meta-ads/meta-ad-1.mp4",
    mediaType: "video",
    description:
      "Performance-focused creatives designed for paid campaigns, product promotions, lead generation, and social media conversions.",
    deliverables: [
      "UGC Style Ads",
      "Product Videos",
      "Creative Variations",
      "Ad Hooks",
      "Campaign Assets",
    ],
  },
  {
    title: "AI Reel Production",
    category: "AI Reels",
    thumbnailSrc: "/portfolio/ai-reels/ai-reel-thumb-1.jpg",
    mediaSrc: "/portfolio/ai-reels/ai-reel-1.mp4",
    mediaType: "video",
    description:
      "AI-assisted reel concepts combined with human editing for fast, consistent, and high-volume short-form content.",
    deliverables: [
      "AI Visuals",
      "AI Voiceover",
      "Reel Scripts",
      "Motion Graphics",
      "Final Editing",
    ],
  },
  {
    title: "AI Poster Design",
    category: "Posters",
    thumbnailSrc: "/portfolio/posters/poster-1.jpg",
    mediaSrc: "/portfolio/posters/poster-1.jpg",
    mediaType: "image",
    description:
      "Poster creatives for launches, micro-drama promos, offers, social campaigns, and brand storytelling.",
    deliverables: [
      "OTT Style Posters",
      "Social Media Posters",
      "Campaign Creatives",
      "Thumbnail Concepts",
      "Brand Assets",
    ],
  },
];

const caseStudies = [
  {
    category: "Micro Drama",
    title: "KukuTV Promo Campaign",
    challenge:
      "Promote short-form drama episodes with strong hooks and emotional curiosity.",
    solution:
      "Created Hindi promo narrations, episode-based hooks, thumbnail direction, and reel editing briefs.",
    deliverables: [
      "Promo Narration",
      "Hook Writing",
      "Episode Selection",
      "Thumbnail Direction",
    ],
    highlights: [
      "47 Episodes Covered",
      "Hindi Promotional Scripts",
      "Social Media Content",
    ],
  },
  {
    category: "Meta Ads",
    title: "Performance Ad Creative Pack",
    challenge:
      "Build ad creatives that can quickly test different hooks and campaign angles.",
    solution:
      "Created UGC-style ad concepts, product video scripts, creative variations, and campaign assets.",
    deliverables: [
      "UGC Style Ads",
      "Product Videos",
      "Ad Variations",
      "Campaign Assets",
    ],
    highlights: [
      "Multi-Platform Assets",
      "Conversion Focused Creatives",
      "Brand Consistency",
    ],
  },
  {
    category: "AI Reels",
    title: "AI Reel Production Workflow",
    challenge:
      "Produce high-volume short-form content faster without reducing creative quality.",
    solution:
      "Combined AI visuals, AI voiceovers, motion graphics, and human editing direction.",
    deliverables: [
      "AI Visual Generation",
      "AI Voiceovers",
      "Motion Graphics",
      "Editing",
    ],
    highlights: [
      "Fast Production Pipeline",
      "Human + AI Workflow",
      "High Volume Content",
    ],
  },
];

const scriptShowcase = [
  {
    title: "Micro Drama Suspense Hook",
    category: "Micro Drama",
    preview: '"107 साल बाद फिर लौट आया वो संकट..."',
    fullScript:
      "107 साल बाद फिर लौट आया वो संकट...\nघर पर छाया एक ऐसा साया, जिसने सबकी ज़िंदगी बदल दी।\nअब सवाल ये है - क्या परिवार इस रहस्य से बच पाएगा?",
  },
  {
    title: "Emotional Promo Script",
    category: "Promo Scripts",
    preview:
      '"जिस घर को बचाने की कोशिश थी, वही घर अब सबसे बड़ा खतरा बन चुका था..."',
    fullScript:
      "जिस घर को बचाने की कोशिश थी, वही घर अब सबसे बड़ा खतरा बन चुका था।\nरिश्तों के बीच छुपा सच जब सामने आया, तो हर कोई हैरान रह गया।\nअब एक फैसला सबकी किस्मत बदल देगा।",
  },
  {
    title: "Meta Ad Hook Script",
    category: "Meta Ads",
    preview: '"Stop scrolling. Your next customer may already be watching."',
    fullScript:
      "Stop scrolling. Your next customer may already be watching.\nWith Reel Makers, turn your product into scroll-stopping ad creatives, promo reels, and conversion-focused campaign assets.",
  },
  {
    title: "AI Voiceover Script",
    category: "AI Voiceover",
    preview:
      '"A cinematic voiceover crafted for fast-paced AI video promos."',
    fullScript:
      "A cinematic voiceover crafted for fast-paced AI video promos.\nBuilt with emotional pacing, strong hooks, and brand-focused storytelling to make every second count.",
  },
];

function ProjectPreview({
  category,
  index,
  isVideo,
  onOpen,
  thumbnailSrc,
  title,
}: {
  category: string;
  index: number;
  isVideo: boolean;
  onOpen: () => void;
  thumbnailSrc: string;
  title: string;
}) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="relative flex aspect-[16/5] w-full items-center justify-center overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.2),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(3,7,8,0.95))] text-left"
    >
      <div className="absolute inset-x-8 top-0 z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      <span className="absolute left-4 top-4 z-10 rounded-full border border-cyan-300/25 bg-black/55 px-3 py-1 text-xs font-semibold text-cyan-200 backdrop-blur">
        {category}
      </span>

      {hasImage ? (
        <Image
          src={thumbnailSrc}
          alt={`${title} portfolio preview`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
          onError={() => setHasImage(false)}
        />
      ) : (
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="grid size-14 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_34px_rgba(34,211,238,0.18)]">
            <span className="text-base font-black text-cyan-100">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">
            Portfolio Preview
          </p>
          <p className="mt-1 text-xs font-medium text-zinc-400">
            Asset Coming Soon
          </p>
        </div>
      )}

      {isVideo ? (
        <span className="absolute bottom-4 right-4 z-10 flex size-10 items-center justify-center rounded-full border border-cyan-300/35 bg-black/60 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.18)] backdrop-blur transition duration-200 group-hover:bg-cyan-300 group-hover:text-black">
          <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-current" />
        </span>
      ) : null}
    </button>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedScript, setSelectedScript] = useState<
    (typeof scriptShowcase)[number] | null
  >(null);
  const [selectedMedia, setSelectedMedia] = useState<
    (typeof featuredProjects)[number] | null
  >(null);

  const scrollToFeaturedProjects = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    document
      .getElementById("featured-projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filteredFeaturedProjects = useMemo(() => {
    if (activeCategory === "All") {
      return featuredProjects;
    }

    return featuredProjects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  const filteredCaseStudies = useMemo(() => {
    if (activeCategory === "All") {
      return caseStudies;
    }

    return caseStudies.filter((study) => study.category === activeCategory);
  }, [activeCategory]);

  const filteredScriptShowcase = useMemo(() => {
    if (activeCategory === "All" || activeCategory === "Promo Scripts") {
      return scriptShowcase;
    }

    return scriptShowcase.filter((script) => script.category === activeCategory);
  }, [activeCategory]);

  const showFeaturedProjects = activeCategory !== "Promo Scripts";
  const showCaseStudies = activeCategory === "All";
  const showScriptShowcase =
    activeCategory === "All" || activeCategory === "Promo Scripts";

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.12),transparent_28%),#030303]">
      <section className="relative mx-auto w-full max-w-[1400px] px-4 pb-6 pt-9 sm:px-6 sm:pt-10 lg:px-8 lg:pt-11">
        <div className="pointer-events-none absolute -left-16 top-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="pointer-events-none absolute left-1/3 top-8 h-56 w-56 rounded-full bg-cyan-300/[0.06] blur-3xl" />

        <div className="relative max-w-4xl">
          <p className="mb-5 w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Reel Makers Portfolio
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Real Campaigns.
            <br />
            Real Creative Work.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Explore micro-drama promos, Meta ad creatives, AI reels, promo
            scripts, voiceovers, posters, and content campaigns created by Reel
            Makers.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#featured-projects"
              onClick={scrollToFeaturedProjects}
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black shadow-[0_0_28px_rgba(34,211,238,0.28)] transition duration-200 hover:bg-cyan-300"
            >
              View Featured Projects
            </a>
            <a
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition duration-200 hover:border-cyan-300/40 hover:bg-white/10"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-xl shadow-cyan-950/10">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
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

      {showFeaturedProjects ? (
        <section
          id="featured-projects"
          className="scroll-mt-6 mx-auto mt-8 w-full max-w-[1400px] px-4 pb-12 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-3 text-lg leading-7 text-zinc-400">
              Selected campaign work across micro-drama promos, Meta ads, AI
              reels, scripts, voiceovers, and posters.
            </p>
          </div>

          <div className="mt-7 grid auto-rows-fr items-stretch gap-4 lg:grid-cols-2">
            {filteredFeaturedProjects.map((project, index) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg shadow-cyan-950/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.055] hover:shadow-cyan-950/30"
              >
                <ProjectPreview
                  category={project.category}
                  index={index}
                  isVideo={project.mediaType === "video"}
                  onOpen={() => setSelectedMedia(project)}
                  thumbnailSrc={project.thumbnailSrc}
                  title={project.title}
                />

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold leading-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                        Deliverables
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-2">
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
                  </div>

                  <div className="mt-auto pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedMedia(project)}
                      className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition duration-200 hover:bg-cyan-300 hover:text-black"
                    >
                      View Case Study
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {showCaseStudies ? (
        <section
          id="case-studies"
          className="scroll-mt-6 mx-auto w-full max-w-[1400px] px-4 pb-12 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Case Studies
            </h2>
            <p className="mt-3 text-lg leading-7 text-zinc-400">
              How we approach campaigns from brief to final delivery.
            </p>
          </div>

          <div className="mt-6 grid gap-2.5">
            {filteredCaseStudies.map((study, index) => (
              <article
                key={study.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 shadow-lg shadow-cyan-950/10 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/[0.05] hover:shadow-cyan-950/30 sm:p-4"
              >
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="grid gap-3.5 lg:grid-cols-[auto_0.85fr_1.15fr] lg:items-start">
                  <div className="flex items-center gap-3 lg:block">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-black text-cyan-100 shadow-lg shadow-cyan-950/20">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200 lg:mt-3 lg:inline-flex">
                      {study.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-white">
                      {study.title}
                    </h3>
                    <div className="mt-3 grid gap-2.5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                          Challenge
                        </p>
                        <p className="mt-1 text-sm leading-6 text-zinc-400">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                          Solution
                        </p>
                        <p className="mt-1 text-sm leading-6 text-zinc-400">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3.5 md:grid-cols-2 lg:gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                        Deliverables
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {study.deliverables.map((deliverable) => (
                          <span
                            key={deliverable}
                            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-zinc-300"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                        Highlights
                      </p>
                      <div className="mt-2 grid gap-1.5">
                        {study.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5"
                          >
                            <p className="text-sm font-semibold text-cyan-200">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {showScriptShowcase ? (
        <section
          className={`mx-auto w-full max-w-[1400px] px-4 pb-12 sm:px-6 lg:px-8 ${
            activeCategory === "Promo Scripts" ? "mt-8" : ""
          }`}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Script Showcase
            </h2>
            <p className="mt-3 text-lg leading-7 text-zinc-400">
              Promo hooks, Hindi narration lines, ad scripts, and
              voiceover-ready copy created for short-form campaigns.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {filteredScriptShowcase.map((script) => (
              <article
                key={script.title}
                className="group relative flex min-h-56 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-cyan-950/10 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/[0.05] hover:shadow-cyan-950/30"
              >
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="w-fit rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  {script.category}
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-tight text-white">
                  {script.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-300">
                  {script.preview}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedScript(script)}
                  className="mt-5 inline-flex w-fit rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition duration-200 hover:bg-cyan-300 hover:text-black"
                >
                  Read Script
                </button>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {selectedMedia ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="media-modal-title"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative w-[95vw] max-w-6xl overflow-hidden rounded-2xl border border-cyan-300/35 bg-[#050505] p-4 text-white shadow-[0_0_44px_rgba(34,211,238,0.22)] sm:w-[90vw] sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <button
              type="button"
              aria-label="Close media modal"
              onClick={() => setSelectedMedia(null)}
              className="absolute right-4 top-4 z-20 flex size-9 items-center justify-center rounded-full border border-white/10 bg-black/70 text-sm font-bold leading-none text-zinc-300 transition duration-200 hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100"
            >
              x
            </button>

            <div className="mb-4 pr-12">
              <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                {selectedMedia.category}
              </span>
              <h2
                id="media-modal-title"
                className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl"
              >
                {selectedMedia.title}
              </h2>
            </div>

            <div className="relative flex max-h-[80vh] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black">
              {selectedMedia.mediaType === "video" ? (
                <div className="flex max-h-[80vh] w-full items-center justify-center">
                  <video
                    src={selectedMedia.mediaSrc}
                    className="aspect-[9/16] max-h-[80vh] w-auto max-w-full bg-black object-contain"
                    controls
                    playsInline
                  />
                </div>
              ) : (
                <div className="relative aspect-[16/10] max-h-[80vh] w-full">
                  <Image
                    src={selectedMedia.mediaSrc}
                    alt={`${selectedMedia.title} full preview`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {selectedScript ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="script-modal-title"
          onClick={() => setSelectedScript(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-cyan-300/35 bg-[#050505] p-5 text-white shadow-[0_0_44px_rgba(34,211,238,0.22)] sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <button
              type="button"
              aria-label="Close script modal"
              onClick={() => setSelectedScript(null)}
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl leading-none text-zinc-300 transition duration-200 hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100"
            >
              ×
            </button>

            <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
              {selectedScript.category}
            </span>
            <h2
              id="script-modal-title"
              className="mt-4 pr-10 text-3xl font-semibold leading-tight text-white"
            >
              {selectedScript.title}
            </h2>
            <p className="mt-5 whitespace-pre-line rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-base leading-8 text-zinc-200">
              {selectedScript.fullScript}
            </p>
          </div>
        </div>
      ) : null}
    </main>
  );
}
