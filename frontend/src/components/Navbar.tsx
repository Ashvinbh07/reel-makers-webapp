import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-20 w-full max-w-[1600px] items-center justify-between px-5 sm:px-6 lg:px-10">
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
          <span className="flex flex-col gap-1.5 leading-none">
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
            className="rounded-full border border-cyan-300/40 bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_28px_rgba(34,211,238,0.28)] transition duration-200 hover:bg-white hover:shadow-[0_0_36px_rgba(255,255,255,0.24)]"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
