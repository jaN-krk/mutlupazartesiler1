import HeroSub from "@/app/components/SharedComponent/HeroSub";
import BasindaBizContent from "./BasindaBizContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basında Biz | Mutlu Pazartesiler",
  description:
    "Mutlu Pazartesiler’i videolarımız ve sosyal medya hesaplarımızla yakından tanıyın.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Anasayfa" },
    { href: "/basinda-biz", text: "Basında Biz" },
  ];

  return (
    <>
      <HeroSub
        title="Basında Biz"
        description="Mutlu Pazartesiler’i videolarımız ve sosyal medya paylaşımlarımızla keşfedin."
        breadcrumbLinks={breadcrumbLinks}
        titleClassName="md:text-5xl text-3xl"
      />
      <BasindaBizContent />
    </>
  );
};

export default page;
