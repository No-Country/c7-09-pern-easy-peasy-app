import { useFilters } from '../../hooks/useFilters'
// import { dataCards } from '../../data/data'
import Ordenamiento from './ordenamiento'
import { useEffect, useState } from 'react'
import {
  filterByDate,
  filterByPrice,
  filterByPunctuation,
} from '../../helpers/filters'
import { useDispatch } from 'react-redux'
import { fetchAllCourses } from '../../slices/courses'
import { useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
// css

const Courses = () => {
  const dispatch = useDispatch()
  const { isLoading, courses } = useSelector((state) => state.courses)
  const [querys, addFilter, redireccionar] = useFilters()
  const [coursesFilter, setCoursesFilter] = useState(courses)

  useEffect(() => {
    dispatch(fetchAllCourses())
  }, [])

  useEffect(() => {
    let newF = [...courses]
    for (let v in querys.combinados) {
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

  if (isLoading) return <Loader />

  return (
    <div className="px-[20px] w-full">
      <Ordenamiento addFilter={addFilter} />

      <div className="mr-auto ml-auto w-[80%] grid grid-cols-3 gap-4 pt-8">
        {coursesFilter.length === 0 ? (
          <p>There are no courses</p>
        ) : (
          coursesFilter.map((course) => (
            <div key={course.id}>
              <img src={course.image_url} alt={course.title} />
              <p>{course.title}</p>
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
