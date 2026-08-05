"use client";

import { useEffect, useState } from "react";
import styles from "./ReferenceLogos.module.css";
import { referenceLogos } from "@/lib/referenceLogos";

const ReferenceLogos = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handleChange as EventListener);
    return () => mediaQuery.removeEventListener("change", handleChange as EventListener);
  }, []);

  return (
    <section className={styles.referenceSection} data-theme={isDark ? "dark" : "light"}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Referanslarımız</h2>
          <p>Türkiye ve bölgede güvenilen markalarla başarılı ortaklıklarımız</p>
        </div>

        <div className={styles.logosWrapper}>
          <div className={styles.logosTrack}>
            {referenceLogos.map((logo) => (
              <div
                key={`first-${logo.src}`}
                className={styles.logoItem}
                data-size={logo.size}
                data-tone={logo.tone}
              >
                <img
                  src={`/images/refarnslar/${logo.src}`}
                  alt={logo.name}
                  loading="eager"
                  onError={() => console.log("Logo yukleme hatasi:", logo.src)}
                />
              </div>
            ))}
            {referenceLogos.map((logo) => (
              <div
                key={`second-${logo.src}`}
                className={styles.logoItem}
                data-size={logo.size}
                data-tone={logo.tone}
                aria-hidden="true"
              >
                <img
                  src={`/images/refarnslar/${logo.src}`}
                  alt=""
                  loading="eager"
                  onError={() => console.log("Logo yukleme hatasi:", logo.src)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceLogos;
