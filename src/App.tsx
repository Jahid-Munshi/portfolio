import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VolunteerExperience from "./components/VolunteerExperience";
import CoursesAndCertifications from "./components/CoursesAndCertifications";
// import BlogArticles from "./components/BlogArticles";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <VolunteerExperience />
      <CoursesAndCertifications />
      {/* <BlogArticles /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
