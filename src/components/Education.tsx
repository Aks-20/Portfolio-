import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education: React.FC = () => {
  const educations = [
    {
      institution: "THE NORTHCAP UNIVERSITY",
      degree: "B.Tech in Computer Science",
      duration: "2022-2026",
   
    },
    {
      institution: "LANCER'S CONVENT",
      degree: "(Class 10th-12th)",
      duration: "2020 - 2022",
    
    },
  ];

  return (
    <section
      id="education"
      className="py-16 bg-gradient-to-br from-purple-900 via-black to-blue-900 text-gray-100"
    >
      <div className="container">
        <h2 className="section-title text-white">Education</h2>

        <div className="space-y-6 mt-8">
          {educations.map((edu, index) => (
            <Card
              key={index}
              className="bg-[#121212] text-gray-100 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-portfolio-teal">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-300">{edu.degree}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <Badge className="bg-portfolio-teal text-white mb-1">{edu.duration}</Badge>
                  
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
