"use client";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-12">
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Passionate AI/ML researcher & developer, crafting innovative solutions for real-world problems.
        </p>
        <div className="flex space-x-4 justify-center">
          <a href="https://github.com/roar3691" target="_blank" className="btn bg-black text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/yanala-raghuvamshi-reddy-a9a831202/" target="_blank" className="btn bg-blue-600 text-white">LinkedIn</a>
          <a href="https://drive.google.com/file/d/1wKt8vT5hZ7T5FYRMufx_r3KVFSW3m-UA/view?usp=sharing" target="_blank" className="btn bg-yellow-500 text-white">Resume</a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Core Skills</h2>
        <ul className="list-disc list-inside max-w-2xl mx-auto space-y-2">
          <li>C, C++, Python</li>
          <li>AI/ML, TensorFlow, Flask</li>
          <li>Web Scraping, Data Processing</li>
          <li>API Development, OOP</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="input-field mb-3" required />
          <input type="email" placeholder="Your Email" className="input-field mb-3" required />
          <textarea placeholder="Your Message" className="input-field mb-3" rows={4} required></textarea>
          <button type="submit" className="btn bg-primary text-white">Send Message</button>
        </form>
      </section>
    </main>
  );
}
