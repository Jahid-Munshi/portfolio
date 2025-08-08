import React from "react";
import { Calendar, MapPin, Users, Award } from "lucide-react";

const VolunteerExperience = () => {
  const experiences = [
    {
      title: "Project Officer",
      organization: "VBD-Tangail District",
      period: "2023-24",
      description:
        "Led project planning and execution initiatives, coordinated with multiple stakeholders, and managed project timelines to ensure successful delivery of community development programs.",
      achievements: [
        "Managed 5+ community development projects",
        "Coordinated with 20+ volunteers and stakeholders",
        "Improved project delivery efficiency by 25%",
      ],
    },
    {
      title: "Public Relations Officer",
      organization: "VBD-Tangail District",
      period: "2022-23",
      description:
        "Managed external communications, organized community outreach events, and built strong relationships with local stakeholders to enhance organizational visibility and impact.",
      achievements: [
        "Organized 10+ community outreach events",
        "Increased social media engagement by 40%",
        "Built partnerships with 15+ local organizations",
      ],
    },
  ];

  const images = [
    "./public/v_exp/v_exp (1).jpg",
    "./public/v_exp/v_exp (2).jpg",
    "./public/v_exp/v_exp (3).jpg",
    "./public/v_exp/v_exp (4).jpg",
    "./public/v_exp/v_exp (5).jpg",
    "./public/v_exp/v_exp (6).jpg",
    "./public/v_exp/v_exp (7).jpg",
    "./public/v_exp/v_exp (8).jpg",
    "./public/v_exp/v_exp (9).jpg",
  ];

  return (
    <section id="volunteer" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Volunteer Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contributing to community development through leadership roles and
            project management, gaining valuable experience in coordination,
            communication, and stakeholder management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Experience Details */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    {experience.title.includes("Project") ? (
                      <Award className="text-white" size={24} />
                    ) : (
                      <Users className="text-white" size={24} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {experience.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{experience.organization}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map(
                      (achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">
                            {achievement}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}

            {/* Impact Summary */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-4">Volunteer Impact</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">35+</div>
                  <div className="text-blue-100 text-sm">
                    Volunteers Coordinated
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">20+</div>
                  <div className="text-blue-100 text-sm">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">3+</div>
                  <div className="text-blue-100 text-sm">Years of Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Gallery */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Featured large image */}
              <div className="col-span-2 relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={images[0]}
                  alt="Volunteer work at VBD-Tangail District"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Grid of smaller images */}
              {images.slice(1, 5).map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-md group"
                >
                  <img
                    src={image}
                    alt={`Volunteer activity ${index + 2}`}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}

              {/* Medium sized images */}
              <div className="col-span-2 grid grid-cols-2 gap-4">
                {images.slice(5, 7).map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-md group"
                  >
                    <img
                      src={image}
                      alt={`Volunteer activity ${index + 6}`}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>

              {/* Final images */}
              {images.slice(7).map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-md group"
                >
                  <img
                    src={image}
                    alt={`Volunteer activity ${index + 8}`}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerExperience;
