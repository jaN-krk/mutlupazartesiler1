import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { referenceLogos } from "@/lib/referenceLogos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslarımız | Mutlu Pazartesiler",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Anasayfa" },
    { href: "/referanslar", text: "Referanslarımız" },
  ];

  return (
    <>
      <HeroSub
        title="Referanslarımız"
        description="Eğitim ve danışmanlık çalışmalarımızda yolumuzun kesiştiği markalar."
        breadcrumbLinks={breadcrumbLinks}
        titleClassName="md:text-5xl text-3xl"
      />

      <section className="bg-white dark:bg-darkmode py-16 md:py-20">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {referenceLogos.map((logo) => (
              <article
                key={logo.src}
                className="group flex min-h-[158px] flex-col items-center justify-between rounded-lg border border-black/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-white/10 dark:bg-darklight"
              >
                <div className="flex h-20 w-full items-center justify-center">
                  <img
                    src={`/images/refarnslar/${logo.src}`}
                    alt={logo.name}
                    className={`max-h-full object-contain transition-transform duration-300 group-hover:scale-105 ${
                      logo.size === "wide" ? "max-w-full" : "max-w-[78%]"
                    } ${logo.tone === "muted" ? "brightness-[0.28] contrast-[1.55]" : ""}`}
                  />
                </div>
                <h2 className="mt-4 text-center text-sm font-semibold text-black/75 dark:text-white/80">
                  {logo.name}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
