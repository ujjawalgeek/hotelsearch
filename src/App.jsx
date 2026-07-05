import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/home'
import Hotel from './hotel/page'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotel/:id' element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
