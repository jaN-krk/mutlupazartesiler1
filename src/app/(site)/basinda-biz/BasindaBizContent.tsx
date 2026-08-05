"use client";

import { Icon } from "@iconify/react";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@mutlu.pazartesiler",
    href: "https://www.instagram.com/mutlu.pazartesiler/",
    description: "İlham verici içerikler ve eğitim kareleri",
    icon: "mdi:instagram",
    iconBg: "bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400",
  },
  {
    name: "LinkedIn",
    handle: "Mutlu Pazartesiler",
    href: "https://www.linkedin.com/company/mutlupazartesiler/posts/?feedView=all",
    description: "Profesyonel güncellemeler ve iş dünyası paylaşımları",
    icon: "mdi:linkedin",
    iconBg: "bg-[#0A66C2]",
  },
  {
    name: "YouTube",
    handle: "@MutluPazartesiler",
    href: "https://www.youtube.com/@MutluPazartesiler",
    description: "Eğitim videoları ve kanal içerikleri",
    icon: "mdi:youtube",
    iconBg: "bg-[#FF0000]",
  },
];

const BasindaBizContent = () => {
  return (
    <section className="bg-white dark:bg-darkmode py-14 md:py-20">
      <div className="container mx-auto lg:max-w-6xl md:max-w-screen-md px-4">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-orange-500/5 dark:from-primary/15 dark:via-darklight dark:to-orange-500/10 shadow-xl shadow-primary/5">
          <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 left-0 w-56 h-56 rounded-full bg-orange-400/10 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 items-center">
            <div className="lg:col-span-5 flex flex-col">
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-primary text-white px-3.5 py-1.5 text-xs font-semibold tracking-wide mb-5 shadow-sm shadow-primary/25">
                <Icon icon="mdi:newspaper-variant-outline" width="16" height="16" />
                Basında Biz
              </span>
              <h2 className="font-semibold md:text-3xl sm:text-2xl text-xl text-black dark:text-white leading-tight mb-4">
                Bizi yakından tanıyın
              </h2>
              <p className="text-black/60 dark:text-white/60 leading-relaxed mb-7 max-w-md text-sm sm:text-base">
                Mutlu Pazartesiler’i videolarımız ve sosyal medya paylaşımlarımızla daha yakından keşfedin. Güncel içeriklerimiz ve eğitim dünyasından karelerle yanınızdayız.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href="https://www.youtube.com/@MutluPazartesiler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF0000] hover:bg-[#e00000] text-white px-6 py-3 text-sm font-semibold transition-colors shadow-md shadow-red-500/20"
                >
                  <Icon icon="mdi:youtube" width="20" height="20" />
                  YouTube kanalına git
                </a>
                <a
                  href="https://www.youtube.com/watch?v=EdxWAEGKaaU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 text-sm font-semibold transition-colors"
                >
                  Videoyu izle
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/15 ring-1 ring-black/5 dark:ring-white/10">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/EdxWAEGKaaU"
                    title="Mutlu Pazartesiler - Basında Biz"
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

        <div className="mt-14 md:mt-16">
          <div className="text-center mb-8">
            <h2 className="font-semibold md:text-3xl sm:text-2xl text-xl text-black dark:text-white mb-3">
              Sosyal medya hesaplarımız
            </h2>
            <p className="text-black/55 dark:text-white/55 max-w-2xl mx-auto text-sm sm:text-base">
              Güncel paylaşımlarımız ve içeriklerimiz için bizi takip edin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-black/8 dark:border-white/10 bg-white dark:bg-darklight p-6 shadow-sm hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg} shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    <Icon icon={item.icon} width="22" height="22" className="text-white" />
                  </span>
                  <Icon
                    icon="solar:arrow-right-up-linear"
                    width="22"
                    height="22"
                    className="text-black/30 dark:text-white/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white">{item.name}</h3>
                <p className="text-sm text-black/45 dark:text-white/45 mt-1 mb-3">{item.handle}</p>
                <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed mt-auto">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasindaBizContent;
