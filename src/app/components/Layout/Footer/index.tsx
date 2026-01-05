"use client"
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Footer: FC = () => {
  const [services, setServices] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/service')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setServices(data.ServicesData || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <footer className="bg-Dark-primary dark:bg-darklight py-17 pb-6">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-12 sm:gap-1.875 gap-5">
          <div className="lg:col-span-4 col-span-12">
            <div className="md:pe-7.5">
              <Link href="#">
                <Image
                  src="/images/logo/logo-beyaz.png"
                  alt="Logo"
                  width={200}
                  height={32}
                />
              </Link>
              <p className="mb-0 font-medium text-lg text-white/50 pt-2.188 pb-1.875">
                Çalışanlarınızın profesyonel yetkinliklerini artırmak için buradayız.
              </p>
              <p className="text-lg font-medium text-white mb-0">
                Zümrütevler Mah. Nish Adalar Sitesi 21. Blok D. 12 Kat -4 Maltepe İSTANBUL
              </p>
              {/* <p className="text-white/50 text-lg font-medium mb-0">
                İletişim:{" "}
                <Link href="#" className="text-primary hover:text-orange-600">
                  0555 555 55 55
                </Link>
              </p> */}
            </div>
          </div>
          <div className="lg:col-span-2 sm:col-span-6 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-medium mb-2.375">
              Hizmetler
            </h4>
            <ul>
              {services.map((item, index) => (
                <li key={index} className="pb-1.563">
                  <Link
                    href={`/hizmetler/${item.slug}`}
                    className="text-lg font-medium text-white/50 hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 sm:col-span-6 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-medium mb-2.375">
              Hızlı Linkler
            </h4>
            <ul>
              <li className="pb-1.563">
                <Link
                  href="/galeri"
                  className="text-lg font-medium text-white/50 hover:text-primary"
                >
                  Galeri
                </Link>
              </li>
              <li className="pb-1.563">
                <Link
                  href="/pricing"
                  className="text-lg font-medium text-white/50 hover:text-primary"
                >
                  {/* Pricing
                </Link>
              </li>
              <li className="pb-1.563">
                <Link
                  href="/blogs"
                  className="text-lg font-medium text-white/50 hover:text-primary"
                > */}
                  Blog
                </Link>
              </li>
              <li className="pb-1.563">
                <Link
                  href="/iletisim"
                  className="text-lg font-medium text-white/50 hover:text-primary"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 md:col-span-7 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-medium sm:mb-2.375 mb-6">
              Yeni Videolar
            </h4>
            <p className="text-lg text-white/50 font-medium mb-4">
              Yeni Videolardan Haberdar Ol
            </p>
            <div className="flex sm:flex-nowrap flex-wrap items-center gap-2">
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="E-posta Adresiniz"
                className="text-base font-medium py-4 px-5 !rounded-lg dark:text-white dark:bg-darkmode h-full border border-border_color focus:border-primary dark:border-border_color dark:focus:border-primary"
              />
              <Link
                href="/contact"
                className="py-4 px-2.188 bg-primary text-white hover:bg-orange-600 rounded-lg duration-500 sm:w-fit w-full"
              >
                Gönder
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:flex-nowrap flex-wrap gap-6 items-center justify-between sm:pt-17 pt-10">
          <p className="text-lg font-medium text-white/50 ">
            2025 - Tüm Hakları Saklıdır | Mutlu Pazartesiler{" "}
            <Link
              href="#"
              className="hover:text-primary"
            >

            </Link>
          </p>
          <div className="flex gap-6 items-center">
           
      
<Link
              href="https://www.instagram.com/mutlu.pazartesiler/"
              className="p-2 border-2 bg-transparent border-primary rounded-full group hover:bg-primary hover:border-primary"
            >
              {/* <Icon
                icon="jam:google-plus"
                width="24"
                height="24"
                className="text-primary group-hover:text-white"
              />
            </Link>
            <Link
              href="#"
              className="p-2 border-2 bg-transparent border-primary rounded-full group hover:bg-primary hover:border-primary"
            > */}
              <Icon
                icon="typcn:social-instagram"
                width="24"
                height="24"
                className="text-primary group-hover:text-white"
              />
            </Link>





            <Link
              href="https://www.linkedin.com/company/mutlupazartesiler/posts/?feedView=all"
              className="p-2 border-2 bg-transparent border-primary rounded-full group hover:bg-primary hover:border-primary"
            >
              {/* <Icon
                icon="jam:google-plus"
                width="24"
                height="24"
                className="text-primary group-hover:text-white"
              />
            </Link>
            <Link
              href="#"
              className="p-2 border-2 bg-transparent border-primary rounded-full group hover:bg-primary hover:border-primary"
            > */}
              <Icon
                icon="typcn:social-linkedin"
                width="24"
                height="24"
                className="text-primary group-hover:text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
