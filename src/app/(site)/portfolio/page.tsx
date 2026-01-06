import HeroSub from "@/app/components/SharedComponent/HeroSub";
import ProductDoc from "@/app/components/Home/ProductDoc";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fotoğraf Galerisi | Mutlu Pazartesiler",
  description: "Fotoğraf ve çalışma portfolyomuz.",
};

const PortfolioPage = () => {
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
    { href: "/portfolio", text: "Fotoğraf Galerisi" },
  ];

  return (
    <>
      <HeroSub
        title="Fotoğraf Galerisi"
        description="Projelerimizden kareler ve referanslarımız."
        breadcrumbLinks={breadcrumbLinks}
        titleClassName="md:text-5xl text-3xl"
      />
      <ProductDoc hideButton hideHeader hideDocs images={galleryImages} />
    </>
  );
};

export default PortfolioPage;
