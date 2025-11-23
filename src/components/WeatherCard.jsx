import { WEATHER_ICONS } from '../constants.js'
import { useWeather } from '../hooks/useWeather.js'

export function WeatherCard ({ cityName }) {
  const { city, loading, error } = useWeather({ cityName: cityName})

  return (
    <>
      {
        loading && (
          <section className="border rounded space-y-2 p-2 text-center">
            <h2>Cargando...</h2>
          </section>
        )
      }
      { 
        city && (
          <section className="border rounded space-y-2 p-2 text-center">
            <h2 className="text-xl bg-gray-600 rounded-t font-bold">{ cityName }</h2>
            <div className="flex justify-center items-center gap-2 border-b border-gray-600 pb-2 text-lg">
              <span>{ WEATHER_ICONS[city.lang_es[0].value] || '❓' }</span>
              <p>
                { city.temp_C }
                <span className="relative -top-1 text-xs">°C</span>
              </p>
            </div>
            <p className="max-w-100">{ city.lang_es[0].value }</p>
          </section>
        )
      }
      {
        error && (
          <section className="border rounded space-y-2 p-2 text-center">
            <h2>{ error }</h2>
          </section>
        )
      }
    </>
  )
}