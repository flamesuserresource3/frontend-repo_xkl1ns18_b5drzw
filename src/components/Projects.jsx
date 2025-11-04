import React from 'react';

const projects = [
  {
    title: 'Nebula Dock — Lighting Study',
    href: '#',
    tags: ['Volumetrics', 'LookDev', 'UE5'],
    color: 'from-cyan-400 to-purple-500',
  },
  {
    title: 'Drone Hangar — Hard Surface',
    href: '#',
    tags: ['Modeling', 'Kitbash', 'SubD'],
    color: 'from-lime-300 to-cyan-400',
  },
  {
    title: 'Cryo Core — Cinematic Shot',
    href: '#',
    tags: ['Lighting', 'Compositing', 'Nuke'],
    color: 'from-fuchsia-400 to-violet-500',
  },
];

function DataCube({ title, tags, href, color }) {
  return (
    <a href={href} className="group relative block focus:outline-none">
      {/* 3D CSS cube */}
      <div className="mx-auto h-48 w-48 [perspective:800px] sm:h-56 sm:w-56">
        <div className="relative h-full w-full rotate-45 transition-transform duration-[4000ms] group-hover:[transform:rotateX(360deg)_rotateY(360deg)] [transform-style:preserve-3d]">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              // each face
              key={i}
              className={`absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-br ${color} opacity-70 shadow-[0_0_80px_-20px_rgba(0,255,255,0.4)] backdrop-blur-md [transform-style:preserve-3d]`}
              style={{
                transform:
                  i === 0
                    ? 'translateZ(48px)'
                    : i === 1
                    ? 'rotateY(90deg) translateZ(48px)'
                    : i === 2
                    ? 'rotateY(180deg) translateZ(48px)'
                    : i === 3
                    ? 'rotateY(-90deg) translateZ(48px)'
                    : i === 4
                    ? 'rotateX(90deg) translateZ(48px)'
                    : 'rotateX(-90deg) translateZ(48px)',
              }}
            />
          ))}
        </div>
      </div>
      {/* label */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-white/90">{title}</h3>
        <div className="mt-1 flex flex-wrap justify-center gap-2 text-xs text-white/60">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
      {/* glow */}
      <div className="pointer-events-none absolute -inset-4 -z-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" style={{ background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.25), transparent 60%)' }} />
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold">Projects</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Floating data cubes showcasing hard-surface modeling, cinematic lighting, and environment lookdev.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-200 hover:bg-cyan-400/20">
            Request Reel
          </a>
        </div>

        <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <DataCube key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
