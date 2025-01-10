import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center py-16 px-8 text-center">
        <Image src="/profile.jpg" alt="Profile" width={150} height={150} className="rounded-full" />
        <h1 className="text-4xl font-heading mt-6">Hello, I'm Yanala Raghuvamshi Reddy</h1>
        <p className="text-xl font-body mt-2">3rd Year BTech in CSE | AI & ML Enthusiast</p>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-heading text-center">About Me</h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto text-muted">
          I am passionate about technology, especially in the fields of Artificial Intelligence and Machine Learning. With a keen interest in building innovative solutions, I strive to continuously enhance my skills and contribute to impactful projects. My academic journey at CMR Engineering College has equipped me with a strong foundation in computer science, and I am eager to apply my knowledge in real-world applications.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-heading text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Python</h3>
            <div className="bg-gray-300 h-2 mt-2 rounded-full">
              <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">JavaScript</h3>
            <div className="bg-gray-300 h-2 mt-2 rounded-full">
              <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">React</h3>
            <div className="bg-gray-300 h-2 mt-2 rounded-full">
              <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Machine Learning</h3>
            <div className="bg-gray-300 h-2 mt-2 rounded-full">
              <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-heading text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="card">
            <h3 className="text-xl font-heading">Art Image Classifier</h3>
            <p className="text-muted mt-2">A deep learning-based image classifier for art images.</p>
            <a href="https://github.com/roar3691/Art_image_classifier" className="btn btn-primary mt-4">View Project</a>
          </div>
          <div className="card">
            <h3 className="text-xl font-heading">Chatbot</h3>
            <p className="text-muted mt-2">An AI-powered chatbot for customer service applications.</p>
            <a href="https://github.com/roar3691/chatbot" className="btn btn-primary mt-4">View Project</a>
          </div>
          <div className="card">
            <h3 className="text-xl font-heading">AI Multi-Agent System</h3>
            <p className="text-muted mt-2">An intelligent system using multiple agents for problem-solving.</p>
            <a href="https://github.com/roar3691/AI-Multi-Agent-System" className="btn btn-primary mt-4">View Project</a>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-8 bg-gray-200 text-center">
        <h2 className="text-2xl font-heading">Connect with Me</h2>
        <div className="mt-6">
          <a href="https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/" className="text-2xl mx-4 text-subtle-link hover:text-highlight">
            <FaLinkedin />
          </a>
          <a href="https://github.com/roar3691" className="text-2xl mx-4 text-subtle-link hover:text-highlight">
            <FaGithub />
          </a>
          <a href="https://twitter.com/your-profile" className="text-2xl mx-4 text-subtle-link hover:text-highlight">
            <FaTwitter />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-background text-center">
        <p className="text-muted">© 2025 Yanala Raghuvamshi Reddy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
