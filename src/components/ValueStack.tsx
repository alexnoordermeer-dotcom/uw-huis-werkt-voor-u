import { FileText, Clock, DollarSign, CheckCircle, User } from "lucide-react";

const VALUE_ITEMS = [
  {
    icon: FileText,
    title: "Persoonlijk Overzicht",
    description:
      "Uw indicatief maandbedrag, jaarbedrag en totaalbedrag over de volledige looptijd, berekend voor uw specifieke situatie",
  },
  {
    icon: Clock,
    title: "Erfenis-tijdlijn",
    description:
      "Twee scenario's naast elkaar (met en zonder doorbetaling aan erfgenamen) na 10, 15 en 20 jaar",
  },
  {
    icon: DollarSign,
    title: "Eenmalig bedrag optie",
    description:
      "Berekening van uw vooruitbetalingsoptie (tot €30.000) en wanneer uw reguliere maanduitkering hervat",
  },
  {
    icon: CheckCircle,
    title: "Geschiktheidsbevestiging",
    description: "Eerlijk antwoord op de vraag of u aan de minimale criteria voldoet",
  },
  {
    icon: User,
    title: "Persoonlijke uitnodiging van Alex",
    description:
      "Drie opties om contact op te nemen voor een gratis, vrijblijvend oriëntatiegesprek",
  },
];

const WHATS_INSIDE = [
  "Geschat maandbedrag — uw indicatieve maandelijkse uitkering, afgeleid van uw woningwaarde, hypotheek en leeftijd.",
  "Jaarlijkse uitkering — wat dat op jaarbasis oplevert.",
  "Totaal te ontvangen over de looptijd — het totaalbedrag over de volledige looptijd.",
  "Erfenis-tijdlijn — twee scenario's naast elkaar: wél en niet doorbetalen aan erfgenamen, met bedragen na 10, 15 en 20 jaar.",
  "Eenmalig bedrag optie — of en hoeveel u kunt ontvangen voor een directe wens, inclusief de maand vanaf wanneer uw reguliere uitkering hervat.",
  "Geschiktheidsbevestiging — een helder \"u voldoet aan de criteria\" of eerlijk advies als u er dichtbij zit.",
  "Drieledige uitnodiging van Alex — terugbelverzoek, WhatsApp, of direct bellen — u kiest wat bij u past.",
  "Doorstuuruitnodiging — zodat u het overzicht kunt bespreken met uw partner of kinderen.",
  "Vrijblijvendheidsverklaring — \"Dit gesprek is volledig vrijblijvend. U tekent niets en beslist zelf of en wanneer u een vervolgstap zet.\"",
];

const ValueStack = () => {
  return (
    <section id="wat-u-krijgt" className="bg-white scroll-mt-[72px]">
      {/* Value stack */}
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16">
        <div className="max-w-[680px] mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#99248F] mb-4">
            Wat u ontvangt
          </p>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D]">
            Alles wat u krijgt — volledig kosteloos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {VALUE_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 hover:border-[#99248F]/25 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#99248F]/8 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#99248F]" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-[#4D4D4D] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#4D4D4D]/75 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Closing line */}
        <p className="text-center text-lg font-bold text-[#619C30] mt-10">
          Alles kosteloos. Geen abonnement. Geen verplichtingen.
        </p>
      </div>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-[#F8F8F8] border border-[#99248F]/20 flex items-center justify-center -mb-6 relative z-10">
          <svg
            className="w-5 h-5 text-[#99248F]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>

      {/* What's Inside */}
      <div className="bg-[#F8F8F8]">
        <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-24">
          <div className="max-w-[680px] mx-auto text-center mb-10 sm:mb-14">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] leading-[1.2] font-extrabold text-[#4D4D4D]">
              Wat er in uw Persoonlijk Overzicht staat
            </h2>
            <p className="text-[15px] text-[#4D4D4D]/70 mt-3">
              Uw Persoonlijk Overzicht bevat negen onderdelen:
            </p>
          </div>

          <div className="max-w-[620px] mx-auto space-y-4">
            {WHATS_INSIDE.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 sm:p-5 border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-[#99248F] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <p className="text-[15px] text-[#4D4D4D] leading-relaxed pt-0.5">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;
