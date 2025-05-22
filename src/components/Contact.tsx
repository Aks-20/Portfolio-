import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Github, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-[#1e002a] via-[#000000] to-[#001f3f] text-gray-100"
    >
      <div className="container">
        <h2 className="text-3xl font-bold text-portfolio-teal mb-4">Get In Touch</h2>
        <p className="text-gray-300 mb-10 max-w-2xl">
          Feel free to reach out to me for any opportunities, collaborations, or
          questions. I'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="bg-[#1c1c1e] border-none shadow-xl animate-fade-in">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-portfolio-teal mb-1">
                        Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-[#2a2a2d] text-white border border-gray-700 focus:ring-portfolio-teal"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-portfolio-teal mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full bg-[#2a2a2d] text-white border border-gray-700 focus:ring-portfolio-teal"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-portfolio-teal mb-1">
                      Subject
                    </label>
                    <Input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-[#2a2a2d] text-white border border-gray-700 focus:ring-portfolio-teal"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-portfolio-teal mb-1">
                      Message
                    </label>
                    <Textarea
                      placeholder="Your message..."
                      rows={6}
                      className="resize-none w-full bg-[#2a2a2d] text-white border border-gray-700 focus:ring-portfolio-teal"
                    />
                  </div>

                  <Button className="w-full sm:w-auto bg-portfolio-teal hover:bg-portfolio-teal/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info + Socials */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Card className="bg-[#1c1c1e] border-none shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-teal mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 text-portfolio-teal mr-3 mt-0.5" />
                    <div>
                      <span className="block text-sm text-gray-400">Phone</span>
                      <a href="tel:9813484110" className="text-white hover:text-portfolio-teal">
                        9813484110
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 text-portfolio-teal mr-3 mt-0.5" />
                    <div>
                      <span className="block text-sm text-gray-400">Email</span>
                      <a
                        href="mailto:akshatgupta4911@gmail.com"
                        className="text-white hover:text-portfolio-teal"
                      >
                        akshatgupta0043@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-portfolio-teal mr-3 mt-0.5" />
                    <div>
                      <span className="block text-sm text-gray-400">Location</span>
                      <span className="text-white">Pitampura, New Delhi</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1c1c1e] border-none shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-teal mb-4">
                  Social Profiles
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Aks-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2a2a2d] hover:bg-portfolio-teal hover:text-white transition-colors p-3 rounded-full"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akshat-gupta-41b394253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2a2a2d] hover:bg-portfolio-teal hover:text-white transition-colors p-3 rounded-full"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
