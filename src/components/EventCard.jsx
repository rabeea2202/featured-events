function EventCard({ event }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{event.name}</h3>
        <p className="text-sm text-gray-500 mb-1">{event.datetime}</p>
        <p className="text-sm text-gray-500 mb-3">{event.location}</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">{event.description}</p>
      </div>
      <button className="mt-auto self-start bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg">
        Register
      </button>
    </div>
  );
}
