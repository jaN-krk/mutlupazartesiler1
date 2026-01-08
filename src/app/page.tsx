import React from "react";
import { Metadata } from "next";
import Hero from "@/app/components/Home/Hero";
import ReferenceLogos from "@/app/components/Galeri/ReferenceLogos";
import IndividualTrainings from "@/app/components/Home/IndividualTrainings";
import CorporateTrainings from "@/app/components/Home/CorporateTrainings";
import TrainingOverview from "@/app/components/Home/TrainingOverview";
// import Features from "@/app/components/Home/Features";
import ProductDoc from "@/app/components/Home/ProductDoc";
// import Plan from "@/app/components/Home/Plans";
import Info from "@/app/components/Home/Info";
import Partners from "@/app/components/Home/Partner";

export const metadata: Metadata = {
  title: "Mutlu Pazartesiler - Eğitim ve Danışmanlık Hizmetleri",
};

export default function Home() {
  const galleryImages = [
    "/images/productdoc/mp2.jpeg",
    "/images/productdoc/mp17.jpg",
    "/images/productdoc/mp16.jpg",
    "/images/productdoc/mp15.jpg",
    "/images/productdoc/mp14.jpg",
    "/images/productdoc/mp13.jpg",
    "/images/productdoc/mp12.jpg",
    "/images/productdoc/mp11.jpg",
    "/images/productdoc/mp9.jpg",
    "/images/productdoc/mp6.jpg",
    "/images/productdoc/mp5.jpeg",
    "/images/productdoc/mp4.jpeg",
    "/images/productdoc/mp8.jpg",
    "/images/productdoc/mp3.jpg",
    "/images/productdoc/mp7.jpg",
    "/images/productdoc/mp1.jpeg",
  ];

  return (
    <main>
      <Hero />
      <ReferenceLogos />
      {/* Hizmetler bölümü talep üzerine kaldırıldı */}
      <TrainingOverview />
      <CorporateTrainings />
      <IndividualTrainings />
      {/* <Features /> */}
      <ProductDoc hideHeader hideDocs images={galleryImages} />
      {/* <Plan /> */}
      <Info />

      {/* <Partners /> */}
    </main>
  );
}
