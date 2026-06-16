const COPY = {
  items: ["NUTRIÇÃO CONSCIENTE", "SAÚDE E BEM-ESTAR", "RESULTADOS REAIS"],
};

export function MarqueeBar() {
  return (
    <div className="bg-[#4A5D45] py-4 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 px-12">
            <div className="w-6 h-6 text-white opacity-40">
               <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white">{COPY.items[0]}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8A598]" />
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white">{COPY.items[1]}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8A598]" />
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white">{COPY.items[2]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
