import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Code, Database, Globe, Shield, Search, MapPin, Users } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  const projects = [
    {
      id: 1,
      title: "Bookstore Management System",
      description: "A sophisticated CRUD application built with the MERN stack, featuring real-time inventory management, user authentication, and an intuitive admin dashboard.",
      imageSrc: "/lovable-uploads/4f940d92-c2c2-463c-afd8-beb3d84a1798.png",
      technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind"],
      features: [
        { icon: Database, text: "Full CRUD operations" },
        { icon: Shield, text: "Secure authentication" },
        { icon: Search, text: "Advanced search" },
        { icon: Globe, text: "Responsive design" }
      ],
      githubLink: "https://github.com/Aks-20/Projects/tree/main/BookStore",
      category: "Full Stack",
      status: "Completed",
      gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20"
    },
    {
      id: 2,
      title: "Disaster Management System",
      description: "A real-time disaster response platform with geolocation services, emergency alerts, and resource coordination for effective crisis management.",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["React", "Node.js", "Google Maps API", "MongoDB", "Socket.io"],
      features: [
        { icon: MapPin, text: "Real-time incident reporting" },
        { icon: Users, text: "Resource allocation" },
        { icon: Globe, text: "Interactive map interface" },
        { icon: Shield, text: "Emergency contacts" }
      ],
      githubLink: "https://github.com/Aks-20/DisasterManagement",
      category: "Web App",
      status: "Live",
      gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20"
    },
    {
      id: 3,
      title: "Lost and Found Platform",
      description: "University-wide lost and found system with advanced matching algorithms, secure authentication, and comprehensive admin controls for efficient item recovery.",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      technologies: ["MongoDB", "Express", "React", "Node.js", "OTP", "Admin Panel"],
      features: [
        { icon: Shield, text: "Secure login system" },
        { icon: Code, text: "OTP verification" },
        { icon: Users, text: "Admin dashboard" },
        { icon: Search, text: "Smart item tracking" }
      ],
      githubLink: "https://github.com/Aks-20/Lost-And-Found-Frontend",
      category: "Platform",
      status: "In Use",
      gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20"
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt((entry.target as HTMLElement).dataset.projectId!);
            setVisibleProjects(prev => [...new Set([...prev, projectId])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('[data-project-id]');
    projectCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'In Use': return 'bg-blue-500';
      case 'Completed': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 overflow-hidden bg-black"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(6, 182, 212, 0.1) 0%, 
                transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                rgba(168, 85, 247, 0.08) 0%, 
                transparent 50%),
              linear-gradient(135deg, 
                rgba(15, 23, 42, 0.3) 0%, 
                rgba(0, 0, 0, 0.8) 50%, 
                rgba(30, 41, 59, 0.3) 100%)
            `
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-pulse"
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

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
            <Code className="w-4 h-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences that solve real-world problems with 
            <span className="text-cyan-400 font-semibold"> modern technologies</span> and 
            <span className="text-purple-400 font-semibold"> innovative solutions</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`group relative transform transition-all duration-700 ${
                visibleProjects.includes(project.id) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Glow effect container */}
              <div 
                className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500`}
              />
              
              <Card
                className="relative h-full flex flex-col bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500 group-hover:shadow-2xl"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image with overlay effects */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                      <div className={`w-2 h-2 ${getStatusColor(project.status)} rounded-full mr-2 animate-pulse`}></div>
                      <span className="text-white text-xs font-medium">{project.status}</span>
                    </div>
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>

                <CardHeader className="relative">
                  <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  
                  {/* Tech stack with icons */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300 border border-gray-600/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 backdrop-blur-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Enhanced features list */}
                  <div className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mr-3">
                          <feature.icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="relative">
                  <div className="flex gap-3 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-cyan-500/50 transition-all duration-300 group/btn"
                      asChild
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/btn:animate-spin" />
                        Code
                      </a>
                    </Button>
                    
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      Live Demo
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <Star className="w-5 h-5 text-yellow-400 mr-2 animate-pulse" />
           
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;