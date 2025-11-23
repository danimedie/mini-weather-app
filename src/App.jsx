import { SearchBar } from './components/SearchBar'
import { WeatherCard } from './components/WeatherCard'

export default function App() {
  return (
    <main className='space-y-5 text-center'>
      <h1 className='text-3xl font-bold'>Mini Weather App</h1>

      <SearchBar />

      <WeatherCard/>
    </main>
  )
}