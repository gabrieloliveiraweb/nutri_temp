import { Reveal } from "./UI";

const COPY = {
  badge: "BENEFÍCIOS",
  title: "Uma metodologia focada na sua individualidade.",
  imageUrl: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1000",
  imageAlt: "Individualidade",
  items: [
    "Plano alimentar adaptado aos seus gostos e horários.",
    "Suporte via WhatsApp para tirar dúvidas diárias.",
    "Análise de exames laboratoriais inclusa.",
    "E-book de receitas práticas e saudáveis.",
    "Lista de compras organizada para facilitar a ida ao supermercado."
  ]
};

export function Methodology() {
  return (
    <section className="py-32 bg-[#FAF7F2] border-y border-[#F0EBE5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
        <Reveal>
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl rotate-[-2deg]">
            <img 
              src={COPY.imageUrl} 
              alt={COPY.imageAlt} 
              className="w-full h-[550px] object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="space-y-8">
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#E8A598]">
              {COPY.badge}
            </span>
            <h2 className="serif text-4xl md:text-5xl lg:text-6xl text-[#3A3532] leading-tight font-semibold">
              {COPY.title}
            </h2>
            <ul className="space-y-6">
              {COPY.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 text-[#4A5D45]">
                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
                  </div>
                  <span className="text-sm text-[#4A4440] opacity-80 leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
