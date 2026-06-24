const CreatorInfo = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24">
        <div className="max-w-[680px] mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="font-accent text-2xl sm:text-3xl text-[#99248F] mb-3">Hallo, ik ben</p>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D]">
              Hallo, ik ben Alex Noordermeer
            </h2>
          </div>

          {/* Photo placeholder + text */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mb-10">
            {/* Photo placeholder */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-[#99248F]/10 border-2 border-dashed border-[#99248F]/25 flex items-center justify-center shrink-0">
              <svg
                className="w-12 h-12 text-[#99248F]/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-base sm:text-lg text-[#4D4D4D] leading-relaxed">
                Mijn naam is Alex Noordermeer. Ik ben financieel adviseur met 27 jaar ervaring en
                heb al meer dan 3.000 mensen geholpen met de grootste financiële beslissingen van
                hun leven. Ik werk door heel Zuid-Holland en omstreken — van Rotterdam en Dordrecht
                tot Den Haag en de eilanden.
              </p>
            </div>
          </div>

          {/* Continuation text */}
          <p className="text-base sm:text-lg text-[#4D4D4D] leading-relaxed mb-10">
            Ik heb dit hulpmiddel gemaakt omdat ik elke week mensen spreek die al jarenlang met
            onzekerheid rondlopen over hun overwaarde. Ze hebben het gevoel dat er iets mogelijk is,
            maar weten niet waar te beginnen, en durven niet zomaar een adviseur te bellen. Met dit
            hulpmiddel kunt u in 5 minuten zien wat er in uw specifieke situatie indicatief mogelijk
            is — zonder kosten, zonder verplichtingen, en zonder dat ik ooit druk zet.
          </p>

          {/* Credentials card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
            <p className="font-bold text-[#4D4D4D] mb-3">
              Alex Noordermeer — Consumentenzaken
            </p>
            <p className="text-[15px] text-[#4D4D4D]/70 leading-relaxed mb-4">
              Warmoezenierstraat 24, 3231 BR Brielle · 0181-356255
            </p>
            <p className="text-[13px] text-[#4D4D4D]/50 leading-relaxed">
              SEH-geregistreerd · WFT-gediplomeerd · AFM-nummer 12019426 (via VP Wonen Spijkenisse)
              · Kifid 300.013701
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorInfo;
