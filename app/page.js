const menuItems = [
  { title: "Breakfast", image: "/food/breakfast.jpg" },
  { title: "Burgers", image: "/food/burgers.jpg" },
  { title: "Grills", image: "/food/grills.jpg" },
  { title: "Curries", image: "/food/curries.jpg" },
  { title: "Pastas", image: "/food/pastas.jpg" },
  { title: "Cocktails", image: "/food/cocktails.jpg" },
];

const galleryImages = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
  "/gallery/gallery5.jpg",
  "/gallery/gallery6.jpg",
  "/gallery/gallery7.jpg",
  "/gallery/gallery8.jpg",
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
      {/* keep your NAV, HERO and ABOUT sections unchanged */}

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
                key={item.title}
                className="group rounded-[2rem] border border-yellow-500/20 bg-black p-8 transition hover:-translate-y-2 hover:border-yellow-400"
              >
                <div className="mb-6 h-40 overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-500/20 to-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="mb-3 text-2xl font-black text-yellow-400">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  Explore our selection of {item.title.toLowerCase()} prepared
                  for your perfect Zone 7 moment.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* keep your EVENTS section unchanged */}

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
            {galleryImages.map((image, index) => (
              <div
                key={image}
                className="h-56 overflow-hidden rounded-3xl border border-yellow-500/20 bg-black"
              >
                <img
                  src={image}
                  alt={`Zone 7 gallery image ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* keep your CONTACT and FOOTER sections unchanged */}
    </main>
  );
}
