import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Phone, Mail, MapPin, Target, Users, Eye } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Summary Card */}
            <Card className="p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-4"></div>
                <h3 className="text-3xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                  Profile Summary
                </h3>
              </div>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Dedicated <span className="text-purple-400 font-semibold">Full Stack Developer</span> with experience in building dynamic
                  and responsive web applications using modern technologies. Skilled
                  in both front-end and back-end development. Seeking opportunities
                  to further enhance technical skills in a collaborative environment.
                </p>

                <p className="text-lg leading-relaxed">
                  I specialize in the <span className="text-pink-400 font-semibold">MERN stack</span> (MongoDB, Express.js, React.js,
                  Node.js) and have built several successful projects using these
                  technologies. My experience includes developing responsive web
                  applications, implementing CRUD functionality, and integrating
                  various APIs for enhanced functionality.
                </p>
              </div>

              {/* Resume Download Button */}
              <div className="pt-8">
                <a
                  href="/public/Akshat Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </Card>

           
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="flex items-center mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-purple-400">Contact Information</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                    <p className="text-gray-200 font-medium">9813484110</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                    <p className="text-gray-200 font-medium break-all">akshatgupta0043@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                    <p className="text-gray-200 font-medium">Pitampura, New Delhi</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Interests & Hobbies */}
            <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="flex items-center mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-purple-400">Interests & Hobbies</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors group">
                  <Target className="h-5 w-5 text-purple-400 mt-0.5 group-hover:text-purple-300" />
                  <div>
                    <p className="text-gray-200 font-medium">Chess</p>
                    <p className="text-sm text-gray-400">Critical thinking and strategic planning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors group">
                  <Users className="h-5 w-5 text-purple-400 mt-0.5 group-hover:text-purple-300" />
                  <div>
                    <p className="text-gray-200 font-medium">Football</p>
                    <p className="text-sm text-gray-400">Teamwork, leadership, physical endurance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors group">
                  <Eye className="h-5 w-5 text-purple-400 mt-0.5 group-hover:text-purple-300" />
                  <div>
                    <p className="text-gray-200 font-medium">Watching Matches</p>
                    <p className="text-sm text-gray-400">Analyzing game dynamics</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;