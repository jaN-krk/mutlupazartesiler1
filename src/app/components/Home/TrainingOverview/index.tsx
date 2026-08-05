"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";

const cards = [
  {
    title: "KURUMSAL EĞİTİMLER",
    href: "#kurumsal-egitimler",
    icon: "mdi:office-building-outline",
    description:
      "Eğitimlerimizi, kurumların günlük iş akışında gerçekten işe yarayan, sonuç odaklı çözümlerle tasarlıyoruz. 30 yıllık deneyimimizle ekiplerinizin iletişimden yönetime tüm becerilerini ölçülebilir şekilde güçlendiren, sahaya doğrudan uygulanabilir yöntemler sunuyoruz.",
    gradient: "from-orange-500/90 to-primary/80",
  },
  {
    title: "BİREYSEL EĞİTİMLER",
    href: "#bireysel-egitimler",
    icon: "mdi:account-school-outline",
    description:
      "Bireysel eğitim ihtiyaçlarınız için 30 yıllık tecrübemizle yanınızdayız! “Bu çağ bilgi çağı ve ben kendime yatırım yapmak istiyorum” diyorsanız, tam size göre hazırlanan eğitim çözümlerimize göz atabilirsiniz.",
    gradient: "from-primary/80 to-orange-500/90",
  },
  {
    title: "SEÇME VE YERLEŞTİRME DESTEĞİ",
    href: "/hizmetlerimiz#secme-yerlestirme",
    icon: "mdi:account-search-outline",
    description:
      "Doğru pozisyonu doğru adayla buluşturuyoruz. Hizmet, tekstil, turizm ve çağrı merkezi sektörlerinde beyaz yaka işe alım süreçlerinizi hızlandırıyor; kurum kültürünüze uygun nitelikli adaylara ulaşmanıza destek oluyoruz.",
    gradient: "from-orange-600/90 to-primary/85",
  },
];

const TrainingOverview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto lg:max-w-6xl md:max-w-screen-md px-4">
        <h2 className="text-center font-semibold md:text-4xl sm:text-3xl text-2xl text-black dark:!text-white mb-8">
          Profesyonel Danışmanlık ve Eğitim Hizmetleri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[2rem] bg-gradient-to-br ${card.gradient} text-white p-7 lg:p-8 shadow-lg flex flex-col h-full`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-white/20 p-2.5 shrink-0">
                  <Icon icon={card.icon} width="24" height="24" className="text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] leading-snug">
                  {card.title}
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed text-sm lg:text-[15px] flex-1">
                {card.description}
              </p>
              <div className="mt-6">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-white hover:text-black hover:bg-white/90 px-4 py-2 rounded-lg transition-colors"
                >
                  Devamı
                  <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingOverview;
