"use client";
import React, { FC, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const ref = useRef(null);

  const leftAnimation = {
    initial: { x: 0, opacity: 1 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3 },
  };
  const rightAnimation = {
    initial: { x: 0, opacity: 1 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3 },
  };

  const [isModalOpen, setIsSignInOpen] = useState<boolean>(false);
  const openModal = (): void => {
    setIsSignInOpen(true);
  };

  const closeModal = (): void => {
    setIsSignInOpen(false);
  };
  return (
    <section className="overflow-x-hidden before:content-[''] before:absolute lg:before:h-full sm:before:h-3/4 before:h-3/5 before:bg-no-repeat before:bg-[url('/images/hero/right-background.jpg')] before:bg-cover before:bg-center lg:before:bg-bottom before:right-0 lg:before:top-0 before:bottom-0 lg:before:w-40% before:w-full lg:before:rounded-bl-[56px] lg:before:z-0 before:z-1 sm:before:block before:hidden after:content-[''] after:absolute after:bg-grey dark:after:bg-darklight after:h-full lg:after:w-60% after:w-full after:left-0 after:top-0 relative h-full lg:pt-36! lg:pb-12! sm:pt-24! sm:pb-16! pt-32! pb-14!">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md">
        <div className="grid-cols-12 grid z-1 items-start relative lg:gap-0 gap-6">
          <div className="lg:col-span-6 col-span-12 px-4">
            <motion.div
              {...leftAnimation}
              className="relative before:content-[''] before:absolute before:h-full before:w-full before:bg-[url('/images/hero/leftside-backlayer-icons.svg')] before:-left-9.375 before:bg-contain before:bg-no-repeat before:-z-1"
            >
              <h1 className="text-dark dark:text-white mb-0 lg:text-5xl md:text-5xl sm:text-4xl text-3xl leading-tight">
                Mutlu Pazartesiler ile Güçlü Başlangıçlar
              </h1>
              <p className="text-base font-medium text-black/50 dark:text-white/50 sm:py-4 py-5 leading-relaxed">
                Mutlupazartesiler.com’a hoş geldiniz eğitim ve danışmanlık alanında kendinizi geliştirmek, liderlik potansiyelinizi açığa çıkarmak ve her pazartesiye pozitif enerjiyle başlamak isteyenler için buradayız.
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold bg-primary text-white hover:bg-orange-600 duration-300 hover:cursor-pointer"
              >
                İletişim
              </Link>              
              <div className="mt-6">
                <p className="text-sm font-medium text-black/55 dark:text-white/55 mb-3">
                  Bizi takip edin
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://www.instagram.com/mutlu.pazartesiler/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-white dark:bg-darklight/80 pl-1.5 pr-4 py-1.5 shadow-sm ring-1 ring-black/8 dark:ring-white/10 hover:ring-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 shadow-sm">
                      <Icon icon="mdi:instagram" width="18" height="18" className="text-white" />
                    </span>
                    <span className="flex flex-col leading-none">
                      <span className="text-sm font-semibold text-dark dark:text-white">Instagram</span>
                      <span className="text-[11px] text-black/45 dark:text-white/45 mt-0.5">@mutlu.pazartesiler</span>
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/mutlupazartesiler/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-white dark:bg-darklight/80 pl-1.5 pr-4 py-1.5 shadow-sm ring-1 ring-black/8 dark:ring-white/10 hover:ring-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2] shadow-sm">
                      <Icon icon="mdi:linkedin" width="18" height="18" className="text-white" />
                    </span>
                    <span className="flex flex-col leading-none">
                      <span className="text-sm font-semibold text-dark dark:text-white">LinkedIn</span>
                      <span className="text-[11px] text-black/45 dark:text-white/45 mt-0.5">Mutlu Pazartesiler</span>
                    </span>
                  </a>

                  <a
                    href="https://www.youtube.com/@MutluPazartesiler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-white dark:bg-darklight/80 pl-1.5 pr-4 py-1.5 shadow-sm ring-1 ring-black/8 dark:ring-white/10 hover:ring-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] shadow-sm">
                      <Icon icon="mdi:youtube" width="18" height="18" className="text-white" />
                    </span>
                    <span className="flex flex-col leading-none">
                      <span className="text-sm font-semibold text-dark dark:text-white">YouTube</span>
                      <span className="text-[11px] text-black/45 dark:text-white/45 mt-0.5">@MutluPazartesiler</span>
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-6 col-span-12 sm:bg-none bg-[url('/images/hero/right-background.jpg')] bg-cover bg-center lg:px-4 px-0">
            <motion.div {...rightAnimation} className="flex justify-center lg:items-end lg:min-h-[430px] lg:pt-8 pt-6 pb-6">
              <Image
                src="/images/hero/fulya.png"
                alt="hero Image"
                width={340}
                height={190}
                className="lg:w-[320px] lg:h-auto w-[240px] h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
