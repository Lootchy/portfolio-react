import React from 'react';
import { Code, Rocket, Sparkles, Terminal, Zap, Brain, Gamepad2, Palette, Wrench } from 'lucide-react';
import TypeWriter from './TypeWriter';

export default function Skills({ skillHover, setSkillHover, createParticle, mousePos, playHoverSound }) {
  const skillCategories = [
    {
      category: "Game Engines",
      icon: Rocket,
      skills: [
        { name: "Unreal Engine", color: "from-blue-500 to-cyan-500", icon: Rocket },
        { name: "Unity", color: "from-gray-700 to-gray-900", icon: Zap },
      ]
    },
    {
      category: "Programming",
      icon: Code,
      skills: [
        { name: "C++", color: "from-purple-500 to-pink-500", icon: Code },
        { name: "C#", color: "from-green-500 to-emerald-500", icon: Code },
        { name: "Python", color: "from-yellow-500 to-blue-500", icon: Terminal },
        { name: "C", color: "from-slate-500 to-gray-600", icon: Terminal },
        { name: "HTML/CSS", color: "from-pink-500 to-purple-500", icon: Code },
        { name: "Blueprint", color: "from-indigo-500 to-blue-500", icon: Brain },
      ]
    },
    {
      category: "Creation & Design",
      icon: Palette,
      skills: [
        { name: "Game Design", color: "from-orange-500 to-red-500", icon: Sparkles },
        { name: "Blender", color: "from-orange-400 to-orange-600", icon: Rocket },
        { name: "VFX", color: "from-cyan-500 to-blue-600", icon: Sparkles },
        { name: "Animation", color: "from-red-500 to-pink-500", icon: Zap },
      ]
    },
    {
      category: "Networking & Multiplayer",
      icon: Gamepad2,
      skills: [
        { name: "Online Multiplayer", color: "from-teal-500 to-green-500", icon: Gamepad2 },
        { name: "Network Programming", color: "from-violet-500 to-purple-600", icon: Brain },
        { name: "Client-Server", color: "from-blue-500 to-cyan-500", icon: Zap },
        { name: "Replication", color: "from-pink-500 to-rose-500", icon: Rocket },
      ]
    }
  ];

  // Fonction pour obtenir l'index global d'une skill
  const getGlobalIndex = (categoryIdx, skillIdx) => {
    let globalIdx = 0;
    for (let i = 0; i < categoryIdx; i++) {
      globalIdx += skillCategories[i].skills.length;
    }
    return globalIdx + skillIdx;
  };

  return (
    <section className="min-h-screen px-6 pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto z-10">
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

        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx}>
              {/* Titre de catégorie */}
              <div className="flex items-center gap-3 mb-8">
                <category.icon className="text-purple-400" size={32} />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent ml-4" />
              </div>

              {/* Grille de skills */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIdx) => {
                  const globalIdx = getGlobalIndex(catIdx, skillIdx);
                  return (
                    <div
                      key={skillIdx}
                      onMouseEnter={() => {
                        setSkillHover(globalIdx);
                        createParticle(mousePos.x, mousePos.y);
                        playHoverSound();
                      }}
                      onMouseLeave={() => setSkillHover(null)}
                      className={`relative group bg-gradient-to-br ${skill.color} p-1 rounded-2xl transition-all duration-300 transform ${
                        skillHover === globalIdx ? 'scale-110 shadow-2xl' : 'hover:scale-105'
                      }`}
                    >
                      <div className="bg-gray-900 rounded-2xl p-8 h-full">
                        <skill.icon 
                          className={`mb-4 transition-all duration-300 ${
                            skillHover === globalIdx ? 'scale-125 rotate-12' : ''
                          }`}
                          size={48} 
                        />
                        <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
                        
                        {skillHover === globalIdx && (
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl animate-pulse" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}