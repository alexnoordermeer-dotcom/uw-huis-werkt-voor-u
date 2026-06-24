const RESULTS = [
  "U weet eindelijk concreet wat uw huis u oplevert — geen vaag \"dat hangt ervan af\", maar een indicatief maandbedrag voor uw specifieke situatie.",
  "U gaat goed voorbereid het gesprek met Alex in, zonder schaamte en zonder dat u iets hoeft uit te zoeken.",
  "U stopt met uitstellen — want elke maand zonder duidelijkheid is een maand zonder financiële ruimte.",
  "U weet wat er overblijft voor uw kinderen — en u kiest zelf welke optie bij uw situatie past.",
  "U beslist in uw eigen tempo, volledig vrijblijvend, zonder verkoopdruk.",
];

const COMPARISON_ROWS = [
  {
    old: "Banken afbellen en afgewezen worden vanwege een te laag pensioeninkomen",
    new: "Geen inkomensnorm — rekent met uw overwaarde, niet met uw inkomen",
  },
  {
    old: "Weken van zoeken, wachten en teleurstelling",
    new: "In 5 minuten uw persoonlijke overzicht",
  },
  {
    old: "Taxatiekosten (€600), notariskosten (€2.750) en advieskosten — oplopend tot €3.700+",
    new: "€0 uit eigen zak — Welvarend Wonen financiert het volledige traject",
  },
  {
    old: "Jargon als \"opeethypotheek\" en \"verzilverhypotheek\" — onduidelijk en intimiderend",
    new: "Zeven eenvoudige vragen, direct een concreet getal",
  },
  {
    old: "Eerst een adviseur betalen voordat u weet of u überhaupt in aanmerking komt",
    new: "Kosteloos uw situatie doorrekenen — dán pas het gesprek",
  },
];

const ResultsComparison = () => {
  return (
    <section className="bg-white">
      {/* Results section */}
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16">
        <div className="max-w-[680px] mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#619C30] mb-4">
            Uw resultaat
          </p>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D]">
            Wat er verandert vanaf dag één
          </h2>
        </div>

        <div className="max-w-[620px] mx-auto space-y-4">
          {RESULTS.map((result, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-[#619C30]/12 flex items-center justify-center shrink-0 mt-0.5">
                <svg
                  className="w-3.5 h-3.5 text-[#619C30]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="text-base sm:text-lg text-[#4D4D4D] leading-relaxed">{result}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison table */}
      <div className="bg-[#F8F8F8]">
        <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-24">
          <div className="max-w-[680px] mx-auto text-center mb-10 sm:mb-14">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] leading-[1.2] font-extrabold text-[#4D4D4D]">
              De oude manier vs. Uw Huis Werkt Voor U
            </h2>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-100">
            <table className="w-full">
              <thead>
                <tr className="bg-[#99248F]/5">
                  <th className="text-left px-6 py-4 text-sm font-bold text-[#99248F] w-1/2">
                    ❌ De Oude Manier
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-bold text-[#619C30] w-1/2">
                    ✅ Met Uw Huis Werkt Voor U
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F8F8]"}>
                    <td className="px-6 py-4 text-[15px] text-[#4D4D4D]/80 leading-relaxed">
                      {row.old}
                    </td>
                    <td className="px-6 py-4 text-[15px] text-[#4D4D4D] leading-relaxed font-medium">
                      {row.new}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden max-w-lg mx-auto space-y-4">
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <div className="px-5 py-3 bg-red-50 border-b border-red-100">
                  <p className="text-xs font-bold text-red-500 uppercase mb-1">❌ De Oude Manier</p>
                  <p className="text-[14px] text-[#4D4D4D]/80">{row.old}</p>
                </div>
                <div className="px-5 py-3 bg-green-50">
                  <p className="text-xs font-bold text-[#619C30] uppercase mb-1">
                    ✅ Met Uw Huis Werkt Voor U
                  </p>
                  <p className="text-[14px] text-[#4D4D4D] font-medium">{row.new}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsComparison;
