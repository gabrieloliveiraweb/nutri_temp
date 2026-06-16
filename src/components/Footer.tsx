import { 
  Instagram, 
  Facebook, 
  Youtube, 
  UtensilsCrossed 
} from "lucide-react";

const IconMap: Record<string, any> = {
  Instagram,
  Facebook,
  Youtube,
};

const COPY = {
  logo: "Nutri",
  tagline: "Nutrição humanizada para mulheres modernas que buscam autonomia e saúde sustentável.",
  socials: [
    { name: "Instagram", url: "#", icon: "Instagram" },
    { name: "Facebook", url: "#", icon: "Facebook" },
    { name: "YouTube", url: "#", icon: "Youtube" },
  ],
  addressTitle: "Endereço",
  address: "Av. das Araucárias, 1200 — Cj 402\nBairro Lago Azul, São Paulo - SP",
  contactTitle: "Contato",
  contacts: ["+55 (11) 99999-9999", "contato@gmail.nutri"],
  exploreTitle: "Explorar",
  exploreLinks: ["Início", "Sobre Helena", "Nossos Serviços", "Equipe Clínica", "Blog da Nutri"],
  resourcesTitle: "Recursos",
  resourcesLinks: ["Políticas de Dados", "Privacidade Integrada", "Arquivos de Pesquisa", "FAQs Gerais", "Fale Conosco"],
  copyright: "© 2024 LUIZA ALMEIDA - CRM-3 45678. SÃO PAULO - BRASIL",
  bottomLinks: ["Instagram", "Whatsapp", "Linkedin"],
};

export function Footer() {
  return (
    <footer className="bg-[#3D4D38] text-white pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-20 md:mb-28">
           <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                      <UtensilsCrossed className="w-6 h-6 text-[#E8A598]" />
                  </div>
                  <span className="serif text-2xl font-semibold tracking-tight italic">{COPY.logo}</span>
              </div>
              <p className="text-white/40 text-[10px] md:text-xs leading-relaxed max-w-xs uppercase tracking-widest font-bold">
                {COPY.tagline}
              </p>
              <div className="flex gap-4 md:gap-5">
                 {COPY.socials.map((s, i) => {
                     const Icon = IconMap[s.icon];
                     return (
                         <a key={i} href={s.url} className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#E8A598] hover:text-white transition-all transform hover:scale-110">
                             <Icon className="w-4 h-4 md:w-5 md:h-5" />
                         </a>
                     )
                 })}
              </div>
           </div>
           <div>
              <h4 className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.25em] mb-6 md:mb-12 text-[#E8A598]">
                {COPY.addressTitle}
              </h4>
              <p className="text-white/50 text-[10px] md:text-xs leading-relaxed font-medium">
                {COPY.address.split("\n")[0]}<br/>{COPY.address.split("\n")[1]}
              </p>
              <h4 className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.25em] mt-8 md:mt-12 mb-4 md:mb-6 text-[#E8A598]">
                {COPY.contactTitle}
              </h4>
              <ul className="space-y-2 md:space-y-3 text-white/50 text-[10px] md:text-xs font-bold">
                  {COPY.contacts.map((contact, i) => (
                    <li key={i}>{contact}</li>
                  ))}
              </ul>
           </div>
           <div>
              <h4 className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.25em] mb-6 md:mb-12 text-[#E8A598]">
                {COPY.exploreTitle}
              </h4>
              <ul className="space-y-3 md:space-y-5 text-white/50 text-[10px] md:text-xs font-bold">
                  {COPY.exploreLinks.map(l => (
                    <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
                  ))}
              </ul>
           </div>
           <div>
              <h4 className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.25em] mb-6 md:mb-12 text-[#E8A598]">
                {COPY.resourcesTitle}
              </h4>
              <ul className="space-y-3 md:space-y-5 text-white/50 text-[10px] md:text-xs font-bold">
                  {COPY.resourcesLinks.map(l => (
                    <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
                  ))}
              </ul>
           </div>
        </div>
        <div className="pt-12 border-t border-white/5 text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em] md:tracking-[0.4em] text-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p>{COPY.copyright}</p>
            <div className="flex gap-8 md:gap-12">
                {COPY.bottomLinks.map((link, i) => (
                  <span key={i} className="hover:text-white/40 cursor-pointer transition-colors">{link}</span>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
