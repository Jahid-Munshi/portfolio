import React from "react";
import { Award, BookOpen, Calendar, ExternalLink } from "lucide-react";

const CoursesAndCertifications = () => {
  const certifications = [
    {
      title: "Data Science Certificate Program",
      provider: "Ostad",
      category: "Data Science",
      type: "Certificate Program",
      link: "https://ostad.app/share/certificate/c16856-md.-jahidul-islam",
      icon: <Award className="text-blue-600" size={20} />,
    },
    {
      title: "Excel for Data Science",
      provider: "Great Learning",
      category: "Data Analysis",
      type: "Course",
      link: "https://www.mygreatlearning.com/certificate/JFXSMAJS",
      icon: <BookOpen className="text-green-600" size={20} />,
    },
    {
      title: "Advance SQL",
      provider: "HackerRank",
      category: "Database",
      type: "Certification",
      link: "https://www.hackerrank.com/certificates/c9ea0431ae2a",
      icon: <Award className="text-orange-600" size={20} />,
    },
    {
      title: "Advance SQL",
      provider: "Great Learning",
      category: "Database",
      type: "Course",
      link: "https://www.mygreatlearning.com/certificate/NJBUTVSE",
      icon: <BookOpen className="text-green-600" size={20} />,
    },
    {
      title: "Data Visualization With Power BI",
      provider: "Great Learning",
      category: "Business Intelligence",
      type: "Course",
      link: "https://www.mygreatlearning.com/certificate/JWIHWUWF",
      icon: <BookOpen className="text-green-600" size={20} />,
    },
    {
      title: "Numpy Tutorial",
      provider: "Great Learning",
      category: "Python Libraries",
      type: "Course",
      link: "https://www.mygreatlearning.com/certificate/LWLWEVBD",
      icon: <BookOpen className="text-green-600" size={20} />,
    },
    {
      title: "K-Means Cluster",
      provider: "Great Learning",
      category: "Machine Learning",
      type: "Course",
      link: "https://www.mygreatlearning.com/certificate/GRBYVDVG",
      icon: <BookOpen className="text-green-600" size={20} />,
    },
    {
      title: "Unsupervised Machine Learning",
      provider: "Great Learning",
      category: "Machine Learning",
      type: "Course",
      link: "#",
      icon: <BookOpen className="text-green-600" size={20} />,
    },
    {
      title: "KNN Algorithm",
      provider: "Great Learning",
      category: "Machine Learning",
      type: "Course",
      link: "https://www.mygreatlearning.com/certificate/LKPPPLBL",
      icon: <BookOpen className="text-green-600" size={20} />,
    },
    {
      title: "Random Forest",
      provider: "Great Learning",
      category: "Machine Learning",
      type: "Course",
      link: "https://www.mygreatlearning.com/certificate/PTPCMTOP",
      icon: <BookOpen className="text-green-600" size={20} />,
    },
    {
      title: "Support Vector Machine",
      provider: "Great Learning",
      category: "Machine Learning",
      type: "Course",
      link: "https://www.mygreatlearning.com/certificate/KDJIOKHM",
      icon: <BookOpen className="text-green-600" size={20} />,
    },
    {
      title: "Python Seaborn",
      provider: "Great Learning",
      category: "Data Visualization",
      type: "Course",
      link: "https://www.mygreatlearning.com/certificate/AYEVWJQS",
      icon: <BookOpen className="text-green-600" size={20} />,
    },
    {
      title: "Statistics for Data Science",
      provider: "Great Learning",
      category: "Statistics",
      type: "Course",
      link: "https://www.mygreatlearning.com/certificate/ZUKRPXOU",
      icon: <BookOpen className="text-green-600" size={20} />,
    },
    {
      title: "Writing Professional Email",
      provider: "BYLCx",
      category: "Professional Skills",
      type: "Course",
      link: "https://drive.google.com/file/d/1Bv9hGliJhMi-b0hPDmBSHnnZ-hwmr_CN/view?usp=sharing",
      icon: <BookOpen className="text-purple-600" size={20} />,
    },
    {
      title: "The Art of Public Speaking",
      provider: "BYLCx",
      category: "Professional Skills",
      type: "Course",
      link: "https://drive.google.com/file/d/1FfgUJMP6wfcWThP5ZKTZUIWsqi-22PwP/view?usp=sharing",
      icon: <BookOpen className="text-purple-600" size={20} />,
    },
  ];

  const categories = [
    { name: "Data Science", count: 1, color: "bg-blue-100 text-blue-800" },
    {
      name: "Machine Learning",
      count: 6,
      color: "bg-green-100 text-green-800",
    },
    { name: "Database", count: 2, color: "bg-orange-100 text-orange-800" },
    {
      name: "Professional Skills",
      count: 2,
      color: "bg-purple-100 text-purple-800",
    },
    { name: "Data Analysis", count: 4, color: "bg-indigo-100 text-indigo-800" },
  ];

  const getProviderColor = (provider: string) => {
    switch (provider) {
      case "Ostad":
        return "bg-blue-50 border-blue-200 text-blue-700";
      case "Great Learning":
        return "bg-green-50 border-green-200 text-green-700";
      case "HackerRank":
        return "bg-orange-50 border-orange-200 text-orange-700";
      case "BYLCx":
        return "bg-purple-50 border-purple-200 text-purple-700";
      default:
        return "bg-gray-50 border-gray-200 text-gray-700";
    }
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Courses & Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development through specialized
            courses and certifications in data science, machine learning, and
            professional skills.
          </p>
        </div>

        {/* Category Overview */}
        <div className="grid md:grid-cols-5 gap-4 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {category.count}
              </div>
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${category.color}`}
              >
                {category.name}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${getProviderColor(
                cert.provider
              )}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {cert.icon}
                  <span className="text-xs font-medium px-2 py-1 bg-white/80 rounded-full">
                    {cert.type}
                  </span>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <ExternalLink
                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    size={16}
                  />
                </a>
              </div>

              <h3 className="font-bold text-gray-900 mb-2 leading-tight">
                {cert.title}
              </h3>

              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{cert.provider}</span>
                <span className="text-gray-600">{cert.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Learning Journey</h3>
            <p className="text-blue-100">
              Committed to continuous professional development and skill
              enhancement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15</div>
              <div className="text-blue-100 text-sm">Total Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-blue-100 text-sm">Learning Platforms</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-blue-100 text-sm">ML Algorithms</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-blue-100 text-sm">Skill Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesAndCertifications;
