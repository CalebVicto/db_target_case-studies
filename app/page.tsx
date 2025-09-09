import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Bienvenido</h1>
      <Link href="/case-studies">
        <button className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
          Ver estudios de caso
        </button>
      </Link>
    </main>
  );
}