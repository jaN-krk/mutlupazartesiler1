const CorporateTrainings = () => {
  return (
    <section className="py-16 bg-[url('/images/plan/price-plan-background-icons.svg')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="container mx-auto lg:max-w-6xl md:max-w-screen-md px-4">
        <div className="mb-8 text-center">
          <h2 className="font-semibold md:text-4xl sm:text-3xl text-2xl text-black dark:text-white">KURUMSAL EĞİTİMLER</h2>
          <p className="mt-3 text-black/60 dark:text-white/60 max-w-5xl mx-auto">
            Eğitimlerimizi, kurumların günlük iş akışında gerçekten işe yarayan, sonuç odaklı çözümlerle tasarlıyoruz. 30 yıllık deneyimimizle ekiplerinizin iletişimden yönetime tüm becerilerini ölçülebilir şekilde güçlendiren, sahaya doğrudan uygulanabilir yöntemler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            {/* <div className="shadow-card-shadow p-6 rounded-3xl bg-white dark:bg-darklight">
              <p className="text-black/70 dark:text-white/70">
                Eğitimlerimizi, kurumların günlük iş akışında gerçekten işe yarayan, sonuç odaklı çözümlerle tasarlıyoruz. 30 yıllık deneyimimizle ekiplerinizin iletişimden yönetime tüm becerilerini ölçülebilir şekilde güçlendiren, sahaya doğrudan uygulanabilir yöntemler sunuyoruz.
              </p>
            </div> */}
            <div className="shadow-card-shadow p-6 rounded-3xl bg-white dark:bg-darklight">
              <p className="text-black/70 dark:text-white/70">Ön bürodan misafir ilişkilerine, yiyecek–içecekten kat hizmetleri ve güvenliğe kadar tüm departmanların hizmet kalitesini standartlaştırarak misafir memnuniyetini belirgin şekilde artırır.</p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 border rounded-2xl bg-white dark:bg-darklight shadow-sm">
                <strong>1) İletişim Becerileri Eğitimi</strong>
              </div>
              <div className="p-6 border rounded-2xl bg-white dark:bg-darklight shadow-sm">
                <strong>2) Yönetim Becerileri Eğitimi – 1. Modül</strong>
              </div>
              <div className="p-6 border rounded-2xl bg-white dark:bg-darklight shadow-sm">
                <strong>3) İleri Yönetim Becerileri – 2. Modül</strong>
              </div>
              <div className="p-6 border rounded-2xl bg-white dark:bg-darklight shadow-sm">
                <strong>4) Stres Yönetimi</strong>
              </div>
              <div className="p-6 border rounded-2xl bg-white dark:bg-darklight shadow-sm">
                <strong>5) Zaman Yönetimi</strong>
              </div>
              <div className="p-6 border rounded-2xl bg-white dark:bg-darklight shadow-sm">
                <strong>6) Yapılandırılmış Mülakat Becerileri Eğitimi</strong>
              </div>
              <div className="p-6 border rounded-2xl bg-white dark:bg-darklight shadow-sm">
                <strong>7) Eğitim Tasarlama ve Sunuş Becerileri Eğitimi</strong>
              </div>
              <div className="p-6 border rounded-2xl bg-white dark:bg-darklight shadow-sm">
                <strong>8) Turizme Özel Departman Bazlı Eğitimler</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTrainings;