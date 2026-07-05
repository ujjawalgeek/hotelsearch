import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar/sidebar";
import Cards from "./cards/Cards";
import { getAllHotels } from "./hotelApi/hotelApi";

const Home = () => {
  const [allHotels, setAllHotels] = useState([]);

  const [search, setSearch] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [rating, setRating] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    fetchHotels();
  }, []);

  async function fetchHotels() {
    try {
      const hotels = await getAllHotels();
      setAllHotels(hotels);
    } catch (error) {
      console.log(error);
    }
  }

  let filteredHotels = [...allHotels];

  // Search by ID
  if (hotelId !== "") {
    filteredHotels = filteredHotels.filter((hotel) => {
      return hotel.id == hotelId;
    });
  }

  // Search by name or location
  if (search !== "") {
    filteredHotels = filteredHotels.filter((hotel) => {
      return (
        hotel.name.toLowerCase().includes(search.toLowerCase()) ||
        hotel.location.toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  // Price Filter
  filteredHotels = filteredHotels.filter((hotel) => {
    return Number(hotel.price) <= Number(maxPrice);
  });

  // Rating Filter
  if (rating !== "") {
    filteredHotels = filteredHotels.filter((hotel) => {
      return hotel.rating >= rating;
    });
  }

  // Sorting
  filteredHotels.sort((a, b) => {
    if (sortBy === "price") {
      return order === "asc"
        ? a.price - b.price
        : b.price - a.price;
    }

    if (sortBy === "rating") {
      return order === "asc"
        ? a.rating - b.rating
        : b.rating - a.rating;
    }

    if (sortBy === "name") {
      return order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }

    return 0;
  });

  return (
    <div className="flex h-screen">
      <div className="w-1/4">
        <Sidebar
          search={search}
          onSearchChange={setSearch}
          hotelId={hotelId}
          onHotelIdChange={setHotelId}
          maxPrice={maxPrice}
          onMaxPriceChange={setMaxPrice}
          rating={rating}
          onRatingChange={setRating}
          sortBy={sortBy}
          onSortByChange={setSortBy}
          order={order}
          onOrderChange={setOrder}
        />
      </div>

      <div className="w-3/4 overflow-y-auto">
        <Cards hotels={filteredHotels} />
      </div>
    </div>
  );
};

export default Home;