export const Ordenamiento = () => {
  return (
    <>
      <ul className=" container mx-1 px-2 lg:container lg:mx-auto flex md:flex-row -mb-px text-sm font-medium text-black">
        <li className="mr-10 inline-flex">
          <span className="font-family-poppins text-base">Ordenado por:</span>
        </li>
        <li className="mr-2 inline-flex">
          <select
            name=""
            id="select-order"
            className="bg-white absolute h-10 hover:bg-gray-100 w-1/6 element sm:w-3/4 md:w-20 lg:w-2 xl:w-1/4 text-black font-bold-light text-lg- italic py-2 px-10 pb-2 shadow-md border border-gray-300 rounded-full"
          >
            <option value="rec">Recomendados</option>
            <option value="pop">Populares</option>
            <option value="date">Fecha de actualización</option>
            <option value="punc">Puntuación</option>
          </select>
        </li>
      </ul>
    </>
  )
}

export default Ordenamiento
