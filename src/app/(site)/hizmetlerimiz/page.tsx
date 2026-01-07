import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Mutlu Pazartesiler - Eğitim ve Danışmanlık Hizmetleri",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Anasayfa" },
    { href: "/hizmetlerimiz", text: "Hizmetlerimiz" },
  ];
  return (
    <>
      <HeroSub
        title="Hizmetlerimiz"
        description="Bu bölüm kaldırılmıştır. Kurumsal ve Bireysel eğitimler sayfalarımızdan güncel içeriklere ulaşabilirsiniz."
        breadcrumbLinks={breadcrumbLinks}
      />
      {/* Hizmetler grid kaldırıldı */}
    </>
  );
};

export default page;
