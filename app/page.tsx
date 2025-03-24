"use client";  
  
export default function Home() {  
  return (  
    <main className="dark min-h-screen">  
      {/* Main Content */}  
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen px-6 transition-colors">  
        {/* Hero Section */}  
        <section className="text-center py-12">  
          <p className="text-lg max-w-2xl mx-auto mb-8">  
            A passionate AI/ML enthusiast with expertise in software development and research. Building solutions to solve real-world problems with innovation and technology.  
          </p>  
          <div className="flex space-x-4 justify-center">  
            <a  
              href="https://github.com/roar3691"  
              target="_blank"  
              rel="noopener noreferrer"  
              className="px-6 py-3 bg-black dark:bg-gray-800 text-white dark:text-gray-300 rounded-lg shadow-md hover:bg-gray-800 dark:hover:bg-gray-600 transition"  
            >  
              GitHub  
            </a>  
            <a  
              href="https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/"  
              target="_blank"  
              rel="noopener noreferrer"  
              className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white dark:text-gray-300 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition"  
            >  
              LinkedIn  
            </a>  
            <a  
              href="https://drive.google.com/file/d/1wKt8vT5hZ7T5FYRMufx_r3KVFSW3m-UA/view?usp=sharing"  
              target="_blank"  
              rel="noopener noreferrer"  
              className="px-6 py-3 bg-yellow-500 dark:bg-yellow-600 text-white dark:text-gray-300 rounded-lg shadow-md hover:bg-yellow-600 dark:hover:bg-yellow-700 transition"  
            >  
              Resume  
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
                  href="https://chatbotwith-contextual-attention-pzdquddcpbhndaphdm3cfu.streamlit.app/"  
                  target="_blank"  
                  rel="noopener noreferrer"  
                  className="hover:underline"  
                >  
                  Chatbot Project  
                </a>  
              </h3>  
              <p>Built a chatbot using Streamlit and Gemini AI for enhanced conversational functionalities.</p>  
            </div>  
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">  
              <h3 className="text-xl font-semibold mb-2">  
                <a  
                  href="https://huggingface.co/spaces/roar3691/NewsSummarizerTTS"  
                  target="_blank"  
                  rel="noopener noreferrer"  
                  className="hover:underline"  
                >  
                  NewsEcho  
                </a>  
              </h3>  
              <p>Summarizes news and converts sentiment analysis to Hindi TTS using Streamlit and FastAPI.</p>  
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
            <li>    
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
