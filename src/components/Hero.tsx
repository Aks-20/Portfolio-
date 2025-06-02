import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code, Zap } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Fullstack Developer",
    "UI/UX Enthusiast", 
    "Problem Solver",
    "Tech Innovator"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  type FloatingIconProps = {
    icon: React.ElementType;
    delay: number;
    x: number;
    y: number;
  };

  const FloatingIcon: React.FC<FloatingIconProps> = ({ icon: Icon, delay, x, y }) => (
    <div 
      className={`absolute text-cyan-400/20 animate-pulse`}
      style={{ 
        left: `${x}%`, 
        top: `${y}%`,
        animationDelay: `${delay}s`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Icon size={24} />
    </div>
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(6, 182, 212, 0.15) 0%, 
                transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                rgba(168, 85, 247, 0.1) 0%, 
                transparent 50%),
              linear-gradient(135deg, 
                rgba(15, 23, 42, 0.8) 0%, 
                rgba(0, 0, 0, 0.9) 50%, 
                rgba(30, 41, 59, 0.8) 100%)
            `
          }}
        />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Tech Icons */}
      <FloatingIcon icon={Code} delay={0} x={15} y={20} />
      <FloatingIcon icon={Zap} delay={1} x={85} y={15} />
      <FloatingIcon icon={Sparkles} delay={2} x={20} y={80} />
      <FloatingIcon icon={Github} delay={1.5} x={80} y={75} />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Greeting with glow effect */}
              <div className="group">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
                  <Sparkles className="w-4 h-4 text-cyan-400 mr-2 animate-spin" />
                  <span className="text-cyan-400 text-sm font-medium">Available for opportunities</span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-medium text-cyan-400 mb-4 tracking-wide">
                  Hello, I'm
                </h2>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-4">
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                    Akshat
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Gupta
                  </span>
                </h1>
                
                {/* Animated Role */}
                <div className="h-12 flex items-center">
                  <h3 className="text-2xl md:text-3xl font-medium text-gray-300">
                    <span 
                      key={currentRole}
                      className="inline-block animate-pulse bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                    >
                      {roles[currentRole]}
                    </span>
                  </h3>
                </div>
              </div>

              {/* Description with typewriter effect */}
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                Crafting <span className="text-cyan-400 font-semibold">pixel-perfect</span> experiences 
                and building <span className="text-purple-400 font-semibold">scalable solutions</span> with 
                cutting-edge technologies.
              </p>

              {/* Enhanced Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-base font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="relative z-10 flex items-center">
                    Let's Connect
                    <Mail className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                
                <Button
                  variant="outline"
                  className="group border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-base font-semibold rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex items-center space-x-6 pt-6">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/akshat-gupta-41b394253/", color: "hover:text-blue-400" },
                  { icon: Github, href: "https://github.com/Aks-20", color: "hover:text-purple-400" },
                  { icon: Mail, href: "mailto:akshatgupta0043@gmail.com", color: "hover:text-cyan-400" }
                ].map(({ icon: Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                  >
                    <Icon size={24} className="group-hover:animate-pulse" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Profile */}
            <div className="hidden lg:flex justify-center">
              <div className="relative group">
                {/* Multiple layered glows */}
                <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse" />
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700" />
                
                {/* Main image container */}
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 z-10" />
                    <img
                      src="/tom.jpg"
                      alt="Akshat Gupta"
                      className="object-cover w-full h-full relative z-0 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute -top-4 left-1/2 w-8 h-8 bg-cyan-400 rounded-full blur-sm opacity-60" />
                    <div className="absolute top-1/2 -right-4 w-6 h-6 bg-purple-400 rounded-full blur-sm opacity-60" />
                    <div className="absolute -bottom-4 left-1/2 w-4 h-4 bg-pink-400 rounded-full blur-sm opacity-60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center group cursor-pointer">
        <div className="flex flex-col items-center p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 group-hover:bg-black/60 transition-all duration-300">
          <span className="text-sm text-gray-400 mb-3 group-hover:text-cyan-400 transition-colors">Explore More</span>
          <div className="w-6 h-10 border-2 border-cyan-400/60 rounded-full flex justify-center group-hover:border-cyan-400 transition-colors">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;