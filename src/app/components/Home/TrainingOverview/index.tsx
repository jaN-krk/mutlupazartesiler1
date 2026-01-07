"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";

const TrainingOverview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto lg:max-w-6xl md:max-w-screen-md px-4">
        <h2 className="text-center font-semibold md:text-4xl sm:text-3xl text-2xl text-black dark:text-white mb-8">
          Profesyonel Danışmanlık ve Eğitim Hizmetleri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kurumsal Kart */}
          <div className="rounded-[2rem] bg-gradient-to-br from-orange-500/90 to-primary/80 text-white p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-full bg-white/20 p-3">
                <Icon icon="mdi:book-open-page-variant" width="28" height="28" className="text-white" />
              </div>
              <h3 className="text-2xl font-bold tracking-wide">KURUMSAL EĞİTİMLER</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Eğitimlerimizi, kurumların günlük iş akışında gerçekten işe yarayan, sonuç odaklı çözümlerle tasarlıyoruz. 30 yıllık deneyimimizle ekiplerinizin iletişimden yönetime tüm becerilerini ölçülebilir şekilde güçlendiren, sahaya doğrudan uygulanabilir yöntemler sunuyoruz.
            </p>
            <div className="mt-6">
              <Link href="#kurumsal-egitimler" className="inline-flex items-center gap-2 text-white hover:text-black hover:bg-white/90 px-4 py-2 rounded-lg transition-colors">
                Devamı
                <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" />
              </Link>
            </div>
          </div>

          {/* Bireysel Kart */}
          <div className="rounded-[2rem] bg-gradient-to-br from-primary/80 to-orange-500/90 text-white p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-full bg-white/20 p-3">
                <Icon icon="mdi:book-open-page-variant" width="28" height="28" className="text-white" />
              </div>
              <h3 className="text-2xl font-bold tracking-wide">BİREYSEL EĞİTİMLER</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Bireysel eğitim ihtiyaçlarınız için 30 yıllık tecrübemizle yanınızdayız! “Bu çağ bilgi çağı ve ben kendime yatırım yapmak istiyorum” diyorsanız, tam size göre hazırlanan eğitim çözümlerimize göz atabilirsiniz.
            </p>
            <div className="mt-6">
              <Link href="#bireysel-egitimler" className="inline-flex items-center gap-2 text-white hover:text-black hover:bg-white/90 px-4 py-2 rounded-lg transition-colors">
                Devamı
                <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingOverview;
