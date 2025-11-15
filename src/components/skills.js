import React from 'react';
import { Code, Rocket, Sparkles, Terminal, Zap, Brain, Gamepad2 } from 'lucide-react';

import TypeWriter from './TypeWriter';
export default function Skills({ skillHover, setSkillHover, createParticle, mousePos, playHoverSound }) {
  const skills = [
    { name: "Unreal Engine", color: "from-blue-500 to-cyan-500", icon: Rocket },
    { name: "Unity", color: "from-gray-700 to-gray-900", icon: Zap },
    { name: "C++", color: "from-purple-500 to-pink-500", icon: Code },
    { name: "C#", color: "from-green-500 to-emerald-500", icon: Code },
    { name: "Python", color: "from-yellow-500 to-blue-500", icon: Terminal },
    { name: "Blueprint", color: "from-indigo-500 to-blue-500", icon: Brain },
    { name: "Game Design", color: "from-orange-500 to-red-500", icon: Sparkles },
    { name: "Blender", color: "from-orange-400 to-orange-600", icon: Rocket },
    { name: "HTML/CSS", color: "from-pink-500 to-purple-500", icon: Code },
    { name: "VFX", color: "from-cyan-500 to-blue-600", icon: Sparkles },
    { name: "Animation", color: "from-red-500 to-pink-500", icon: Zap },
    { name: "Networking", color: "from-teal-500 to-green-500", icon: Brain },
    { name: "Multiplayer", color: "from-violet-500 to-purple-600", icon: Gamepad2 },
    { name: "C", color: "from-slate-500 to-gray-600", icon: Terminal },
  ];

  return (
    <section className="min-h-screen px-6 pt-32 pb-20 relative">
      <div className="max-w-6xl mx-auto z-10">
        <h2 className="text-6xl font-black mb-4 text-center">
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            <TypeWriter 
              text="Skills" 
              delay={100}
              startDelay={0}
              className=""
            />
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Technologies & tools I work with</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              onMouseEnter={() => {
                setSkillHover(idx);
                createParticle(mousePos.x, mousePos.y);
                playHoverSound();
              }}
              onMouseLeave={() => setSkillHover(null)}
              className={`relative group bg-gradient-to-br ${skill.color} p-1 rounded-2xl transition-all duration-300 transform ${
                skillHover === idx ? 'scale-110 shadow-2xl' : 'hover:scale-105'
              }`}
            >
              <div className="bg-gray-900 rounded-2xl p-8 h-full">
                <skill.icon 
                  className={`mb-4 transition-all duration-300 ${
                    skillHover === idx ? 'scale-125 rotate-12' : ''
                  }`}
                  size={48} 
                />
                <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
                
                {skillHover === idx && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}