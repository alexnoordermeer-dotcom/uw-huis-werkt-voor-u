const STATS = [
  {
    value: "€375.000+",
    label: "Gemiddelde overwaarde van een 65-plusser in Nederland",
  },
  {
    value: "58%",
    label: "Van alle 65-plussers woont in een koopwoning",
  },
  {
    value: "290.000",
    label: "Tekort aan seniorenwoningen — wie nu wacht, heeft straks nog minder keuze",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We waren 68 en 70 en hadden veel vragen over onze overwaarde, en eerlijk gezegd ook flink wat twijfels.\n\nAlex nam de tijd om alles rustig uit te leggen, zonder druk en zonder haast. We begrijpen nu precies wat er kan, we hoeven ons huis niet te verlaten, en we voelen ons eindelijk gerust.\n\nAanrader voor iedereen in dezelfde situatie.",
    author: "Myra (68) & Bram (70)",
    subtitle: "klanten van Alex Noordermeer",
    image: "/testimonial-myra-bram.jpg",
  },
  {
    quote:
      "**Mijn pensioen zit in mijn Huis**\n\nPaul (68) werkte jarenlang als zzp’er in Amsterdam en bouwde nauwelijks pensioen op. Toen hij zijn overwaarden wilde benutten, liepen de banken niet mee. Hij zocht alternatieven, maar wilde vooral niet uit zijn huis.\n\nBij Welvarend Wonen vond hij transparante communicatie en betrouwbaarheid. Na overleg met zijn financieel adviseur en familie maakte hij de keuze. Nu ontvangt hij maandelijks een bedrag en kan hij genieten van zijn vrije tijd.\n\n**Het is financieel heel rustig. Ik kan naar mijn broer in Valencia en genieten van mijn leven.**\n\nDe video \"klantervaring Paul\" is op aanvraag beschikbaar.\n\nDankzij Welvarend Wonen hoef ik mijn huis niet te verlaten om van mijn pensioen te genieten.",
    author: "Paul Pelsser",
    subtitle: "klant via Welvarend Wonen",
    image: null,
  },
  {
    quote:
      "**Extra genieten van het leven**\n\nBerry (73) en Anny (71) zijn echte levensgenieters. Ze wilden meer uit het leven halen zonder hun geliefde appartement te verlaten. Hun vermogen zat vast in het huis, maar ze droomden van meer vakanties, huisjes en tijd met hun kinderen en kleinkinderen.\n\nSamen met hun kinderen namen ze de tijd om alles te begrijpen. De persoonlijke benadering en openheid gaf vertrouwen. Nu hebben ze de financiële ruimte om te genieten, precies zoals ze het voor zich zagen.\n\n**Je wordt nergens in gepusht. Het proces gaat in jouw tempo. Dat gaf vertrouwen.**\n\nDe video \"klantervaring Berry en Anny\" is op aanvraag beschikbaar.",
    author: "Anny & Berry van Gool",
    subtitle: "klanten via Welvarend Wonen",
    image: null,
  },
];

const MarketTimingTestimonials = () => {
  return (
    <section className="bg-white">
      {/* Market Timing */}
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16">
        <div className="max-w-[680px] mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#3094C6] mb-4">
            Nu is het moment
          </p>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D]">
            Nu is het moment — de cijfers spreken voor zich
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center bg-[#F8F8F8] rounded-2xl p-6 sm:p-8">
              <p className="text-[32px] sm:text-[38px] font-extrabold text-[#3094C6] mb-2">
                {stat.value}
              </p>
              <p className="text-[14px] text-[#4D4D4D]/75 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Context paragraph */}
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-base sm:text-lg text-[#4D4D4D] leading-relaxed">
            Intussen staat die overwaarde stil en levert niets op. Het Welvarend Wonen
            Overwaardeplan is er juist voor deze situatie: geen inkomensnorm, geen verhuisplicht,
            geen kosten uit eigen zak.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#F8F8F8]">
        <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-24">
          <div className="max-w-[680px] mx-auto text-center mb-12 sm:mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#99248F] mb-4">
              Ervaringen
            </p>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D]">
              Wat klanten zeggen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col"
              >
                {/* Quote icon */}
                <svg
                  className="w-8 h-8 text-[#99248F]/20 mb-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-[15px] text-[#4D4D4D] leading-relaxed flex-1 mb-5 whitespace-pre-line">
                  "{t.quote}"
                </p>

                {t.image && (
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden">
                    <img src={t.image} alt={t.author} className="w-full h-full object-cover" style={{ marginTop: '10px' }} />
                  </div>
                )}

                <div className="border-t border-gray-100 pt-4 text-center">
                  <p className="font-bold text-[#4D4D4D] text-sm">{t.author}</p>
                  <p className="text-xs text-[#4D4D4D]/60 mt-0.5">{t.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketTimingTestimonials;
