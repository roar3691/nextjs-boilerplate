import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importing Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the portfolio page
export const metadata: Metadata = {
  title: "Raghuvamshi Reddy's Portfolio",
  description: "Personal portfolio showcasing projects and skills in AI/ML",
};

// RootLayout component
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
        <div className="container mx-auto p-8">
          {/* Header Section */}
          <header className="fade-in mb-8">
            <h1 className="text-3xl font-heading text-primary">Raghuvamshi Reddy</h1>
            <p className="text-sm text-muted">AI/ML Enthusiast | Developer</p>
          </header>

          {/* About Me Section */}
          <section className="mb-6 fade-in">
            <h2 className="text-xl font-heading text-primary">About Me</h2>
            <p className="text-body">
              I am passionate about harnessing the power of AI and Machine Learning to solve real-world problems.
              My focus areas include computer vision, natural language processing, and data analytics.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mb-6 fade-in">
            <h2 className="text-xl font-heading text-primary">Contact</h2>
            <p className="text-body">
              Email:{" "}
              <a href="mailto:raghu.yanala@gmail.com" className="text-accent hover:underline">
                raghu.yanala@gmail.com
              </a>
            </p>
          </section>

          {/* Projects Section */}
          <section className="mb-8 fade-in">
            <h2 className="text-xl font-heading text-primary">Projects</h2>
            <ul className="list-none space-y-4">
              {projects.map((project, index) => (
                <li
                  key={project.name}
                  className="transition-all duration-300 hover:bg-gray-100 p-4 rounded-lg shadow-lg"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-semibold text-lg hover:underline"
                  >
                    {project.name}
                  </a>
                  <p className="text-muted">{project.description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Render Child Content */}
          <div className="fade-in">{children}</div>
        </div>
      </body>
    </html>
  );
}
