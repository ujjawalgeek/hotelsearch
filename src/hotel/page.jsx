import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { hotelById } from '../home/hotelApi/hotelApi'

const Hotel = () => {
  const { id } = useParams()
  const [hotel, setHotel] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        setLoading(true)
        setError('')
        const data = await hotelById(id)
        setHotel(data)
      } catch {
        setError('Unable to load hotel details right now.')
      } finally {
        setLoading(false)
      }
    }

    fetchHotel()
  }, [id])

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-slate-50 p-6'>
        <p className='text-lg font-medium text-slate-600'>Loading hotel details...</p>
      </div>
    )
  }

  if (error || !hotel) {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 p-6'>
        <p className='text-lg font-semibold text-red-500'>{error || 'Hotel not found.'}</p>
        <Link to='/' className='rounded-lg bg-sky-600 px-4 py-2 font-medium text-white'>
          Back to Hotels
        </Link>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-sky-50 to-white p-6 md:p-10'>
      <div className='mx-auto max-w-4xl'>
        <Link
          to='/'
          className='mb-6 inline-block rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm'
        >
          ← Back to Hotels
        </Link>

        <div className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg'>
          <img
            src={hotel.thumbnail}
            alt={hotel.name}
            className='h-72 w-full object-cover md:h-96'
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=60'
            }}
          />

          <div className='space-y-4 p-6 md:p-8'>
            <div className='flex flex-wrap items-center justify-between gap-3'>
              <h1 className='text-3xl font-bold text-slate-800'>{hotel.name}</h1>
              <span className='rounded-md bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700'>
                ⭐ {hotel.rating}
              </span>
            </div>

            <p className='text-slate-600'>📍 {hotel.location}</p>

            <p className='text-base leading-7 text-slate-700'>{hotel.description}</p>

            <div className='rounded-xl bg-sky-50 p-4'>
              <p className='text-sm text-slate-500'>Price Per Night</p>
              <p className='text-3xl font-bold text-sky-700'>₹{Number(hotel.price).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel
