const Cards = ({ hotels }) => {
  if (!hotels || hotels.length === 0) {
    return (
      <div className="flex h-full min-h-80 w-full items-center justify-center p-6">
        <h2 className="text-xl font-semibold text-slate-500">
          No Hotels Found
        </h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <img
            src={hotel.thumbnail}
            alt={hotel.name}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=60';
            }}
          />

          <div className="p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-800">{hotel.name}</h2>

              <span className="rounded-md bg-amber-100 px-2 py-1 text-sm font-semibold text-amber-700">
                ⭐ {hotel.rating}
              </span>
            </div>

            <p className="mt-2 text-gray-500">
              📍 {hotel.location}
            </p>

            <p className="mt-3 line-clamp-3 text-gray-600">
              {hotel.description}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-sky-600">
                ₹{Number(hotel.price).toLocaleString()}
              </h3>

              <button className="rounded-lg bg-sky-600 px-4 py-2 font-medium text-white transition duration-200 hover:bg-sky-700 active:scale-95" onClick=''>
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

