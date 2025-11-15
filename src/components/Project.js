import React, { useRef, useEffect, useState } from 'react';
import { Gamepad2, ExternalLink } from 'lucide-react';

import tedimoImg from '../assets/images/Tedimo.png';
import drpImg from '../assets/images/drp.png';
import spendtimeImg from '../assets/images/spendtime.png';
import foodquestImg from '../assets/images/foodquest.png';
import rottenPixelsImg from '../assets/images/rottenPixels.png';
import breachbornImg from '../assets/images/breachborn.png';
import sfmlImg from '../assets/images/roguelike.png';
import engineImg from '../assets/images/customengine.png';

import TypeWriter from './TypeWriter';

export default function Projects({ createParticle, mousePos, playHoverSound }) {
  const [expandedCards, setExpandedCards] = useState([]);

  const projects = [
    {
      title: "Drowned",
      description: "Dive into a procedurally generated ocean world where fishing meets survival horror. Navigate treacherous waters to catch exotic fish while fending off nightmarish sea monsters that lurk beneath the waves.",
      image: "https://img.itch.zone/aW1nLzI0MDcyNzMxLnBuZw==/347x500/MOJeCF.png",
      engine: "Unity",
      tags: ["Exploration", "Fishing", "Horror"],
      link: "https://lootchy.itch.io/drowned"
    },
    {
      title: "Rotten Pixels",
      description: "A short roguelike FPS inspired by retro PS1-era games, where you have to kill zombies to gain levels.",
      image: rottenPixelsImg,
      engine: "Unity",
      tags: ["FPS", "Roguelike", "3D"],
      link: "https://lootchy.itch.io/rotten-pixels"
    },
    {
      title: "Tedimo",
      description: "An adventure and puzzle game where players take on the role of a shipwrecked and amnesiac sailor. Explore the mysterious island and solve puzzles to lift an ancient curse.",
      image: tedimoImg,
      engine: "Unreal Engine 5",
      tags: ["Puzzle", "Exploration", "3D", "Story-Driven"],
      link: "https://lootchy.itch.io/tedimogame"
    },
    {
      title: "Don't Rage Please",
      description: "A rage-inducing platformer game made with Unreal Engine 4. I created it back in middle school when I was first discovering the game engine.",
      image: drpImg,
      engine: "Unreal Engine 4",
      tags: ["Platformer", "Rage Game", "3D"],
      link: "https://lootchy.itch.io/dont-rage-please"
    },
    {
      title: "Cabbage Farm",
      description: "A game I created in Unity in one day. My goal was to learn how to use the game engine. The objective is simple: catch as many cabbages as possible and avoid catching stones.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
      engine: "Unity",
      tags: ["Casual", "3D"],
      link: "https://lootchy.itch.io/farm-cabbage"
    },
    {
      title: "Spend Time",
      description: "If you're looking to chill for 15 minutes, this game is perfect for you. Complete three missions to finish the game. Collect coins, navigate parkour challenges, interact with NPCs, explore the map, and most importantly, have fun!",
      image: spendtimeImg,
      engine: "Unreal Engine 4",
      tags: ["Platformer", "Exploration", "Relaxing", "3D"],
      link: "https://lootchy.itch.io/spend-time"
    },
    {
      title: "Food Quest",
      description: "A game set in a world full of food and sweets, made with Unreal Engine 4. It plays like a platformer with a few missions to complete.",
      image: foodquestImg,
      engine: "Unreal Engine 4",
      tags: ["Platformer", "Exploration", "Relaxing", "3D"],
      link: "https://lootchy.itch.io/food-quest"
    },
    {
      title: "Custom Engine Game",
      description: "Built on my own custom engine powered by DirectX 12 with ECS, this game is a fast-paced and minimalist space shooter focused on pure arcade fun.",
      image: engineImg,
      engine: "DirectX 12",
      tags: ["C++", "Shooter", "Space"],
      link: null
    },
    {
      title: "SFML Roguelike",
      description: "A fast-paced 2D top-down roguelike / Vampire Survivors–style shooter built with SFML: kill waves of monsters to level up and earn money, then spend earnings to buy new weapons and upgrade them for deeper progression and chaotic replayability.",
      image: sfmlImg,
      engine: "C++ Scratch",
      tags: ["Roguelike", "Shooter", "2D", "Vampire Survivor"],
      link: null
    },
    {
      title: "Breachborn - Roguelike Exploration & Village Defense",
      description: (
        <>
          Breachborn is the most ambitious project I've worked on. I've been developing it for the past seven months with a friend, building a deep and replayable roguelike experience.
          <br/><br/>
          The game combines procedural exploration, village management, and fast-paced combat. Players can shape their playstyle through a highly flexible progression system featuring:
          <ul className="list-disc list-inside my-2 ml-4">
            <li>25+ character stats</li>
            <li>A large collection of artifacts</li>
            <li>Stackable passive abilities</li>
            <li>Unique active skills</li>
          </ul>
          This system allows for an extensive range of builds and strategies.
          <br/><br/>
          At the core of the experience, players must upgrade, expand, and defend their village against an escalating external threat. Resources gathered during expeditions into the procedurally generated world are essential for improving the village and preparing for dangerous encounters.
          <br/><br/>
          As they explore, players uncover story fragments and lore pieces that reveal the mysteries of the world of Breachborn, encouraging immersion and rewarding curiosity.
        </>
      ),
      image: breachbornImg,
      engine: "Unreal Engine 5",
      tags: ["Roguelike", "Exploration", "City Building", "Combat", "Deep Story", "Survival", "Procedural", "3D"],
      link: "https://discord.gg/4crSvq6d"
    }
  ];

  const truncateText = (text, maxLength = 200) => {
    if (typeof text !== 'string') {
      // Si c'est du JSX (comme Breachborn), retourne tel quel
      return text;
    }
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const toggleExpand = (idx) => {
    setExpandedCards(prev => 
      prev.includes(idx) 
        ? prev.filter(i => i !== idx) 
        : [...prev, idx]
    );
  };

  const getEngineColor = (engine) => {
    if (engine.includes("Unity")) return "bg-purple-600/90";
    if (engine.includes("Unreal")) return "bg-indigo-600/90";
    if (engine.includes("DirectX 12")) return "bg-cyan-600/90";
    if (engine.includes("C++ Scratch")) return "bg-green-600/90";
    return "bg-blue-600/90";
  };

  const getTagColor = (tag) => {
    const colors = {
      "Exploration": "bg-purple-600/30 border-purple-500/50",
      "Fishing": "bg-pink-600/30 border-pink-500/50",
      "Horror": "bg-cyan-600/30 border-cyan-500/50",
      "FPS": "bg-blue-600/30 border-blue-500/50",
      "Roguelike": "bg-green-600/30 border-green-500/50",
      "3D": "bg-red-600/30 border-red-500/50",
      "2D": "bg-orange-600/30 border-orange-500/50",
      "Puzzle": "bg-blue-600/30 border-blue-500/50",
      "Story-Driven": "bg-purple-600/30 border-purple-500/50",
      "Platformer": "bg-blue-600/30 border-blue-500/50",
      "Rage Game": "bg-orange-600/30 border-orange-500/50",
      "Casual": "bg-green-600/30 border-green-500/50",
      "Relaxing": "bg-cyan-600/30 border-cyan-500/50",
      "C++": "bg-red-600/30 border-red-500/50",
      "Shooter": "bg-yellow-600/30 border-yellow-500/50",
      "Space": "bg-indigo-600/30 border-indigo-500/50",
      "Combat": "bg-red-600/30 border-red-500/50",
      "Procedural": "bg-violet-600/30 border-violet-500/50",
      "Deep Story": "bg-purple-600/30 border-purple-500/50",
      "City Building": "bg-amber-600/30 border-amber-500/50",
      "Survival": "bg-lime-600/30 border-lime-500/50",
      "ECS": "bg-teal-600/30 border-teal-500/50",
      "Vampire Survivor": "bg-rose-600/30 border-rose-500/50"
    };
    return colors[tag] || "bg-gray-600/30 border-gray-500/50";
  };

  return (
    <section className="min-h-screen px-6 pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto z-10">
        <h2 className="text-6xl font-black mb-4 text-center">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            <TypeWriter 
              text="My Projects" 
              delay={75}
              startDelay={0}
              className=""
            />
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Discover my creations on Itch.io</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
              <div 
                key={idx}
                ref={(el) => {
                  if (el && !el.dataset.observed) {
                    el.dataset.observed = 'true';
                    const observer = new IntersectionObserver(
                      (entries) => {
                        entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                            entry.target.style.animation = `fadeInUp 0.6s ease-out forwards`;
                            entry.target.style.opacity = '0';
                            observer.unobserve(entry.target);
                          }
                        });
                      },
                      { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
                    );
                    observer.observe(el);
                  }
                }}
                className="group relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl overflow-hidden hover:border-purple-400/60 transition-all hover:scale-105 cursor-pointer opacity-0"
                onMouseEnter={() => {
                  createParticle(mousePos.x, mousePos.y);
                  playHoverSound();
                }}
              >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className={`absolute top-4 right-4 ${getEngineColor(project.engine)} backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold`}>
                  {project.engine}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="text-gray-300 mb-6 leading-relaxed">
                  {typeof project.description === 'string' ? (
                    <>
                      {expandedCards.includes(idx) 
                        ? project.description 
                        : truncateText(project.description, 200)
                      }
                      {project.description.length > 200 && (
                        <button
                          onClick={() => toggleExpand(idx)}
                          className="text-purple-400 hover:text-purple-300 font-semibold ml-2 transition-colors"
                        >
                          {expandedCards.includes(idx) ? 'Read less' : 'Read more'}
                        </button>
                      )}
                    </>
                  ) : (
                    <>
                      <div className={`${!expandedCards.includes(idx) ? 'line-clamp-4' : ''}`}>
                        {project.description}
                      </div>
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="text-purple-400 hover:text-purple-300 font-semibold mt-2 transition-colors block"
                      >
                        {expandedCards.includes(idx) ? 'Read less' : 'Read more'}
                      </button>
                    </>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`${getTagColor(tag)} border px-3 py-1 rounded-full text-sm`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105"
                >
                    <Gamepad2 size={20} />
                    {project.link.includes('discord') ? 'Join Discord' : 
                    project.link.includes('github') ? 'View on GitHub' : 
                    'Play on Itch.io'}
                    <ExternalLink size={16} />
                </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}