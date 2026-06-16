import { ArrowRight } from "lucide-react";
import { Button, Reveal } from "./UI";

const COPY = {
  badge: "MARIA CLARA",
  title: "Quem vai te ajudar nessa jornada?",
  bio: "Com mais de 10 anos de experiência, minha missão é ajudar mulheres a encontrarem sua melhor versão através de uma nutrição consciente e humanizada. Acredito que a dieta deve se adaptar a você, e não o contrário. Minha abordagem humanizada garante que você chegue ao seu objetivo com saúde física e mental, sem fórmulas prontas ou promessas vazias.",
  ctaText: "CONHECER MEU MÉTODO",
  imageAlt: "Helena",
  imageUrl: "./persona.png",
};

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#F0EBE5] overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-stretch">
        <Reveal>
          <div className="space-y-8 md:space-y-10 h-full flex flex-col justify-center">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E8A598]">
                {COPY.badge}
              </span>
              <h2 className="serif text-4xl sm:text-5xl md:text-[64px] font-semibold text-[#3A3532] leading-[1.2] md:leading-tight">
                Quem vai te ajudar <br className="hidden sm:block" /> nessa jornada?
              </h2>
            </div>
            <p className="text-[#4A4440] text-base md:text-lg leading-relaxed opacity-70 font-light italic border-l-4 border-[#E8A598] pl-6 md:pl-8 py-2">
              "{COPY.bio}"
            </p>
            <Button variant="secondary" className="w-full sm:w-fit !px-10 md:!px-12 !py-4 md:!py-5 !rounded-lg group">
              {COPY.ctaText}
              <div className="bg-white/20 p-1 rounded-full text-white ml-3">
                <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
              </div>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.2} className="flex items-center justify-center">
          <div className="rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-[#FAF7F2] w-full max-w-[450px] aspect-[3/4]">
            <img
              src={COPY.imageUrl}
              alt={COPY.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
