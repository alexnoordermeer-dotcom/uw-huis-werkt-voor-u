const STEPS = [
  {
    number: "1",
    title: "Vul uw situatie in",
    description:
      "Woningwaarde (eigen schatting is prima), openstaande hypotheek, leeftijd(en), gewenste looptijd, en of u doorbetaling aan erfgenamen wenst.",
  },
  {
    number: "2",
    title: "Wacht een paar seconden",
    description:
      "Het hulpmiddel rekent uw situatie indicatief door op basis van het Welvarend Wonen Overwaardeplan en stelt uw Persoonlijk Overzicht samen.",
  },
  {
    number: "3",
    title: "Ontvang uw Persoonlijk Overzicht",
    description:
      "Uw geschatte maandbedrag, jaarlijkse uitkering, optioneel eenmalig bedrag, erfenis-tijdlijn na 10/15/20 jaar, en een persoonlijke uitnodiging van Alex voor een kosteloos, vrijblijvend oriëntatiegesprek.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24">
        {/* Section header */}
        <div className="max-w-[680px] mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#99248F] mb-4">
            Zo eenvoudig is het
          </p>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D]">
            Zo werkt het — drie stappen
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {STEPS.map((step, i) => (
            <div key={i} className="text-center relative">
              {/* Step number badge */}
              <div className="w-14 h-14 rounded-2xl bg-[#99248F] text-white flex items-center justify-center text-xl font-extrabold mx-auto mb-5 shadow-lg">
                {step.number}
              </div>

              {/* Connecting line between steps (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-[#99248F]/15" />
              )}

              <h3 className="text-lg font-bold text-[#4D4D4D] mb-3">{step.title}</h3>
              <p className="text-[15px] text-[#4D4D4D]/75 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
