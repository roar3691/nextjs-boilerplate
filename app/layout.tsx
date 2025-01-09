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
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-primary">RAGHUVAMSHI REDDY</h1>
            <p className="text-sm text-muted">AI/ML Enthusiast</p>
          </header>
          {children}
          <footer className="mt-8 text-center text-muted">
            <p>&copy; 2025 Raghuvamshi Reddy. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
