import React from "react";
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  GitBranch,
  Brain,
  Clock,
  Users,
  Zap,
  Award,
  ExternalLink
} from "lucide-react";

const Skills: React.FC = () => {
  const technicalSkills = [
    {
      category: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
        { name: "Python", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "Java", color: "bg-red-500/20 text-red-400 border-red-500/30" }
      ],
    },
    {
      category: "Frontend Development",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "HTML5", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
        { name: "CSS3", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "Bootstrap", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
        { name: "Tailwind CSS", color: "bg-teal-500/20 text-teal-400 border-teal-500/30" },
        { name: "React.js", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" }
      ],
    },
    {
      category: "Backend Development",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", color: "bg-green-500/20 text-green-400 border-green-500/30" },
        { name: "Express.js", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" }
      ],
    },
    {
      category: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MySQL", color: "bg-blue-600/20 text-blue-300 border-blue-600/30" },
        { name: "MongoDB", color: "bg-green-600/20 text-green-300 border-green-600/30" }
      ],
    },
    {
      category: "Version Control",
      icon: <GitBranch className="h-5 w-5" />,
      skills: [
        { name: "Git", color: "bg-red-500/20 text-red-400 border-red-500/30" },
        { name: "GitHub", color: "bg-gray-500/20 text-gray-300 border-gray-500/30" }
      ],
    },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <Brain className="h-4 w-4" />, color: "text-purple-400" },
    { name: "Time Management", icon: <Clock className="h-4 w-4" />, color: "text-blue-400" },
    { name: "Adaptability", icon: <Zap className="h-4 w-4" />, color: "text-yellow-400" },
    { name: "Teamwork", icon: <Users className="h-4 w-4" />, color: "text-green-400" },
  ];

  const certifications = [
    {
      name: "MongoDB Certified",
      issuer: "MongoDB University",
      link: "https://drive.google.com/drive/folders/1lEdqgVZeUj4M_Vp15KyGANhPxW33ZXV_",
      color: "text-green-400"
    },
    {
      name: "Oracle Java",
      issuer: "Oracle",
      link: "https://drive.google.com/drive/folders/1lEdqgVZeUj4M_Vp15KyGANhPxW33ZXV_",
      color: "text-red-400"
    },
    {
      name: "PwSkills Backend Development",
      issuer: "PwSkills",
      link: "https://drive.google.com/drive/folders/1lEdqgVZeUj4M_Vp15KyGANhPxW33ZXV_",
      color: "text-blue-400"
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <Code className="h-6 w-6 text-purple-400 mr-3" />
              <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
            </div>
            
            <div className="space-y-8">
              {technicalSkills.map((skillGroup, index) => (
                <Card key={skillGroup.category} className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg mr-3 group-hover:bg-purple-500/30 transition-colors">
                      {skillGroup.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                      {skillGroup.category}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`px-4 py-2 rounded-full border font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default ${skill.color}`}
                      >
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div>
              <div className="flex items-center mb-6">
                <Brain className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
              </div>
              
              <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                <div className="space-y-4">
                  {softSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors group"
                    >
                      <div className={`p-2 bg-gray-700/50 rounded-lg mr-4 group-hover:bg-gray-600/50 transition-colors ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
              
              <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="group">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700/50 transition-colors"
                      >
                        <div>
                          <h4 className={`font-semibold ${cert.color} group-hover:text-white transition-colors`}>
                            {cert.name}
                          </h4>
                          <p className="text-sm text-gray-400">{cert.issuer}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                      </a>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;