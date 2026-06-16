import { ArrowRight } from "lucide-react";
import { Button, Reveal } from "./UI";

const COPY = {
  badge: "DEPOIMENTOS",
  title: "Histórias de quem transformou sua vida",
  ctaText: "QUERO COMEÇAR AGORA",
  testimonials: [
    {
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600&h=1000",
      name: "Mariana S.",
      result: "-12kg em 4 meses",
    },
    {
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600&h=1000",
      name: "Luciana F.",
      result: "+4kg de massa magra",
    },
    {
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=1000",
      name: "Ana Clara",
      result: "-8kg em 3 meses",
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600&h=1000",
      name: "Beatriz L.",
      result: "Reeducação completa",
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600&h=1000",
      name: "Fernanda G.",
      result: "-15kg e mais saúde",
    },
    {
      image: "https://images.unsplash.com/photo-1506794778202-cad8d3e1d447?auto=format&fit=crop&q=80&w=600&h=1000",
      name: "Juliana R.",
      result: "Fim do efeito sanfona",
    },
  ],
};

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 overflow-hidden bg-white border-y border-[#F0EBE5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
        <Reveal>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-[#4A5D45]">
            {COPY.badge}
          </span>
          <h2 className="serif text-3xl sm:text-4xl md:text-6xl text-[#3A3532] mt-4 font-semibold leading-tight">
            Histórias de quem <br className="hidden sm:block"/> transformou sua vida
          </h2>
          <Button variant="secondary" className="w-full sm:w-fit mt-8 md:mt-10 !px-10 md:!px-12 !py-4 md:!py-5 !rounded-lg group">
            {COPY.ctaText}
            <div className="bg-white/20 p-1 rounded-full text-white ml-3">
              <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
            </div>
          </Button>
        </Reveal>
      </div>
      
      {/* Full width marquee carousel with the new design */}
      <div className="flex animate-marquee-slow py-4">
        {[...COPY.testimonials, ...COPY.testimonials, ...COPY.testimonials].map((item, idx) => (
          <div key={idx} className="flex-shrink-0 px-4 w-[320px] md:w-[450px]">
             <div className="relative aspect-[3/4] rounded-[56px] overflow-hidden group hover:shadow-2xl transition-all duration-700 border border-[#F0EBE5]/50 bg-white shadow-xl">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A3532]/90 via-[#3A3532]/20 to-transparent opacity-90" />
                  
                  {/* Inner Glass Border */}
                  <div className="absolute inset-4 rounded-[40px] border border-white/20 pointer-events-none" />

                  <div className="absolute bottom-10 left-10 right-10 text-white space-y-3">
                      <div className="bg-[#E8A598] px-4 py-1.5 rounded-full w-fit shadow-lg shadow-[#E8A598]/20">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Resultado Real</span>
                      </div>
                      <h4 className="serif text-3xl font-bold tracking-tight">{item.name}</h4>
                      <p className="text-white/70 text-xs font-bold uppercase tracking-[0.3em]">{item.result}</p>
                  </div>

                  <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <ArrowRight className="w-6 h-6 rotate-[-45deg]" />
                  </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
