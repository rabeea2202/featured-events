import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventCard from "./components/EventCard";
import { useState } from "react";

const dummyEvents = [
  {
    id: 1,
    name: "Summer Music Fest",
    datetime: "July 20, 2025 at 6:00 PM",
    location: "Downtown Amphitheater",
    description: "Enjoy live music with top local bands and food trucks!",
  },
  {
    id: 2,
    name: "Art in the Park",
    datetime: "August 2, 2025 at 10:00 AM",
    location: "Central Park",
    description: "A showcase of local artists and craftspeople.",
  },
  {
    id: 3,
    name: "Tech Meetup 2025",
    datetime: "September 10, 2025 at 5:00 PM",
    location: "Innovation Hub",
    description: "Connect with developers, startups, and tech enthusiasts.",
  },
];

function App() {
  const [query, setQuery] = useState("");
  const filteredEvents = dummyEvents.filter((e) =>
    e.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            Featured Events
          </h2>
          <input
            type="text"
            placeholder="Search events..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-4 sm:mt-0 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none px-4 py-2 rounded-lg w-full sm:w-64 shadow-sm transition"
          />
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;