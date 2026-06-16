import { Reveal } from "./UI";

const COPY = {
  badge: "SERVIÇOS",
  title: "Como posso te ajudar a atingir seus objetivos",
  items: [
    {
      title: "Emagrecimento Definitivo",
      description: "Foco na queima de gordura preservando a massa magra, com estratégias que cabem na sua rotina.",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Ganho de Massa Magra",
      description: "Para quem busca definição muscular e melhor performance física através da nutrição.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Reeducação Alimentar",
      description: "Aprenda a comer de tudo, sem culpa, entendendo as necessidades do seu corpo.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Tratamento de Doenças",
      description: "Acompanhamento nutricional para o controle de diabetes, hipertensão e outras patologias.",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800",
    },
  ],
};

export function Services() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center mb-12 md:mb-16 space-y-4">
           <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-[#E8A598]">
             {COPY.badge}
           </span>
           <h2 className="serif text-3xl sm:text-4xl md:text-5xl text-[#3A3532] leading-tight font-semibold">
             Como posso te ajudar <br className="hidden sm:block"/> a atingir seus objetivos
           </h2>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {COPY.items.map((service, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <div className="bg-white rounded-2xl overflow-hidden border border-[#F0EBE5] transition-all duration-500 group h-full flex flex-col hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-all duration-1000" 
                  />
                  {/*grayscale group-hover:grayscale-0 group-hover:scale-110 */}
              </div>
              <div className="p-8 flex-grow flex flex-col gap-3">
                <h3 className="serif text-xl font-bold text-[#3A3532]">{service.title}</h3>
                <p className="text-[#4A4440] text-xs leading-relaxed opacity-60 flex-grow">{service.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
