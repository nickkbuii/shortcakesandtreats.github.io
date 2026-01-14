import React from "react";

export default function ShortcakesAndTreats() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7ee] to-[#fde2e8] text-[#6b3f2a] font-[Poppins]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Quicksand:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Header */}
      <header className="py-20 text-center flex flex-col items-center gap-6">
        {/* Logo Placeholder */}
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center text-base text-[#c9a19a]">
          Logo
        </div>

        <h1 className="font-['Quicksand'] font-semibold text-5xl md:text-6xl tracking-wide">
          Shortcakes and Treats
        </h1>
        <p className="text-lg text-[#8a5a44]">
          Sweet, handmade bakes made with love
        </p>
      </header>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-['Quicksand'] font-semibold text-4xl text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur rounded-3xl aspect-square flex items-center justify-center text-sm text-[#c9a19a] shadow-sm hover:shadow-md transition"
            >
              Photo
            </div>
          ))}
        </div>
      </section>

      {/* Order Section */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-white/80 backdrop-blur rounded-[2.5rem] p-14 text-center shadow-md">
          <h2 className="font-['Quicksand'] font-semibold text-4xl mb-6">Place an Order</h2>
          <p className="text-lg mb-10 text-[#8a5a44]">
            Treat yourself or someone special with a custom bake
          </p>
          <a
            href="#"
            className="inline-block bg-[#f7b7c6] hover:bg-[#f4a8bb] text-white px-12 py-4 rounded-full font-medium tracking-wide transition"
          >
            Place an Order
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20 text-center">
        <h2 className="font-['Quicksand'] font-semibold text-4xl mb-6">Contact</h2>
        <p className="mb-8 text-[#8a5a44]"></p>

        <div className="flex flex-col items-center gap-4">
          {/* Instagram */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-white/70 backdrop-blur px-6 py-3 rounded-full shadow-sm hover:shadow-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f7b7c6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span className="text-lg font-medium">@shortcakesandtreats</span>
          </a>

          {/* Email */}
          <a
            href="mailto:shortcakesandtreats@gmail.com"
            className="inline-flex items-center gap-3 bg-white/70 backdrop-blur px-6 py-3 rounded-full shadow-sm hover:shadow-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f7b7c6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="text-lg font-medium">shortcakesandtreats@gmail.com</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-[#8a5a44]">
        © 2026 Shortcakes and Treats
      </footer>
    </div>
  );
}