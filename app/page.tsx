import Image from "next/image";

export default function Home() {
  return (
    <div className="gradient-bg min-h-screen flex flex-col justify-center items-center p-8 sm:p-20">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <Image
          className="dark:invert fade-in"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-primary">Welcome to My Portfolio</h1>
          <p className="text-muted mt-2">
            Showcasing projects and skills in Artificial Intelligence and Machine Learning.
          </p>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <a
            className="rounded-full border border-solid border-accent transition-colors flex items-center justify-center bg-primary text-background gap-2 hover:bg-accent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/roar3691"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
          <a
            className="rounded-full border border-solid border-secondary transition-colors flex items-center justify-center hover:bg-secondary text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#projects"
          >
            See Projects
          </a>
        </div>
      </main>
    </div>
  );
}
