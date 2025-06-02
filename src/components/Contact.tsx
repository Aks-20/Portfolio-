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
      className="py-20 bg-gradient-to-br from-[#1e002a] via-[#000000] to-[#001f3f] text-gray-100"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-teal mb-4 font-['Poppins'] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-['Inter'] leading-relaxed">
            Feel free to reach out to me for any opportunities, collaborations, or
            questions. I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-[#1c1c1e]/90 border border-[#2a2a2d] shadow-2xl transition-all hover:shadow-portfolio-teal/20 hover:border-portfolio-teal/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-portfolio-teal mb-6 font-['Poppins']">
                  Send me a message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-portfolio-teal mb-1 font-['Inter']">
                        Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-[#2a2a2d] text-white border border-gray-700 focus:ring-2 focus:ring-portfolio-teal focus:border-transparent transition-all font-['Inter']"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-portfolio-teal mb-1 font-['Inter']">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full bg-[#2a2a2d] text-white border border-gray-700 focus:ring-2 focus:ring-portfolio-teal focus:border-transparent transition-all font-['Inter']"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-portfolio-teal mb-1 font-['Inter']">
                      Subject
                    </label>
                    <Input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-[#2a2a2d] text-white border border-gray-700 focus:ring-2 focus:ring-portfolio-teal focus:border-transparent transition-all font-['Inter']"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-portfolio-teal mb-1 font-['Inter']">
                      Message
                    </label>
                    <Textarea
                      placeholder="Your message..."
                      rows={6}
                      className="resize-none w-full bg-[#2a2a2d] text-white border border-gray-700 focus:ring-2 focus:ring-portfolio-teal focus:border-transparent transition-all font-['Inter']"
                    />
                  </div>

                  <Button 
                    className="w-full sm:w-auto bg-portfolio-teal hover:bg-portfolio-teal/90 text-white font-['Poppins'] px-8 py-6 text-lg transition-all hover:scale-[1.02] shadow-lg hover:shadow-portfolio-teal/30"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info + Socials */}
          <div className="space-y-8">
            <Card className="bg-[#1c1c1e]/90 border border-[#2a2a2d] shadow-2xl transition-all hover:shadow-portfolio-teal/20 hover:border-portfolio-teal/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-portfolio-teal mb-6 font-['Poppins']">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start group">
                    <div className="bg-[#2a2a2d] group-hover:bg-portfolio-teal p-3 rounded-lg transition-all mr-4">
                      <Phone className="h-5 w-5 text-portfolio-teal group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="block text-sm text-gray-400 font-['Inter']">Phone</span>
                      <a href="tel:9813484110" className="text-white hover:text-portfolio-teal transition-colors font-['Inter'] text-lg">
                        +91 9813484110
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="bg-[#2a2a2d] group-hover:bg-portfolio-teal p-3 rounded-lg transition-all mr-4">
                      <Mail className="h-5 w-5 text-portfolio-teal group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="block text-sm text-gray-400 font-['Inter']">Email</span>
                      <a
                        href="mailto:akshatgupta4911@gmail.com"
                        className="text-white hover:text-portfolio-teal transition-colors font-['Inter'] text-lg"
                      >
                        akshatgupta0043@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="bg-[#2a2a2d] group-hover:bg-portfolio-teal p-3 rounded-lg transition-all mr-4">
                      <MapPin className="h-5 w-5 text-portfolio-teal group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="block text-sm text-gray-400 font-['Inter']">Location</span>
                      <span className="text-white font-['Inter'] text-lg">Pitampura, New Delhi</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1c1c1e]/90 border border-[#2a2a2d] shadow-2xl transition-all hover:shadow-portfolio-teal/20 hover:border-portfolio-teal/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-portfolio-teal mb-6 font-['Poppins']">
                  Social Profiles
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Aks-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2a2a2d] hover:bg-portfolio-teal hover:text-white transition-all p-4 rounded-lg flex items-center justify-center group"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span className="ml-2 font-['Inter'] hidden sm:inline">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akshat-gupta-41b394253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2a2a2d] hover:bg-portfolio-teal hover:text-white transition-all p-4 rounded-lg flex items-center justify-center group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span className="ml-2 font-['Inter'] hidden sm:inline">LinkedIn</span>
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