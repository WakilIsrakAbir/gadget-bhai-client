import Navbar from "@/component/shared/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <p className="text-xl font-semibold text-slate-800">Home Page</p>
      </main>
    </div>
  );
}
