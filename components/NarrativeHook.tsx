import React from 'react';
import { AlertTriangle, Zap } from 'lucide-react';
import image from '../assets/2.png';
import { useParallax } from "react-scroll-parallax";

export const NarrativeHook: React.FC = () => {
  const parallax = useParallax<HTMLImageElement>({
    easing: 'easeOutQuad',
    translateX: [-50,0],
     shouldAlwaysCompleteAnimation: true,
     endScroll: 0,
    speed: 0.5

  });
   const parallax2 = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [50,0],
    shouldAlwaysCompleteAnimation: true,
    endScroll: 0,
    speed: 0.5
  });
  return (
    <section className="py-20 bg-[#050505] border-b border-gray-800 relative md:h-screen w-full overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div>
          <img ref={parallax.ref} src={image} alt="Gamer Frustrated with Chrome" className="md:h-[90vh] h-auto" />
        </div>
        <div ref={parallax2.ref} className="max-w-3xl mx-auto bg-[#121212] p-8 md:p-12 rounded-lg border-l-4 border-[#fa1e4e] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <AlertTriangle size={120} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[#fa1e4e] font-mono text-sm uppercase tracking-wider">System Alert: High Resource Usage</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 italic leading-relaxed text-gray-100">
              "I used to think Chrome was fine,until my game started lagging mid-fight. I checked Task Manager: <span className="text-[#fa1e4e]">Chrome was eating 2GB of RAM</span> just from a few open tabs. That's when I discovered Opera GX."
            </h2>
             <div className="ml-auto justify-end flex mt-6">
                 <Zap className="text-yellow-400 fill-yellow-400" />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};