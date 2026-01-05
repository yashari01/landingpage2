import React from 'react';

export interface BenchmarkData {
  name: string;
  chrome: number;
  gx: number;
  unit: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}