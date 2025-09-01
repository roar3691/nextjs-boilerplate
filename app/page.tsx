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
            A passionate <span className="font-semibold">AI/ML student & researcher</span>{" "}
            with experience in <span className="font-semibold">deep learning, computer vision,</span>{" "}
            and <span className="font-semibold">environmental modeling</span>. 
            I focus on building impactful solutions by combining research-driven approaches{" "}
            with real-world applications.
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
            <li>Python, C, C++, R</li>
            <li>Deep Learning (TensorFlow, PyTorch, Keras)</li>
            <li>Data Analysis (NumPy, Pandas, Matplotlib, Seaborn)</li>
            <li>Flask, Streamlit, Web Scraping & API Development</li>
            <li>AI/ML Research in Computer Vision & Environmental Modeling</li>
          </ul>
        </section>

        {/* Internship Section */}
        <section id="internship" className="py-16 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold mb-8 text-center">Internship Experience</h2>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-3">Indian Space Research Organisation (ISRO – NRSC)</h3>
            <p className="text-lg leading-relaxed">
              Completed a research internship on the{" "}
              <span className="font-semibold">SM_ET_DNN framework</span> for{" "}
              <span className="font-semibold">evapotranspiration (ET) and potential ET (PET)</span> modeling. 
              Developed deep neural networks using <span className="font-semibold">TensorFlow</span>,{" "}
              implemented <span className="font-semibold">automatic soil moisture thresholding</span>,{" "}
              and computed <span className="font-semibold">cumulative water deficit (CWD)</span> to track drought stress. 
              This work integrated environmental data analysis with AI-based modeling.
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
            My projects reflect my interest in <span className="font-semibold">AI/ML research</span>{" "}
            and real-world problem solving. From environmental modeling to{" "}
            intelligent defect detection, I focus on innovation, accuracy, and impact.
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
                  AI-based Art Image Classifier
                </a>
              </h3>
              <p>
                Built an ensemble CNN model (MobileNetV3 + InceptionV3) 
                to classify defective vs non-defective art images. 
                Deployed using Flask with Grad-CAM interpretability for 
                better transparency in predictions.
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
                Developed a conversational AI system using Streamlit and Gemini AI{" "}
                with contextual attention and memory. Enabled personalized,{" "}
                context-aware interactions for a more human-like chatbot experience.
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
