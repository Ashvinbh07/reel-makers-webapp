"use client";

import { useState } from "react";

const services = [
  "AI Reels",
  "Promo Scripts",
  "AI Posters",
  "AI Videos",
  "Meta Ads Creatives",
  "Micro Drama Production",
  "Monthly Content Package",
];

const budgets = [
  "Below ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000+",
  "Custom",
];

const contactInfo = [
  {
    label: "Email",
    value: "admin@reelmakersrm.org",
    href: "mailto:admin@reelmakersrm.org",
  },
  {
    label: "Phone",
    value: "+91 81477 22626",
    secondary: "Call / WhatsApp",
    href: "https://wa.me/918147722626",
  },
  {
    label: "Instagram",
    value: "@reel_makers.rm",
    href: "https://www.instagram.com/reel_makers.rm",
  },
  {
    label: "LinkedIn",
    value: "Reel Makers RM",
    href: "https://www.linkedin.com/company/reelmakersrm",
  },
  {
    label: "Twitter / X",
    value: "@reelmakersrm",
    href: "https://x.com/reelmakersrm",
  },
  {
    label: "YouTube",
    value: "Reel Makers",
    href: "https://www.youtube.com/@reelmakers",
  },
  {
    label: "Facebook",
    value: "Reel Makers",
    href: "https://www.facebook.com/reelmakers",
  },
  {
    label: "Business Hours",
    value: "Mon - Sat",
    secondary: "10:00 AM – 7:00 PM IST",
    href: null,
  },
];

const nextSteps = [
  {
    title: "Submit Inquiry",
    description: "Tell us about your project.",
  },
  {
    title: "Strategy Discussion",
    description: "We understand your content goals.",
  },
  {
    title: "Proposal & Timeline",
    description: "Receive pricing and production plan.",
  },
  {
    title: "Content Production",
    description: "Our team begins creating your content.",
  },
];

const inputClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white outline-none transition duration-200 placeholder:text-zinc-600 focus:border-cyan-300/55 focus:bg-black/45 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.08)]";

const labelClass =
  "text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/70";

