"use client"
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Footer: FC = () => {
  const [email, setEmail] = useState("")
  const [subscribeMessage, setSubscribeMessage] = useState("")

  useEffect(() => {
    // Footer no longer fetches Hizmetler links
  }, [])

  const handleSubscribe = (e: React.MouseEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribeMessage("Kaydınız tamamlanmıştır!")
      setEmail("")
      setTimeout(() => setSubscribeMessage(""), 3000)
    }
  }

  return (
    <footer className="bg-Dark-primary dark:bg-darklight py-12 pb-6 border-t border-white/10">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        {/* Logo ve Tanım */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-4 col-span-12">
            <Link href="/">
              <Image
                src="/images/logo/logo-beyaz.png"
                alt="Logo"
                width={140}
                height={24}
              />
            </Link>
            <p className="text-sm text-white/60 mt-4">
              Çalışanlarınızın profesyonel yetkinliklerini artırmak için buradayız.
            </p>
          </div>

          {/* Hizmetler */}
          <div className="lg:col-span-2 sm:col-span-6 col-span-12">
            <h4 className="text-sm font-semibold text-white mb-4">Hizmetler</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#kurumsal-egitimler"
                  className="text-sm text-white/60 hover:text-primary transition-colors"
                >
                  Kurumsal Eğitimler
                </Link>
              </li>
              <li>
                <Link
                  href="/#bireysel-egitimler"
                  className="text-sm text-white/60 hover:text-primary transition-colors"
                >
                  Bireysel Eğitimler
                </Link>
              </li>
            </ul>
          </div>

          {/* Hızlı Linkler */}
            <div className="lg:col-span-2 sm:col-span-6 col-span-12">
            <h4 className="text-sm font-semibold text-white mb-4">Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-white/60 hover:text-primary transition-colors"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-sm text-white/60 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-sm text-white/60 hover:text-primary transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Email Subscription */}
          <div className="lg:col-span-4 col-span-12">
            <h4 className="text-sm font-semibold text-white mb-4">Haber Bülteni</h4>
            <p className="text-sm text-white/60 mb-4">
              Yeni videolardan haberdar ol
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                className="text-sm py-3 px-4 rounded-lg bg-white text-gray-900 dark:bg-white/10 dark:text-white border border-gray-300 dark:border-white/20 focus:border-primary dark:focus:border-primary focus:outline-none transition-colors placeholder:text-gray-500 dark:placeholder:text-white/50"
              />
              <button
                onClick={handleSubscribe}
                className="py-3 px-4 bg-primary text-white text-sm font-medium rounded-lg hover:bg-orange-600 dark:hover:bg-orange-500 transition-colors"
              >
                Abone Ol
              </button>
              {subscribeMessage && (
                <p className="text-sm text-green-500 dark:text-green-400 text-center animate-pulse font-medium">
                  {subscribeMessage}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/50">
             2025 Mutlu Pazartesiler. Tüm Hakları Saklıdır.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/mutlu.pazartesiler/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <Icon icon="typcn:social-instagram" width="20" height="20" />
            </a>
            <a
              href="https://www.linkedin.com/company/mutlupazartesiler/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <Icon icon="typcn:social-linkedin" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
