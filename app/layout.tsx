import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yanala Raghuvamshi Reddy's Portfolio",
  description: "Showcasing projects, skills, and experience in AI/ML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="font-body bg-background text-foreground transition-colors">
        <div className="container mx-auto p-4">
          {/* Header Section */}
          <header className="gradient-bg text-foreground p-6 rounded-lg mb-6">
            <h1 className="text-4xl font-heading font-bold mb-2">Yanala Raghuvamshi Reddy</h1>
            <p className="text-muted text-lg">
              Pursuing Computer Science AI/ML | Researcher | Treasurer, IEEE Computer Society - CMREC Student Branch
            </p>
          </header>

          {/* About Section */}
          <section className="mb-6">
            <h2 className="text-primary text-2xl font-heading mb-4">About Me</h2>
            <p className="text-muted">
              I’m a tech enthusiast specializing in AI & ML, dedicated to creating practical, real-world solutions through innovative software and machine learning techniques. As a BTech student in Computer Science, I focus on AI-driven projects and actively contribute to IEEE initiatives at my college.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mb-6">
            <h2 className="text-primary text-2xl font-heading mb-4">Contact</h2>
            <ul className="list-none">
              <li className="text-muted">
                Email:{" "}
                <a href="mailto:raghu.yanala@gmail.com" className="text-primary hover:text-highlight">
                  raghu.yanala@gmail.com
                </a>
              </li>
              <li className="text-muted">Phone: 6309127542</li>
              <li className="text-muted">
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
              <li className="text-muted">Location: Hyderabad, Telangana</li>
            </ul>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h2 className="text-primary text-2xl font-heading mb-4">Work Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-secondary font-semibold">Treasurer</h3>
                <p className="text-muted">IEEE Computer Society - CMREC Student Branch | Hyderabad, Telangana, India</p>
                <p className="text-muted">Jun 2024 - Present</p>
              </div>
              <div>
                <h3 className="text-secondary font-semibold">Machine Learning Engineer</h3>
                <p className="text-muted">
                  AI-based Automated Defective Exhibit Identification System for Galleries | Hyderabad, Telangana, India
                </p>
                <ul className="list-disc pl-6 text-muted">
                  <li>Built AI-based system using TensorFlow and MobileNetV3.</li>
                  <li>Integrated Flask for web app and Flutter for mobile interfaces.</li>
                </ul>
                <p className="text-muted">Jul 2024 - Oct 2024</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-primary text-2xl font-heading mb-4">Projects</h2>
            <ul className="list-disc pl-6">
              <li>
                <a
                  href="https://github.com/roar3691/Art_image_classifier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-highlight"
                >
                  AI-based Defect Detection
                </a>
                <p className="text-muted">
                  Developed a deep learning system using MobileNetV3, achieving high accuracy.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/roar3691/chatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-highlight"
                >
                  Chatbot Project
                </a>
                <p className="text-muted">
                  Built a chatbot using Langchain and Flask for course search functionalities.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/roar3691/weather-monitoring-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-highlight"
                >
                  Weather Monitoring System
                </a>
                <p className="text-muted">
                  Real-time weather data fetch from OpenWeatherMap API.
                </p>
              </li>
            </ul>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-primary text-2xl font-heading mb-4">Education</h2>
            <p className="text-muted">
              <strong>CMR Engineering College</strong> - BTech in AI & ML (GPA: 7.4) | Nov 2022 - Sep 2026
            </p>
            <p className="text-muted">
              <strong>Certifications:</strong> AWS Cloud Foundations, Machine Learning Foundations (AWS Academy)
            </p>
          </section>

          {/* Core Skills */}
          <section className="mb-6">
            <h2 className="text-primary text-2xl font-heading mb-4">Core Skills</h2>
            <ul className="list-none space-y-2 text-muted">
              <li>C, C++, Python</li>
              <li>AI/ML, TensorFlow, Flask</li>
              <li>Web Scraping, Data Processing</li>
              <li>API Development, OOP</li>
            </ul>
          </section>

          {/* Render Children */}
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
