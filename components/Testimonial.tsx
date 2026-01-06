import React from 'react';
import { Star, Download,Quote  } from 'lucide-react';
import { useParallax } from 'react-scroll-parallax';

export const Testimonial: React.FC = () => {
  const leftParallax = useParallax<HTMLDivElement>({
    translateX: [-100, 0],
    speed: 0.4,
    easing: 'easeOutQuad'
  });

  const centerParallax = useParallax<HTMLDivElement>({
    translateY: [30, 0],
    opacity: [0, 1],
    speed: 0.3,
    easing: 'easeOutQuad'
  });

  const rightParallax = useParallax<HTMLDivElement>({
    translateX: [100, 0],
    speed: 0.4,
    easing: 'easeOutQuad'
  });
  const testimonials = [
     {
      quote: "Opera GX already has a long-standing relationship with MoistCr1TiKaL, Together I know we can smash it",
      author: "Charles White Jr",
      role: "founder of Moist Esports",
      avatar: "from-[#9146FF] to-[#772CE8]",
      img: "url('../assets/moist.jpg')",
    },
    {  
      quote: "I've been using Opera GX for a while now and recommend it. It's free and has my custom PDP theme",
      author: "PewDiePie",
      role: "Top Gaming Creator",
      avatar: "from-[#9146FF] to-[#772CE8]",
      img: "url('../assets/PewDiePie.jpg')"
    },
    // {
    //   quote: "Opera GX changed how I game and stream on one PC",
    //   author: "Top Gaming Creator",
    //   role: "Twitch Streamer",
    //   avatar: "from-[#9146FF] to-[#772CE8]",
    // },
    {
      quote: "The gaming browser you didn't know you needed",
      author: "PC Gamer",
      role: "Gaming Magazine",
      avatar: "from-[#ff375f] to-[#ff1744]",
      img: "url('../assets/pcgamer_logo.svg')"
    },
    // {
    //   quote: "Opera GX delivers where other browsers fall short for gamers",
    //   author: "TechRadar",
    //   role: "Tech Publication",
    //   avatar: "from-[#00b8d4] to-[#0091ea]",
    // },
  ];

  const logos = [
    { name: 'PC Gamer', color: 'text-gray-500' },
    { name: 'TechRadar', color: 'text-gray-500' },
    { name: 'PCMag', color: 'text-gray-500' },
    { name: 'IGN', color: 'text-gray-500' },
  ];

  return (
    <section className="relative py-20 bg-[#0d0d0f] h-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl mb-6 text-[#FA1E4E] font-bold">
            Trusted by gamers<br />and creators
          </h2>
          <p className="text-xl text-gray-400">What gamers and creators are saying</p>
        </div>

        {/* <div className="flex flex-wrap justify-center items-center gap-8 mb-12 pb-12 border-b border-[#FA1E4E]/20">
          {logos.map((logo, index) => (
            <div key={index} className={`${logo.color} text-2xl font-bold opacity-60 hover:opacity-100 transition-opacity`}>
              {logo.name}
            </div>
          ))}
        </div> */}

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={index === 0 ? leftParallax.ref : index === 1 ? centerParallax.ref : rightParallax.ref}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 hover:border-[#ff375f]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FA1E4E] fill-[#FA1E4E]" />
                ))}
              </div>
              <p className="text-lg text-white mb-6 leading-relaxed"> <Quote  className="w-6 h-6 text-[#FA1E4E] rotate-180 inline" /> {testimonial.quote} <Quote  className="w-6 h-6 text-[#FA1E4E] inline" /></p>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatar}`} style={testimonial.img != undefined ?{backgroundImage:testimonial.img,backgroundSize:'cover',backgroundRepeat: 'no-repeat'}:{} }></div>
                <div>
                  <p className="text-sm font-bold text-white">{testimonial.author}</p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-[#ff375f] fill-[#ff375f]" />
            <span className="text-white font-medium">Rated ★★★★★ by millions of gamers worldwide</span>
          </div>
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#ff375f] to-[#ff1744] hover:from-[#ff1744] hover:to-[#ff375f] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl shadow-[#ff375f]/30 transition-all duration-300 hover:scale-105">
            <Download className="w-5 h-5" />
            Join millions of GX gamers
          </button>
        </div>
      </div>
    </section>
  );
}
