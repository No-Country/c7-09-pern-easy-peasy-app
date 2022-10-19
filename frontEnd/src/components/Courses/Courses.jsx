import { useFilters } from '../../hooks/useFilters'
import { dataCards } from '../../data/data'
import Ordenamiento from './ordenamiento'
import { useEffect, useState } from 'react'
import {
  filterByDate,
  filterByPrice,
  filterByPunctuation,
} from '../../helpers/filters'
// css

const Courses = () => {
  const [querys, addFilter, redireccionar] = useFilters()
  const [coursesFilter, setCoursesFilter] = useState(dataCards)

  useEffect(() => {
    let newF = [...dataCards]
    for (const v in querys.combinados) {
      if (querys.combinados[v] === 'higherprice') {
        newF = filterByPrice(newF, 'higer')
      } else if (querys.combinados[v] === 'lowerprice') {
        newF = filterByPrice(newF, 'lower')
      } else if (querys.combinados[v] === 'punctuation') {
        newF = filterByPunctuation(newF)
      } else if (querys.combinados[v] === 'createdate') {
        newF = filterByDate(newF, 'create')
      } else if (querys.combinados[v] === 'updatedate') {
        newF = filterByDate(newF, 'update')
      }
    }

    setCoursesFilter(newF)
  }, [querys])

  return (
    <div>
      <Ordenamiento addFilter={addFilter} />

      <div className="grid grid-cols-3 gap-4 pt-8">
        {coursesFilter.length === 0 ? (
          <p>There are no courses</p>
        ) : (
          coursesFilter.map((course) => (
            <div key={course.id}>
              <img src={course.imgUrl} alt={course.title} />
              <p>{course.title}</p>
              <p>{course.description}</p>
              <div>
                <span>Puntuacion: {course.puntuaction}</span>
                <hr />
                <span>
                  <strong>Valor: {course.price} $</strong>
                </span>
                <div>Mas informacion...</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Courses
