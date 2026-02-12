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

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#gallery", label: "Gallery" },
  { href: "#order", label: "Order" },
  { href: "#contact", label: "Contact" },
];

export default function ShortcakesAndTreats() {
  return (
    <div className="relative min-h-screen scroll-smooth overflow-hidden bg-[radial-gradient(circle_at_top_left,_#ffd6e9_0%,_#fff4f8_28%,_#fff9ef_56%,_#fffaf8_100%)] text-[#553449] font-['Manrope']">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700&display=swap');
      `}</style>
      <div className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full bg-[#ffbad8]/45 blur-3xl" />
      <div className="pointer-events-none absolute top-20 -right-24 h-96 w-96 rounded-full bg-[#ffd9a1]/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ffcfe7]/35 blur-3xl" />

      <div className="sticky top-0 z-50 px-3 pt-3">
        <nav
          aria-label="Page sections"
          className="mx-auto w-fit rounded-2xl border border-white/70 bg-white/70 p-2 shadow-[0_10px_26px_rgba(153,85,111,0.12)] backdrop-blur-md"
        >
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-block rounded-xl border border-transparent bg-white px-[clamp(0.8rem,2vw,1rem)] py-[clamp(0.45rem,1.3vw,0.6rem)] text-[clamp(0.8rem,1.8vw,0.9rem)] font-semibold tracking-wide text-[#7b3d5a] shadow-sm transition hover:-translate-y-0.5 hover:border-[#ffd2e4] hover:bg-[#fff7fb]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Header */}
      <header id="home" className="relative mx-auto flex w-[min(92vw,72rem)] flex-col items-center gap-[clamp(1rem,2vw,1.5rem)] px-[clamp(0.75rem,2.2vw,1.5rem)] pb-[clamp(2rem,4vw,2.75rem)] pt-[clamp(2rem,5vw,3.5rem)] text-center">
        <img
          src={logo}
          alt="Shortcakes and Treats logo"
          className="h-[clamp(8rem,22vw,12rem)] w-[clamp(8rem,22vw,12rem)] rounded-full border border-white/80 object-cover bg-white/90 shadow-[0_16px_38px_rgba(210,99,140,0.2)]"
        />

        <h1 className="font-['Sora'] text-[clamp(2rem,6.5vw,3.75rem)] font-semibold tracking-tight text-[#7b3d5a]">
          Shortcakes and Treats
        </h1>
        <p className="max-w-[38rem] text-[clamp(0.98rem,2.2vw,1.15rem)] font-medium text-[#8c5570]">
          Sweet, handmade bakes made with love!
        </p>

      </header>

      {/* Gallery */}
      <section id="gallery" className="relative mx-auto w-[min(94vw,76rem)] px-[clamp(0.5rem,2vw,1rem)] py-[clamp(2rem,4vw,3rem)]">
        <h2 className="mb-[clamp(1.25rem,3vw,2rem)] text-center font-['Sora'] text-[clamp(1.8rem,4.8vw,2.3rem)] font-semibold tracking-tight text-[#7b3d5a]">
          Gallery
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(0.8rem,2vw,1.25rem)]">
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
      <section id="order" className="mx-auto w-[min(92vw,56rem)] px-[clamp(0.75rem,2vw,1.25rem)] py-[clamp(2rem,4vw,3rem)]">
        <div className="rounded-[2rem] border border-white/80 bg-white/70 p-[clamp(1.5rem,4vw,3.5rem)] text-center shadow-[0_18px_36px_rgba(145,80,107,0.16)] backdrop-blur-md">
          <h2 className="mb-[clamp(1rem,2.5vw,1.5rem)] font-['Sora'] text-[clamp(1.8rem,4.8vw,2.3rem)] font-semibold tracking-tight text-[#7b3d5a]">
            Place an Order
          </h2>
          <p className="mb-[clamp(1.5rem,4vw,2.5rem)] text-[clamp(1rem,2.4vw,1.15rem)] text-[#8c5570]">
            Treat yourself or someone special with a custom bake!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf1cBlGCGx8ZFEGwnD84FV2Sh3_SfPPeluEGHuoReVxUCVo9A/viewform?usp=publish-editor"
            className="inline-block rounded-xl bg-gradient-to-r from-[#ff7eb3] via-[#ff90bd] to-[#ff9f88] px-[clamp(1.5rem,4.5vw,3rem)] py-[clamp(0.8rem,1.8vw,1rem)] text-[clamp(0.95rem,2vw,1rem)] font-semibold tracking-wide text-white shadow-[0_14px_26px_rgba(231,107,156,0.34)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
          >
            Place an Order
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto w-[min(92vw,56rem)] px-[clamp(0.75rem,2vw,1.25rem)] py-[clamp(2rem,4vw,3rem)] text-center">
        <h2 className="mb-[clamp(1rem,2.5vw,1.5rem)] font-['Sora'] text-[clamp(1.8rem,4.8vw,2.3rem)] font-semibold tracking-tight text-[#7b3d5a]">
          Contact
        </h2>

        <div className="flex flex-col items-center gap-4">
          <a
            href="#"
            className="inline-flex w-full max-w-[32rem] items-center justify-center gap-3 rounded-xl border border-white/80 bg-white/75 px-[clamp(1rem,3vw,1.5rem)] py-[clamp(0.7rem,2vw,0.9rem)] shadow-[0_8px_20px_rgba(153,85,111,0.13)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
          >
            <span className="text-[clamp(1rem,2.5vw,1.12rem)] font-semibold text-[#7b3d5a]">@shortcakesandtreats</span>
          </a>

          <a
            href="mailto:shortcakesandtreats@gmail.com"
            className="inline-flex w-full max-w-[32rem] items-center justify-center gap-3 rounded-xl border border-white/80 bg-white/75 px-[clamp(1rem,3vw,1.5rem)] py-[clamp(0.7rem,2vw,0.9rem)] shadow-[0_8px_20px_rgba(153,85,111,0.13)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
          >
            <span className="text-[clamp(1rem,2.5vw,1.12rem)] font-semibold text-[#7b3d5a]">
              shortcakesandtreats@gmail.com
            </span>
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
