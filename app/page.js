const menuItems = [
  "Breakfast",
  "Burgers",
  "Grills",
  "Curries",
  "Pastas",
  "Cocktails",
];

const events = [
  {
    title: "Live Band Night",
    day: "Friday",
    desc: "Good music, great food, and weekend energy.",
  },
  {
    title: "DJ Saturday",
    day: "Saturday",
    desc: "Afrobeats, Amapiano, Dancehall and party vibes.",
  },
  {
    title: "Private Events",
    day: "Available",
    desc: "Host birthdays, dinners, meetups and special nights.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-yellow-500/20 bg-black/80 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/zone7-logo.png"
              alt="Zone 7 Logo"
              className="h-12 w-12 rounded-full bg-white object-contain p-1"
            />
            <span className="text-xl font-black tracking-wide text-yellow-400">
              ZONE 7
            </span>
          </a>

          <div className="hidden gap-8 text-sm font-semibold text-gray-300 md:flex">
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#menu" className="hover:text-yellow-400">Menu</a>
            <a href="#events" className="hover:text-yellow-400">Events</a>
            <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4a3509_0%,#111_35%,#000_70%)]" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-5xl">
          <img
            src="/zone7-logo.png"
            alt="Zone 7 Logo"
            className="mx-auto mb-8 w-56 rounded-3xl bg-white p-5 shadow-2xl shadow-yellow-500/20 md:w-72"
          />

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.45em] text-yellow-400">
            Food • Drinks • Events
          </p>

          <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
            Experience Zone 7
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
            A premium spot in Mbuya for delicious food, chilled drinks,
            entertainment, events, and unforgettable moments.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#events"
              className="rounded-full bg-yellow-500 px-8 py-4 font-black text-black transition hover:bg-yellow-400"
            >
              View Events
            </a>

            <a
              href="#menu"
              className="rounded-full border border-yellow-500 px-8 py-4 font-black text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              Explore Menu
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
              About Zone 7
            </p>

            <h2 className="mb-6 text-4xl font-black md:text-6xl">
              Where food, music and good company meet.
            </h2>

            <p className="text-lg leading-8 text-gray-300">
              Zone 7 is a vibrant restaurant and entertainment spot designed
              for people who enjoy great meals, refreshing drinks, live moments,
              and a relaxed atmosphere.
            </p>
          </div>

          <div className="rounded-[2rem] border border-yellow-500/20 bg-white/5 p-8 shadow-2xl">
            <h3 className="mb-6 text-2xl font-black text-yellow-400">
              Why people love Zone 7
            </h3>

            <div className="space-y-5 text-lg text-gray-300">
              <p>🍽️ Delicious meals and tasty bites</p>
              <p>🍹 Cocktails, milkshakes and drinks</p>
              <p>🎶 Music, events and entertainment</p>
              <p>📍 Located in Mbuya, Kampala</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            Menu Preview
          </p>

          <h2 className="mb-12 text-4xl font-black md:text-6xl">
            Taste the experience
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {menuItems.map((item) => (
              <div
                key={item}
                className="group rounded-[2rem] border border-yellow-500/20 bg-black p-8 transition hover:-translate-y-2 hover:border-yellow-400"
              >
                <div className="mb-6 flex h-40 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-500/20 to-black text-gray-500">
                  Image Slot
                </div>

                <h3 className="mb-3 text-2xl font-black text-yellow-400">
                  {item}
                </h3>

                <p className="text-gray-400">
                  Explore our selection of {item.toLowerCase()} prepared for
                  your perfect Zone 7 moment.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            Events
          </p>

          <h2 className="mb-12 text-4xl font-black md:text-6xl">
            What’s happening at Zone 7
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-[2rem] border border-yellow-500/20 bg-white/5 p-8 transition hover:bg-white/10"
              >
                <p className="mb-4 font-bold text-yellow-400">{event.day}</p>
                <h3 className="mb-4 text-3xl font-black">{event.title}</h3>
                <p className="leading-7 text-gray-400">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            Gallery
          </p>

          <h2 className="mb-12 text-4xl font-black md:text-6xl">
            Moments worth sharing
          </h2>

          <div className="grid gap-4 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="flex h-56 items-center justify-center rounded-3xl border border-yellow-500/20 bg-black text-gray-500"
              >
                Image Slot
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-yellow-500/20 bg-white/5 p-10 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            Visit Us
          </p>

          <h2 className="mb-6 text-4xl font-black md:text-6xl">
            Come through to Zone 7
          </h2>

          <p className="mb-8 text-lg text-gray-300">
            Mbuya, Kampala • Food • Drinks • Events
          </p>

          <a
            href="https://wa.me/256771753680"
            className="inline-block rounded-full bg-yellow-500 px-10 py-4 font-black text-black transition hover:bg-yellow-400"
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
