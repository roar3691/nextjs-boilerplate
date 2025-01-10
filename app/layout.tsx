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
      <body className="font-body bg-gray-900 text-gray-100 transition-colors">
        <div className="container mx-auto max-w-4xl p-4">
          {/* Header Section */}
          <header className="text-center py-10">
            <h1 className="text-5xl font-bold text-white">Yanala Raghuvamshi Reddy</h1>
            <p className="text-lg text-gray-400 mt-4">
              Pursuing Computer Science AI/ML | Researcher | Treasurer, IEEE Computer Society - CMREC Student Branch
            </p>
          </header>

          <main>
            {/* About Section */}
            <section className="my-12">
              <h2 className="text-3xl font-semibold text-primary mb-4">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                I’m a tech enthusiast specializing in AI & ML, dedicated to creating practical, real-world solutions
                through innovative software and machine learning techniques. As a BTech student in Computer Science, I
                focus on AI-driven projects and actively contribute to IEEE initiatives at my college.
              </p>
            </section>

            {/* Projects Section */}
            <section className="my-12">
              <h2 className="text-3xl font-semibold text-primary mb-4">Projects</h2>
              <ul className="space-y-6">
                <li>
                  <a
                    href="https://github.com/roar3691/Art_image_classifier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    AI-based Defect Detection
                  </a>
                  <p className="text-gray-400">
                    Developed a deep learning system using MobileNetV3, achieving high accuracy.
                  </p>
                </li>
                <li>
                  <a
                    href="https://github.com/roar3691/chatbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Chatbot Project
                  </a>
                  <p className="text-gray-400">
                    Built a chatbot using Langchain and Flask for course search functionalities.
                  </p>
                </li>
                <li>
                  <a
                    href="https://github.com/roar3691/weather-monitoring-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Weather Monitoring System
                  </a>
                  <p className="text-gray-400">
                    Real-time weather data fetch from OpenWeatherMap API.
                  </p>
                </li>
              </ul>
            </section>

            {/* Contact Section */}
            <section className="my-12">
              <h2 className="text-3xl font-semibold text-primary mb-4">Contact</h2>
              <ul className="space-y-2">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:raghu.yanala@gmail.com"
                    className="text-primary hover:underline"
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
                    className="text-primary hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li>Location: Hyderabad, Telangana</li>
              </ul>
            </section>

            {/* Inject children here */}
            <div className="children-container mt-12">{children}</div>

            {/* Footer Section */}
            <footer className="text-center mt-16">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Yanala Raghuvamshi Reddy. All rights reserved.
              </p>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
