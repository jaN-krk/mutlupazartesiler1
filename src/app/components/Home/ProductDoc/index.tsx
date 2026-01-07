"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleDoc from "./SingleDoc";

type ProductDocProps = {
  hideButton?: boolean;
  hideHeader?: boolean;
  hideDocs?: boolean;
  images?: string[];
};

const ProductDoc = ({ hideButton = false, hideHeader = false, hideDocs = false, images }: ProductDocProps) => {
  const [DocText, setDocText] = useState<any[]>([])
  const [Portfolio, setPortfolio] = useState<any[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setDocText(data.DocText || [])
        setPortfolio(data.Portfolio || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])
  const defaultImages = useMemo(
    () => [
      // En yeni eklenenleri başa al
      "/images/productdoc/mp17.jpg",
      "/images/productdoc/mp16.jpg",
      "/images/productdoc/mp15.jpg",
      "/images/productdoc/mp14.jpg",
      "/images/productdoc/mp13.jpg",
      "/images/productdoc/mp12.jpg",
      "/images/productdoc/mp11.jpg",
      "/images/productdoc/mp9.jpg",
      "/images/productdoc/mp8.jpg",
      "/images/productdoc/mp7.jpg",
      "/images/productdoc/mp6.jpg",
      "/images/productdoc/mp5.jpeg",
      "/images/productdoc/mp4.jpeg",
      "/images/productdoc/mp3.jpg",
      "/images/productdoc/mp2.jpeg",
      "/images/productdoc/mp1.jpeg",
    ],
    []
  );

  const galleryImages = useMemo(() => {
    // 1. Açıkça geçilen images prop'u varsa kullan
    if (images && images.length > 0) return images;
    // 2. API'den Portfolio verisi varsa kullan
    if (Portfolio && Portfolio.length > 0) return Portfolio.map((p) => p.image);
    // 3. Aksi takdirde defaultImages (mp1-mp17) kullan
    return defaultImages;
  }, [images, Portfolio, defaultImages]);

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <button
        aria-label="Sonraki"
        className={`${className} !absolute !top-1/2 !-translate-y-1/2 !right-0 md:!right-2 !translate-x-full !z-10 !w-9 !h-9 md:!w-10 md:!h-10 !rounded-full !bg-primary/90 hover:!bg-orange-600 !flex !items-center !justify-center shadow-lg`}
        style={style}
        onClick={onClick}
      >
        <Icon icon="solar:alt-arrow-right-linear" width={20} height={20} className="text-white" />
      </button>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <button
        aria-label="Önceki"
        className={`${className} !absolute !top-1/2 !-translate-y-1/2 !left-0 md:!left-2 !-translate-x-full !z-10 !w-9 !h-9 md:!w-10 md:!h-10 !rounded-full !bg-primary/90 hover:!bg-orange-600 !flex !items-center !justify-center shadow-lg`}
        style={style}
        onClick={onClick}
      >
        <Icon icon="solar:alt-arrow-left-linear" width={20} height={20} className="text-white" />
      </button>
    );
  };

  const sliderSettings = useMemo(
    () => ({
      autoplay: true,
      autoplaySpeed: 2500,
      dots: false,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      infinite: true,
      pauseOnHover: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 640,
          settings: { slidesToShow: 1 },
        },
      ],
    }),
    []
  );

  return (
    <section className="bg-blue relative bg-[url(/images/productdoc/portfolio-backoverlay.svg)] bg-center bg-no-repeat bg-contain">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        {!hideHeader && (
          <div className="">
            <p className="text-lg text-primary sm:text-start text-center">Fotoğraf Galerisi</p>
            <div className="flex sm:flex-row flex-col sm:gap-0 gap-6 justify-between items-center mt-1.875">
              <h3 className="text-white md:text-6xl sm:text-40 text-3xl font-semibold">
                Turizm ve otelcilik ve hizmet sektörüne özel olarak tasarlanmış
                <br />
                eğitimlerimizle, çalışanlarınızın profesyonel yetkinliklerini en üst seviyeye taşıyoruz.
              </h3>
              {!hideButton && (
                <Link
                  href="/galeri"
                  className="px-2.188 py-1.125 bg-primary rounded-lg text-white text-lg font-semibold hover:bg-orange-600 duration-500"
                >
                  Fotoğraf Galerisi
                </Link>
              )}
            </div>
          </div>
        )}

        {!hideDocs && (
          <div className="grid grid-cols-12 pt-17 gap-x-6 gap-y-8 lg:pb-20 pb-10">
            {DocText.map((item, index) => (
              <SingleDoc key={index} icon={item.icon} title={item.title} text={item.text} />
            ))}
          </div>
        )}

        <div className="pt-8">
          <Slider {...sliderSettings}>
            {galleryImages.map((src, index) => (
              <div key={index} className="px-3">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 dark:border-white/5 bg-black/5 dark:bg-white/5 shadow-lg">
                  <div style={{ aspectRatio: "4 / 3" }} className="relative w-full">
                    <Image
                      src={src}
                      alt={`gallery-${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/15 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProductDoc;
