function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 tracking-wide">
          LocalEvents
        </div>
        <div className="space-x-6 text-gray-700 text-sm font-medium">
          <a href="#" className="hover:text-blue-500 transition">Home</a>
          <a href="#" className="hover:text-blue-500 transition">Events</a>
          <a href="#" className="hover:text-blue-500 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
