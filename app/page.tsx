export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-primary mb-4">
          Hi, I'm Yanala Raghuvamshi Reddy
        </h1>
        <p className="text-lg text-muted max-w-2xl mb-8">
          A passionate AI/ML enthusiast with expertise in software development and research. Building solutions to solve real-world problems with innovation and technology.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-highlight transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/roar3691"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Projects</h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">
              <a
                href="https://github.com/roar3691/Art_image_classifier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-highlight"
              >
                AI-based Defect Detection
              </a>
            </h3>
            <p className="text-muted">
              Developed a deep learning system using MobileNetV3, achieving high accuracy in identifying defective exhibits.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">
              <a
                href="https://github.com/roar3691/chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-highlight"
              >
                Chatbot Project
              </a>
            </h3>
            <p className="text-muted">
              Built a chatbot using Langchain and Flask for course search functionalities.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">
              <a
                href="https://github.com/roar3691/weather-monitoring-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-highlight"
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
    </main>
  );
}
