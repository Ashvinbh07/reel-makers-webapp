"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
];

const mobileNavLinks = [...navLinks, { label: "Contact", href: "/contact" }];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuContainerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) firstLinkRef.current?.focus();
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div ref={menuContainerRef} className="relative">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex min-h-20 w-full max-w-[1600px] items-center justify-between px-5 sm:px-6 lg:px-10"
        >
          <Link href="/" className="group flex items-center gap-5">
            <span
              aria-hidden="true"
              className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-cyan-200/35 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(34,211,238,0.14)_44%,rgba(4,8,10,0.92)_100%)] shadow-[0_0_34px_rgba(34,211,238,0.22),inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 group-hover:border-cyan-100/60 group-hover:shadow-[0_0_46px_rgba(34,211,238,0.32),inset_0_1px_0_rgba(255,255,255,0.24)]"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.22),transparent_34%),radial-gradient(circle_at_64%_76%,rgba(34,211,238,0.24),transparent_52%)]" />
              <span className="relative text-[22px] font-black leading-none tracking-[0.01em] text-cyan-50 drop-shadow-[0_0_14px_rgba(103,232,249,0.56)]">
                RM
              </span>
            </span>
            <span className="hidden flex-col gap-1.5 leading-none sm:flex">
              <span className="text-sm font-semibold uppercase tracking-[0.26em] text-white">
                Reel Makers
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-cyan-200/65">
                AI Creative Studio
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition duration-200 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full border border-cyan-300/40 bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_28px_rgba(34,211,238,0.28)] transition duration-200 hover:bg-white hover:shadow-[0_0_36px_rgba(255,255,255,0.24)] sm:block"
            >
              Contact
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="grid size-11 place-items-center rounded-xl border border-cyan-200/30 bg-white/[0.05] text-cyan-50 shadow-[0_0_24px_rgba(34,211,238,0.14)] transition hover:border-cyan-200/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 lg:hidden"
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              {isMenuOpen ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.18, ease: "easeOut" }}
              className="absolute inset-x-4 top-full overflow-hidden rounded-2xl border border-cyan-200/25 bg-zinc-950/95 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.55),0_0_36px_rgba(34,211,238,0.16)] backdrop-blur-xl sm:inset-x-6 lg:hidden"
            >
              <ul className="grid gap-1">
                {mobileNavLinks.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-xl px-5 py-3.5 text-base font-medium text-zinc-200 transition hover:bg-cyan-300/10 hover:text-cyan-100 focus-visible:bg-cyan-300/10 focus-visible:text-cyan-100 focus-visible:outline-2 focus-visible:outline-cyan-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
