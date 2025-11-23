export function SearchBar ({ handleClick }) {
  return (
    <>
      <section className="flex gap-3 justify-center items-center">
        <input className="border rounded outline-0 p-1 shadow-xl" type="text" name="city" placeholder="Valencia" />
        <button onClick={handleClick} className="border rounded p-1 bg-gray-600 font-semibold cursor-pointer shadow-xl">Buscar</button>
      </section>
    </>
  )
}