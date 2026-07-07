export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3a2a08_0%,#000_55%)]" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl">
          <img
            src="/zone7-logo.png"
            alt="Zone 7 Logo"
            className="mx-auto mb-8 w-64 rounded-2xl bg-white p-6 shadow-2xl md:w-80"
          />

          <p className="mb-4 tracking-[0.45em] text-yellow-400">
            FOOD • DRINKS • EVENTS
          </p>

          <h1 className="mb-6 text-5xl font-black md:text-7xl">
            Welcome to Zone 7
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">
            A premium spot for great food, refreshing drinks, events, music,
            and unforgettable moments in Mbuya.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#events"
              className="rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
            >
              View Events
            </a>

            <a
              href="#menu"
              className="rounded-full border border-yellow-500 px-8 py-4 font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              Explore Menu
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
              About Us
            </p>

            <h2 className="mb-6 text-4xl font-black md:text-5xl">
              Food, drinks and events in one place.
            </h2>

            <p className="text-lg leading-8 text-gray-300">
              Zone 7 brings together delicious meals, chilled drinks, music,
              entertainment, and a relaxed atmosphere for friends, families,
              and groups looking for a memorable experience.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-500/30 bg-white/5 p-8 shadow-2xl">
            <h3 className="mb-4 text-2xl font-bold text-yellow-400">
              Why Visit Zone 7?
            </h3>

            <div className="space-y-4 text-gray-300">
              <p>🍽️ Fresh food and tasty bites</p>
              <p>🍹 Drinks, cocktails and milkshakes</p>
              <p>🎶 Events, music and entertainment</p>
              <p>📍 Located in Mbuya, Kampala</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section id="menu" className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            Menu
          </p>

          <h2 className="mb-12 text-4xl font-black md:text-5xl">
            Explore our favourites
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Breakfast",
              "Burgers",
              "Grills",
              "Curries",
              "Milkshakes",
              "Cocktails",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-yellow-500/20 bg-black p-8 transition hover:-translate-y-1 hover:border-yellow-400"
              >
                <h3 className="mb-3 text-2xl font-bold text-yellow-400">
                  {item}
                </h3>
                <p className="text-gray-400">
                  Enjoy carefully prepared {item.toLowerCase()} at Zone 7.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            Events
          </p>

          <h2 className="mb-12 text-4xl font-black md:text-5xl">
            Upcoming experiences
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Friday Live Band",
                time: "Every Friday",
                desc: "Good food, live music and weekend vibes.",
              },
              {
                title: "DJ Saturday",
                time: "Every Saturday",
                desc: "Afrobeats, Amapiano, Dancehall and party energy.",
              },
              {
                title: "Special Nights",
                time: "Coming Soon",
                desc: "Watch this space for offers and themed events.",
              },
            ].map((event) => (
              <div
                key={event.title}
                className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8"
              >
                <p className="mb-3 text-sm text-yellow-400">{event.time}</p>
                <h3 className="mb-3 text-2xl font-bold">{event.title}</h3>
                <p className="text-gray-400">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            Gallery
          </p>

          <h2 className="mb-12 text-4xl font-black md:text-5xl">
            Moments at Zone 7
          </h2>

          <div className="grid gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((box) => (
              <div
                key={box}
                className="flex h-56 items-center justify-center rounded-3xl border border-yellow-500/20 bg-black text-gray-500"
              >
                Image Slot
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            Visit Us
          </p>

          <h2 className="mb-6 text-4xl font-black md:text-5xl">
            Come through to Zone 7
          </h2>

          <p className="mb-8 text-gray-300">
            Mbuya, Kampala • Food • Drinks • Events
          </p>

          <a
            href="https://wa.me/256771753680"
            className="inline-block rounded-full bg-yellow-500 px-10 py-4 font-bold text-black transition hover:bg-yellow-400"
          >
            Contact on WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-yellow-500/20 px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zone 7. Website by Spotora.
      </footer>
    </main>
  );
}
