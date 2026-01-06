import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Hakkımızda | Mutlu Pazartesiler",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Anasayfa" },
    { href: "/hakkimizda", text: "Hakkımızda" },
  ];
  return (
    <>
      <HeroSub
        title="Hakkımızda"
        description="Mutlu Pazartesiler olarak kurumlara ve bireylere yönelik eğitim ve danışmanlık hizmetleri sunuyoruz."
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="py-12">
        <div className="container mx-auto lg:max-w-6xl md:max-w-screen-md px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-black dark:text-white">Mutlu Pazartesiler kimdir?</h2>
              <p className="mt-4 text-black/70 dark:text-white/70">
                Mutlu Pazartesiler, iş hayatını daha iyi bir yer haline getirmek için çalışan bir eğitim ve danışmanlık firmasıdır. 2018’den bu yana turizm ve otelcilik, hizmet sektörü ve çağrı merkezleri başta olmak üzere çeşitli sektörlerle çalışıyoruz.
              </p>

              <h3 className="mt-4 font-semibold">Ne yapıyoruz?</h3>
              <p className="text-black/70 dark:text-white/70 mt-2">Kurumlara özel eğitim programları tasarlıyor; yöneticilerden sahadaki ekip arkadaşlarına kadar herkesin işini daha iyi yapmasına destek oluyoruz. Ayrıca kendi kariyerine yatırım yapmak isteyen bireyler için de uzmanlık programları sunuyoruz.</p>

              <h3 className="mt-4 font-semibold">Çalışma Alanlarımız</h3>
              <ul className="mt-2 list-disc list-inside text-black/70 dark:text-white/70">
                <li>Kurumsal Eğitim ve Danışmanlık</li>
                <li>Bireylere Yönelik Uzmanlık Programları</li>
              </ul>

              <p className="mt-4 font-semibold">Kısacası:</p>
              <p className="text-black/70 dark:text-white/70 mt-1">Biz, pazartesileri daha mutlu kılmak için buradayız.</p>

              <a href="mailto:info@mutlupazartesiler.com" className="inline-block mt-6 bg-primary text-white px-4 py-2 rounded-lg">İletişime Geç</a>
            </div>

            <div>
              <div className="rounded-3xl overflow-hidden">
                <img src="/images/kolaj.png" alt="Hakkımızda" className="w-50px h-100px object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
