export default function CTA() {
  return (
    <section id="contact" className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-sky-500/10 to-purple-600/10 p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">Pronto a dare voce al tuo brand?</h3>
              <p className="mt-3 text-gray-200">Prenota una demo e scopri come gli agenti vocali possono migliorare supporto e vendite.</p>
            </div>
            <form className="grid sm:grid-cols-3 gap-3">
              <input type="email" required placeholder="La tua email" className="sm:col-span-2 w-full rounded-md bg-black border border-white/20 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <button type="submit" className="rounded-md bg-white text-black font-medium px-4 py-3 hover:bg-gray-100 transition">Richiedi demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
