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
  title: "Raghuvamshi Reddy's Portfolio",
  description: "Personal portfolio showcasing projects and skills in AI/ML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="container mx-auto p-4">
          <header>
            <h1 className="text-2xl font-bold">RAGHUVAMSHI REDDY</h1>
            <p className="text-sm text-gray-600 mb-4">AI/ML Enthusiast</p>
          </header>
          <section className="mb-4">
            <h2 className="text-lg font-semibold">ABOUT ME</h2>
            <p>
              I am passionate about harnessing the power of AI and Machine Learning to solve real-world problems. My focus areas include computer vision, natural language processing, and data analytics.
            </p>
          </section>
          <section className="mb-4">
            <h2 className="text-lg font-semibold">CONTACT</h2>
            <p>Email: <a href="mailto:raghu.yanala@gmail.com" className="text-blue-600 hover:underline">raghu.yanala@gmail.com</a></p>
          </section>
          <section>
            <h2 className="text-lg font-semibold">PROJECTS</h2>
            <ul className="list-disc pl-5">
              <li>
                <a href="https://github.com/roar3691/Art_image_classifier" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  AI-based Defect Detection
                </a>
                <p>An ensemble model using MobileNetV3Large and InceptionV3 achieving an F1 score of 0.9893.</p>
              </li>
              <li>
                <a href="https://github.com/roar3691/weather-monitoring-system" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Weather Monitoring System
                </a>
                <p>Real-time weather data fetching for major Indian cities using OpenWeatherMap API.</p>
              </li>
              <li>
                <a href="https://github.com/roar3691/chatbot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Custom Chatbot
                </a>
                <p>Built using Langchain, extracts course information, creates embeddings, and provides a RESTful API via Flask.</p>
              </li>
              <li>
                <a href="https://github.com/roar3691/RuleEngine-AST" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Rule Engine Application
                </a>
                <p>Uses SQLite for storing rules and Flask for a web interface.</p>
              </li>
            </ul>
          </section>
          {children}
        </div>
      </body>
    </html>
  );
}
