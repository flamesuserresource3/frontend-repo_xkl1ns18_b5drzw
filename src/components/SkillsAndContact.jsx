import React from 'react';

const skills = [
  { group: 'Modeling', items: ['Hard Surface', 'Subdivision', 'Kitbashing', 'Retopo'] },
  { group: 'Lighting', items: ['Cinematic', 'Volumetrics', 'HDRI', 'LookDev'] },
  { group: 'Tools', items: ['Maya', 'Blender', 'ZBrush', 'Substance', 'UE5', 'Nuke'] },
];

export default function SkillsAndContact() {
  return (
    <div className="relative w-full bg-black text-white">
      <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-4xl font-semibold">Skills</h2>
          <p className="mt-2 max-w-2xl text-white/70">Production‑ready workflows for AAA pipelines.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-medium text-cyan-200">{s.group}</h3>
              <ul className="mt-4 space-y-2 text-white/80">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-28 md:px-10">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-semibold">Contact</h2>
          <p className="mt-2 max-w-2xl text-white/70">Available for cinematic sequences, lighting passes, and environment design.</p>
        </div>
        <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 p-8 backdrop-blur">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm text-white/70">Name</label>
              <input
                type="text"
                required
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400/50"
                placeholder="Your name"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm text-white/70">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400/50"
                placeholder="name@studio.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm text-white/70">Message</label>
              <textarea
                rows={5}
                required
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400/50"
                placeholder="Brief on the project, timeline, and references"
              />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-xs text-white/50">Encrypted transmission via subspace relay.</p>
              <button type="submit" className="rounded-md border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-cyan-200 hover:bg-cyan-400/20">
                Send Ping
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} — Starship Portfolio Interface
        </div>
      </section>
    </div>
  );
}
