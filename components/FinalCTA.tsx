import React from 'react';
import { Button } from './Button';
import { Download, Rocket } from 'lucide-react';
import bgImage from '../assets/hero_footer.png';
export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#050505] flex items-center">
      {/* Background Image 1.png */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage}
          alt="Gamer Background" 
          className="w-full h-full object-contain opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block p-3 rounded-full bg-[#fa1e4e]/20 border border-[#fa1e4e] mb-6 animate-bounce">
          <Rocket className="w-6 h-6 text-[#fa1e4e]" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 text-white drop-shadow-xl">
          Benchmark the <span className="text-[#fa1e4e]">Difference</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          Built for speed. Made for gamers. Free to install.
        </p>
        
        <div className="flex flex-col items-center">
          <Button className="w-full max-w-md text-xl py-6 shadow-[0_0_30px_rgba(250,30,78,0.4)] hover:shadow-[0_0_50px_rgba(250,30,78,0.7)]">
            <Download className="mr-2" /> Download Opera GX
          </Button>
          <p className="mt-6 text-sm text-gray-500">
            By downloading Opera GX, you agree to the Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
};