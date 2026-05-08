import { motion } from "motion/react";
import { ReactNode } from "react";

export const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "white";
}) => {
  const variants = {
    primary: "bg-[#E8A598] text-white hover:bg-[#D48E81] rounded-2xl shadow-lg shadow-[#E8A598]/20",
    secondary: "bg-[#4A5D45] text-white hover:bg-[#3D4D38] rounded-2xl shadow-lg shadow-[#4A5D45]/10",
    outline: "border border-[#E8A598] text-[#E8A598] hover:bg-[#E8A598] hover:text-white rounded-full",
    white: "bg-white text-[#E8A598] hover:bg-gray-50 rounded-2xl border border-[#F0EBE5] shadow-sm",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className = "",
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) => (
  <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
    <h2 className="serif text-4xl md:text-5xl lg:text-7xl text-[#3A3532] leading-tight mb-6">
      {title}
    </h2>
    {subtitle && (
      <p className="text-[#4A4440] text-lg md:text-xl max-w-2xl font-normal opacity-80 leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export const Reveal = ({ children, delay = 0, ...props }: { children: ReactNode; delay?: number; [key: string]: any }) => (
  <motion.div
    {...props}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
