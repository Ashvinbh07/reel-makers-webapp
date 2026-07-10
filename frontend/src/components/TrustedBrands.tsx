import Image from "next/image";

const brands = [
  { name: "Lumina", logo: "/brands/lumina.svg" },
  { name: "Vertex", logo: "/brands/vertex.svg" },
  { name: "Northstar", logo: "/brands/northstar.svg" },
  { name: "Pulse", logo: "/brands/pulse.svg" },
  { name: "Orbit", logo: "/brands/orbit.svg" },
  { name: "Aether", logo: "/brands/aether.svg" },
] as const;

function BrandRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="trusted-brands-row" aria-hidden={hidden || undefined}>
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="trusted-brand-item group"
          aria-label={`${brand.name} logo`}
          role={hidden ? undefined : "img"}
        >
          <Image
            src={brand.logo}
            alt={hidden ? "" : `${brand.name} logo`}
            width={180}
            height={56}
            className="trusted-brand-logo"
          />
        </div>
      ))}
    </div>
  );
}

export default function TrustedBrands() {
  return (
    <section
      className="mx-auto mt-14 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="trusted-brands-heading"
    >
      <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-black/45 py-12 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.10),transparent_65%)]" />

        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-300">
            TRUSTED BY
          </p>
          <h2
            id="trusted-brands-heading"
            className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
          >
            Brands That Trust Reel Makers
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
            We&apos;re proud to work with brands and businesses to create
            AI-powered reels, videos, promotional campaigns, posters and
            creative content.
          </p>
        </div>

        <div className="trusted-brands-marquee relative mt-10">
          <div className="trusted-brands-track">
            <BrandRow />
            <BrandRow hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
