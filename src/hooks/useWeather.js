import { useEffect, useState } from "react"
import { API_BASE_URL } from '../constants.js'

export function useWeather ({ cityName }) {
  const [city, setCity] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  function disableSearchControls () {
    document.querySelector('input[name="city"]').setAttribute('disabled', 'true')
    document.querySelector('button').setAttribute('disabled', 'true')
  }

  function enableSearchControls () {
    document.querySelector('input[name="city"]').removeAttribute('disabled')
    document.querySelector('button').removeAttribute('disabled')
  }

  useEffect(() => {
    if (!cityName) return

    setLoading(true)
    disableSearchControls()
    setError(null)
    setCity(null)

    fetch(`${API_BASE_URL}/${cityName}?format=j1`)
      .then(res => {
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error('Ciudad no encontrada')
          }
          throw new Error('Error al obtener los datos del clima')
        }
        return res.json()
      })
      .then(response => {
        const weather = response.current_condition[0]
        setCity(weather)
      })
      .catch(() => {
        setError('Ciudad no encontrada')
      })
      .finally(() => {
        setLoading(false)
        enableSearchControls()
      })
  }, [cityName])

  return { city, loading, error }
}