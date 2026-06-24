const ProblemFuturePacing = () => {
  return (
    <section className="bg-[#F8F8F8]">
      {/* Problem block */}
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="max-w-[680px] mx-auto text-center">
          {/* Section label */}
          <p className="text-sm font-semibold uppercase tracking-wider text-[#99248F] mb-4">
            Het probleem
          </p>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D] mb-6">
            Uw huis staat vol geld. Maar uw bankrekening is leeg.
          </h2>
          <p className="text-base sm:text-lg text-[#4D4D4D] leading-relaxed">
            U woont in een woning die tienduizenden — vaak honderdduizenden — euro's waard is. Elke
            maand doet u het met een pensioen dat net niet genoeg is. U heeft al gehoord dat "er
            iets te doen is met uw overwaarde", maar dan begint het jargon: opeethypotheek,
            verzilverhypotheek, levering op termijn. De bank zegt nee vanwege uw inkomen. En
            verhuizen naar een gelijkvloers appartement? Er is geen betaalbaar aanbod, en het voelt
            als opgeven.
          </p>
          <p className="text-base sm:text-lg text-[#4D4D4D] leading-relaxed mt-4 font-semibold">
            Intussen staat er iedere maand geld op slot in de muren om u heen.
          </p>
        </div>
      </div>

      {/* Divider with subtle icon */}
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-white border border-[#99248F]/20 flex items-center justify-center -mb-6 relative z-10">
          <svg
            className="w-5 h-5 text-[#99248F]"
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

      {/* Future-pacing block */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-24">
          <div className="max-w-[680px] mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#619C30] mb-4">
              Stel u voor
            </p>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D] mb-6">
              Stel u voor: aan het einde van elke maand een vast extra bedrag op uw rekening.
            </h2>
            <p className="text-base sm:text-lg text-[#4D4D4D] leading-relaxed">
              Niet vanuit een lening. Niet omdat u bent verhuisd. Gewoon omdat uw huis voor u werkt
              — terwijl u er zelf in blijft wonen, in uw eigen buurt, op uw eigen vertrouwde plek. U
              weet eindelijk wat er financieel mogelijk is, heeft rust, en gaat goed voorbereid het
              gesprek in met een adviseur die alles voor u uitzoekt. Zonder kosten uit eigen zak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemFuturePacing;
