import { useEffect, useState } from 'react'

export const Ordenamiento = ({ addFilter }) => {
  const [select, setSelect] = useState({ courses: 'default' })

  useEffect(() => {
    addFilter({ ...select }, true)
  }, [select])

  const handlerSelect = (e) => {
    setSelect({ courses: e.target.value })
  }

  return (
    <>
      <ul className="container mx-1 px-2 lg:container lg:mx-auto flex md:flex-row -mb-px text-sm font-medium text-black">
        <li className="mr-10 inline-flex">
          <span className="font-family-poppins text-base">Ordenado por:</span>
        </li>
        <li className="mr-2 inline-flex">
          <select
            onChange={handlerSelect}
            value={select.courses}
            name=""
            id="select-order"
            className="bg-white absolute h-10 hover:bg-gray-100 w-1/6 element sm:w-3/4 md:w-20 lg:w-2 xl:w-1/4 text-black font-bold-light text-lg- italic py-2 px-10 pb-2 shadow-md border border-gray-300 rounded-full"
          >
            <option value="default">Seleccione una opción</option>
            <option value="punctuation">Puntuacion</option>
            <option value="higherprice">Mayor precio</option>
            <option value="lowerprice">Menor precio</option>
          </select>
        </li>
      </ul>
    </>
  )
}

export default Ordenamiento
