import { Reveal } from "./UI";

const COPY = {
  quote: "A saúde é construída todos os dias, em cada escolha consciente que fazemos.",
  quoteImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000",
  quoteImageAlt: "Lifestyle",
  steps: [
    {
      number: "01",
      title: "Anamnese Completa",
      description: "Entendemos seu histórico, rotina, exames e objetivos específicos.",
    },
    {
      number: "02",
      title: "Planejamento Único",
      description: "Elaboramos um plano alimentar que respeita seus gostos e estilo de vida.",
    },
    {
      number: "03",
      title: "Acompanhamento Ativo",
      description: "Suporte via WhatsApp para tirar dúvidas e fazer ajustes necessários.",
    },
    {
      number: "04",
      title: "Resultados Duradouros",
      description: "Foco na manutenção para que você não precise de outra dieta nunca mais.",
    },
  ],
};

export function Steps() {
  return (
    <section id="metodo" className="py-24 md:py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COPY.steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className={`p-8 md:p-12 h-full rounded-[32px] flex flex-col justify-between transition-transform duration-500 hover:scale-[1.02] ${idx === 0 || idx === 3 ? 'bg-[#FAF7F2] text-[#3A3532]' : 'bg-[#4A5D45] text-white'}`}>
                <span className="serif text-5xl md:text-7xl font-bold opacity-20">{step.number}</span>
                <div className="mt-6 md:mt-8">
                  <h3 className="serif text-xl md:text-2xl font-bold mb-3 md:mb-4">{step.title}</h3>
                  <p className="text-[10px] md:text-xs leading-relaxed opacity-70 font-medium">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <div className="h-[400px] lg:h-full rounded-[48px] overflow-hidden shadow-2xl relative group">
             <img 
                src={COPY.quoteImage} 
                alt={COPY.quoteImageAlt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
             />
             <div className="absolute bottom-10 left-10 right-10">
                 <div className="bg-white/90 backdrop-blur-md p-8 rounded-[32px] border border-white shadow-2xl">
                    <p className="serif italic text-xl text-[#4A5D45] leading-relaxed">
                      "{COPY.quote}"
                    </p>
                 </div>
             </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
