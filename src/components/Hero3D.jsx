import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cinematic gradient and vignette overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)' }} />

      {/* Hero copy */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 md:px-10 w-full">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-sm tracking-wider text-cyan-200/90">STARSHIP BRIDGE INTERFACE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Cinematic 3D Portfolio for AAA Art Directors
            </h1>
            <p className="mt-4 max-w-2xl text-white/80">
              Navigate a high‑tech bridge. Inspect holographic terminals. Explore case studies in lighting & 3D modeling.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="group relative overflow-hidden rounded-md border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-cyan-200 backdrop-blur transition hover:bg-cyan-400/20">
                <span className="relative z-10">Enter Projects</span>
                <span className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-cyan-500/30 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
              </a>
              <a href="#contact" className="rounded-md border border-white/20 bg-white/5 px-6 py-3 text-white/80 backdrop-blur transition hover:bg-white/10">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white/70">
        <a href="#projects" className="inline-flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest">SCROLL</span>
          <span className="h-8 w-px animate-bounce bg-white/50" />
        </a>
      </div>
    </section>
  );
}
