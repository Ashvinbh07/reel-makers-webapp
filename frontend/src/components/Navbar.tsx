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
        <Link href="/" className="group flex items-center gap-4">
          <span className="relative grid size-12 place-items-center overflow-hidden rounded-xl border border-cyan-300/30 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(34,211,238,0.1),rgba(0,0,0,0.1))] shadow-[0_0_34px_rgba(34,211,238,0.2)] transition duration-300 group-hover:border-cyan-200/55 group-hover:shadow-[0_0_42px_rgba(34,211,238,0.3)]">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.18),transparent_58%)]" />
            <span className="relative text-[17px] font-black leading-none tracking-[-0.04em] text-white">
              RM
            </span>
          </span>
          <span className="flex flex-col gap-1.5 leading-none">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
              Reel Makers
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-200/60">
              AI Content Studio
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
