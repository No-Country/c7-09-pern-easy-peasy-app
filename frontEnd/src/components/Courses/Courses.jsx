import { dataCards } from '../../data/data'
// css

const Courses = () => {
  return (
    <div>
      <div className="flex items-center">
        <label
          htmlFor="select-order"
          className="inline-block align-middle pr-2 pb-2"
        >
          Ordenado por:
        </label>
        <select
          name=""
          id="select-order"
          className="bg-white hover:bg-gray-100 w-1/6 elementsm:w-3/4 md:w-20 lg:w-2 xl:w-1/4 text-gray-500 font-bold-light text-lg- italic py-2 px-4 pb-2 shadow-md border border-gray-300 rounded-full"
        >
          <option value="rec">Recomendados</option>
          <option value="pop">Populares</option>
          <option value="date">Fecha de actualización</option>
          <option value="punc">Puntuación</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-8">
        {dataCards.length === 0 ? (
          <p>There are no courses</p>
        ) : (
          dataCards.map((course) => (
            <div key={course.id}>
              <img src={course.img} alt={course.name} />
              <p>{course.name}</p>
              <p>{course.description}</p>
              <div>
                <span>{course.punctuation}</span>
                <span>${course.price} ARS</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Courses
