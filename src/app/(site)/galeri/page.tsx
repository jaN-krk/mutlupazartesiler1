import HeroSub from "@/app/components/SharedComponent/HeroSub";
import ProductDoc from "@/app/components/Home/ProductDoc";
// import Features from "@/app/components/Home/Features";
import { Metadata } from "next";
import ReferenceLogos from "@/app/components/Galeri/ReferenceLogos";

export const metadata: Metadata = {
  title: "Galeri | Mutlu Pazartesiler - Eğitim ve Danışmanlık Hizmetleri",
};

const page = () => {
  const galleryImages = [
    "/images/productdoc/mp17.jpg",
    "/images/productdoc/mp16.jpg",
    "/images/productdoc/mp15.jpg",
    "/images/productdoc/mp14.jpg",
    "/images/productdoc/mp13.jpg",
    "/images/productdoc/mp12.jpg",
    "/images/productdoc/mp11.jpg",
    "/images/productdoc/mp10.jpg",
    "/images/productdoc/mp9.jpg",
    "/images/productdoc/mp8.jpg",
    "/images/productdoc/mp7.jpg",
    "/images/productdoc/mp6.jpg",
    "/images/productdoc/mp5.jpeg",
    "/images/productdoc/mp4.jpeg",
    "/images/productdoc/mp3.jpg",
    "/images/productdoc/mp2.jpeg",
    "/images/productdoc/mp1.jpeg",
  ];

  const breadcrumbLinks = [
    { href: "/", text: "Anasayfa" },
    { href: "/galeri", text: "Galeri" },
  ];
  return (
    <>
      <HeroSub
        title="Fotoğraf Galerisi"
        description="Hikâyemizi en iyi kareler anlatır."
        breadcrumbLinks={breadcrumbLinks}
        titleClassName="md:text-5xl text-3xl"
      />
      <ReferenceLogos />
      {/* <Features /> */}
      <ProductDoc hideButton images={galleryImages} />
    </>
  );
};

export default page;
