"use client";

import { useEffect, useState } from "react";
import styles from "./ReferenceLogos.module.css";

const ReferenceLogos = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handleChange as EventListener);
    return () => mediaQuery.removeEventListener("change", handleChange as EventListener);
  }, []);

  const logos = [
    "ALOTECH.png",
    "ATSO.png",
    "BAIAHOTELS.png",
    "BODTO.png",
    "CORENDON.png",
    "GELECEGINBILGELERI.png",
    "KERVANSARAY.png",
    "KOKEKUBA.png",
    "KREMLINPALACE.png",
    "MAVITUY.png",
    "MEDICALPARK.png",
    "MEDLINE.png",
    "MIOMORE.png",
    "MNG.png",
    "OPTIBEATS.png",
    "PARASUT.png",
    "PIERRECARDIN.png",
    "RAMADA.png",
    "SEDUNA.png",
    "SUNIS.png",
    "TATILSEPETI.png",
    "TOPKAPIPALACE.png",
    "WHOTELS.png",
    "XOCAPEARNNA.png",
    "YASAMHASTANELERI.png",
  ];

  return (
    <section className={styles.referenceSection} data-theme={isDark ? "dark" : "light"}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Birlikte Çalıştığımız Kurumlar</h2>
          <p>Türkiye ve bölgede güvenilen markalarla başarılı ortaklıklarımız</p>
        </div>

        <div className={styles.logosWrapper}>
          <div className={styles.logosTrack}>
            {/* İlk set */}
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className={styles.logoItem}>
                <img
                  src={`/images/refarnslar/${logo}`}
                  alt={logo.replace(".png", "")}
                  loading={index < 5 ? "eager" : "lazy"}
                  onError={(e) => console.log("Logo yükleme hatası:", logo)}
                />
              </div>
            ))}
            {/* İkinci set (sonsuz scroll için) */}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className={styles.logoItem}>
                <img
                  src={`/images/refarnslar/${logo}`}
                  alt={logo.replace(".png", "")}
                  loading="lazy"
                  onError={(e) => console.log("Logo yükleme hatası:", logo)}
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
