"use client";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`${darkMode ? "dark" : ""} min-h-screen`}>
      {/* Toggle Theme Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-full shadow-md hover:shadow-lg transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Main Content */}
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen px-6">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Yanala Raghuvamshi Reddy</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            A passionate AI/ML enthusiast with expertise in software development and research. Building solutions to solve real-world problems with innovation and technology.
          </p>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://github.com/roar3691"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg shadow-md hover:shadow-lg transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 dark:bg-white text-white dark:text-black rounded-lg shadow-md hover:shadow-lg transition"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Core Skills Section */}
        <section id="skills" className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Core Skills</h2>
          <ul className="list-disc list-inside max-w-2xl mx-auto space-y-2">
            <li>C, C++, Python</li>
            <li>AI/ML, TensorFlow, Flask</li>
            <li>Web Scraping, Data Processing</li>
            <li>API Development, OOP</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">
                <a
                  href="https://github.com/roar3691/Art_image_classifier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  AI-based Defect Detection
                </a>
              </h3>
              <p>Developed a deep learning system using MobileNetV3, achieving high accuracy.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">
                <a
                  href="https://github.com/roar3691/chatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Chatbot Project
                </a>
              </h3>
              <p>Built a chatbot using Langchain and Flask for course search functionalities.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">
                <a
                  href="https://github.com/roar3691/weather-monitoring-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Weather Monitoring System
                </a>
              </h3>
              <p>Real-time weather data fetch from OpenWeatherMap API.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
          <ul className="list-none space-y-4 max-w-xl mx-auto text-center">
            <li>
              Email:{" "}
              <a href="mailto:raghu.yanala@gmail.com" className="hover:underline">
                raghu.yanala@gmail.com
              </a>
            </li>
            <li>Phone: 6309127542</li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </li>
            <li>Location: Hyderabad, Telangana</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
