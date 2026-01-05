import React from "react";
import { Metadata } from "next";
import Hero from "@/app/components/Home/Hero";
import Hizmetler from "@/app/components/Home/hizmetlerimiz";
import IndividualTrainings from "@/app/components/Home/IndividualTrainings";
import CorporateTrainings from "@/app/components/Home/CorporateTrainings";
// import Features from "@/app/components/Home/Features";
import ProductDoc from "@/app/components/Home/ProductDoc";
// import Plan from "@/app/components/Home/Plans";
import Info from "@/app/components/Home/Info";
import Partners from "@/app/components/Home/Partner";

export const metadata: Metadata = {
  title: "Mutlu Pazartesiler - Eğitim ve Danışmanlık Hizmetleri",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Hizmetler />
      <IndividualTrainings />
      <CorporateTrainings />
      {/* <Features /> */}
      <ProductDoc />
      {/* <Plan /> */}
      <Info />

      {/* <Partners /> */}
    </main>
  );
}
