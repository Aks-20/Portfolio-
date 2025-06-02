import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CalendarDays } from "lucide-react"; // Optional Icons

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Lost and Found Website",
      company: "The NorthCap University",
      date: "June 2022 - July 2022",
      description:
        "Built a platform for The NorthCap University using MERN Stack that allows users to report and recover lost items.",
      achievements: [
        "Built a platform for The NorthCap University using MERN Stack",
        "Features include secure login, OTP verification of items, photo uploads, admin controls",
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-br from-purple-900 via-black to-blue-900 text-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          <Briefcase className="inline w-8 h-8 mr-2 text-portfolio-teal" />
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="relative border border-portfolio-teal/50 bg-[#181818] text-gray-100 shadow-xl rounded-2xl hover:shadow-portfolio-teal/40 hover:scale-[1.02] transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-portfolio-teal flex items-center justify-center shadow-md">
                <div className="w-2 h-2 rounded-full bg-black"></div>
              </div>

              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-portfolio-teal">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <CalendarDays className="w-4 h-4 text-portfolio-teal" />
                    <Badge className="bg-portfolio-navy text-white px-3 py-1 rounded-full shadow-portfolio-teal/30 shadow-md">
                      {exp.date}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>

                <h4 className="font-medium text-portfolio-teal mb-2">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-6">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-portfolio-teal text-portfolio-teal bg-black/20 hover:bg-portfolio-teal hover:text-black transition-colors duration-200"
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
              <p className="text-gray-400 text-lg">
                No work experience yet. Currently seeking opportunities!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
