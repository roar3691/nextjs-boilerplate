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

// Updated Metadata
export const metadata: Metadata = {
  title: "Yanala Raghuvamshi Reddy",
  description:
    "Better CV showcasing GitHub link and research paper references in AI/ML.",
};

// RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased gradient-bg`}
      >
        <div className="container mx-auto p-8">
          {/* Header Section */}
          <header className="fade-in mb-8">
            <h1 className="text-3xl font-bold text-primary">
              Yanala Raghuvamshi Reddy
            </h1>
            <p className="text-sm text-muted">
              BTech (AI & ML) | Machine Learning Engineer | Research Enthusiast
            </p>
          </header>

          {/* About Me Section */}
          <section className="mb-6 fade-in">
            <h2 className="text-xl font-semibold text-primary">Better CV</h2>
            <p className="text-body">
              I am passionate about harnessing AI and Machine Learning to develop
              cutting-edge solutions that address real-world challenges. My
              focus lies in building robust models, integrating generative AI
              techniques, and delivering scalable applications.
            </p>
          </section>

          {/* GitHub and Publications Section */}
          <section className="mb-6 fade-in">
            <h2 className="text-xl font-semibold text-primary">Key Links</h2>
            <ul className="list-none space-y-2 mt-4">
              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/roar3691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  github.com/roar3691
                </a>
              </li>
              <li>
                <strong>Research Paper #1:</strong>{" "}
                <a
                  href="https://www.ijrti.org/papers/IJRTI2304061.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  IJRTI: AI & Its Applications
                </a>
              </li>
              {/* Add more research paper links if desired */}
            </ul>
          </section>

          {/* Contact Section */}
          <section className="mb-6 fade-in">
            <h2 className="text-xl font-semibold text-primary">Contact</h2>
            <p className="text-body">
              Email:{" "}
              <a
                href="mailto:raghu.yanala@gmail.com"
                className="text-accent hover:underline"
              >
                raghu.yanala@gmail.com
              </a>
            </p>
          </section>

          {/* Child Content (if any) */}
          <div className="fade-in">{children}</div>
        </div>
      </body>
    </html>
  );
}
