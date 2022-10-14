import { dataCourses } from '../../data/data'

const NavCourses = () => {
  return (
    <div>
      <label htmlFor="select-order">Ordenado por:</label>
      <select name="" id="select-order">
        <option value="">Recomendados</option>
        <option value="">Populares</option>
        <option value="">Fecha de actualización</option>
        <option value="">Puntuación</option>
      </select>
      <div className="grid grid-cols-3 gap-4 pt-8">
        {dataCourses.length === 0 ? (
        <p>There are no routes</p>
      ) : (
        dataCourses.map((route) => (
          <div key={route.id}>
            <img src={route.img} alt={route.name} />
            <p>{route.name}</p>
            <div>
              <span>{route.numCourses} Cursos</span>
              <span>{route.punctuation}</span>
            </div>
            <p>{route.description}</p>
          </div>
        ))
      )}
    </div>
    </div>
  )
}

export default NavCourses
