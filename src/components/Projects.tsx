import React from "react";
import { ExternalLink, Github, Code, Database, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Analysis with Python & SQL",
      description:
        "This project explores e-commerce data using Python and SQL to reveal customer behavior, sales trends, and key performance metrics. It involves data cleaning, SQL queries, and visualizations with Matplotlib and Seaborn. Insights include top products, customer demographics, revenue patterns, and retention, supporting data-driven decisions to enhance marketing and sales strategies.",
      image: "/ecommerce.jpg",
      technologies: ["Python", "MySQL", "Seaborn", "Matplotlib"],
      type: "",
      icon: <Zap className="text-blue-600" size={24} />,
    },
    {
      title: "HR Analytics Dashboard using Power BI",
      description:
        "This project presents a comprehensive HR analytics dashboard built in Power BI to visualize key HR metrics such as employee attrition, department-wise distribution, job satisfaction, and performance trends. It enables data-driven decision-making in human resource management by identifying retention issues, workforce structure, and improvement areas for employee engagement and organizational growth.",
      image: "/hr_text1.jpg",
      technologies: ["Power BI"],
      type: "internship",
      icon: <Database className="text-green-600" size={24} />,
    },
    {
      title: "Online Retail Segmentation with RFM & KMeans",
      description:
        "This project applies RFM (Recency, Frequency, Monetary) analysis and K-Means clustering to segment retail customers into Silver, Gold, and Diamond groups based on purchasing behavior. The results are visualized using Seaborn and Matplotlib, offering actionable insights for targeted marketing and customer retention strategies.",
      image: "/RFM.jpg",
      technologies: ["Python", "Seaborn", "Matplotlib", "K-Means"],
      type: "academic",
      icon: <Code className="text-purple-600" size={24} />,
    },
    {
      title: "Pizza Sales Analysis using MySQL",
      description:
        "This project uses MySQL to analyze sales data from a pizza restaurant. It covers key business metrics such as total orders, revenue, most popular pizzas, and peak order times. SQL queries were used to identify top-selling items, revenue contribution by pizza type, and customer preferences, helping inform decisions on inventory, promotions, and menu optimization.",
      image: "/pizza.jpg",
      technologies: ["MySQL"],
      type: "academic",
      icon: <Database className="text-orange-600" size={24} />,
    },
  ];

  const getTypeColor = (type: string) => {
    return type === "internship"
      ? "bg-blue-100 text-blue-800"
      : "bg-green-100 text-green-800";
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects from internship experience and
            academic coursework, demonstrating expertise in various technologies
            and problem-solving approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(
                      project.type
                    )}`}
                  >
                    {project.type === "internship" ? "Internship" : "Academic"}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">{project.icon}</div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <ExternalLink className="mr-2" size={16} />
                    View Details
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Github className="mr-2" size={16} />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/Jahid-Munshi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
