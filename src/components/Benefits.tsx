import { CheckCircle2, Phone } from "lucide-react";
import { Reveal } from "./UI";

const COPY = {
  badge: "BENEFÍCIOS",
  title: "Chega de dietas restritivas que não funcionam.",
  description: "Muitas mulheres enfrentam ciclos intermináveis de dietas restritivas e frustrações. É hora de quebrar esse padrão. A nossa abordagem foca no equilíbrio real, permitindo que você atinja seus objetivos de saúde sem sacrificar o prazer de comer.",
  imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000",
  imageAlt: "Salada saudável",
  benefits: [
    {
      title: "Método comprovado cientificamente.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Atendimento 100% personalizado.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
  ]
};

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-32 px-6 md:px-12 w-full bg-white border-b border-[#F0EBE5] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <Reveal>
          <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl h-[350px] md:h-[500px]">
            <img 
              src={COPY.imageUrl} 
              alt={COPY.imageAlt} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="space-y-6 md:space-y-8">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-[#E8A598]">
              {COPY.badge}
            </span>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#3A3532] leading-tight font-semibold">
              {COPY.title}
            </h2>
            <p className="text-[#4A4440] text-sm leading-relaxed opacity-60">
              {COPY.description}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#4A5D45]/10 border border-[#4A5D45]/10 group hover:bg-[#4A5D45] transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center text-[#4A5D45] group-hover:bg-white group-hover:text-[#4A5D45]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#3A3532] group-hover:text-white transition-colors">
                    {COPY.benefits[0].title}
                  </h4>
                  <p className="text-[11px] text-[#4A4440]/60 group-hover:text-white/60 transition-colors">
                    {COPY.benefits[0].description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#3A3532]/10 border border-[#3A3532]/10 group hover:bg-[#3A3532] transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center text-[#3A3532] group-hover:bg-white group-hover:text-[#3A3532]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#3A3532] group-hover:text-white transition-colors">
                    {COPY.benefits[1].title}
                  </h4>
                  <p className="text-[11px] text-[#4A4440]/60 group-hover:text-white/60 transition-colors">
                    {COPY.benefits[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
