import React from "react";
import { Download, Github, Linkedin, Mail, User } from "lucide-react";

const Hero = () => {
  const handleResumeDownload = () => {
    // window.open('/Md. Jahidul Islam.pdf', '_blank'); // opens in new tab
    // // OR
    window.location.href = "/Md. Jahidul Islam.pdf"; // triggers direct download depending on browser
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                JAHIDUL Islam
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-600 font-semibold">
                Computer Science Graduate
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Microsoft Power Platform Developer with experience in Data
                Analyst, Machine Learning, Project Coordination and Client
                Management. Passionate about leveraging technology to drive
                operational excellence and seeking opportunities in project
                management and systems administration.
              </p>
            </div>
            <div className=" lg:hidden">
              <div className="relative w-full h-96">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-3xl"></div>
                <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20 animate-pulse delay-1000"></div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
                  <div className="text-center space-y-6">
                    <div className="size-40 rounded-2xl flex items-center justify-center mx-auto shadow-lg overflow-hidden">
                      <img
                        src="/me.jpg" // Replace with actual path
                        alt="User profile"
                        className="object-cover scale-125"
                      />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        Ready to Contribute
                      </h3>
                      <p className="text-gray-600 text-sm max-w-xs">
                        Seeking opportunities in Data Analysis & Power Platform
                        Developer
                      </p>
                    </div>

                    <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-700 text-sm font-medium">
                        Available Now
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/md-jahidul-islam-resume.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/md-jahidul-islam-ba7123217/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-200"
              >
                <Linkedin className="text-blue-600" size={24} />
              </a>
              <a
                href="https://github.com/Jahid-Munshi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200"
              >
                <Github className="text-gray-700" size={24} />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative w-full h-96">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-3xl"></div>
              <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20 animate-pulse delay-1000"></div>

              {/* Main Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
                <div className="text-center space-y-6">
                  <div className="size-40 rounded-2xl flex items-center justify-center mx-auto shadow-lg overflow-hidden">
                    <img
                      src="/me.jpg" // Replace with actual path
                      alt="User profile"
                      className="object-cover scale-125"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      Ready to Contribute
                    </h3>
                    <p className="text-gray-600 text-sm max-w-xs">
                      Seeking opportunities in Data Analysis & Power Platform
                      Developer
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 text-sm font-medium">
                      Available Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
