import React from 'react';

const links = [
  { id: 'home', label: 'Bridge' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function HoloNav() {
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <nav className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="relative flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 animate-pulse rounded-full bg-purple-400" />
            <span className="text-sm font-medium tracking-widest text-white/80">STARSHIP UI</span>
          </div>
          <ul className="flex items-center gap-2 sm:gap-4">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => handleClick(e, l.id)}
                  className="group relative overflow-hidden rounded-md border border-cyan-400/30 bg-cyan-400/5 px-3 py-2 text-xs text-cyan-100/90 transition hover:bg-cyan-400/15 sm:px-4 sm:text-sm"
                >
                  <span className="relative z-10">{l.label}</span>
                  <span className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-cyan-500/20 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* subtle separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
    </div>
  );
}
