"use client";
import React, { FC, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const ref = useRef(null);

  const leftAnimation = {
    initial: { x: "-25%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  };
  const rightAnimation = {
    initial: { x: "25%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  };

  const [isModalOpen, setIsSignInOpen] = useState<boolean>(false);
  const openModal = (): void => {
    setIsSignInOpen(true);
  };

  const closeModal = (): void => {
    setIsSignInOpen(false);
  };
  return (
    <section className="overflow-x-hidden before:content-[''] before:absolute lg:before:h-full sm:before:h-2/3 before:h-3/5 before:bg-no-repeat before:bg-[url('/images/hero/right-background.jpg')] before:bg-cover before:right-0 lg:before:top-0 before:bottom-0 lg:before:w-40% before:w-full lg:before:z-0 before:z-1 sm:before:block before:hidden after:content-[''] after:absolute after:bg-grey dark:after:bg-darklight after:h-full lg:after:w-60% after:w-full after:left-0 after:top-0 relative h-full lg:py-9.375! sm:pt-16! pt-24! lg:pb-0! pb-18!">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md">
        <div className="grid-cols-12 grid z-1 items-start relative lg:gap-0 gap-6">
          <div className="lg:col-span-6 col-span-12 px-4">
            <motion.div
              {...leftAnimation}
              className="relative before:content-[''] before:absolute before:h-full before:w-full before:bg-[url('/images/hero/leftside-backlayer-icons.svg')] before:-left-9.375 before:bg-contain before:bg-no-repeat before:-z-1"
            >
              <h1 className="text-dark dark:text-white mb-0 md:text-65 sm:text-4xl text-3xl">
                Mutlu Pazartesiler ile Güçlü Başlangıçlar
              </h1>
              <p className="text-lg font-medium text-black/50 dark:text-white/50 sm:py-1.875 py-5">
                Mutlupazartesiler.com’a hoş geldiniz eğitim ve danışmanlık alanında kendinizi geliştirmek, liderlik potansiyelinizi açığa çıkarmak ve her pazartesiye pozitif enerjiyle başlamak isteyenler için buradayız.
              </p>
              <Link href="/iletisim" className="sm:px-2.188 px-4 sm:py-1.125 py-2 rounded-lg text-base hover:cursor-pointer font-semibold bg-primary text-white hover:bg-orange-600 duration-500 inline-block sm:mb-0 mb-3">
                İletişim
              </Link>              
              <div className="mt-4">
                <div className="inline-block bg-primary rounded-lg px-4 py-2 mb-3">
                  <h3 className="text-base font-semibold text-white m-0">
                    Bizi yakından tanımak ister misiniz?
                  </h3>
                </div>
                <p className="text-sm text-black/60 dark:text-white/60 mb-4">
                  Güncel içeriklerimiz ve videolarımızla tanışın
                </p>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                  <a
                    href="https://www.instagram.com/mutlu.pazartesiler/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-2xl border-2 border-[#EF771C] p-2 hover:shadow-xl hover:shadow-[#EF771C]/40 transition-all duration-400"
                  >
                    <div className="relative h-full w-full rounded-2xl bg-white dark:bg-darklight p-4 transition-all duration-500 group-hover:bg-opacity-90 dark:group-hover:bg-opacity-90">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <Icon icon="skill-icons:instagram" width="28" height="28" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-dark dark:text-white">Instagram</h4>
                            <p className="text-xs text-black/50 dark:text-white/50">@mutlu.pazartesiler</p>
                          </div>
                        </div>
                        <Icon icon="solar:arrow-right-up-linear" width="24" height="24" className="text-black/40 dark:text-white/40 group-hover:text-pink-500 dark:group-hover:text-pink-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                      <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                        Eğitim videolarımız ve ilham verici içeriklerimizi keşfedin
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/mutlupazartesiler/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-2xl border-2 border-[#EF771C] p-2 hover:shadow-xl hover:shadow-[#EF771C]/40 transition-all duration-400"
                  >
                    <div className="relative h-full w-full rounded-2xl bg-white dark:bg-darklight p-4 transition-all duration-500 group-hover:bg-opacity-90 dark:group-hover:bg-opacity-90">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-[#0077b5] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <Icon icon="skill-icons:linkedin" width="28" height="28" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-dark dark:text-white">LinkedIn</h4>
                            <p className="text-xs text-black/50 dark:text-white/50">Mutlu Pazartesiler</p>
                          </div>
                        </div>
                        <Icon icon="solar:arrow-right-up-linear" width="24" height="24" className="text-black/40 dark:text-white/40 group-hover:text-[#0077b5] dark:group-hover:text-[#00a0dc] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                      <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                        Profesyonel güncellemeler ve iş dünyası içeriklerimize göz atın
                      </p>
                    </div>
                  </a>
                </div>
              </div>            </motion.div>
          </div>
          <div className="lg:col-span-6 col-span-12 sm:bg-none bg-[url('/images/hero/right-background.jpg')] lg:px-4 px-0">
            <motion.div {...rightAnimation} className="flex justify-center lg:pt-0 pt-6">
              <Image
                src="/images/hero/fulya.png"
                alt="hero Image"
                width={340}
                height={190}
                className="lg:w-auto lg:h-auto w-[240px] h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
