import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">Agenti vocali AI</span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
          Esperienze vocali intelligenti per il tuo business
        </h1>
        <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto">
          Costruiamo agenti vocali autonomi che capiscono, rispondono e agiscono. Design minimale, performance massime.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#contact" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-gray-100 transition">Parla con noi</a>
          <a href="#features" className="px-5 py-3 rounded-md border border-white/20 hover:border-white/40 transition">Scopri di più</a>
        </div>
      </div>
    </section>
  );
}
