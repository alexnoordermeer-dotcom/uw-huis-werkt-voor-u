import { Calculator, Clock, DollarSign, GitCompare, CheckCircle, FileText } from "lucide-react";

const FEATURES = [
  {
    icon: Calculator,
    title: "Maandbedrag Berekening",
    description:
      "Berekent indicatief uw maandelijkse uitkering op basis van uw overwaarde, leeftijd en gewenste looptijd (85/90/95/100 jaar).",
  },
  {
    icon: Clock,
    title: "Erfenis Tijdlijn",
    description:
      "Toont hoeveel beschikbaar blijft voor uw kinderen na 10, 15 en 20 jaar, met en zonder doorbetaling.",
  },
  {
    icon: DollarSign,
    title: "Eenmalig Bedrag Check",
    description:
      "Berekent of u vooraf tot €30.000 kunt ontvangen voor een directe wens (camper, schenking, verbouwing) — als vooruitbetaling van uw eerste maandtermijnen.",
  },
  {
    icon: GitCompare,
    title: "Scenario Vergelijker",
    description:
      "Vergelijkt twee looptijdkeuzes naast elkaar zodat u het verschil in maandbedrag direct ziet.",
  },
  {
    icon: CheckCircle,
    title: "Geschiktheidscheck",
    description:
      "Controleert eerlijk of u voldoet aan de minimale criteria van het Welvarend Wonen product (68+, min. €125.000 overwaarde).",
  },
  {
    icon: FileText,
    title: "Gepersonaliseerde CTA",
    description:
      "Genereert een op maat gemaakt Persoonlijk Overzicht dat u kunt doorsturen naar uw partner of kinderen, en dient als samenvatting voor uw oriëntatiegesprek met Alex.",
  },
];

const FeaturesGrid = () => {
  return (
    <section id="hoe-het-werkt" className="bg-white scroll-mt-[72px]">
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24">
        {/* Section header */}
        <div className="max-w-[680px] mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#99248F] mb-4">
            Wat u krijgt
          </p>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D]">
            Wat u vanaf de eerste minuut in handen heeft
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-[#99248F]/25 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#99248F]/8 flex items-center justify-center mb-5 group-hover:bg-[#99248F]/15 transition-colors">
                  <Icon className="w-6 h-6 text-[#99248F]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#4D4D4D] mb-2">{feature.title}</h3>

                {/* Description */}
                <p className="text-[15px] text-[#4D4D4D]/75 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
