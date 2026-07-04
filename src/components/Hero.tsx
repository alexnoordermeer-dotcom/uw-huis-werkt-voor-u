const Hero = () => {
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
              href="/REKENT1.HTM"
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

          {/* Right: product mockup image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-[420px]">
              <img
                src="/persoonlijk-overzicht.png"
                alt="Persoonlijk Overzicht"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
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
