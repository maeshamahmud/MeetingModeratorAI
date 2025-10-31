export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow">
      <h1 className="text-xl font-bold">My Vite + Tailwind App</h1>
      <div className="space-x-4">
        <a href="#" className="hover:text-blue-200">Home</a>
        <a href="#" className="hover:text-blue-200">About</a>
      </div>
    </nav>
  );
}