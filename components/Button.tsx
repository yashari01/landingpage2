import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, primary = true, className = '', onClick }) => {
  const baseClasses = "relative px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 clip-corner flex items-center justify-center gap-2";
  
  const primaryClasses = "bg-[#fa1e4e] text-white hover:bg-[#d4153f] hover:shadow-[0_0_20px_rgba(250,30,78,0.6)]";
  const secondaryClasses = "bg-transparent border border-[#fa1e4e] text-[#fa1e4e] hover:bg-[#fa1e4e]/10 hover:shadow-[0_0_15px_rgba(250,30,78,0.3)]";

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}
    >
      {children}
    </button>
  );
};