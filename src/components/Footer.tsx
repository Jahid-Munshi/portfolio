import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Bottom Section */}
        <div className=" pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Jahidul Islam. All rights reserved.
          </p>

          <div className="flex items-center text-gray-400 text-sm">
            <span>Coded with</span>
            <Heart className="mx-1 text-red-500" size={16} />
            <span>
              by{" "}
              <a
                className="text-gray-200 font-semibold"
                href="https://talha373.netlify.app/"
              >
                Abu Talha
              </a>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition-colors text-sm"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
