import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yanala Raghuvamshi Reddy | AI/ML Portfolio",
  description: "Showcasing projects, skills, and research in AI/ML",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background text-foreground font-body">
        <div className="container mx-auto px-6 lg:px-12">
          <header className="text-center py-6 border-b border-border-color">
            <h1 className="text-5xl font-heading text-primary mb-2">Yanala Raghuvamshi Reddy</h1>
            <p className="text-lg text-muted">AI/ML Enthusiast | Researcher | IEEE Treasurer</p>
            <nav className="mt-6 space-x-6">
              <a href="#skills" className="hover:text-highlight">Skills</a>
              <a href="#projects" className="hover:text-highlight">Projects</a>
              <a href="#contact" className="hover:text-highlight">Contact</a>
            </nav>
          </header>

          {children}

          <footer className="py-6 text-center text-muted border-t border-border-color">
            <p>© {new Date().getFullYear()} Yanala Raghuvamshi Reddy. Built with Next.js & TailwindCSS.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
