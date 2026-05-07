export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <h1 className="text-4xl font-bold text-emerald-600 mb-4">Welcome to Healthy Go</h1>
      <a href="/terapis" className="bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
        Lihat Terapis
      </a>
    </div>
  );
}
