import React from "react";
import { FEATURES } from "../constants";
import bImage from "../assets/1.png";
import step from "../assets/bloc_step.svg";
import { useParallax } from "react-scroll-parallax";
export const Features: React.FC = () => {
  const parallax = useParallax<HTMLImageElement>({
   easing: 'easeOutQuad',
    translateX: [-50,5],
     shouldAlwaysCompleteAnimation: true,
     endScroll: 0,
    speed: 0.5
  
  });
  const parallax2 = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [100,-50],
    shouldAlwaysCompleteAnimation: true,
    speed: 0.5
  });
  // const parallax2= useParallax<HTMLDivElement>({
  //  easing: "easeOutQuad",
  //   translateY: [-80,0],
  //   // rootMargin: { top: 0, right: 0, bottom: -300, left: 0 },
  //   shouldAlwaysCompleteAnimation: true,
  //   speed: 0.7
  
  // });
  // const parallax3= useParallax<HTMLDivElement>({
  //  easing: "easeOutQuad",
  //   translateY: [-90,0],
  //   // rootMargin: { top: 0, right: 0, bottom: -300, left: 0 },
  //   shouldAlwaysCompleteAnimation: true,
  //   speed: 0.9
  
  // });
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden border-b border-gray-800">
      <style>
        {`
        
.step-card{
  aspect-ratio: 540 / 227;
    display: flex;
    justify-content: flex-start;
    width: 474px;
    position: relative;
    align-items: flex-start;
    align-content: flex-start;
    gap: 5px;
    padding-left: 22px;
    padding-right: 22px;
    padding-top: 20px;
}
.step-card::before{
  background: radial-gradient(511.31% 181.35% at 82.96% 53.44%, #242031 32.23%, rgba(27, 24, 37, .26) 83.76%);
  content: "";
  inset: .1rem;
  mask: url('../assets/bloc_step.svg') no-repeat center / contain;
  -webkit-mask: url('../assets/bloc_step.svg') no-repeat center / contain;
  position: absolute;
}
  .step-text{
  color: #fa1e4e;
  font-size: clamp(1rem, 1.3vw, 1.6rem);
}
        `}
      </style>
      <div className="flex md:flex-row flex-col justify-center items-start">
        <div className="flex flex-col items-center justify-left w-full">
          <div className="text-left max-w-3xl mx-auto mb-16 px-7">
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6">
              Built to <span className="text-[#fa1e4e]">Dominate</span>
            </h2>
            <p className="text-xl text-gray-400">
              Most browsers ignore gamers. Opera GX is built to dominate
              resource control  with a Built-in Limiter.
            </p>
          </div>
          <div className="">
            <img
            ref={parallax.ref} 
              src={bImage}
              alt="Feature Illustration"
              className="md:h-[90vh] h-auto"
            />
          </div>
        </div>
        <div className="w-full md:h-screen h-auto flex items-center justify-end px-4">
          <div className="grid md:grid-rows-3 gap-4 justify-around justify-items-center"  ref={parallax2.ref} >
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="step-card flex flex-col item-start text-white"
                style={{
                  background:
                    "linear-gradient(90deg, #fa1e4e 0%, rgba(250, 30, 78, 0) 100%)",
                  animation: "fadeInUp 0.6s ease-out forwards",

                  maskImage: `url("../assets/bloc_step.svg")`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",

                  WebkitMaskImage: `url("../assets/bloc_step.svg")`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2 ml-7 group-hover:bg-[#fa1e4e]/10 transition-colors z-10">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 uppercase font-['Rajdhani'] step-text z-10 mx-7">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed z-10 mx-7">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        {/* Feature Image 3.png Integration */}
        {/* <div className="mt-20 relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-center">
            <p className="uppercase tracking-[0.2em] text-[#fa1e4e] text-sm font-bold mb-2">Total Control</p>
            <h3 className="text-2xl font-bold text-white">The Only Browser with a Built-in Limiter</h3>
          </div>
        </div> */}
      </div>
    </section>
  );
};
