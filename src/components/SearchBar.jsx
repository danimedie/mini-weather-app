export function SearchBar () {
  return (
    <section className="flex gap-3 justify-center items-center">
      <input className="border rounded outline-0 p-1 shadow-xl" type="text" placeholder="Valencia" />
      <button className="border rounded p-1 bg-gray-600 font-semibold cursor-pointer shadow-xl">Buscar</button>
    </section>
  )
}