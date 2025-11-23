import { useEffect, useState } from 'react'

export function WeatherCard ({ cityName }) {
  const [city, setCity] = useState()
  const API_URL = `https://wttr.in/${cityName}?format=j1`

  useEffect(() => {
    if (!cityName) return

    fetch(API_URL)
      .then(res => res.json())
      .then(response => {
        const weather = response.current_condition[0]
        setCity(weather)
      })
  }, [cityName])

  return (
    <>
      { city && (
        <section className="border rounded space-y-2 p-2 text-center">
          <h2 className="text-xl bg-gray-600 rounded-t font-bold">{ cityName }</h2>
          <div className="flex justify-center items-center gap-2 border-b border-gray-600 pb-2 text-lg">
            <span>⛈️</span>
            <p>
              { city.temp_C }
              <span className="relative -top-1 text-xs">°C</span>
            </p>
          </div>
          <p className="max-w-100">{ city.lang_es[0].value }</p>
        </section>
      )}
    </>
  )
}