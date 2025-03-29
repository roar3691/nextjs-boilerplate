import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <h1 className="text-2xl font-bold">Yanala Raghuvamshi Reddy</h1>
          <div className="flex gap-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#research" className="hover:underline">Research</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <ThemeToggle />
        </nav>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

function ThemeToggle() {
  return (
    <button 
      onClick={() => {
        document.documentElement.classList.toggle("dark");
      }} 
      className="p-2 rounded"
    >
      🌙 / ☀️
    </button>
  );
}
