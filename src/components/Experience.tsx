import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Lost and Found Website",
      company: "The NorthCap University",
      date: "June 2022 - July 2022",
      description:
        "Built a platform for The NorthCap University using MERN Stack, that allows users to report and recover lost items.",
      achievements: [
        "Built a platform for The NorthCap University using MERN Stack",
        "Features include secure login, OTP verification of items, photo uploads, admin controls",
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js"],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-purple-900 via-black to-blue-900 text-gray-100">
      <div className="container">
        <h2 className="section-title text-white">Experience</h2>

        <div className="space-y-8 mt-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="relative border-l-4 border-l-portfolio-teal bg-[#121212] text-gray-100 shadow-md animate-fade-in"
            >
              <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-portfolio-teal flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-black"></div>
              </div>

              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-portfolio-teal">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300">{exp.company}</p>
                  </div>
                  <Badge className="bg-portfolio-navy text-white">{exp.date}</Badge>
                </div>

                <p className="text-gray-200 mb-4">{exp.description}</p>

                <h4 className="font-medium text-portfolio-teal mb-2">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-portfolio-teal text-portfolio-teal bg-transparent"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {experiences.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-400">No work experience yet. Currently seeking opportunities!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
