const FinalCTAFooter = () => {
  return (
    <>
      {/* Final CTA */}
      <section className="bg-[#F8F8F8]">
        <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 text-center">
          <div className="max-w-[680px] mx-auto">
            <p className="font-accent text-2xl sm:text-3xl text-[#99248F] mb-4">
              Geen spijt meer
            </p>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D] mb-8">
              Uw enige spijt is dat u niet eerder heeft gekeken.
            </h2>

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
              🔒 Volledig kosteloos · Geen verplichtingen · Resultaat in 5 minuten
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="max-w-[680px] mx-auto text-center">
            {/* Logo */}
            <img src="/400dpiLogo.png" alt="Consumentenzaken Logo" style={{ height: '96px', width: 'auto' }} className="mx-auto mb-6" />

            {/* Main contact line */}
            <div className="text-sm text-[#4D4D4D]/70 mb-6 leading-relaxed space-y-1">
              <p>© 2026 Consumentenzaken</p>
              <p>Warmoezenierstraat 24, 3231 BR Brielle</p>
              <p>Vast: <a href="tel:+31181356255" className="hover:text-[#99248F] transition-colors">0181-356255</a></p>
              <p>Mobiel: <a href="tel:+31612826368" className="hover:text-[#99248F] transition-colors">06-12826368</a></p>
              <p>E-mail: <a href="mailto:alex@consumentenzaken.com" className="hover:text-[#99248F] transition-colors">alex@consumentenzaken.com</a></p>
              <p>Website: <a href="https://www.consumentenzaken.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#99248F] transition-colors">www.consumentenzaken.com</a></p>
            </div>

            {/* Policy links */}
            <p className="text-sm text-[#4D4D4D]/70 mb-4">
              <a href="https://consumentenzaken.com/privacy-policy" className="hover:text-[#99248F] transition-colors underline underline-offset-2">
                Privacyverklaring
              </a>
              {" · "}
              <a href="/algemene-voorwaarden.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#99248F] transition-colors underline underline-offset-2">
                Algemene voorwaarden
              </a>
            </p>

            {/* Legal / KVK */}
            <p className="text-xs text-[#4D4D4D]/50 mb-6 leading-relaxed">
              KVK 59255838 · BTW NL002015763B19 · AFM 12019426 (via VP Wonen Spijkenisse) · Kifid
              300.013701
            </p>

            {/* Disclaimer */}
            <div className="bg-[#F8F8F8] rounded-xl p-5 sm:p-6 text-left">
              <p className="text-xs text-[#4D4D4D]/50 leading-relaxed">
                Disclaimer: Alle indicatieve bedragen in dit hulpmiddel zijn schattingen op basis
                van het Welvarend Wonen rekenmodel. Het definitieve bedrag wordt vastgesteld door
                Welvarend Wonen na taxatie en bouwkundige keuring. Dit hulpmiddel is geen financieel
                advies. Alex Noordermeer is SEH-geregistreerd financieel adviseur en werkzaam onder
                AFM-vergunning van VP Wonen Spijkenisse (AFM 12019426).
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FinalCTAFooter;
