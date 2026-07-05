import axios from "axios"

export async function getAllHotels(){
  const response=await axios.get("https://demohotelsapi.pythonanywhere.com/hotels/")
  return response.data.data

}

export async function hotelById(id){
  const response=await axios.get(`https://demohotelsapi.pythonanywhere.com/hotels/${id}`)
  return response.data.data
}

export async function hotelByLocation(location){
  const response=await axios.get(`https://demohotelsapi.pythonanywhere.com/hotels/?location=${location}`)
  return response.data.data
}

export async function hotelByPrice(price){
  const response=await axios.get(`https://demohotelsapi.pythonanywhere.com/hotels/?price=${price}`)
  return response.data.data
}

export const filterByPriceRange = async (minPrice, maxPrice) => {
  const response = await axios.get(
    `https://demohotelsapi.pythonanywhere.com/hotels/?min_price=${minPrice}&max_price=${maxPrice}`
  )
  return response.data.data;
}
export const filterByRating = async (rating) => {
  const response = await axios.get(
    `https://demohotelsapi.pythonanywhere.com/hotels/?rating=${rating}`
  );
  return response.data.data;
};

