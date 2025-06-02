import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Aks-20",
      name: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/akshat-gupta-41b394253/",
      name: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/AkshatGupta_567",
      name: "Twitter",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:akshatgupta0043@gmail.com",
      name: "Email",
    },
  ];

  return (
    <footer
      className="py-12 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-portfolio-teal rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center gap-8"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold font-['Poppins']">
              Akshat<span className="text-portfolio-teal">.dev</span>
            </h2>
            <p className="mt-3 text-gray-300 max-w-md font-['Inter'] leading-relaxed">
              Fullstack Developer crafting modern, performant web experiences with cutting-edge technologies.
            </p>

            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:text-portfolio-teal transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav className="w-full lg:w-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-x-10 gap-y-4">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors font-['Inter'] font-medium flex items-center gap-1 group"
                  >
                    <span className="group-hover:text-portfolio-teal transition-colors">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 font-['Inter']">
            © {currentYear} Akshat Gupta. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm font-['Inter']">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 8s ease-in-out infinite 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
