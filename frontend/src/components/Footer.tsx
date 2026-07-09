"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const phoneDisplay = "+91 81477 22626";
const whatsappUrl = "https://wa.me/8147722626";

const quickLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/reel_makers.rm", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/reelmakersrm", icon: LinkedInIcon },
  { label: "YouTube", href: "https://www.youtube.com/@reelmakers", icon: YouTubeIcon },
  { label: "Facebook", href: "https://www.facebook.com/reelmakers", icon: FacebookIcon },
  { label: "X", href: "https://x.com/reelmakersrm", icon: XIcon },
];

const countries =
  "United States (USA), United Kingdom (UK), Australia, Qatar, Oman, France, Germany, Spain, Russia, China, Canada, Georgia, Morocco, Mexico, Singapore, Poland, Denmark, Japan, India";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(20,184,166,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_38%)]" />

      <motion.section
        className="relative mx-auto w-full max-w-[1400px] px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pb-14 lg:pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={fadeUp}
        aria-labelledby="footer-cta-title"
      >
        <div className="grid items-center gap-8 rounded-[2rem] border border-cyan-300/20 bg-white/[0.045] p-6 shadow-[0_24px_90px_rgba(8,145,178,0.14)] backdrop-blur-2xl sm:p-8 lg:grid-cols-[1fr_auto] lg:gap-12 lg:p-10">
          <div className="max-w-3xl text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
              Premium AI Creative Studio
            </p>
            <h2
              id="footer-cta-title"
              className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              Let&apos;s Create Something Amazing Together
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              Talk directly with our creative team and let&apos;s discuss your
              next AI-powered reel, campaign, poster or promotional video.
            </p>
          </div>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Reel Makers on WhatsApp"
            className="group relative mx-auto flex w-full max-w-[430px] items-center justify-center gap-4 overflow-hidden rounded-full border border-white/25 bg-[linear-gradient(135deg,rgba(45,212,191,0.95),rgba(34,211,238,0.92),rgba(14,116,144,0.92))] px-6 py-5 text-white shadow-[0_0_42px_rgba(34,211,238,0.34),inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#050505] sm:px-8 sm:py-6 lg:mx-0"
            whileHover={{
              y: -6,
              boxShadow:
                "0 0 72px rgba(34,211,238,0.55), inset 0 1px 0 rgba(255,255,255,0.42)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.45),transparent_32%),linear-gradient(90deg,rgba(255,255,255,0.14),transparent_42%)] opacity-80" />
            <span className="relative grid size-12 shrink-0 place-items-center rounded-full bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
              <WhatsAppIcon className="size-7" />
            </span>
            <span className="relative text-xl font-bold leading-none sm:text-2xl">
              {phoneDisplay}
            </span>
          </motion.a>
        </div>
      </motion.section>

      <motion.div
        className="relative mx-auto w-full max-w-[1400px] px-4 pb-8 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid gap-10 border-t border-cyan-300/15 pt-8 md:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] md:gap-8 lg:gap-16">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            {/* <Link
              href="/"
              aria-label="Reel Makers home"
              className="mx-auto flex w-fit items-center gap-4 md:mx-0"
            >
              <span
                aria-hidden="true"
                className="relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl border border-cyan-200/35 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(34,211,238,0.14)_44%,rgba(4,8,10,0.92)_100%)] shadow-[0_0_38px_rgba(34,211,238,0.24),inset_0_1px_0_rgba(255,255,255,0.18)]"
              >
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.22),transparent_34%),radial-gradient(circle_at_64%_76%,rgba(34,211,238,0.24),transparent_52%)]" />
                <span className="relative text-2xl font-black leading-none text-cyan-50 drop-shadow-[0_0_14px_rgba(103,232,249,0.56)]">
                  RM
                </span>
              </span>
              <span className="flex flex-col gap-1.5 leading-none">
                <span className="text-sm font-semibold uppercase tracking-[0.26em] text-white">
                  Reel Makers
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-cyan-200/65">
                  AI Creative Studio
                </span>
              </span>
            </Link> */}

            <div className="mt-5 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold uppercase text-white">
                  REEL MAKERS
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-400 md:mx-0">
                  AI-powered creative studio for reels, ads, scripts, posters
                  and videos.
                </p>
              </div>

              <div className="grid gap-5 text-sm leading-6 text-zinc-400 sm:grid-cols-2">
                <div>
                  <p className="font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    India
                  </p>
                  <address className="mt-2 not-italic">
                    Vijay Nagar, Scheme No. 54
                    <br />
                    Near Vijay Nagar
                    <br />
                    Indore, Madhya Pradesh - 452010
                  </address>
                </div>

                <div>
                  <p className="font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Virtually serving
                  </p>
                  <p className="mt-2">{countries}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <ContactBlock
                  label="Mobile"
                  value="📱 +91 81477 22626"
                  meta="MON-FRI | 9AM-6PM"
                  href={whatsappUrl}
                  ariaLabel="Contact Reel Makers by mobile on WhatsApp"
                />
                <ContactBlock
                  label="Email"
                  value="✉ admin@reelmakersrm.org"
                  meta="ONLINE SUPPORT"
                  href="mailto:admin@reelmakersrm.org"
                  ariaLabel="Email Reel Makers support"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:justify-self-end"
          >
            <div className="mx-auto max-w-sm text-center md:mx-0 md:text-left">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <nav
                aria-label="Footer quick links"
                className="mt-5 grid gap-3"
              >
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-label={link.label}
                    className="group flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/[0.08] hover:text-cyan-100 hover:shadow-[0_0_26px_rgba(34,211,238,0.12)] focus:outline-none focus:ring-2 focus:ring-cyan-300/60 md:justify-between"
                  >
                    <span>{link.label}</span>
                    <span
                      aria-hidden="true"
                      className="text-cyan-300 opacity-60 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="mt-9">
                <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow Reel Makers on ${label}`}
                      className="grid size-12 place-items-center rounded-full border border-cyan-200/20 bg-white/[0.055] text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/[0.12] hover:text-white hover:shadow-[0_0_28px_rgba(34,211,238,0.26)] focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                      whileHover={{ scale: 1.08, y: -3 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Icon className="size-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © 2026 Reel Makers.
            <br className="sm:hidden" /> All Rights Reserved.
          </p>
          <p>Built with ❤️ in India by Reel Makers</p>
        </div>
      </motion.div>
    </footer>
  );
}

function ContactBlock({
  label,
  value,
  meta,
  href,
  ariaLabel,
}: {
  label: string;
  value: string;
  meta: string;
  href: string;
  ariaLabel: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className="group rounded-2xl border border-cyan-300/18 bg-white/[0.045] p-4 text-left shadow-[0_18px_48px_rgba(8,145,178,0.08)] backdrop-blur-xl transition duration-300 hover:border-cyan-300/45 hover:bg-cyan-300/[0.07] hover:shadow-[0_22px_60px_rgba(34,211,238,0.14)] focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
        {label}
      </p>
      <p className="mt-3 text-base font-semibold text-white">{value}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 transition duration-300 group-hover:text-zinc-400">
        {meta}
      </p>
    </motion.a>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .19 5.33.19 11.89c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.78 1.47h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.23-6.16-3.46-8.45ZM12.09 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.22-3.74.98 1-3.64-.24-.38a9.84 9.84 0 0 1-1.5-5.26c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c-.01 5.45-4.45 9.89-9.9 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.34 8.9H2.23V21h3.11V8.9ZM3.79 3a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM21.75 14.35c0-3.25-1.74-5.35-4.57-5.35-1.55 0-2.65.67-3.27 1.53V8.9h-3.1V21h3.1v-6.06c0-1.6.74-3.12 2.27-3.12 1.48 0 2.45.9 2.45 3.21V21h3.12v-6.65Z" />
    </svg>
  );
}

function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a3.02 3.02 0 0 0-2.13-2.13C17.59 4.57 12 4.57 12 4.57s-5.59 0-7.47.5A3.02 3.02 0 0 0 2.4 7.2 31.52 31.52 0 0 0 1.9 12c0 1.64.17 3.28.5 4.8.28 1.04 1.1 1.85 2.13 2.13 1.88.5 7.47.5 7.47.5s5.59 0 7.47-.5a3.02 3.02 0 0 0 2.13-2.13c.33-1.52.5-3.16.5-4.8 0-1.64-.17-3.28-.5-4.8ZM9.95 15.54V8.46L16.09 12l-6.14 3.54Z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.2 8.24V6.8c0-.7.47-.86.8-.86h2.04V2.82L14.23 2.8c-3.12 0-3.83 2.34-3.83 3.83v1.61H8.22v3.22h2.18V21h3.8v-9.54h2.58l.34-3.22H14.2Z" />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.8 10.47 21.05 2h-1.72l-6.3 7.36L8 2H2.2l7.6 11.08L2.2 22h1.72l6.64-7.76L15.87 22h5.8l-7.87-11.53Zm-2.35 2.74-.77-1.1L4.55 3.3h2.63l4.95 7.1.77 1.1 6.44 9.24H16.7l-5.25-7.53Z" />
    </svg>
  );
}
