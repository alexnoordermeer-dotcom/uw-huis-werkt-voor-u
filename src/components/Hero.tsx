const Hero = () => {
  const scrollToToegang = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("toegang");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: text content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Badge / accent line */}
            <p className="font-accent text-2xl sm:text-3xl text-[#99248F] mb-4">
              Uw Huis Werkt Voor U
            </p>

            <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.15] font-extrabold text-[#4D4D4D] mb-6 tracking-tight">
              Ontdek in 5 minuten of uw woning u €1.000+ per maand extra oplevert — zonder te
              verhuizen, zonder inkomensnorm, zonder één euro uit eigen zak.
            </h1>

            <p className="text-base sm:text-lg text-[#4D4D4D] leading-relaxed mb-8 max-w-[620px] mx-auto lg:mx-0">
              Het persoonlijke hulpmiddel van Alex Noordermeer (SEH-erkend financieel adviseur, 27
              jaar ervaring) dat uw overwaarde indicatief doorrekent en u een concreet Persoonlijk
              Overzicht geeft — volledig kosteloos.
            </p>

            {/* CTA button */}
            <a
              href="#toegang"
              onClick={scrollToToegang}
              className="inline-flex items-center justify-center px-8 py-4 text-lg sm:text-xl font-bold text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: "#99248F" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7A1B72")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#99248F")}
            >
              Doe de gratis berekening →
            </a>

            {/* Microcopy */}
            <p className="mt-4 text-sm text-[#4D4D4D]/70">
              Volledig kosteloos · Geen verplichtingen · Resultaat in 5 minuten
            </p>
          </div>

          {/* Right: product mockup placeholder */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl border-2 border-dashed border-[#99248F]/25 bg-[#F8F8F8] flex flex-col items-center justify-center p-8">
              <div className="w-16 h-16 rounded-full bg-[#99248F]/10 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-[#99248F]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <p className="text-[#4D4D4D]/60 text-sm font-medium text-center">
                Persoonlijk Overzicht
              </p>
              <p className="text-[#4D4D4D]/40 text-xs mt-1 text-center">
                Placeholder — vervang met echte schermafbeelding
              </p>
              {/* Decorative lines to suggest content */}
              <div className="mt-6 space-y-3 w-full">
                <div className="h-3 bg-[#99248F]/10 rounded-full w-3/4 mx-auto" />
                <div className="h-3 bg-[#99248F]/10 rounded-full w-1/2 mx-auto" />
                <div className="h-3 bg-[#99248F]/10 rounded-full w-5/6 mx-auto" />
                <div className="h-3 bg-[#99248F]/10 rounded-full w-2/3 mx-auto" />
                <div className="h-3 bg-[#3094C6]/10 rounded-full w-3/4 mx-auto mt-5" />
                <div className="h-3 bg-[#3094C6]/10 rounded-full w-1/2 mx-auto" />
                <div className="h-3 bg-[#619C30]/10 rounded-full w-2/3 mx-auto mt-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom decorative curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8F8F8] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
