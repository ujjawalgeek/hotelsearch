import React from 'react'
import Sidebar from './sidebar/sidebar'
import Cards from './cards/Cards'
import { getAllHotels } from './hotelApi/hotelApi'
import { useState,useEffect } from 'react'


const Home = () => {
  const [allHotels, setAllHotels] = useState([])
  const [search, setSearch] = useState('')
  const [hotelId, setHotelId] = useState('')
  const [maxPrice, setMaxPrice] = useState(10000)
  const [rating, setRating] = useState('')
  const [sortBy, setSortBy] = useState('price')
  const [order, setOrder] = useState('asc')

  const fetchHotels = async () => {
    try{
      const data = await getAllHotels()
      setAllHotels(data)
    }catch(error){
      console.error("Error fetching hotels:", error)
    }
  }



  useEffect(() => {
    fetchHotels()
  }, [])

  const filteredHotels = allHotels
    .filter((hotel) => {
      const searchValue = search.trim().toLowerCase()
      if (!searchValue) {
        return true
      }

      return (
        String(hotel.name || '').toLowerCase().includes(searchValue) ||
        String(hotel.location || '').toLowerCase().includes(searchValue)
      )
    })
    .filter((hotel) => {
      if (!hotelId.trim()) {
        return true
      }
      return String(hotel.id) === hotelId.trim()
    })
    .filter((hotel) => Number(hotel.price) <= Number(maxPrice))
    .filter((hotel) => {
      if (!rating) {
        return true
      }
      return Number(hotel.rating) >= Number(rating)
    })
    .sort((a, b) => {
      const left = a?.[sortBy]
      const right = b?.[sortBy]

      if (sortBy === 'name') {
        const nameCompare = String(left || '').localeCompare(String(right || ''))
        return order === 'asc' ? nameCompare : -nameCompare
      }

      const numericCompare = Number(left) - Number(right)
      return order === 'asc' ? numericCompare : -numericCompare
    })

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-1/4'>
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
    <div className='w-3/4 overflow-y-auto h-screen'>
     <Cards hotels={filteredHotels}/>
    </div>
      
    </div>
  )
}

export default Home
