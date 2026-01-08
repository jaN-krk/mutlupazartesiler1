const CorporateTrainings = () => {
  return (
    <section id="kurumsal-egitimler" className="py-16 bg-[url('/images/plan/price-plan-background-icons.svg')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="container mx-auto lg:max-w-6xl md:max-w-screen-md px-4">
        <div className="mb-8 text-center p-6 border-2 border-primary rounded-2xl bg-gradient-to-r from-primary/5 to-orange-500/5 dark:from-primary/20 dark:to-orange-500/20">
          <h2 className="font-semibold md:text-4xl sm:text-3xl text-2xl text-black dark:text-white">KURUMSAL EĞİTİMLER</h2>
          <p className="mt-3 text-black/60 dark:text-white/60 max-w-5xl mx-auto">
            Eğitimlerimizi, kurumların günlük iş akışında gerçekten işe yarayan, sonuç odaklı çözümlerle tasarlıyoruz. 30 yıllık deneyimimizle ekiplerinizin iletişimden yönetime tüm becerilerini ölçülebilir şekilde güçlendiren, sahaya doğrudan uygulanabilir yöntemler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Row 1 */}
          <article className="group bg-white dark:bg-darklight border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center group-hover:scale-110 transition-transform">1</span>
              <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">Yönetim Becerileri Eğitimi 1. Modül</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">Yöneticilerinizin karar alma, yönlendirme ve ekip yönetimi becerilerini güçlendirerek operasyonel verimliliği ölçülebilir şekilde artırır. Günlük ve akabinde uzun vadeli yönetim sorunlarını azaltıp ekiplerin daha organize, motive ve performans odaklı çalışmasını sağlar.</p>
          </article>

          <article className="group bg-white dark:bg-darklight border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center group-hover:scale-110 transition-transform">5</span>
              <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">Zaman Yönetimi</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">Çalışanlarınızın zamanı daha etkin planlayarak önceliklerini netleştirmesini, zaman kayıplarını azaltıp ekiplerin daha organize, hızlı ve verimli çalışmasını ve iş verimliliğini belirgin şekilde artırmasını sağlar.</p>
          </article>

          {/* Row 2 */}
          <article className="group bg-white dark:bg-darklight border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center group-hover:scale-110 transition-transform">2</span>
              <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">İleri Yönetim Becerileri 2. Modül</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">Yöneticilerinizin stratejik düşünme, zorlu durumları yönetme ve organizasyon içinde etkisini artırma becerilerini güçlendirerek liderlik etkisini üst seviyeye taşır.</p>
          </article>

          <article className="group bg-white dark:bg-darklight border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center group-hover:scale-110 transition-transform">6</span>
              <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">Yapılandırılmış Mülakat Becerileri Eğitimi</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">İK profesyonellerinizin ve yöneticilerinizin adil, tutarlı ve yetkinlik bazlı mülakatlar yaparak doğru adayı daha hızlı ve güvenle seçmesini sağlar.</p>
          </article>

          {/* Row 3 */}
          <article className="group bg-white dark:bg-darklight border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center group-hover:scale-110 transition-transform">3</span>
              <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">İletişim Becerileri Eğitimi</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">Ekiplerinizin daha hızlı, net ve çatışmasız iletişim kurarak iş süreçlerinde ölçülebilir verim artışı sağlaması için tasarlandı. İletişim kaynaklı verim kayıplarını ortadan kaldırıp ekip performansını belirgin şekilde yükseltir.</p>
          </article>

          <article className="group bg-white dark:bg-darklight border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center group-hover:scale-110 transition-transform">7</span>
              <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">Eğitim Tasarlama ve Sunuş Becerileri Eğitimi</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">İç eğitmenlerinizin etkili, katılımcı ve hedefe yönelik eğitimler tasarlayıp profesyonel bir şekilde sunarak öğrenme etkisini belirgin şekilde artırmasını sağlar.</p>
          </article>

          {/* Row 4 */}
          <article className="group bg-white dark:bg-darklight border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center group-hover:scale-110 transition-transform">4</span>
              <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">Stres Yönetimi</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">Çalışanlarınızın stres kaynaklarını doğru yöneterek daha dengeli, odaklı ve sürdürülebilir bir performans sergilemesini sağlar.</p>
          </article>

          <article className="group bg-white dark:bg-darklight border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:border-primary dark:hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-3 mb-2">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center group-hover:scale-110 transition-transform">8</span>
              <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">Turizme Özel Departman Bazlı Eğitimler</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">Ön bürodan misafir ilişkilerine, yiyecek–içecekten kat hizmetleri ve güvenliğe kadar tüm departmanlarınızın hizmet kalitesini standartlaştırarak misafir memnuniyetini belirgin şekilde artırır.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CorporateTrainings;