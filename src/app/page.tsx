export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Min Webbsida</h1>
        <div>
          <a href="#" className="text-blue-500 px-4">Hem</a>
          <a href="#" className="text-blue-500 px-4">Om oss</a>
          <a href="#" className="text-blue-500 px-4">Kontakt</a>
        </div>
      </nav>

      <header className="text-center py-20 bg-blue-500 text-white">
        <h2 className="text-4xl font-bold">Välkommen till min sida</h2>
        <p className="mt-4">Detta är en enkel Next.js-webbsida med Tailwind CSS.</p>
        <button className="mt-6 bg-white text-blue-500 px-6 py-2 rounded hover:bg-blue-100">
          Läs mer
        </button>
      </header>
    </div>
  );
}
