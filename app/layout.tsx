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
  const projects = [
    {
      name: "AI-based Defect Detection",
      href: "https://github.com/roar3691/Art_image_classifier",
      description: "An ensemble model using MobileNetV3Large and InceptionV3 achieving an F1 score of 0.9893.",
    },
    {
      name: "Weather Monitoring System",
      href: "https://github.com/roar3691/weather-monitoring-system",
      description: "Real-time weather data fetching for major Indian cities using OpenWeatherMap API.",
    },
    {
      name: "Custom Chatbot",
      href: "https://github.com/roar3691/chatbot",
      description: "Built using Langchain, extracts course information, creates embeddings, and provides a RESTful API via Flask.",
    },
    {
      name: "Rule Engine Application",
      href: "https://github.com/roar3691/RuleEngine-AST",
      description: "Uses SQLite for storing rules and Flask for a web interface.",
    },
  ];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased gradient-bg`}>
        <div className="container mx-auto p-4">
          {/* Header Section */}
          <header className="fade-in">
            <h1 className="text-2xl font-bold">RAGHUVAMSHI REDDY</h1>
            <p className="text-sm text-gray-600 mb-4">AI/ML Enthusiast</p>
          </header>

          {/* About Section */}
          <section className="mb-4 slide-in-left">
            <h2 className="text-lg font-semibold">ABOUT ME</h2>
            <p>
              I am passionate about harnessing the power of AI and Machine Learning to solve real-world problems.
              My focus areas include computer vision, natural language processing, and data analytics.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mb-4 slide-in-left">
            <h2 className="text-lg font-semibold">CONTACT</h2>
            <p>
              Email:{" "}
              <a href="mailto:raghu.yanala@gmail.com" className="text-blue-600 hover:underline">
                raghu.yanala@gmail.com
              </a>
            </p>
          </section>

          {/* Projects Section */}
          <section className="slide-in-left">
            <h2 className="text-lg font-semibold">PROJECTS</h2>
            <ul className="list-disc pl-5">
              {projects.map((project, index) => (
                <li
                  key={project.name}
                  className={index > 0 ? "slide-in-left" : ""}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {project.name}
                  </a>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Render Children */}
          <div className="fade-in">{children}</div>
        </div>
      </body>
    </html>
  );
}
