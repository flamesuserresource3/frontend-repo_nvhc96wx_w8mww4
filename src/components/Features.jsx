export default function Features() {
  const items = [
    {
      title: 'Voce naturale',
      desc: 'Sintesi vocale realistica e multilingue con controllo del tono.',
    },
    {
      title: 'Comprensione profonda',
      desc: 'NLU avanzata per intenti, entità e contesto conversazionale.',
    },
    {
      title: 'Azioni reali',
      desc: 'Integra CRM, calendari, ticketing e database per agire davvero.',
    },
    {
      title: 'Sicurezza enterprise',
      desc: 'Logging, privacy by design e controllo degli accessi.'
    },
  ];

  return (
    <section id="features" className="relative bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_40%),_radial-gradient(circle_at_bottom,_rgba(249,115,22,0.12),_transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold">Funzionalità chiave</h2>
        <p className="mt-3 text-gray-300 max-w-2xl">Progettati per performance e affidabilità in contesti reali.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-orange-500 to-sky-500 mb-4" />
              <h3 className="font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-gray-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
