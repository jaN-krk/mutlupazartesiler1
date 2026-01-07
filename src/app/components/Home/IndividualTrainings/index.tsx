const IndividualTrainings = () => {
  return (
    <section id="bireysel-egitimler" className="py-16">
      <div className="container mx-auto lg:max-w-6xl md:max-w-screen-md px-4">
        <div className="mb-8 text-center p-6 border-2 border-primary rounded-2xl bg-gradient-to-r from-primary/5 to-orange-500/5 dark:from-primary/10 dark:to-orange-500/10">
          <h2 className="font-semibold md:text-4xl sm:text-3xl text-2xl text-black dark:text-white">BİREYSEL EĞİTİMLER</h2>
          <p className="mt-3 text-black/60 dark:text-white/60 max-w-5xl mx-auto">
            Bireysel eğitim ihtiyaçlarınız için 30 yıllık tecrübemizle yanınızdayız! “Bu çağ bilgi çağı ve ben kendime yatırım yapmak istiyorum” diyorsanız, tam size göre hazırlanan eğitim çözümlerimize göz atabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="group bg-white dark:bg-darklight border border-gray-200 dark:border-gray-700 rounded-2xl p-7 h-full flex flex-col hover:shadow-lg hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">1</div>
              <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">Yönetici Gelişim Programı</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed mb-4">Sözü geçen, belli bir güç alanına sahip, kendisi de ekibi de ezilmeyen, kriz anında çözülmeyen, az bilgiyle bile doğru karar verebilen daha güçlü bir yönetici olmaya mı ihtiyacınız var?</p>
            <ul className="mt-3 space-y-2 mb-auto">
              <li className="text-black/60 dark:text-white/60 text-sm flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>Liderlik ve karar alma becerileri</span>
              </li>
              <li className="text-black/60 dark:text-white/60 text-sm flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>Kriz yönetimi ve hızlı aksiyon alma</span>
              </li>
              <li className="text-black/60 dark:text-white/60 text-sm flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>Kariyer planlama için uygulamalı egzersizler</span>
              </li>
            </ul>
            <a href="mailto:info@mutlupazartesiler.com" className="mt-6 inline-block bg-primary hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Detaylı Bilgi</a>
          </article>

          <article className="group bg-white dark:bg-darklight border border-gray-200 dark:border-gray-700 rounded-2xl p-7 h-full flex flex-col hover:shadow-lg hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">2</div>
              <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">Eğitmen Yetiştirme Programı</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed mb-4">Ya eğitmensiniz ve sunum becerilerinizi güçlendirmek, sahne heyecanıyla başa çıkmak, katılımcıyı daha fazla etkilemek, kendi alanınızda ses getirmek istiyorsunuz… ya da bu alanda kariyer hedefiniz var.</p>
            <ul className="mt-3 space-y-2 mb-auto">
              <li className="text-black/60 dark:text-white/60 text-sm flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>Eğitim ihtiyaçlarını tespit etme</span>
              </li>
              <li className="text-black/60 dark:text-white/60 text-sm flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>İçerik yazımı ve yapılandırma</span>
              </li>
              <li className="text-black/60 dark:text-white/60 text-sm flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>Etkin sunum teknikleri ve uygulama</span>
              </li>
            </ul>
            <a href="mailto:info@mutlupazartesiler.com" className="mt-6 inline-block bg-primary hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Detaylı Bilgi</a>
          </article>

          <article className="group bg-white dark:bg-darklight border border-gray-200 dark:border-gray-700 rounded-2xl p-7 h-full flex flex-col hover:shadow-lg hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">3</div>
              <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">İşe Alım Uzmanlığı / Seçme – Yerleştirme Programı</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed mb-4">Bir kuruma bir kişiyi yerleştirmek sadece bir pozisyonu doldurmak değildir; tüm sisteme etki eden bir dokunuş yapmaktır.</p>
            <ul className="mt-3 space-y-2 mb-auto">
              <li className="text-black/60 dark:text-white/60 text-sm flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>Görev tanımı analizi</span>
              </li>
              <li className="text-black/60 dark:text-white/60 text-sm flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>Gerçekçi değerlendirme ve seçme yöntemleri</span>
              </li>
              <li className="text-black/60 dark:text-white/60 text-sm flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>Uygulamalı değerlendirme oturumları</span>
              </li>
            </ul>
            <a href="mailto:info@mutlupazartesiler.com" className="mt-6 inline-block bg-primary hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">Detaylı Bilgi</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default IndividualTrainings;