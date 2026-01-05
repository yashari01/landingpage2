import React from 'react';
import { Cpu, Wifi, Youtube, Zap, ShieldAlert, Rocket } from 'lucide-react';
import { BenchmarkData, Feature } from './types';

export const BENCHMARK_DATA: BenchmarkData[] = [
  { name: 'RAM Usage', chrome: 2048, gx: 800, unit: 'MB', label: 'RAM Usage (Lower is Better)' },
  { name: 'CPU Load', chrome: 45, gx: 12, unit: '%', label: 'CPU Load (Streaming)' },
  { name: 'Ping Stability', chrome: 120, gx: 35, unit: 'ms', label: 'Latency Spike' },
];

export const FEATURES: Feature[] = [
  {
    title: 'GX Control Panel',
    description: 'Manually cap CPU & RAM usage. Don\'t let your browser steal resources from your game.',
    icon: <Cpu className="w-8 h-8 text-[#fa1e4e]" />,
  },
  {
    title: 'Network Limiter',
    description: 'Prioritize your game traffic. Cap bandwidth for downloads so your ping stays low.',
    icon: <Wifi className="w-8 h-8 text-[#fa1e4e]" />,
  },
  {
    title: 'GX Player',
    description: 'Seamlessly integrate Spotify, YouTube Music, and Apple Music in the sidebar. Background beats, zero lag.',
    icon: <Youtube className="w-8 h-8 text-[#fa1e4e]" />,
  },
];
