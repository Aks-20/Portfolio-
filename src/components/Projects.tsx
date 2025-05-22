import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Bookstore Management System",
      description:
        "Developed a dynamic CRUD application using the MERN stack, enabling seamless creation, retrieval, updating, and deletion of records with an attractive and user-friendly interface.",
      imageSrc:
        "/lovable-uploads/4f940d92-c2c2-463c-afd8-beb3d84a1798.png",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      features: [
        "Full CRUD operations",
        "User authentication",
        "Search functionality",
        "Responsive design",
      ],
      githubLink: "https://github.com/Akshat-20",
    },
    {
      title: "Disaster Management System",
      description:
        "Developed a responsive web platform to facilitate real-time disaster response coordination. Integrated Google Maps API for geolocation-based incident reporting and resource tracking.",
      imageSrc:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["React", "Node.js", "Google Maps API", "MongoDB"],
      features: [
        "Real-time incident reporting",
        "Resource allocation",
        "Interactive map interface",
        "Emergency contacts database",
      ],
      githubLink: "https://github.com/Akshat-20",
    },
    {
      title: "Lost and Found Website",
      description:
        "Built a platform for The NorthCap University using MERN Stack, that allows users to report and recover lost items with secure login, OTP verification, and admin controls.",
      imageSrc:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      features: [
        "Secure login system",
        "OTP verification",
        "Admin dashboard",
        "Item tracking",
      ],
      githubLink: "https://github.com/Akshat-20",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-gray-100"
    >
      <div className="container">
        <h2 className="section-title text-white">Projects</h2>
        <p className="text-gray-400 mb-10 max-w-3xl">
          Here are some of the projects I've worked on. Each project showcases
          different skills and technologies that I've mastered throughout my
          journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden h-full flex flex-col bg-[#1c1c1e] border border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-portfolio-teal">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-portfolio-teal/20 text-portfolio-teal border border-portfolio-teal/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-300">{project.description}</p>
                <ul className="mt-4 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-gray-400 flex items-center"
                    >
                      <div className="w-1.5 h-1.5 bg-portfolio-teal rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="mr-2 text-portfolio-teal border-portfolio-teal hover:bg-portfolio-teal/10"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </Button>
                </a>
                <Button
                  size="sm"
                  className="ml-auto bg-portfolio-teal hover:bg-portfolio-teal/90 text-white"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
