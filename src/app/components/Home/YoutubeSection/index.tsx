const YoutubeSection = () => {
  return (
    <section
      id="youtube"
      className="py-16 bg-[url('/images/plan/price-plan-background-icons.svg')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      <div className="container mx-auto lg:max-w-6xl md:max-w-screen-md px-4">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white/90 dark:bg-darklight/90 backdrop-blur-sm shadow-xl shadow-primary/5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-[#FF0000]/8 pointer-events-none" />
          <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-[#FF0000]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 left-0 w-56 h-56 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 items-center">
            <div className="lg:col-span-5 flex flex-col">
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#FF0000] text-white px-3.5 py-1.5 text-xs font-semibold tracking-wide mb-5 shadow-sm shadow-red-500/25">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.5v-7l6.3 3.5-6.3 3.5Z" />
                </svg>
                YouTube Kanalı
              </span>

              <h2 className="font-semibold md:text-4xl sm:text-3xl text-2xl text-black dark:text-white leading-tight mb-4">
                Videolarımızı izleyin
              </h2>
              <p className="text-black/60 dark:text-white/60 leading-relaxed mb-7 max-w-md">
                Eğitim ve danışmanlık dünyasına dair içeriklerimizi YouTube kanalımızda bulabilirsiniz. Abone olun, yeni videolardan haberdar olun.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href="https://www.youtube.com/@MutluPazartesiler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF0000] hover:bg-[#e00000] text-white px-6 py-3 text-sm font-semibold transition-colors shadow-md shadow-red-500/20"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.5v-7l6.3 3.5-6.3 3.5Z" />
                  </svg>
                  Kanala git
                </a>
                <a
                  href="https://www.youtube.com/watch?v=EdxWAEGKaaU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 text-sm font-semibold transition-colors"
                >
                  YouTube’da izle
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <p className="mt-5 text-xs text-black/45 dark:text-white/45">
                @MutluPazartesiler
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/15 ring-1 ring-black/5 dark:ring-white/10">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/40 via-transparent to-[#FF0000]/40 opacity-60 pointer-events-none" />
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/EdxWAEGKaaU"
                    title="Mutlu Pazartesiler YouTube Videosu"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;
