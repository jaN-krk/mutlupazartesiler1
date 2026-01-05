const IndividualTrainings = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto lg:max-w-6xl md:max-w-screen-md px-4">
        <div className="mb-8 text-center">
          <h2 className="font-semibold md:text-4xl sm:text-3xl text-2xl text-black dark:text-white">BİREYSEL EĞİTİMLER</h2>
          <p className="mt-3 text-black/60 dark:text-white/60 max-w-5xl mx-auto">
            Bireysel eğitim ihtiyaçlarınız için 30 yıllık tecrübemizle yanınızdayız! “Bu çağ bilgi çağı ve ben kendime yatırım yapmak istiyorum” diyorsanız, tam size göre hazırlanan eğitim çözümlerimize göz atabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="shadow-card-shadow p-6 rounded-3xl bg-white dark:bg-darklight h-full flex flex-col">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">Eğitmen Yetiştirme Programı</h3>
                <p className="text-black/70 dark:text-white/70 mt-2">Ya eğitmensiniz ve sunum becerilerinizi güçlendirmek, sahne heyecanıyla başa çıkmak, katılımcıyı daha fazla etkilemek, kendi alanınızda ses getirmek istiyorsunuz… ya da bu alanda kariyer hedefiniz var.</p>
              </div>
            </div>
            <ul className="mt-4 list-disc list-inside text-black/70 dark:text-white/70 space-y-2">
              <li>Eğitim ihtiyaçlarını tespit etme</li>
              <li>İçerik yazımı ve yapılandırma</li>
              <li>Etkin sunum teknikleri ve uygulama</li>
            </ul>
            <p className="mt-auto text-sm text-black/60 dark:text-white/60">Üstelik programlarımız online olarak gerçekleştiriliyor ve bolca uygulama imkânı sunuyor.</p>
            <a href="mailto:info@mutlupazartesiler.com" className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg">Detaylı Bilgi</a>
          </article>

          <article className="shadow-card-shadow p-6 rounded-3xl bg-white dark:bg-darklight h-full flex flex-col">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">İşe Alım Uzmanlığı / Seçme – Yerleştirme Programı</h3>
                <p className="text-black/70 dark:text-white/70 mt-2">Bir kuruma bir kişiyi yerleştirmek sadece bir pozisyonu doldurmak değildir; tüm sisteme etki eden bir dokunuş yapmaktır.</p>
              </div>
            </div>
            <ul className="mt-4 list-disc list-inside text-black/70 dark:text-white/70 space-y-2">
              <li>Görev tanımı analizi</li>
              <li>Gerçekçi değerlendirme ve seçme yöntemleri</li>
              <li>Uygulamalı değerlendirme oturumları</li>
            </ul>
            <p className="mt-auto text-sm text-black/60 dark:text-white/60">Üstelik eğitim online platformda gerçekleştiriliyor ve uygulama ağırlıklı ilerliyor.</p>
            <a href="mailto:info@mutlupazartesiler.com" className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg">Detaylı Bilgi</a>
          </article>

          <article className="shadow-card-shadow p-6 rounded-3xl bg-white dark:bg-darklight h-full flex flex-col">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">Yönetim Becerileri Programı (Bireysel)</h3>
                <p className="text-black/70 dark:text-white/70 mt-2">Sözü geçen, belli bir güç alanına sahip, kendisi de ekibi de ezilmeyen, kriz anında çözülmeyen, az bilgiyle bile doğru karar verebilen daha güçlü bir yönetici olmaya mı ihtiyacınız var?</p>
              </div>
            </div>
            <ul className="mt-4 list-disc list-inside text-black/70 dark:text-white/70 space-y-2">
              <li>Liderlik ve karar alma becerileri</li>
              <li>Kriz yönetimi ve hızlı aksiyon alma</li>
              <li>Kariyer planlama için uygulamalı egzersizler</li>
            </ul>
            <p className="mt-auto text-sm text-black/60 dark:text-white/60">Detaylı bilgi için … adresine e-posta gönderebilirsiniz.</p>
            <a href="mailto:info@mutlupazartesiler.com" className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg">Detaylı Bilgi</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default IndividualTrainings;