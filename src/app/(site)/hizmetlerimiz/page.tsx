import HeroSub from "@/app/components/SharedComponent/HeroSub";
import CorporateTrainings from "@/app/components/Home/CorporateTrainings";
import IndividualTrainings from "@/app/components/Home/IndividualTrainings";
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
        description="Kurumsal ve bireysel eğitim çözümlerimiz sizin ve ekibinizin gelişimi için tasarlanmış programlardır."
        breadcrumbLinks={breadcrumbLinks}
      />
      <CorporateTrainings />
      <IndividualTrainings />
    </>
  );
};

export default page;
