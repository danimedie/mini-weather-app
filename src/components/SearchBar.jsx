export function SearchBar ({ handleClick }) {
  return (
    <>
      <section className="flex gap-3 justify-center items-center">
        <input className="border rounded outline-0 p-1 shadow-xl disabled:opacity-50" type="text" name="city" placeholder="Valencia" />
        <button onClick={handleClick} className="border rounded p-1 bg-gray-600 font-semibold cursor-pointer disabled:cursor-default disabled:opacity-50 transition shadow-xl">Buscar</button>
      </section>
    </>
  )
}