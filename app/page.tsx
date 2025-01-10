export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-primary mb-4">
          Hi, I&apos;m Yanala Raghuvamshi Reddy
        </h1>
        <p className="text-lg text-muted max-w-2xl mb-8">
          A passionate AI/ML enthusiast with expertise in software development and research. Building solutions to solve real-world problems with innovation and technology.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-highlight transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/roar3691"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Core Skills Section */}
      <section id="skills" className="mt-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Core Skills</h2>
        <ul className="list-disc list-inside text-muted space-y-2">
          <li>C, C++, Python</li>
          <li>AI/ML, TensorFlow, Flask</li>
          <li>Web Scraping, Data Processing</li>
          <li>API Development, OOP</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Contact</h2>
        <ul className="list-none text-muted space-y-4">
          <li>
            Email:{" "}
            <a
              href="mailto:raghu.yanala@gmail.com"
              className="text-primary hover:text-highlight"
            >
              raghu.yanala@gmail.com
            </a>
          </li>
          <li>Phone: 6309127542</li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-highlight"
            >
              LinkedIn Profile
            </a>
          </li>
          <li>Location: Hyderabad, Telangana</li>
        </ul>
      </section>
    </main>
  );
}
