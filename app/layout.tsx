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
  const personalInfo = {
    email: "raghu.yanala@gmail.com",
    linkedin: "https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202",
    phone: "6309127542",
    location: "Hyderabad, Telangana",
  };

  const aboutMe = `
    As an innovative technology professional, I specialize in developing cutting-edge solutions at the intersection of 
    artificial intelligence and software development. My expertise spans multiple domains, focusing on creating impactful 
    applications that solve real-world challenges.
  `;

  const projects = [
    {
      name: "AI-based Defect Detection",
      href: "https://github.com/roar3691/Art_image_classifier",
      description:
        "An ensemble model using MobileNetV3Large and InceptionV3 achieving an F1 score of 0.9893.",
    },
    {
      name: "Weather Monitoring System",
      href: "https://github.com/roar3691/weather-monitoring-system",
      description:
        "Real-time weather data fetching for major Indian cities using OpenWeatherMap API.",
    },
    {
      name: "Custom Chatbot",
      href: "https://github.com/roar3691/chatbot",
      description:
        "Built using Langchain, extracts course information, creates embeddings, and provides a RESTful API via Flask.",
    },
    {
      name: "Rule Engine Application",
      href: "https://github.com/roar3691/RuleEngine-AST",
      description:
        "Uses SQLite for storing rules and Flask for a web interface.",
    },
  ];

  const workExperience = [
    {
      title: "Treasurer",
      organization: "IEEE Computer Society - CMREC Student Branch",
      location: "Hyderabad, Telangana",
      date: "Jun 2024 - Present",
    },
    {
      title: "Machine Learning Engineer (Project Hackathon)",
      organization:
        "AI-based Automated Defective Exhibit Identification System for Galleries",
      date: "Jul 2024 - Oct 2024",
      description:
        "Implemented an AI-powered system using TensorFlow and MobileNetV3 to classify defective exhibits in galleries.",
    },
    {
      title: "Event Coordinator",
      organization: "Smart India Hackathon",
      date: "Jul 2024 - Aug 2024",
      description:
        "Coordinated events, managed schedules, and facilitated communication between participants and stakeholders.",
    },
  ];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="container mx-auto p-4">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-primary">Yanala Raghuvamshi Reddy</h1>
            <p className="text-lg text-muted">
              Pursuing BTech in Computer Science (AI & ML) | Researcher | Treasurer - IEEE
            </p>
          </header>

          {/* About Me */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-secondary">About Me</h2>
            <p className="text-body">{aboutMe}</p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-secondary">Contact</h2>
            <ul className="text-body">
              <li>Email: <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline">{personalInfo.email}</a></li>
              <li>Phone: {personalInfo.phone}</li>
              <li>LinkedIn: <a href={personalInfo.linkedin} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a></li>
              <li>Portfolio: <a href={personalInfo.website} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{personalInfo.website}</a></li>
              <li>Location: {personalInfo.location}</li>
            </ul>
          </section>

          {/* Work Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-secondary">Work Experience</h2>
            <ul className="list-disc pl-5">
              {workExperience.map((work, index) => (
                <li key={index}>
                  <h3 className="text-lg font-bold text-primary">{work.title}</h3>
                  <p className="text-muted">{work.organization}</p>
                  <p>{work.date}</p>
                  <p>{work.description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-semibold text-secondary">Projects</h2>
            <ul className="list-disc pl-5">
              {projects.map((project, index) => (
                <li key={index}>
                  <a
                    href={project.href}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Children */}
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
