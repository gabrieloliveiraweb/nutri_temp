import { ArrowRight } from "lucide-react";
import { Button, Reveal } from "./UI";

const COPY = {
  title: "A sua transformação começa com uma decisão.",
  subtitle: "Não espere a \"segunda-feiira\" para priorizar a sua saúde e bem-estar.",
  ctaText: "AGENDAR MINHA AVALIAÇÃO AGORA",
};

export function CTA() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <Reveal>
        <div className="bg-[#4A5D45] rounded-[32px] md:rounded-[48px] p-10 md:p-24 text-center space-y-8 md:space-y-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] -mr-40 -mt-40" />
          <h2 className="serif text-3xl sm:text-4xl md:text-6xl text-white font-semibold leading-tight px-2">
            A sua transformação <br className="hidden sm:block" /> começa com uma decisão.
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            {COPY.subtitle}
          </p>
          <Button variant="white" className="w-full sm:w-fit mx-auto !rounded-lg !py-4 md:!py-5 !px-8 md:!px-12 group !text-[#4A5D45] !shadow-2xl text-xs md:text-sm font-bold tracking-widest">
            {COPY.ctaText}
            <div className="bg-[#4A5D45] p-1 rounded-full text-white ml-3">
              <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
            </div>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
