import { ArrowRight, UtensilsCrossed } from "lucide-react";
import { Button } from "./UI";

const COPY = {
  logo: "Nutri",
  menuItems: ["Início", "Benefícios", "Perguntas Frequentes", "Depoimentos"],
  ctaText: "ENTRE EM CONTATO",
};

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3D4D38] py-4 px-6 md:px-12 flex justify-between items-center transition-all shadow-xl">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white">
          <UtensilsCrossed className="w-5 h-5 text-[#E8A598]" />
        </div>
        <span className="serif text-xl font-semibold tracking-tight text-white italic">
          {COPY.logo}
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-bold text-white/70">
        {COPY.menuItems.map((item) => (
          <a 
            key={item} 
            href="#"
            className="hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
      <Button variant="white" className="hidden md:flex px-6 py-2 shadow-none text-[10px] font-bold rounded-lg !text-[#3D4D38]">
        {COPY.ctaText}
        <div className="bg-[#3D4D38] p-1 rounded-full text-white ml-2">
          <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
        </div>
      </Button>
    </nav>
  );
}