function CustomSelect({
  name,
  options,
  placeholder,
  value,
  onChange,
}: {
  name: string;
  options: string[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mt-2">
      <input name={name} type="hidden" value={value} />
      <button
        type="button"
        className={`flex w-full items-center justify-between gap-3 rounded-xl border bg-black/35 px-4 py-3 text-left text-sm outline-none transition duration-200 ${
          isOpen
            ? "border-cyan-300/55 bg-black/45 text-white shadow-[0_0_0_3px_rgba(34,211,238,0.08)]"
            : "border-white/10 text-white hover:border-cyan-300/35 hover:bg-black/45"
        }`}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={value ? "text-white" : "text-zinc-600"}>
          {value || placeholder}
        </span>
        <span
          aria-hidden="true"
          className={`text-cyan-200 transition duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {isOpen ? (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 overflow-hidden rounded-xl border border-cyan-300/25 bg-[#050505] p-1 shadow-2xl shadow-cyan-950/40">
          {options.map((option) => {
            const isSelected = value === option;

            return (
              <button
                key={option}
                type="button"
                className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition duration-150 ${
                  isSelected
                    ? "bg-cyan-300 text-black"
                    : "text-white hover:bg-cyan-300/10 hover:text-cyan-100"
                }`}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default function ContactPage() {
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  return (
    <main className="overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.12),transparent_28%),#030303]">
      <section className="mx-auto w-full max-w-[1400px] px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mx-auto mb-5 w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Contact Reel Makers
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Let&apos;s Build Your Next Content Campaign
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Tell us what you need and our team will get back with a creative
            plan.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            className="self-start rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-cyan-950/10 sm:p-6"
            onSubmit={(event) => {
              event.preventDefault();
              setSuccessMessage(
                "Thanks! Your inquiry has been received. Our team will contact you within 24 hours."
              );
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label>
                <span className={labelClass}>Name</span>
                <input
                  className={inputClass}
                  name="name"
                  placeholder="Your name"
                  type="text"
                />
              </label>

              <label>
                <span className={labelClass}>Email</span>
                <input
                  className={inputClass}
                  name="email"
                  placeholder="you@brand.com"
                  type="email"
                />
              </label>

              <label>
                <span className={labelClass}>Phone</span>
                <div className="mt-2 flex w-full items-center rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white transition duration-200 focus-within:border-cyan-300/55 focus-within:bg-black/45 focus-within:shadow-[0_0_0_3px_rgba(34,211,238,0.08)]">
                  <span className="shrink-0 pr-3 font-semibold text-cyan-100">
                    +91
                  </span>
                  <input
                    className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-zinc-600"
                    name="phone"
                    placeholder="00000 00000"
                    type="tel"
                  />
                </div>
              </label>

              <label>
                <span className={labelClass}>Company / Brand Name</span>
                <input
                  className={inputClass}
                  name="company"
                  placeholder="Brand name"
                  type="text"
                />
              </label>

              <label>
                <span className={labelClass}>Service Required</span>
                <CustomSelect
                  name="service"
                  onChange={setSelectedService}
                  options={services}
                  placeholder="Select a service"
                  value={selectedService}
                />
              </label>

              <label>
                <span className={labelClass}>Budget Range</span>
                <CustomSelect
                  name="budget"
                  onChange={setSelectedBudget}
                  options={budgets}
                  placeholder="Select a budget"
                  value={selectedBudget}
                />
              </label>

              <label className="sm:col-span-2">
                <span className={labelClass}>Message</span>
                <textarea
                  className={`${inputClass} h-40 resize-y`}
                  name="message"
                  placeholder="Tell us about your campaign, timeline, and content goals."
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black shadow-[0_0_28px_rgba(34,211,238,0.28)] transition duration-200 hover:bg-cyan-300 sm:w-auto"
            >
              Submit Inquiry
            </button>

            {successMessage ? (
              <p className="mt-4 rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 text-sm font-medium leading-6 text-cyan-100">
                {successMessage}
              </p>
            ) : null}
          </form>

          <aside className="grid content-start gap-3 sm:grid-cols-2">
            {contactInfo.map((item) => {
              const cardClasses =
                "group relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-cyan-950/10 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-cyan-950/30";

              const content = (
                <>
                  <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
                    {item.label}
                  </p>
                  <p className="mt-2 break-words text-sm font-semibold leading-5 text-white">
                    {item.value}
                  </p>
                  {item.secondary ? (
                    <p className="mt-1 text-xs font-medium leading-5 text-zinc-400">
                      {item.secondary}
                    </p>
                  ) : null}
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={cardClasses}
                  rel="noreferrer"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                >
                  {content}
                </a>
              ) : (
                <article key={item.label} className={cardClasses}>
                  {content}
                </article>
              );
            })}

            <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-cyan-950/10 sm:col-span-2">
              <h2 className="text-sm font-semibold text-white">
                What Happens Next?
              </h2>
              <div className="mt-3 space-y-2">
                {nextSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative flex gap-3 rounded-xl border border-white/10 bg-black/25 px-3 py-2.5"
                  >
                    <div className="relative flex shrink-0 flex-col items-center">
                      <span className="flex size-7 items-center justify-center rounded-full bg-cyan-300 text-xs font-bold text-black">
                        {index + 1}
                      </span>
                      {index < nextSteps.length - 1 ? (
                        <span className="mt-1 h-5 w-px bg-cyan-300/25" />
                      ) : null}
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] p-4 shadow-lg shadow-cyan-950/10 sm:col-span-2">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-sm font-semibold text-white">
                  Need Urgent Assistance?
                </h2>
                <a
                  href="https://wa.me/918147722626"
                  className="inline-flex justify-center rounded-full bg-cyan-400 px-4 py-2 text-xs font-bold text-black shadow-[0_0_22px_rgba(34,211,238,0.22)] transition duration-200 hover:bg-cyan-300"
                  rel="noreferrer"
                  target="_blank"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </article>
          </aside>
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1400px] px-4 pb-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_48%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(34,211,238,0.05))] px-5 py-6 text-center shadow-2xl shadow-cyan-950/30 sm:px-8 sm:py-8">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Need content every month?
            </h2>
            <p className="mt-3 text-lg leading-7 text-zinc-300">
              Ask us about monthly creative packages.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
