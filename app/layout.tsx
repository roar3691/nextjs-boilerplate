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
    "I am passionate about harnessing AI and Machine Learning to develop
              cutting-edge solutions that address real-world challenges. My
              focus lies in building robust models, integrating generative AI
              techniques, and delivering scalable applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased gradient-bg`}
      >
        {/* Nav / Header */}
        <nav className="flex items-center justify-between w-full bg-opacity-90 p-4 fixed top-0 left-0 z-50">
          <div className="text-xl font-bold text-primary">
            **YANALA RAGHUVAMSHI REDDY**
          </div>
          <div>
            <a href="#about" className="mx-2 text-sm hover:text-highlight">
              About
            </a>
            <a href="#experience" className="mx-2 text-sm hover:text-highlight">
              Experience
            </a>
            <a href="#projects" className="mx-2 text-sm hover:text-highlight">
              Projects
            </a>
            <a href="#contact" className="mx-2 text-sm hover:text-highlight">
              Contact
            </a>
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-20 container mx-auto p-8 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
