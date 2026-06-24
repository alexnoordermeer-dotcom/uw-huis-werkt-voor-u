import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Is dit een opeethypotheek?",
    answer:
      "Nee. U verkoopt uw woning met levering op termijn en behoudt levenslang woonrecht. Er is geen rente, geen lening en geen maandlast.",
  },
  {
    question: "Wat blijft er over voor mijn kinderen?",
    answer:
      "U kiest zelf. Met doorbetaling ontvangen uw erfgenamen de resterende uitkeringen na uw overlijden. Het Persoonlijk Overzicht laat beide scenario's naast elkaar zien na 10, 15 en 20 jaar.",
  },
  {
    question: "Wat is het addertje?",
    answer:
      "U geeft de toekomstige verkoopwaarde van uw woning op. De verkoopprijs wordt vooraf vastgesteld — u maakt geen aanspraak op waardestijging, maar ook geen zorgen over waardedaling.",
  },
  {
    question: "Wie betaalt al die kosten?",
    answer:
      "Welvarend Wonen financiert het traject als onderdeel van hun dienstverlening. De taxatie (€600), bouwkundige keuring (€385), notaris (€2.750) en het advies: voor u zijn er geen kosten uit eigen zak.",
  },
  {
    question: "Wat als ik 100 jaar word?",
    answer:
      "De standaardlooptijd loopt tot uw 100e levensjaar. U ontvangt elke maand uw uitkering zolang u binnen die looptijd leeft.",
  },
  {
    question: "Wat als Welvarend Wonen failliet gaat?",
    answer:
      "U blijft juridisch eigenaar. Bij 6 maanden achterstand wordt de overeenkomst ontbonden — u houdt de woning én alle ontvangen bedragen.",
  },
  {
    question: "Zijn de bedragen gegarandeerd?",
    answer:
      "De bedragen in uw Persoonlijk Overzicht zijn indicatief. Het exacte bedrag wordt definitief vastgesteld door Welvarend Wonen na taxatie en bouwkundige keuring.",
  },
  {
    question: "Moet ik meteen iets beslissen?",
    answer:
      "Nee. Het gesprek met Alex is volledig vrijblijvend. U tekent niets en beslist zelf of en wanneer u een vervolgstap zet.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-white scroll-mt-[72px]">
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24">
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#3094C6] mb-4">
              Vragen?
            </p>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.2] font-extrabold text-[#4D4D4D]">
              Veelgestelde vragen
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#F8F8F8] rounded-xl border border-gray-100 px-5 data-[state=open]:bg-white data-[state=open]:border-[#99248F]/20 transition-colors"
              >
                <AccordionTrigger className="text-left text-[15px] sm:text-base font-bold text-[#4D4D4D] py-5 hover:text-[#99248F] transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-[#4D4D4D]/80 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
