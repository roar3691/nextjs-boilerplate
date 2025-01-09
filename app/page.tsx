import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Image src="/next.svg" alt="Logo" width={180} height={38} />
        <ol>
          <li></li>
          <li></li>
        </ol>
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/vercel.svg" alt="Logo" width={20} height={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </main>
      <footer>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image src="/file.svg" alt="Icon" width={16} height={16} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image src="/window.svg" alt="Icon" width={16} height={16} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image src="/globe.svg" alt="Icon" width={16} height={16} />
        </a>
      </footer>
    </div>
  );
}
