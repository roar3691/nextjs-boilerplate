"use client";

export default function Home() {
  return (
    <main className="dark min-h-screen">
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-12 transition-colors">
        {/* Hero Section */}
        <section className="text-center py-12">
          <p className="text-lg max-w-2xl mx-auto mb-8 font-light">
            I am a passionate AI/ML enthusiast with expertise in software
            development and research, building solutions to solve real-world
            problems using innovation and technology.
          </p>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://github.com/roar3691"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-blue-600 hover:bg-blue-700"
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1RoUvaPEMfgqHYu-OJpOK2H2kQuYgwt2o/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-yellow-500 hover:bg-yellow-600"
            >
              Resume
            </a>
          </div>
        </section>

        {/* Skills Section */}
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
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">
                <a
                  href="https://github.com/roar3691/Art_image_classifier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-highlight"
                >
                  AI-based Defect Detection
                </a>
              </h3>
              <p>Developed a deep learning system using MobileNetV3.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">
                <a
                  href="https://github.com/roar3691/chatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-highlight"
                >
                  Chatbot Project
                </a>
              </h3>
              <p>Built a chatbot using Langchain and Flask for course search functionalities.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">
                <a
                  href="https://github.com/roar3691/weather-monitoring-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-highlight"
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
              <a
                href="mailto:raghu.yanala@gmail.com"
                className="hover:text-highlight"
              >
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
                className="hover:text-highlight"
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
