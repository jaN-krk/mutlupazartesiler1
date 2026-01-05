import HeroSub from "@/app/components/SharedComponent/HeroSub";
import ProductDoc from "@/app/components/Home/ProductDoc";
// import Features from "@/app/components/Home/Features";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Galeri | Mutlu Pazartesiler - Eğitim ve Danışmanlık Hizmetleri",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Anasayfa" },
    { href: "/galeri", text: "Galeri" },
  ];
  return (
    <>
      <HeroSub
        title="Galeri"
        description="Hikâyemizi en iyi kareler anlatır."
        breadcrumbLinks={breadcrumbLinks}
      />
      {/* <Features /> */}
      <ProductDoc />
    </>
  );
};

export default page;
