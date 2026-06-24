const ProductIntroParadigm = () => {
  return (
    <section className="bg-white">
      {/* Product introduction block */}
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="font-accent text-2xl sm:text-3xl text-[#99248F] mb-3">
            Maak kennis met
          </p>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D] mb-4">
            Maak kennis met Uw Huis Werkt Voor U
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-[#99248F] mb-6">
            Uw persoonlijke overwaarde-specialist — indicatieve berekening in 5 minuten, op maat
            voor uw situatie.
          </p>
          <p className="text-base sm:text-lg text-[#4D4D4D] leading-relaxed">
            Uw Huis Werkt Voor U is het persoonlijke hulpmiddel van Alex Noordermeer. Het stelt u
            zeven korte vragen, rekent uw situatie indicatief door op basis van het Welvarend Wonen
            Overwaardeplan, en levert u een concreet Persoonlijk Overzicht — met uw geschatte
            maandbedrag, erfenis-tijdlijn en een persoonlijke uitnodiging van Alex voor een gratis
            oriëntatiegesprek.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-[#F8F8F8] border border-[#619C30]/20 flex items-center justify-center -mb-6 relative z-10">
          <svg
            className="w-5 h-5 text-[#619C30]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      {/* Paradigm shift block */}
      <div className="bg-[#F8F8F8]">
        <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-24">
          <div className="max-w-[680px] mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#619C30] mb-4">
              De misvatting
            </p>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D] mb-6">
              U hoeft helemaal niet te verhuizen om van uw overwaarde te genieten.
            </h2>
            <p className="text-base sm:text-lg text-[#4D4D4D] leading-relaxed">
              De meeste mensen denken dat je je huis moet verkopen — of een risicovol financieel
              product moet afsluiten — om de waarde die erin zit te benutten. Dat klopt niet. Wat u
              nodig heeft is een heldere berekening van wat u gewoon thuis kunt ontvangen:
              maandelijks, levenslang, vrij besteedbaar, zonder inkomensnorm. Dat is precies wat dit
              hulpmiddel voor u doet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntroParadigm;
