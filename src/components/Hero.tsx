import { ArrowRight } from "lucide-react";
import { Button, Reveal } from "./UI";

const COPY = {
  title: "Emagreça de forma saudável, sem dietas radicais ou restrições extremas",
  subtitle: "Descubra como uma alimentação equilibrada e personalizada pode transformar sua saúde, energia e autoestima. Consultoria exclusiva para mulheres que buscam longevidade.",
  ctaText: "Agendar minha consulta",
  imageAlt: "Nutricionista",
  imageUrl: "./persona.png",
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-56 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="space-y-6 md:space-y-8 max-w-xl text-center md:text-left">
            <span className="inline-block px-4 py-1.5 border border-[#506750]/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#506750] mb-6">
              Curitiba & Online 
            </span>
            <h1 className="serif text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-[#3A3532] leading-[1.2] md:leading-[1.1] mb-6 font-semibold">
              {COPY.title}
            </h1>
            <p className="text-[#4A4440] text-base md:text-lg opacity-70 leading-relaxed font-normal px-2 md:px-0">
              {COPY.subtitle}
            </p>
           
             <div className="flex flex-col justify-center lg:flex-row lg:justify-start gap-4">
                <Button className="w-full sm:w-fit self-center md:self-start group !rounded-lg !py-3 md:!py-4 !px-6 !bg-[#4A5D45] text-xs lg:text-sm tracking-widest">
                  {COPY.ctaText}
                  <div className="bg-white/20 p-1 rounded-full text-white ml-3">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 rotate-[-45deg]" />
                  </div>
                </Button>
                <div className="flex items-center justify-center md:justify-start gap-3 px-6 md:px-0 mt-4 sm:mt-0">
                  <div className="flex -space-x-1">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i+20}`} alt="Patient" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-tight text-[#6B7E6F]">+2k atendimentos</span>
                </div>
              </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[4/5] bg-gray-100 rounded-t-[150px] md:rounded-t-[250px] rounded-b-[40px] md:rounded-b-[50px] overflow-hidden border-[10px] md:border-[15px] border-white shadow-2xl">
              <img 
                src={COPY.imageUrl} 
                alt={COPY.imageAlt} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Organic Shape Decal */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-20 bg-[#4A5D45]/15 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
               <div className="w-10 h-10 text-[#4A5D45] opacity-40">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
               </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
