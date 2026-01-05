import React from "react";
import { Hero } from "./components/Hero";
import { NarrativeHook } from "./components/NarrativeHook";
import { Benchmark } from "./components/Benchmark";
import { Features } from "./components/Features";
import { Testimonial } from "./components/Testimonial";
import { FinalCTA } from "./components/FinalCTA";
import { Navbar } from "./components/Navbar";
import FAQ from "./components/Faq";
import DownloadButton from "./components/DownloadButton";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#fa1e4e] selection:text-white">
      {/* <Navbar /> */}
      <DownloadButton />
      <ParallaxProvider>
        <Hero />
        <NarrativeHook />
        <Benchmark />
        <Features />
        <Testimonial />
        <FAQ />
        <FinalCTA />
      </ParallaxProvider>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} perfgamer.com. All rights
            reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-[#fa1e4e]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#fa1e4e]">
              Terms
            </a>
            <a href="#" className="hover:text-[#fa1e4e]">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
