const SelectionPlacement = () => {
  return (
    <section id="secme-yerlestirme" className="py-16 bg-[url('/images/plan/price-plan-background-icons.svg')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="container mx-auto lg:max-w-6xl md:max-w-screen-md px-4">
        <div className="mb-8 text-center p-6 md:p-8 border-2 border-primary rounded-2xl bg-gradient-to-r from-primary/5 to-orange-500/5 dark:from-primary/20 dark:to-orange-500/20">
          <h2 className="font-semibold md:text-4xl sm:text-3xl text-2xl text-black dark:text-white">
            Seçme ve Yerleştirme Desteği
          </h2>
          <p className="mt-4 text-black/65 dark:text-white/65 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base">
            Doğru pozisyonu doğru adayla buluşturuyoruz. Hizmet, tekstil, turizm ve çağrı merkezi sektörlerinde beyaz yaka işe alım süreçlerinizi hızlandırıyor; kurum kültürünüze ve pozisyon ihtiyaçlarınıza uygun nitelikli adaylara ulaşmanıza destek oluyoruz. İhtiyacınız olan doğru yeteneği, doğru zamanda ekibinize kazandırmanız için yanınızdayız.
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-darklight p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
            İletişim
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:fulyaengin@mutlupazartesiler.com"
                className="inline-flex items-center gap-3 text-black/75 dark:text-white/75 hover:text-primary dark:hover:text-primary transition-colors group"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base font-medium break-all">
                  fulyaengin@mutlupazartesiler.com
                </span>
              </a>
            </li>
            <li>
              <a
                href="mailto:cigdemengin@mutlupazartesiler.com"
                className="inline-flex items-center gap-3 text-black/75 dark:text-white/75 hover:text-primary dark:hover:text-primary transition-colors group"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base font-medium break-all">
                  cigdemengin@mutlupazartesiler.com
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SelectionPlacement;
