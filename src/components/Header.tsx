import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Sparkles, Code, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: User },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Sparkles },
    { name: "Experience", href: "#experience", icon: Code },
    { name: "Education", href: "#education", icon: User },
    { name: "Contact", href: "#contact", icon: User },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "py-3"
            : "py-6"
        }`}
      >
        {/* Glassmorphism background */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled 
              ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl" 
              : "bg-transparent"
          }`}
        />
        
        {/* Dynamic gradient overlay */}
        <div 
          className={`absolute inset-0 opacity-30 transition-opacity duration-500 ${
            scrolled ? "opacity-20" : "opacity-0"
          }`}
          style={{
            background: `radial-gradient(circle at ${(mousePosition.x / window.innerWidth) * 100}% 50%, 
              rgba(6, 182, 212, 0.1) 0%, 
              transparent 50%)`
          }}
        />

        <div className="relative container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            
            {/* Enhanced Logo */}
            <a 
              href="#home" 
              className="group relative z-10"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                    Akshat
                  </span>
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer group ${
                    activeSection === link.href.slice(1)
                      ? "text-cyan-400"
                      : scrolled
                      ? "text-gray-300 hover:text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {/* Active indicator */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl backdrop-blur-sm border border-cyan-500/30 transition-all duration-300 ${
                      activeSection === link.href.slice(1) 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-95 group-hover:opacity-60 group-hover:scale-100"
                    }`}
                  />
                  
                  {/* Hover glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-purple-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                  
                  <span className="relative z-10 flex items-center space-x-2">
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </span>
                </a>
              ))}
            </nav>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              {/* Resume Download Button */}
            <a href="/public/Akshat Resume.pdf" download>
    <Button
      className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 group"
    >
      <Download className="w-4 h-4 group-hover:animate-bounce" />
      <span>Resume</span>
    </Button>
  </a>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                className={`lg:hidden relative p-3 rounded-xl transition-all duration-300 ${
                  scrolled 
                    ? "text-gray-300 hover:text-white hover:bg-white/10" 
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    size={24} 
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                    }`} 
                  />
                  <X 
                    size={24} 
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMenuOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                    }`} 
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative flex flex-col justify-center items-center h-full space-y-8 transition-all duration-700 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-12"
        }`}>
          
          {/* Mobile Navigation Links */}
          <nav className="space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`group flex items-center space-x-4 text-2xl font-semibold text-white hover:text-cyan-400 cursor-pointer transition-all duration-300 ${
                  isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <link.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  {link.name}
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Resume Button */}
          <Button
            className={`mt-8 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>

          {/* Social indicators */}
          <div className={`flex space-x-4 mt-8 transition-all duration-700 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: `${(navLinks.length + 1) * 100}ms` }}>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;