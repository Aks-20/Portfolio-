import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education: React.FC = () => {
  const educations = [
    {
      institution: "THE NORTHCAP UNIVERSITY",
      degree: "B.Tech in Computer Science",
      duration: "2022 - 2026",
    },
    {
      institution: "LANCER'S CONVENT",
      degree: "(Class 10th - 12th)",
      duration: "2020 - 2022",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4 bg-gradient-to-br from-purple-900 via-black to-blue-900 text-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          <GraduationCap className="inline w-8 h-8 mr-2 text-portfolio-teal" />
          Education
        </h2>

        <div className="space-y-12">
          {educations.map((edu, index) => (
            <Card
              key={index}
              className="relative border border-portfolio-teal/50 bg-[#181818] text-gray-100 shadow-xl rounded-2xl hover:shadow-portfolio-teal/40 hover:scale-[1.02] transition-all duration-300 overflow-hidden group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-portfolio-teal flex items-center justify-center shadow-md">
                <div className="w-2 h-2 rounded-full bg-black"></div>
              </div>

              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-portfolio-teal mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-400">{edu.degree}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4 text-portfolio-teal" />
                    <Badge className="bg-portfolio-navy text-white px-3 py-1 rounded-full shadow-portfolio-teal/30 shadow-md">
                      {edu.duration}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
