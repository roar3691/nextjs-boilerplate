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
  description: "Personal portfolio showcasing projects, skills, and professional experience in AI/ML",
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

  const certificates = [
    "AWS Academy Graduate - Cloud Foundations",
    "AWS Academy Graduate - Machine Learning Foundations",
    "Programming for Everybody (Python) - Coursera",
  ];

  const skills = [
    "C, C++, Java, Python, SQL",
    "Generative AI, Retrieval-Augmented Generation (RAG)",
    "Langchain, TF-IDF, FAISS",
    "Web Scraping, API Development, Data Processing",
    "Machine Learning, Large Language Models (LLM)",
    "Flask, Databases, Algorithms",
  ];

  const contact = {
    email: "raghu.yanala@gmail.com",
    phone: "6309127542",
    linkedin: "https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/",
    location: "Hyderabad, Telangana, India",
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <div className="container mx-auto p-4">
          {/* Header */}
          <header className="fade-in mb-6">
            <h1 className="text-3xl font-bold">Yanala Raghuvamshi Reddy</h1>
            <p className="text-sm text-muted">AI/ML Enthusiast | Researcher | Treasurer, IEEE Computer Society - CMREC</p>
          </header>

          {/* About Section */}
          <section className="mb-6 slide-in-left">
            <h2 className="text-lg font-semibold text-primary">About Me</h2>
            <p className="text-muted">
              As an innovative technology professional, I specialize in developing cutting-edge solutions at the intersection of 
              artificial intelligence and software development. My expertise spans multiple domains, focusing on impactful 
              applications that solve real-world challenges.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mb-6 slide-in-left">
            <h2 className="text-lg font-semibold text-primary">Contact</h2>
            <p>Email: <a href={`mailto:${contact.email}`} className="text-primary hover:underline">{contact.email}</a></p>
            <p>Phone: {contact.phone}</p>
            <p>
              LinkedIn:{" "}
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {contact.linkedin}
              </a>
            </p>
            <p>Location: {contact.location}</p>
          </section>

          {/* Skills Section */}
          <section className="mb-6 slide-in-left">
            <h2 className="text-lg font-semibold text-primary">Core Skills</h2>
            <ul className="list-disc pl-5 text-muted">
              {skills.map((skill, index) => (
                <li key={index} className="slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          {/* Projects Section */}
          <section className="mb-6 slide-in-left">
            <h2 className="text-lg font-semibold text-primary">Projects</h2>
            <ul className="list-disc pl-5 text-muted">
              {projects.map((project, index) => (
                <li
                  key={project.name}
                  className="mb-2 slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {project.name}
                  </a>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Certificates Section */}
          <section className="mb-6 slide-in-left">
            <h2 className="text-lg font-semibold text-primary">Certificates</h2>
            <ul className="list-disc pl-5 text-muted">
              {certificates.map((certificate, index) => (
                <li key={index} className="slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                  {certificate}
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
