import React from 'react';

import { Gamepad2, Code, ChevronRight } from 'lucide-react';
import TypeWriter from './TypeWriter';

export default function Home({ terminalText, showCursor, setActiveSection, createParticle, mousePos, playHoverSound  }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-gray-400 text-sm">terminal.sh</span>
          </div>
          <div className="font-mono text-sm space-y-1">
            <pre className="text-green-400 whitespace-pre-wrap">
              {terminalText}
              {showCursor && <span className="bg-green-400 text-black">_</span>}
            </pre>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h1 className="text-7xl font-black mb-2">
              <TypeWriter 
                text="Zian" 
                delay={150}
                startDelay={0}
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              />
            </h1>
            <h2 className="text-5xl font-bold text-white mb-4">
              <TypeWriter 
                text="COLUCCI" 
                delay={100}
                startDelay={600}
                className=""
              />
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 animate-pulse" />
          </div>

          <p className="text-2xl text-gray-300 mb-4">
            Game Developer, Student & Gamer
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            21 years old • 8 years in programming since lower secondary school<br/>
            Specializing in <span className="text-purple-400 font-semibold">Unreal Engine</span> and gameplay programming
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-purple-500/20 border border-purple-500/50 px-6 py-3 rounded-full">
              <span className="text-purple-300 font-semibold">🎮 Unreal Engine Specialist</span>
            </div>
            <div className="bg-cyan-500/20 border border-cyan-500/50 px-6 py-3 rounded-full">
              <span className="text-cyan-300 font-semibold">💻 C++ Developer</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => setActiveSection('projects')}
              onMouseEnter={playHoverSound}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Discover my projects
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-20 animate-bounce">
        <Gamepad2 className="text-purple-500/30" size={64} />
      </div>
      <div className="absolute top-40 right-20 animate-pulse">
        <Code className="text-pink-500/30" size={48} />
      </div>
    </section>
  );
}