import { 
  ArrowRight, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone,
  UtensilsCrossed
} from "lucide-react";
import { CONTENT } from "./constants";
import { Button, SectionHeading, Reveal } from "./components/UI";

const IconMap: Record<string, any> = {
  Instagram,
  Facebook,
  Youtube,
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#E8A598]/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3D4D38] py-4 px-6 md:px-12 flex justify-between items-center transition-all shadow-xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white">
            <UtensilsCrossed className="w-5 h-5 text-[#E8A598]" />
          </div>
          <span className="serif text-xl font-semibold tracking-tight text-white italic">Nutri</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-bold text-white/70">
          {["Início", "Benefícios", "Perguntas Frequentes", "Depoimentos"].map((item) => (
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
          ENTRE EM CONTATO
          <div className="bg-[#3D4D38] p-1 rounded-full text-white ml-2">
            <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
          </div>
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-56 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6 md:space-y-8 max-w-xl text-center md:text-left">
              <h1 className="serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#3A3532] leading-[1.2] md:leading-[1.1] mb-6 font-semibold">
                Emagreça até 5kg em apenas 3 semanas com um método rápido, comprovado e consistente!
              </h1>
              <p className="text-[#4A4440] text-base md:text-lg opacity-70 leading-relaxed font-normal px-2 md:px-0">
                {CONTENT.hero.subtitle}
              </p>
              <Button className="w-full sm:w-fit group !rounded-lg !py-4 md:!py-6 !px-8 md:!px-10 !bg-[#4A5D45] text-xs md:text-sm tracking-widest">
                QUERO COMEÇAR AGORA
                <div className="bg-white/20 p-1 rounded-full text-white ml-3">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 rotate-[-45deg]" />
                </div>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative flex justify-center lg:justify-end">
              <div 
                className="relative w-full max-w-[500px] aspect-[4/5] bg-gray-100 rounded-t-[150px] md:rounded-t-[250px] rounded-b-[40px] md:rounded-b-[50px] overflow-hidden border-[10px] md:border-[15px] border-white shadow-2xl"
              >
                <img 
                  src={CONTENT.hero.image} 
                  alt="Nutricionista" 
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

      {/* Marquee Bar */}
      <div className="bg-[#4A5D45] py-4 overflow-hidden border-y border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-12">
              <div className="w-6 h-6 text-white opacity-40">
                 <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white">NUTRIÇÃO CONSCIENTE</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8A598]" />
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white">SAÚDE E BEM-ESTAR</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8A598]" />
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white">RESULTADOS REAIS</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pain Points Section - Split Layout */}
      <section id="beneficios" className="py-20 md:py-32 px-6 md:px-12 w-full bg-white border-b border-[#F0EBE5] overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl h-[350px] md:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000" 
                alt="Salada saudável" 
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-6 md:space-y-8">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-[#E8A598]">BENEFÍCIOS</span>
              <h2 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#3A3532] leading-tight font-semibold">
                Chega de dietas restritivas que não funcionam.
              </h2>
                    <p className="text-[#4A4440] text-sm leading-relaxed opacity-60">
                        {CONTENT.problema.description} A nossa abordagem foca no equilíbrio real, permitindo que você atinja seus objetivos de saúde sem sacrificar o prazer de comer.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#4A5D45]/10 border border-[#4A5D45]/10 group hover:bg-[#4A5D45] transition-all duration-500 cursor-pointer">
                            <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center text-[#4A5D45] group-hover:bg-white group-hover:text-[#4A5D45]">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-[#3A3532] group-hover:text-white transition-colors">Método comprovado cientificamente.</h4>
                                <p className="text-[11px] text-[#4A4440]/60 group-hover:text-white/60 transition-colors">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#3A3532]/10 border border-[#3A3532]/10 group hover:bg-[#3A3532] transition-all duration-500 cursor-pointer">
                            <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center text-[#3A3532] group-hover:bg-white group-hover:text-[#3A3532]">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-[#3A3532] group-hover:text-white transition-colors">Atendimento 100% personalizado.</h4>
                                <p className="text-[11px] text-[#4A4440]/60 group-hover:text-white/60 transition-colors">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-12 md:mb-16 space-y-4">
             <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-[#E8A598]">SERVIÇOS</span>
             <h2 className="serif text-3xl sm:text-4xl md:text-5xl text-[#3A3532] leading-tight font-semibold">Como posso te ajudar <br className="hidden sm:block"/> a atingir seus objetivos</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONTENT.servicos.items.map((service, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden border border-[#F0EBE5] transition-all duration-500 group h-full flex flex-col hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
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

      {/* Methodology Section */}
      <section className="py-32 bg-[#FAF7F2] border-y border-[#F0EBE5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl rotate-[-2deg]">
                    <img 
                        src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1000" 
                        alt="Individualidade" 
                        className="w-full h-[550px] object-cover"
                    />
                </div>
            </Reveal>
            <Reveal delay={0.2}>
                <div className="space-y-8">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#E8A598]">BENEFÍCIOS</span>
                    <h2 className="serif text-4xl md:text-5xl lg:text-6xl text-[#3A3532] leading-tight font-semibold">
                      Uma metodologia focada na sua individualidade.
                    </h2>
                    <ul className="space-y-6">
                        {[
                            "Plano alimentar adaptado aos seus gostos e horários.",
                            "Suporte via WhatsApp para tirar dúvidas diárias.",
                            "Análise de exames laboratoriais inclusa.",
                            "E-book de receitas práticas e saudáveis.",
                            "Lista de compras organizada para facilitar a ida ao supermercado."
                        ].map((item, i) => (
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

      {/* Intermediate CTA Block */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <Reveal>
            <div className="bg-[#4A5D45] rounded-[32px] md:rounded-[48px] p-10 md:p-24 text-center space-y-8 md:space-y-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] -mr-40 -mt-40" />
                <h2 className="serif text-3xl sm:text-4xl md:text-6xl text-white font-semibold leading-tight px-2">
                   A sua transformação <br className="hidden sm:block" /> começa com uma decisão.
                </h2>
                <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">Não espere a "segunda-feiira" para priorizar a sua saúde e bem-estar.</p>
                <Button variant="white" className="w-full sm:w-fit mx-auto !rounded-lg !py-4 md:!py-5 !px-8 md:!px-12 group !text-[#4A5D45] !shadow-2xl text-xs md:text-sm font-bold tracking-widest">
                    AGENDAR MINHA AVALIAÇÃO AGORA
                    <div className="bg-[#4A5D45] p-1 rounded-full text-white ml-3">
                        <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
                    </div>
                </Button>
            </div>
        </Reveal>
      </section>

      {/* Results Section - Redesigned as requested */}
      <section id="depoimentos" className="py-24 md:py-32 overflow-hidden bg-white border-y border-[#F0EBE5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
            <Reveal>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-[#4A5D45]">DEPOIMENTOS</span>
                <h2 className="serif text-3xl sm:text-4xl md:text-6xl text-[#3A3532] mt-4 font-semibold leading-tight">Histórias de quem <br className="hidden sm:block"/> transformou sua vida</h2>
                <Button variant="secondary" className="w-full sm:w-fit mt-8 md:mt-10 !px-10 md:!px-12 !py-4 md:!py-5 !rounded-lg group">
                    QUERO COMEÇAR AGORA
                    <div className="bg-white/20 p-1 rounded-full text-white ml-3">
                        <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
                    </div>
                </Button>
            </Reveal>
        </div>
        
        {/* Full width marquee carousel with the new design */}
        <div className="flex animate-marquee-slow py-4">
          {[...CONTENT.transformacoes.items, ...CONTENT.transformacoes.items, ...CONTENT.transformacoes.items].map((item, idx) => (
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

      {/* Numbered Steps Section */}
      <section id="metodo" className="py-24 md:py-32 px-6 md:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CONTENT.metodo.steps.map((step, idx) => (
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
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                        alt="Lifestyle" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                     />
                     <div className="absolute bottom-10 left-10 right-10">
                         <div className="bg-white/90 backdrop-blur-md p-8 rounded-[32px] border border-white shadow-2xl">
                            <p className="serif italic text-xl text-[#4A5D45] leading-relaxed">"A saúde é construída todos os dias, em cada escolha consciente que fazemos."</p>
                         </div>
                     </div>
                  </div>
              </Reveal>
          </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#F0EBE5] overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-stretch">
          <Reveal>
             <div className="space-y-8 md:space-y-10 h-full flex flex-col justify-center">
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E8A598]">MARIA CLARA</span>
                    <h2 className="serif text-4xl sm:text-5xl md:text-[64px] font-semibold text-[#3A3532] leading-[1.2] md:leading-tight">Quem vai te ajudar <br className="hidden sm:block"/> nessa jornada?</h2>
                  </div>
                  <p className="text-[#4A4440] text-base md:text-lg leading-relaxed opacity-70 font-light italic border-l-4 border-[#E8A598] pl-6 md:pl-8 py-2">
                      "{CONTENT.sobre.bio} Minha abordagem humanizada garante que você chegue ao seu objetivo com saúde física e mental, sem fórmulas prontas ou promessas vazias."
                  </p>
                  <Button variant="secondary" className="w-full sm:w-fit !px-10 md:!px-12 !py-4 md:!py-5 !rounded-lg group">
                      CONHECER MEU MÉTODO
                      <div className="bg-white/20 p-1 rounded-full text-white ml-3">
                        <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
                      </div>
                  </Button>
             </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-[#FAF7F2] h-[400px] md:h-full">
              <img src={CONTENT.sobre.image} alt="Helena" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D4D38] text-white pt-24 pb-12 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-20 md:mb-28">
             <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                        <UtensilsCrossed className="w-6 h-6 text-[#E8A598]" />
                    </div>
                    <span className="serif text-2xl font-semibold tracking-tight italic">Nutri</span>
                </div>
                <p className="text-white/40 text-[10px] md:text-xs leading-relaxed max-w-xs uppercase tracking-widest font-bold">Nutrição humanizada para mulheres modernas que buscam autonomia e saúde sustentável.</p>
                <div className="flex gap-4 md:gap-5">
                   {CONTENT.footer.socials.map((s, i) => {
                       const Icon = IconMap[s.icon];
                       return (
                           <a key={i} href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#E8A598] hover:text-white transition-all transform hover:scale-110">
                               <Icon className="w-4 h-4 md:w-5 md:h-5" />
                           </a>
                       )
                   })}
                </div>
             </div>
             <div>
                <h4 className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.25em] mb-6 md:mb-12 text-[#E8A598]">Endereço</h4>
                <p className="text-white/50 text-[10px] md:text-xs leading-relaxed font-medium">Av. das Araucárias, 1200 — Cj 402<br/>Bairro Lago Azul, São Paulo - SP</p>
                <h4 className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.25em] mt-8 md:mt-12 mb-4 md:mb-6 text-[#E8A598]">Contato</h4>
                <ul className="space-y-2 md:space-y-3 text-white/50 text-[10px] md:text-xs font-bold">
                    <li>+55 (11) 99999-9999</li>
                    <li>contato@easybuilder.nutri</li>
                </ul>
             </div>
             <div>
                <h4 className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.25em] mb-6 md:mb-12 text-[#E8A598]">Explorar</h4>
                <ul className="space-y-3 md:space-y-5 text-white/50 text-[10px] md:text-xs font-bold">
                    {["Início", "Sobre Helena", "Nossos Serviços", "Equipe Clínica", "Blog da Nutri"].map(l => <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>)}
                </ul>
             </div>
             <div>
                <h4 className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.25em] mb-6 md:mb-12 text-[#E8A598]">Recursos</h4>
                <ul className="space-y-3 md:space-y-5 text-white/50 text-[10px] md:text-xs font-bold">
                    {["Políticas de Dados", "Privacidade Integrada", "Arquivos de Pesquisa", "FAQs Gerais", "Fale Conosco"].map(l => <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>)}
                </ul>
             </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em] md:tracking-[0.4em] text-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
              <p>© 2024 LUIZA ALMEIDA - CRM-3 45678. SÃO PAULO - BRASIL</p>
              <div className="flex gap-8 md:gap-12">
                  <span className="hover:text-white/40 cursor-pointer transition-colors">Instagram</span>
                  <span className="hover:text-white/40 cursor-pointer transition-colors">Whatsapp</span>
                  <span className="hover:text-white/40 cursor-pointer transition-colors">Linkedin</span>
              </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
