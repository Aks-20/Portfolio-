import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900"
    >
      <div className="container">
        <h2 className="section-title text-white">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-purple-400">
              Profile Summary
            </h3>

            <p className="text-gray-300">
              Dedicated Full Stack Developer with experience in building dynamic
              and responsive web applications using modern technologies. Skilled
              in both front-end and back-end development. Seeking opportunities
              to further enhance technical skills in a collaborative environment.
            </p>

            <p className="text-gray-300">
              I specialize in the MERN stack (MongoDB, Express.js, React.js,
              Node.js) and have built several successful projects using these
              technologies. My experience includes developing responsive web
              applications, implementing CRUD functionality, and integrating
              various APIs for enhanced functionality.
            </p>

            <div className="pt-4">
              <a
                href="/public/Akshat Resume.pdf" // Replace with the actual public URL path to your PDF
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-purple-700 hover:bg-purple-600 text-white">
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gray-800 shadow-lg">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-gray-200">9813484110</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-200">akshatgupta0043@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-gray-200">Pitampura, New Delhi</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 shadow-lg">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Interests & Hobbies
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Chess (critical thinking and strategic planning)</li>
                <li>Football (teamwork, leadership, physical endurance)</li>
                <li>Watching matches (analyzing game dynamics)</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
