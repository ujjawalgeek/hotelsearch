const Sidebar = ({
  search,
  onSearchChange,
  hotelId,
  onHotelIdChange,
  maxPrice,
  onMaxPriceChange,
  rating,
  onRatingChange,
  sortBy,
  onSortByChange,
  order,
  onOrderChange,
}) => {
  return (
    <aside className="sticky top-0 h-full overflow-y-auto rounded-2xl border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur">
      <h1 className="mb-1 text-2xl font-bold text-slate-800">Filters</h1>
      <p className="mb-6 text-sm text-slate-500">Tune your perfect stay</p>

      <div className="mb-5">
        <label htmlFor="search" className="mb-2 block text-sm font-semibold text-slate-700">
          Search Hotel
        </label>
        <input
          id="search"
          type="text"
          placeholder="Hotel name..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition duration-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="hotelId" className="mb-2 block text-sm font-semibold text-slate-700">
          Hotel ID
        </label>
        <input
          id="hotelId"
          type="text"
          placeholder="Enter ID"
          value={hotelId}
          onChange={(e) => onHotelIdChange(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition duration-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
        />
      </div>

      <div className="mb-5">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Max Price
        </label>
        <input
          type="range"
          min="1000"
          max="10000"
          step="100"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-linear-to-r from-sky-200 to-cyan-300"
        />
        <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
          <span>₹1000</span>
          <span className="rounded-full bg-cyan-100 px-2 py-1 font-semibold text-cyan-700">₹{maxPrice}</span>
        </div>
      </div>

      <div className="mb-5">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Minimum Rating
        </label>

        <select
          value={rating}
          onChange={(e) => onRatingChange(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition duration-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
        >
          <option value="">Select Rating</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className="mb-5">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Sort By
        </label>

        <select
          value={sortBy}
          onChange={(e) => onSortByChange(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition duration-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
        >
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="name">Name</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Order
        </label>

        <select
          value={order}
          onChange={(e) => onOrderChange(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition duration-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="rounded-xl bg-linear-to-r from-cyan-500 to-sky-600 p-4 text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5">
        <p className="text-sm font-semibold">Live Filters Active</p>
        <p className="text-xs text-cyan-100">Results update as you change options.</p>
      </div>
    </aside>
  );
};

export default Sidebar;