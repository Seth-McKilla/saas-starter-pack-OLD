import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h3 className="pb-4 text-xl">Welcome to the</h3>
        <h1 className="text-6xl font-bold">SaaS Starter Pack</h1>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="pt-4"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </main>
    </div>
  );
}
