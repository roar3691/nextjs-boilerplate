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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background text-foreground transition-colors">
        <div className="container mx-auto px-4">
          <header className="text-center py-6">
            <h1 className="text-5xl font-bold text-primary mb-2">
              Yanala Raghuvamshi Reddy
            </h1>
            <p className="text-muted text-lg">
              Pursuing Computer Science AI/ML | Researcher | Treasurer, IEEE Computer Society - CMREC Student Branch
            </p>
          </header>
          {children}
          <footer className="text-center py-4 text-muted">
            © {new Date().getFullYear()} Yanala Raghuvamshi Reddy. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
