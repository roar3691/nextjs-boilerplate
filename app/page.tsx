export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-primary mb-4">
          Hi, I&apos;m Yanala Raghuvamshi Reddy
        </h1>
        <p className="text-lg text-muted max-w-2xl mb-8">
          A passionate AI/ML enthusiast with expertise in software development and research. Building solutions to solve real-world problems with innovation and technology.
        </p>
        <div className="flex space-x-4 justify-center">
          <a
            href="https://github.com/roar3691"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Core Skills Section */}
      <section id="skills" className="w-full py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Core Skills</h2>
        <ul className="list-disc list-inside text-muted max-w-2xl mx-auto space-y-2">
          <li>C, C++, Python</li>
          <li>AI/ML, TensorFlow, Flask</li>
          <li>Web Scraping, Data Processing</li>
          <li>API Development, OOP</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              <a
                href="https://github.com/roar3691/Art_image_classifier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                AI-based Defect Detection
              </a>
            </h3>
            <p className="text-muted">
              Developed a deep learning system using MobileNetV3, achieving high accuracy.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              <a
                href="https://github.com/roar3691/chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Chatbot Project
              </a>
            </h3>
            <p className="text-muted">
              Built a chatbot using Langchain and Flask for course search functionalities.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              <a
                href="https://github.com/roar3691/weather-monitoring-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Weather Monitoring System
              </a>
            </h3>
            <p className="text-muted">
              Real-time weather data fetch from OpenWeatherMap API.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact</h2>
        <ul className="list-none text-muted space-y-4 max-w-xl mx-auto text-center">
          <li>
            Email:{" "}
            <a
              href="mailto:raghu.yanala@gmail.com"
              className="text-primary hover:text-highlight"
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
              className="text-primary hover:text-highlight"
            >
              LinkedIn Profile
            </a>
          </li>
          <li>Location: Hyderabad, Telangana</li>
        </ul>
      </section>
    </main>
  );
}
