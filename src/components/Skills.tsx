  import React from "react";
  import { JSX } from "react";

  import { Card } from "@/components/ui/card";
  import { 
    SiJavascript, 
    SiPython, 
    SiHtml5, 
    SiCss3, 
    SiBootstrap, 
    SiTailwindcss, 
    SiReact, 
    SiNodedotjs, 
    SiExpress, 
    SiMysql, 
    SiMongodb, 
    SiGit, 
    SiGithub 
  } from "react-icons/si";
  import { DiJava } from "react-icons/di";

  const iconMap: Record<string, JSX.Element> = {
    JavaScript: <SiJavascript className="inline-block mr-2 text-yellow-400" />,
    Python: <SiPython className="inline-block mr-2 text-blue-500" />,
    Java: <DiJava className="inline-block mr-2 text-red-600" />,
    HTML: <SiHtml5 className="inline-block mr-2 text-orange-600" />,
    CSS: <SiCss3 className="inline-block mr-2 text-blue-600" />,
    Bootstrap: <SiBootstrap className="inline-block mr-2 text-purple-600" />,
    Tailwind: <SiTailwindcss className="inline-block mr-2 text-teal-400" />,
    "React.js": <SiReact className="inline-block mr-2 text-cyan-400" />,
    "Node.js": <SiNodedotjs className="inline-block mr-2 text-green-600" />,
    "Express.js": <SiExpress className="inline-block mr-2 text-gray-400" />,
    MySQL: <SiMysql className="inline-block mr-2 text-blue-700" />,
    MongoDB: <SiMongodb className="inline-block mr-2 text-green-700" />,
    Git: <SiGit className="inline-block mr-2 text-red-500" />,
    GitHub: <SiGithub className="inline-block mr-2 text-gray-300" />,
  };

  const Skills: React.FC = () => {
    const technicalSkills = [
      {
        category: "Languages",
        skills: ["JavaScript", "Python", "Java"],
      },
      {
        category: "Frontend Development",
        skills: ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript", "React.js"],
      },
      {
        category: "Backend Development",
        skills: ["Node.js", "Express.js"],
      },
      {
        category: "Databases",
        skills: ["MySQL", "MongoDB"],
      },
      {
        category: "Version Control",
        skills: ["Git", "GitHub"],
      },
    ];

    const softSkills = [
      "Problem Solving",
      "Time Management",
      "Adaptability",
      "Teamwork",
    ];

    const certifications = [
      {
        name: "MongoDB Certified",
        issuer: "MongoDB University",
        link: "https://drive.google.com/drive/folders/1lEdqgVZeUj4M_Vp15KyGANhPxW33ZXV_",
      },
      {
        name: "Oracle Java",
        issuer: "Oracle",
        link: "https://drive.google.com/drive/folders/1lEdqgVZeUj4M_Vp15KyGANhPxW33ZXV_",
      },
      {
        name: "PwSkills Backend Development",
        issuer: "PwSkills",
        link: "https://drive.google.com/drive/folders/1lEdqgVZeUj4M_Vp15KyGANhPxW33ZXV_",
      },
    ];

    return (
      <section id="skills" className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900">
        <div className="container">
          <h2 className="section-title text-black">Skills</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-black mb-6">
                Technical Skills
              </h3>
              <div className="space-y-6 stagger-animate">
                {technicalSkills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-lg font-medium text-black mb-3">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.skills.map((skill) => (
                        <div
                          key={skill}
                          className="skill-card flex items-center gap-1 px-3 py-1 rounded-md bg-black/10 hover:bg-white/30 cursor-default select-none text-black transition-shadow duration-300 shadow-sm hover:shadow-[0_0_8px_rgb(139,92,246)]"
                        >
                          {iconMap[skill] || null}
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">
                Soft Skills
              </h3>
              <Card className="p-6 bg-slate-800 shadow-lg border border-slate-700">
                <ul className="space-y-4 stagger-animate">
                  {softSkills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center p-3 border-b border-slate-700 last:border-0"
                    >
                      <div className="w-2 h-2 bg-portfolio-teal rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Certifications
                </h3>
                <Card className="p-6 bg-slate-800 shadow-lg border border-slate-700">
                  <ul className="space-y-4 stagger-animate">
                    {certifications.map(({ name, issuer, link }) => (
                      <li key={name} className="flex flex-col">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-cyan-400 hover:underline"
                        >
                          {name}
                        </a>
                        {issuer && (
                          <span className="text-sm text-gray-400">{issuer}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Skills;
