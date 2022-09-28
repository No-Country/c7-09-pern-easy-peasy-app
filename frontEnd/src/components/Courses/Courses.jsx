import { dataCards } from '../../data/data'

const Courses = () => {
  return (
    <div>
      <label htmlFor="select-order">Ordenado por:</label>
      <select name="" id="select-order">
        <option value="">Recomendados</option>
        <option value="">Populares</option>
        <option value="">Fecha de actualización</option>
        <option value="">Puntuación</option>
      </select>
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
  )
}

export default Courses
