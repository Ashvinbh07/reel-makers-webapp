const benefits = [
  "Work on real client campaigns",
  "Learn AI-powered creative workflows",
  "Collaborate with editors and script writers",
  "Grow with a fast-moving creative team",
];

const jobs = [
  {
    title: "Video Editor",
    department: "Production",
    location: "Remote / Hybrid",
    type: "Full-time / Freelance",
    experience: "1+ years",
    skills: ["Reels", "Premiere Pro", "Story pacing", "Thumbnails"],
  },
  {
    title: "Motion Graphics Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time / Freelance",
    experience: "1+ years",
    skills: ["After Effects", "Titles", "Transitions", "Ad motion"],
  },
  {
    title: "Promo Script Writer",
    department: "Content",
    location: "Remote / Hybrid",
    type: "Full-time / Internship",
    experience: "0-2 years",
    skills: ["Hooks", "Storytelling", "CTAs", "Ad scripts"],
  },
  {
    title: "Graphic Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time / Internship",
    experience: "0-2 years",
    skills: ["Posters", "Social creatives", "Branding", "Layouts"],
  },
  {
    title: "Social Media Manager",
    department: "Growth",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "1+ years",
    skills: ["Content calendars", "Analytics", "Posting", "Trends"],
  },
];

const applicationFormUrl =
  "https://docs.google.com/forms/d/10VizhlGtKMopjew3hwU8sYbd7go44KSWQwF4-Vo591g/viewform";

export default function CareersPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.12),transparent_28%),#030303]">
      <section className="mx-auto w-full max-w-[1400px] px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto mb-5 w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Careers at Reel Makers
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Join Reel Makers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Work with a fast-growing AI creative studio building reels, ads,
            promos, posters, and micro-drama content at scale.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article
              key={benefit}
              className="group relative flex min-h-16 items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 shadow-lg shadow-cyan-950/10 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-cyan-950/30"
            >
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-[11px] font-bold text-cyan-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-sm font-semibold leading-5 text-white">
                {benefit}
              </h2>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-cyan-300">
              Open Positions
            </p>
            <h2 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">
              Current Opportunities
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-zinc-400">
            Creative, growth, operations, and client-facing roles for people who
            want to build practical content systems.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="group flex min-h-[360px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-cyan-950/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.055] hover:shadow-cyan-950/30"
            >
              <div>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {job.department}
                  </span>
                  <span className="text-xs font-medium text-zinc-500">
                    {job.location}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold leading-tight text-white">
                  {job.title}
                </h3>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/60">
                      Type
                    </p>
                    <p className="mt-2 text-sm font-medium text-zinc-200">
                      {job.type}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/60">
                      Experience
                    </p>
                    <p className="mt-2 text-sm font-medium text-zinc-200">
                      {job.experience}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                    Skills
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={applicationFormUrl}
                className="mt-6 inline-flex w-full justify-center rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition duration-200 hover:bg-cyan-300 hover:text-black"
                rel="noreferrer"
                target="_blank"
              >
                Apply Now
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-[1400px] px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_48%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(34,211,238,0.05))] px-5 py-8 text-center shadow-2xl shadow-cyan-950/30 sm:px-8 sm:py-10">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Want to work with Reel Makers?
            </h2>
            <div className="mt-6">
              <a
                href={applicationFormUrl}
                className="inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black shadow-[0_0_28px_rgba(34,211,238,0.28)] transition duration-200 hover:bg-cyan-300"
                rel="noreferrer"
                target="_blank"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
