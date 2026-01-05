import HeroSub from "@/app/components/SharedComponent/HeroSub";
import ContactForm from "@/app/components/Contact/Form";
import ContactInfo from "@/app/components/Contact/ContactInfo";
import Location from "@/app/components/Contact/OfficeLocation";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "İletişim | Mutlu Pazartesiler - Eğitim ve Danışmanlık Hizmetleri",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Anasayfa" },
    { href: "/contact", text: "İletişim" },
  ];
  return (
    <>
      <HeroSub
        title="İletişim"
        description="Her sorunuz, bizim için bir ilham kaynağıdır. Sizden gelen her mesajla daha iyi işler ortaya koyuyoruz."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default page;
