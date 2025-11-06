import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-orange-500 via-sky-500 to-purple-500" />
            <span className="text-white font-semibold tracking-tight">VoxAgents</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition">Funzionalità</a>
            <a href="#use-cases" className="text-sm text-gray-300 hover:text-white transition">Use case</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white transition">Contatti</a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
            >
              Prova ora
            </a>
          </div>
          <button
            className="md:hidden text-gray-200 hover:text-white"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden py-3 space-y-2 border-t border-white/10">
            <a href="#features" className="block text-gray-300 hover:text-white">Funzionalità</a>
            <a href="#use-cases" className="block text-gray-300 hover:text-white">Use case</a>
            <a href="#contact" className="block text-gray-300 hover:text-white">Contatti</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-white text-black px-3 py-2 text-sm font-medium">Prova ora</a>
          </div>
        )}
      </nav>
    </header>
  );
}
