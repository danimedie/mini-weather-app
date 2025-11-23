export function WeatherCard () {
  return (
    <section className="border rounded space-y-2 p-2 text-center">
      <h2 className="text-xl bg-gray-600 rounded-t font-bold">Valencia</h2>
      <div className="flex justify-center items-center gap-2 border-b border-gray-600 pb-2 text-lg">
        <span>⛈️</span>
        <p>
          8
          <span className="relative -top-1 text-xs">°C</span>
        </p>
      </div>
      <p className="max-w-100">Cielo muy cubierto y lluvioso en Valencia, con una temperatura de apenas 8 °C y presencia de tormentas eléctricas que intensifican la sensación de frío y hacen el ambiente especialmente desapacible.</p>
    </section>
  )
}