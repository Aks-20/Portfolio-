import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in">
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-portfolio-teal mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-navy">
              Akshat Gupta
            </h1>
            <h3 className="text-2xl md:text-3xl font-medium text-gray-700 mt-2">
              Fullstack Developer
            </h3>
          </div>

          <p className="text-lg text-gray-600 max-w-lg">
            Dedicated Full Stack Developer with experience in building dynamic and responsive web applications
            using modern technologies. Skilled in both front-end and back-end development.
          </p>

          <div className="flex space-x-4">
            <Button className="bg-portfolio-navy hover:bg-portfolio-navy/90">
              Contact Me <Mail className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://www.linkedin.com/in/akshat-gupta-41b394253/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/Aks-20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-teal transition-colors"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="mailto:akshatgupta0043@gmail.com"
              className="text-gray-600 hover:text-portfolio-teal transition-colors"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center animate-scale-in">
          <div className="relative">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-portfolio-teal/20 absolute top-4 left-4"></div>
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
              <img
                src="/tom.jpg"
                alt="Akshat Gupta"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce bg-gray-900 bg-opacity-70 p-4 rounded"
        role="presentation"
      >
        <span className="text-sm text-gray-400 mb-2 select-none">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
