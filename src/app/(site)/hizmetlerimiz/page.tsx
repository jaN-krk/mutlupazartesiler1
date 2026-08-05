import HeroSub from "@/app/components/SharedComponent/HeroSub";
import CorporateTrainings from "@/app/components/Home/CorporateTrainings";
import IndividualTrainings from "@/app/components/Home/IndividualTrainings";
import SelectionPlacement from "@/app/components/Home/SelectionPlacement";
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
        description="Kurumsal eğitimler, bireysel eğitimler ve seçme-yerleştirme desteğimiz; sizin ve ekibinizin gelişimi için tasarlanmış programlardır."
        breadcrumbLinks={breadcrumbLinks}
      />
      <CorporateTrainings />
      <IndividualTrainings />
      <SelectionPlacement />
    </>
  );
};

export default page;
