import logo from "./assets/logo.png";

const galleryImages = Object.entries(
  import.meta.glob<{ default: string }>("./assets/cake*.jpeg", { eager: true })
)
.sort(([a], [b]) => {
  const aMatch = a.match(/cake(\d+)\.jpeg$/);
  const bMatch = b.match(/cake(\d+)\.jpeg$/);
  const aNumber = aMatch ? Number(aMatch[1]) : 0;
  const bNumber = bMatch ? Number(bMatch[1]) : 0;
  return aNumber - bNumber;
})
.map(([, module]) => module.default);

export default function ShortcakesAndTreats() {
  return (
    <div className="relative min-h-screen scroll-smooth overflow-hidden bg-[radial-gradient(circle_at_top_left,_#ffd6e9_0%,_#fff4f8_28%,_#fff9ef_56%,_#fffaf8_100%)] text-[#553449] font-['Manrope']">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700&display=swap');
      `}</style>
      <div className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full bg-[#ffbad8]/45 blur-3xl" />
      <div className="pointer-events-none absolute top-20 -right-24 h-96 w-96 rounded-full bg-[#ffd9a1]/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ffcfe7]/35 blur-3xl" />

      {/* Header */}
      <header id="home" className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 pb-10 pt-12 text-center">
        <img
          src={logo}
          alt="Shortcakes and Treats logo"
          className="h-40 w-40 rounded-full border border-white/80 object-cover bg-white/90 shadow-[0_16px_38px_rgba(210,99,140,0.2)] md:h-48 md:w-48"
        />

        <h1 className="font-['Sora'] text-5xl font-semibold tracking-tight text-[#7b3d5a] md:text-6xl">
          Shortcakes and Treats
        </h1>
        <p className="max-w-xl text-base font-medium text-[#8c5570] md:text-lg">
          Sweet, handmade bakes made with love!
        </p>

        <nav aria-label="Page sections" className="mt-2 rounded-2xl border border-white/70 bg-white/60 p-2 shadow-[0_10px_26px_rgba(153,85,111,0.12)] backdrop-blur-md">
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {[
              { href: "#home", label: "Home" },
              { href: "#gallery", label: "Gallery" },
              { href: "#order", label: "Order" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-block rounded-xl border border-transparent bg-white px-4 py-2 text-sm font-semibold tracking-wide text-[#7b3d5a] shadow-sm transition hover:-translate-y-0.5 hover:border-[#ffd2e4] hover:bg-[#fff7fb]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Gallery */}
      <section id="gallery" className="relative mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-8 text-center font-['Sora'] text-4xl font-semibold tracking-tight text-[#7b3d5a]">Gallery</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Cake ${i + 1}`}
              className="aspect-square rounded-[1.65rem] border border-white/90 object-cover shadow-[0_14px_30px_rgba(146,76,105,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_rgba(146,76,105,0.24)]"
            />
          ))}
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-[2rem] border border-white/80 bg-white/70 p-10 text-center shadow-[0_18px_36px_rgba(145,80,107,0.16)] backdrop-blur-md md:p-14">
          <h2 className="mb-6 font-['Sora'] text-4xl font-semibold tracking-tight text-[#7b3d5a]">Place an Order</h2>
          <p className="mb-10 text-lg text-[#8c5570]">
            Treat yourself or someone special with a custom bake!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf1cBlGCGx8ZFEGwnD84FV2Sh3_SfPPeluEGHuoReVxUCVo9A/viewform?usp=publish-editor"
            className="inline-block rounded-xl bg-gradient-to-r from-[#ff7eb3] via-[#ff90bd] to-[#ff9f88] px-12 py-4 font-semibold tracking-wide text-white shadow-[0_14px_26px_rgba(231,107,156,0.34)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
          >
            Place an Order
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-12 text-center">
        <h2 className="mb-6 font-['Sora'] text-4xl font-semibold tracking-tight text-[#7b3d5a]">Contact</h2>

        <div className="flex flex-col items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-xl border border-white/80 bg-white/75 px-6 py-3 shadow-[0_8px_20px_rgba(153,85,111,0.13)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
          >
            <span className="text-lg font-semibold text-[#7b3d5a]">@shortcakesandtreats</span>
          </a>

          <a
            href="mailto:shortcakesandtreats@gmail.com"
            className="inline-flex items-center gap-3 rounded-xl border border-white/80 bg-white/75 px-6 py-3 shadow-[0_8px_20px_rgba(153,85,111,0.13)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
          >
            <span className="text-lg font-semibold text-[#7b3d5a]">shortcakesandtreats@gmail.com</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm font-medium text-[#8c5570]">
        © 2026 Shortcakes and Treats | Website by Nick Bui
      </footer>
    </div>
  );
}
