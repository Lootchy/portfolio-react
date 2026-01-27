import React, { useState, useEffect } from 'react';
import { Gamepad, Keyboard, Square, SquareActivity, SquarePi, Sword, Terminal, TreeDeciduous } from 'lucide-react';
import Home from './components/Home';
import Projects from './components/Project';
import Skills from './components/skills';
import Contact from './components/Contact';

export default function ZianPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [skillHover, setSkillHover] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [konamiProgress, setKonamiProgress] = useState([]);

  const fullText = "$ whoami\nZian COLUCCI - Game Developer\n$ experience --years\n8 years in programming (since lower secondary school)\n$ specialization\nUnreal Engine | Gameplay Programming";

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTerminalText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);

    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(typing);
      clearInterval(cursorBlink);
    };
  }, [fullText]);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Konami Code Easter Egg
  useEffect(() => {
    const handleKeyDown = (e) => {
      const newProgress = [...konamiProgress, e.key].slice(-10);
      setKonamiProgress(newProgress);
      
      if (JSON.stringify(newProgress) === JSON.stringify(konamiCode)) {
        // Pluie de particules !
        for (let i = 0; i < 100; i++) {
          setTimeout(() => {
            createParticle(
              Math.random() * window.innerWidth, 
              Math.random() * window.innerHeight
            );
          }, i * 20);
        }
        setKonamiProgress([]); // Reset
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiProgress]);

  const playClickSound = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800; // Fréquence du son
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const playHoverSound = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 600; // Son plus doux pour le hover
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
  };
  const createParticle = (x, y) => {
    for (let i = 0; i < 5; i++) {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8,
        size: Math.random() * 1 + 2,
        color: ['#8b5cf6', '#ec4899', '#06b6d4'][Math.floor(Math.random() * 3)]
      };
      setParticles(prev => [...prev.slice(-50), newParticle]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.filter(p => Date.now() - p.id < 2000));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-900">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Cursor Glow */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 blur-3xl"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(236,72,153,0.3) 40%, transparent 70%)',
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="fixed rounded-full pointer-events-none z-0"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.x + p.vx * 10,
            top: p.y + p.vy * 10,
            backgroundColor: p.color,
            opacity: 0.8,
            animation: 'fadeOut 1.5s forwards',
            boxShadow: `0 0 10px ${p.color}`
          }}
        />
      ))}

      <style>{`
        @keyframes fadeOut {
          to { opacity: 0; transform: scale(0); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-purple-500/20 mt-1">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 text-2xl font-bold">
            <Keyboard className="text-purple-400" size={28} />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              ZIAN.DEV
            </span>
          </div>
          <div className="flex gap-8">
            {['Home', 'Projects', 'Skills', 'Contact'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section.toLowerCase());
                  createParticle(mousePos.x, mousePos.y);
                  playClickSound();
                }}
                onMouseEnter={playHoverSound}
                className={`relative transition-all ${
                  activeSection === section.toLowerCase()
                    ? 'text-purple-400 font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {section}
                {activeSection === section.toLowerCase() && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      {activeSection === 'home' && (
        <Home 
          terminalText={terminalText}
          showCursor={showCursor}
          setActiveSection={setActiveSection}
          createParticle={createParticle}
          mousePos={mousePos}
          playHoverSound={playHoverSound}
        />
      )}

      {activeSection === 'projects' && (
        <Projects 
          createParticle={createParticle}
          mousePos={mousePos}
          playHoverSound={playHoverSound}
        />
      )}

      {activeSection === 'skills' && (
        <Skills 
          skillHover={skillHover}
          setSkillHover={setSkillHover}
          createParticle={createParticle}
          mousePos={mousePos}
          playHoverSound={playHoverSound}
        />
      )}

      {activeSection === 'contact' && (
        <Contact 
          createParticle={createParticle}
          mousePos={mousePos}
          playHoverSound={playHoverSound}
        />
      )}

      {/* Easter Egg Hint */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-600 z-50 opacity-20 hover:opacity-100 transition-opacity">
        Try: ↑ ↑ ↓ ↓ ← → ← → B A
      </div>
    </div>
  );
}