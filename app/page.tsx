"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          AI/ML Engineer & Researcher
        </motion.h1>
        <p className="text-lg mt-4">Building intelligent systems to solve real-world problems.</p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p className="mt-4">Pursuing BTech in Computer Science (AI/ML) at CMREC. Passionate about AI research and innovation.</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul className="mt-4 grid grid-cols-2 gap-4">
          <li>Python</li>
          <li>TensorFlow</li>
          <li>Web Scraping</li>
          <li>Deep Learning</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul className="mt-4">
          <li>AI-based Defect Detection</li>
          <li>Chatbot with Contextual Attention</li>
          <li>News Summarizer with TTS</li>
        </ul>
      </section>

      {/* Research Section */}
      <section id="research" className="section">
        <h2>Research</h2>
        <p className="mt-4">Working on AI personalization, knowledge graphs, and NLP innovations.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:raghu.yanala@gmail.com">raghu.yanala@gmail.com</a></p>
      </section>
    </div>
  );
}
