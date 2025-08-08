import React from "react";
import { Briefcase, GraduationCap, Target, Download } from "lucide-react";

const About = () => {
  const handleResumeDownload = () => {
    alert(
      "Resume download would start here. Please replace with actual PDF link."
    );
  };

  const softSkills = [
    "Communication",
    "Team Work",
    "Leadership",
    "Problem Solving",
    "Time Management",
    "Critical Thinking",
    "Negotiation",
    "Decision Making",
    "Collaboration",
    "Creativity",
  ];
  const technicalSkills = [
    "Power Apps",
    "Power Automate",
    "Power BI",
    "MySQL",
    "Python",
    "Sharepoint",
    "Excel",
    "Machine Learning",
    "Microsoft Office Suite",
    "Google Workspace",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm Md. Jahidul Islam, a Data Analyst and Power Platform Developer
            skilled in Python, SQL, Power BI, and Power Apps. With experience in
            public relations and project leadership, I deliver impactful,
            data-driven solutions through strong communication and
            problem-solving skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Professional Experience
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Microsoft Power Platform Developer Intern
                  </h4>
                  <p className="text-blue-600 font-medium">
                    Data Crafters • February - May 2024
                  </p>
                  <p className="text-gray-600 mt-2">
                    Developed custom business applications using Power Apps,
                    automated workflows with Power Automate, and created
                    insightful dashboards with Power BI. Collaborated with
                    cross-functional teams to deliver solutions that improved
                    operational efficiency by 30%.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-green-600 font-medium">
                  Khwaja Yunus Ali University • March 2020 - December 2024
                </p>
                <p className="text-gray-600 mt-2">
                  Relevant coursework: Database Systems, Software Engineering,
                  Project Management, Systems Analysis, and Web Development.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Career Goals
                </h3>
              </div>
              <p className="text-gray-600 text-justify">
                I seek roles where I can apply data analysis, machine learning,
                and Microsoft Power Platform skills to solve real-world
                problems. With 3+ years of volunteer experience, I’m also
                confident in project coordination. My goal is to become a
                data-driven solution expert and eventually lead data and
                automation teams, driving innovation and strategic decisions
                through insights and low-code solutions.
              </p>
            </div>
          </div>

          {/* Right Column - Skills & Resume */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Technical Skills */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Technical Skills
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {technicalSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-white px-4 py-3 rounded-lg shadow-sm border border-green-200 hover:shadow-md transition-shadow"
                      >
                        <span className="text-gray-700 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Soft Skills
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {softSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-white px-4 py-3 rounded-lg shadow-sm border border-blue-200 hover:shadow-md transition-shadow"
                      >
                        <span className="text-gray-700 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
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

export default About;
