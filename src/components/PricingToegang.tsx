const BENEFITS = [
  "Persoonlijk Overzicht met indicatief maand- en jaarbedrag",
  "Erfenis-tijdlijn na 10, 15 en 20 jaar",
  "Eenmalig bedrag check (tot €30.000)",
  "Scenario Vergelijker",
  "Persoonlijke uitnodiging van Alex voor een gratis oriëntatiegesprek",
];

const PricingToegang = () => {
  return (
    <section id="toegang" className="bg-white scroll-mt-[72px]">
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#619C30] mb-4">
            Start vandaag
          </p>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D] mb-6">
            Doe de gratis berekening — volledig kosteloos
          </h2>

          <p className="text-base sm:text-lg text-[#4D4D4D] leading-relaxed mb-10">
            Uw Huis Werkt Voor U is het persoonlijke hulpmiddel van Alex Noordermeer — en het is
            volledig kosteloos voor u, omdat Welvarend Wonen het traject financiert.
          </p>

          {/* Benefits checklist */}
          <div className="bg-[#F8F8F8] rounded-2xl p-6 sm:p-8 mb-10 text-left max-w-md mx-auto">
            <p className="text-sm font-bold text-[#4D4D4D] mb-4 text-center">
              Wat u ontvangt:
            </p>
            <ul className="space-y-3">
              {BENEFITS.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#619C30] shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[15px] text-[#4D4D4D]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <a
            href="/REKENT1.HTM"
            className="inline-flex items-center justify-center px-10 py-4 text-xl sm:text-2xl font-bold text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: "#99248F" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7A1B72")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#99248F")}
          >
            Doe de gratis berekening →
          </a>

          <p className="mt-4 text-sm text-[#4D4D4D]/70">
            Volledig kosteloos · Geen verplichtingen · Resultaat in 5 minuten
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingToegang;
