import { useState } from 'react'
import { WeatherCard } from './components/WeatherCard'
import { SearchBar } from './components/SearchBar'

export default function App() {
  const [cityName, setCityName] = useState()

  const handleClick = () => {
    const cityInput = document.querySelector('input[name="city"]').value
    setCityName(cityInput)
  }

  return (
    <main className='space-y-5 text-center'>

      <h1 className='text-3xl font-bold'>Mini Weather App</h1>

      <SearchBar handleClick={handleClick} />

      <WeatherCard cityName={cityName} />

    </main>
  )
}