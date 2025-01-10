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
      description: "Built using Langchain and Flask for a RESTful API and efficient information retrieval.",
    },
  ];

  const contact = {
    email: "raghu.yanala@gmail.com",
    phone: "6309127542",
    linkedin: "https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/",
    location: "Hyderabad, Telangana, India",
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="font-body bg-background text-foreground transition-colors">
        <div className="container mx-auto p-4">
          {/* Header Section */}
          <header className="gradient-bg text-foreground p-6 rounded-lg mb-6">
            <h1 className="text-4xl font-heading font-bold mb-2">Yanala Raghuvamshi Reddy</h1>
            <p className="text-muted text-lg">
              AI/ML Enthusiast | Researcher | Treasurer, IEEE Computer Society - CMREC
            </p>
          </header>

          {/* About Section */}
          <section className="mb-6">
            <h2 className="text-primary text-2xl font-heading mb-4">About Me</h2>
            <p className="text-muted">
              As an innovative technology professional, I specialize in developing solutions at the intersection of 
              artificial intelligence and software development. My expertise spans multiple domains, with a focus on 
              impactful applications that solve real-world challenges.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mb-6">
            <h2 className="text-primary text-2xl font-heading mb-4">Contact</h2>
            <ul className="list-none">
              <li className="text-muted">
                Email:{" "}
                <a href={`mailto:${contact.email}`} className="text-primary hover:text-highlight">
                  {contact.email}
                </a>
              </li>
              <li className="text-muted">Phone: {contact.phone}</li>
              <li className="text-muted">
                LinkedIn:{" "}
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-highlight"
                >
                  {contact.linkedin}
                </a>
              </li>
              <li className="text-muted">Location: {contact.location}</li>
            </ul>
          </section>

          {/* Projects Section */}
          <section className="mb-6">
            <h2 className="text-primary text-2xl font-heading mb-4">Projects</h2>
            <ul className="list-disc pl-6">
              {projects.map((project, index) => (
                <li key={index} className="mb-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:text-highlight"
                  >
                    {project.name}
                  </a>
                  <p className="text-muted">{project.description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Render Children */}
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
