import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { BENCHMARK_DATA } from "../constants";
import { Monitor, Gauge } from "lucide-react";
import bImage from "../assets/3.png";
import iFps from "../assets/benchmark-fps.gif";
import bFps from "../assets/benchmark-fps.mp4";
import bResource from "../assets/resource.png";
import { useParallax } from "react-scroll-parallax";
import LaserUpChart from "./LaserUpChart";

export const Benchmark: React.FC = () => {
  const [isGX, setIsGX] = useState(false);
  const [isRightActive, setIsRightActive] = useState(false);
  // const parallax = useParallax<HTMLImageElement>({
  //   easing: "easeOutQuad",
  //   translateY: [-70, 0],
  //   rootMargin: { top: 0, right: 0, bottom: -300, left: 0 },
  //   shouldAlwaysCompleteAnimation: true,
  //   speed: 0.5,
  // });
  const parallax2 = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateX: [100, -20],
    shouldAlwaysCompleteAnimation: true,
    speed: 0.5,
  });
  //  const parallax = useParallax<HTMLImageElement>({
  //     easing: 'easeOutQuad',
  //     translateX: [-50,10],
  //   });
  const handleLeftClick = () => {
    setIsRightActive(false);
  };

  const handleRightClick = () => {
    setIsRightActive(true);
  };

  // Transform data for the chart based on toggle state
  const chartData = BENCHMARK_DATA.map((item) => ({
    name: item.name,
    value: isGX ? item.gx : item.chrome,
    unit: item.unit,
  }));

  return (
    <section className="pt-6 bg-[#0a0a0a] relative overflow-hidden h-screen">
      <style>
        {`
        .switch-button {
              width: 400px;
              height: 40px;
              text-align: center;
              -- left: 50%;
              top: 50%;
              transform: translate3D(-50%, -50%, 0);
              will-change: transform;
              z-index: 197 !important;
              cursor: pointer;
              transition: 0.3s ease all;
              border: 1px solid white;
            }
            .switch-button-case {
              display: inline-block;
              background: none;
              width: 49%;
              height: 100%;
              color: white;
              position: relative;
              border: none;
              transition: 0.3s ease all;
              text-transform: uppercase;
              letter-spacing: 5px;
              padding-bottom: 1px;
            }
            .switch-button-case:hover {
              color: grey;
              cursor: pointer;
            }
            .switch-button-case:focus {
              outline: none;
            }
            .switch-button .active {
              color: #151515;
              background-color: #FFFFFF;
              left: 0;
              top: 0;
              width: 50%;
              height: 100%;
              z-index: -1;
              transition: 0.3s ease-out all;
            }
            .switch-button .active-case {
              color: #151515;
            }
  `}
      </style>
      {/* Background accents */}
      <div className="container mx-auto px-4">
        <div className="text-center w-fit mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-2">
            Benchmark <span className="text-[#fa1e4e]">The Difference</span>
          </h2>
          <p className="flex flex-row justify-between text-gray-400 text-lg text-left">
            See exactly what you're saving&nbsp;-
            <span className="">
              &nbsp;Benchmark made with
              <span className="text-[#fa1e4e] "> MotionMark v1.3.1</span>
            </span>
          </p>
        </div>
        <div className="flex items-center justify-end gap-8 flex-col sm:flex-row border-b border-gray-800 z-100">
          <img
            // ref={parallax.ref}
            src={bImage}
            alt="Gamer Frustrated with Chrome"
            className="md:h-[90vh] h-auto  z-100"
            style={{ zIndex: 100 }}
          />
          <div className="w-full flex flex-col items-start items-center">
            <div className="switch-button relative left-[calc(50%-210px)]">
              <span
                className="active absolute w-1/2"
                style={{ left: isRightActive ? "50%" : "0" }}
              ></span>
              <button
                className={
                  "switch-button-case left" +
                  (!isRightActive ? " active-case" : "")
                }
                onClick={handleLeftClick}
              >
                FPS
              </button>
              <button
                className={
                  "switch-button-case right" +
                  (isRightActive ? " active-case" : "")
                }
                onClick={handleRightClick}
              >
                Resources
              </button>
            </div>
            <div
              ref={parallax2.ref}
              className="w-fit p-2 rounded-xl border border-gray-800  bg-[#121212] z-999" style={{ zIndex: 999 }}
            >
              <div>
                {!isRightActive ? (
                  <video
                    className="w-full h-[70vh] object-cover viewport-video z-999"
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={iFps}
                    style={{ zIndex: 9999 }}
                  >
                    <source src={bFps} type="video/mp4" />
                  </video>
                ) : (
                  <div className="">
                    <img
                      src={bResource}
                      alt="Benchmark Resource Usage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <LaserUpChart /> */}
    </section>
  );
};
