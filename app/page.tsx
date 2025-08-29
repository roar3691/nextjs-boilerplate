"use client";

export default function Home() {
  return (
    <main className="dark min-h-screen">
      {/* Wrapper */}
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen px-6 transition-colors duration-300 ease-in-out">
        
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-6">
            Hi, I’m <span className="text-blue-600 dark:text-blue-400">Raghu</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            A passionate <span className="font-semibold">AI/ML enthusiast</span> with expertise in 
            software development and applied research. I focus on building 
            innovative solutions that tackle real-world challenges through 
            technology and creativity.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/roar3691"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-black dark:bg-gray-800 text-white shadow-md hover:bg-gray-800 dark:hover:bg-gray-700 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-600 dark:bg-blue-700 text-white shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1Ph8AJE1KOlXLnjFzLCSDuUPETKfb9SnK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-yellow-500 dark:bg-yellow-600 text-white shadow-md hover:bg-yellow-600 dark:hover:bg-yellow-700 transition"
            >
              Resume
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Skills</h2>
          <ul className="list-disc list-inside max-w-2xl mx-auto space-y-2 text-lg leading-relaxed">
            <li>C, C++, Python, R</li>
            <li>AI/ML, TensorFlow, Flask</li>
            <li>NumPy, Pandas, Seaborn, Matplotlib</li>
            <li>Web Scraping & Data Processing</li>
            <li>API Development & Object-Oriented Programming</li>
          </ul>
        </section>

        {/* Internship Section */}
        <section id="internship" className="py-16 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold mb-8 text-center">Internship Experience</h2>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-3">Indian Space Research Organisation (ISRO)</h3>
            <p className="text-lg leading-relaxed">
              Completed a 45-day research internship where I developed an 
              <span className="font-semibold"> R-based pipeline </span> 
              to analyze <span className="font-semibold">evapotranspiration (ET)</span> and 
              <span className="font-semibold"> cumulative water deficit (CWD)</span> across multiple sites. 
              Applied <span className="font-semibold">neural networks</span> and the 
              <span className="font-semibold"> MCT algorithm</span> to model water stress and generate density plots. 
              This experience, guided by expert scientists, deepened my knowledge of environmental data analysis 
              and strengthened my passion for aerospace research.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              June 2025 – August 2025
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

          {/* Intro */}
          <p className="max-w-3xl mx-auto text-center text-lg mb-12 leading-relaxed">
            My projects explore the frontiers of <span className="font-semibold">AI/ML</span> 
            and software engineering. From intelligent defect detection to 
            conversational AI, I build impactful, research-driven applications.
          </p>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                <a
                  href="https://github.com/roar3691/Art_image_classifier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  AI-based Defect Detection
                </a>
              </h3>
              <p>
                Designed a deep learning system using MobileNetV3 for art image 
                classification, achieving high accuracy in defect identification 
                and quality control.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                <a
                  href="https://chatbotwith-contextual-attention-pzdquddcpbhndaphdm3cfu.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Chatbot with Contextual Attention
                </a>
              </h3>
              <p>
                Built an interactive chatbot using Streamlit and Gemini AI, 
                designed for context-rich, human-like conversations with memory 
                and personalization features.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <ul className="list-none space-y-4 max-w-xl mx-auto text-center text-lg">
            <li>
              📧 Email:{" "}
              <a href="mailto:raghu.yanala@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                raghu.yanala@gmail.com
              </a>
            </li>
            <li>
              💼{" "}
              <a
                href="https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                LinkedIn Profile
              </a>
            </li>
            <li>📍 Location: Hyderabad, Telangana</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
