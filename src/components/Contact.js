import React from 'react';
import { Mail, Linkedin, Gamepad2, ExternalLink, Github  } from 'lucide-react';

import TypeWriter from './TypeWriter';

export default function Contact({ createParticle, mousePos, playHoverSound  }) {
  return (
    <section className="min-h-screen px-6 pt-32 pb-20 relative flex items-center justify-center">
      <div className="max-w-3xl w-full z-10">
        <h2 className="text-6xl font-black mb-4 text-center">
          <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
            <TypeWriter 
              text="Let's Connect" 
              delay={100}
              startDelay={0}
              className=""
            />
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Want to discuss video games or opportunities?</p>

        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
          <div className="space-y-6">
            <a 
              href="mailto:zcolucci@gaming.tech"
              onClick={() => createParticle(mousePos.x, mousePos.y)}
              className="group flex items-center gap-6 bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-all transform hover:scale-105 border border-purple-500/20 hover:border-purple-500/50"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-xl font-semibold">zcolucci@gaming.tech</p>
              </div>
              <ExternalLink className="text-gray-400 group-hover:text-purple-400 transition-colors" />
            </a>

            <a 
              href="https://lootchy.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => createParticle(mousePos.x, mousePos.y)}
              onMouseEnter={playHoverSound}
              className="group flex items-center gap-6 bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-all transform hover:scale-105 border border-purple-500/20 hover:border-purple-500/50"
            >
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <Gamepad2 size={32} />
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm mb-1">Itch.io</p>
                <p className="text-xl font-semibold">lootchy.itch.io</p>
              </div>
              <ExternalLink className="text-gray-400 group-hover:text-purple-400 transition-colors" />
            </a>

            <a 
              href="https://www.linkedin.com/in/zian-c-453534272/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => createParticle(mousePos.x, mousePos.y)}
              onMouseEnter={playHoverSound}
              className="group flex items-center gap-6 bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-all transform hover:scale-105 border border-purple-500/20 hover:border-purple-500/50"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <Linkedin size={32} />
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm mb-1">LinkedIn</p>
                <p className="text-xl font-semibold">Zian COLUCCI</p>
              </div>
              <ExternalLink className="text-gray-400 group-hover:text-purple-400 transition-colors" />
            </a>

            <a 
              href="https://github.com/Lootchy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => createParticle(mousePos.x, mousePos.y)}
              onMouseEnter={playHoverSound}
              className="group flex items-center gap-6 bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-all transform hover:scale-105 border border-purple-500/20 hover:border-purple-500/50"
              >
              <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-4 rounded-xl group-hover:scale-110 transition-transform">
                  <Github size={32} />
              </div>
              <div className="flex-1">
                  <p className="text-gray-400 text-sm mb-1">GitHub</p>
                  <p className="text-xl font-semibold">github.com/Lootchy</p>
              </div>
              <ExternalLink className="text-gray-400 group-hover:text-purple-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}