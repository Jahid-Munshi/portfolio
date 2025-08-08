import React from "react";
import {
  Calendar,
  Clock,
  ExternalLink,
  BookOpen,
  TrendingUp,
  Users,
} from "lucide-react";

const BlogArticles = () => {
  const articles = [
    {
      title: "Streamlining Business Processes with Microsoft Power Platform",
      excerpt:
        "A comprehensive guide on how Power Apps and Power Automate can transform traditional business workflows and improve operational efficiency.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Power Platform",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true,
    },
    {
      title: "Project Coordination Best Practices for IT Teams",
      excerpt:
        "Essential strategies and tools for effective project coordination in technology environments, based on real-world experience.",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Project Management",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      title: "Data Visualization Techniques with Power BI",
      excerpt:
        "Creating compelling dashboards and reports that drive business decisions through effective data storytelling.",
      date: "2023-12-20",
      readTime: "10 min read",
      category: "Data Analytics",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      title: "Machine Learning Fundamentals for Business Applications",
      excerpt:
        "Understanding key ML algorithms and their practical applications in solving real-world business problems.",
      date: "2023-12-10",
      readTime: "12 min read",
      category: "Machine Learning",
      image:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      title: "Building Effective IT Support Systems",
      excerpt:
        "Strategies for creating responsive IT support frameworks that enhance user experience and operational efficiency.",
      date: "2023-11-25",
      readTime: "7 min read",
      category: "IT Support",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      title: "The Future of Workplace Automation",
      excerpt:
        "Exploring emerging trends in business process automation and their impact on modern workplace productivity.",
      date: "2023-11-15",
      readTime: "9 min read",
      category: "Automation",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
  ];

  const categories = [
    { name: "Power Platform", count: 1, color: "bg-blue-100 text-blue-800" },
    {
      name: "Project Management",
      count: 1,
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Data Analytics",
      count: 1,
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Machine Learning",
      count: 1,
      color: "bg-orange-100 text-orange-800",
    },
    { name: "IT Support", count: 1, color: "bg-red-100 text-red-800" },
    { name: "Automation", count: 1, color: "bg-indigo-100 text-indigo-800" },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Power Platform":
        return "bg-blue-100 text-blue-800";
      case "Project Management":
        return "bg-green-100 text-green-800";
      case "Data Analytics":
        return "bg-purple-100 text-purple-800";
      case "Machine Learning":
        return "bg-orange-100 text-orange-800";
      case "IT Support":
        return "bg-red-100 text-red-800";
      case "Automation":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const featuredArticle = articles.find((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blog & Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights on technology, project management, and professional
            development through thoughtful articles and technical guides.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-lg font-bold text-gray-900 mb-1">
                {category.count}
              </div>
              <div
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${category.color}`}
              >
                {category.name}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                        featuredArticle.category
                      )}`}
                    >
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>
                          {new Date(featuredArticle.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Read Full Article
                    <ExternalLink className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      article.category
                    )}`}
                  >
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs space-x-2">
                    <Calendar size={12} />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock size={12} className="mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 transition-colors">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Writing & Thought Leadership
            </h3>
            <p className="text-blue-100">
              Sharing knowledge and insights with the tech community
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <BookOpen className="mb-2" size={24} />
              <div className="text-2xl font-bold mb-1">6</div>
              <div className="text-blue-100 text-sm">Published Articles</div>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="mb-2" size={24} />
              <div className="text-2xl font-bold mb-1">2.5K</div>
              <div className="text-blue-100 text-sm">Total Reads</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="mb-2" size={24} />
              <div className="text-2xl font-bold mb-1">150+</div>
              <div className="text-blue-100 text-sm">Engaged Readers</div>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="mb-2" size={24} />
              <div className="text-2xl font-bold mb-1">6</div>
              <div className="text-blue-100 text-sm">Topics Covered</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Want to read more insights and technical guides?
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            <BookOpen className="mr-2" size={20} />
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
