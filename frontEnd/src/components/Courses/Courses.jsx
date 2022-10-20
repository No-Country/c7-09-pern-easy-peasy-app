import { useFilters } from '../../hooks/useFilters'
// import { dataCards } from '../../data/data'
import Ordenamiento from './ordenamiento'
import { useEffect, useState } from 'react'
import {
  filterByDate,
  filterByPrice,
  filterByPunctuation,
} from '../../helpers/filters'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCourses } from '../../slices/courses'
import Loader from '../Loader/Loader'
// css

const Courses = () => {
  const dispatch = useDispatch()
  const { isLoading, courses } = useSelector((state) => state.courses)
  const [querys, addFilter] = useFilters()
  const [coursesFilter, setCoursesFilter] = useState(courses)

  useEffect(() => {
    dispatch(fetchAllCourses())
  }, [])

  useEffect(() => {
    let newF = [...courses]
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

  if (isLoading) return <Loader />

  return (
    <div className="px-[5px] w-full">
      <Ordenamiento addFilter={addFilter} />

      <div className="mr-auto ml-auto w-[90%] grid grid-cols-3 gap-8 pt-8">
        {coursesFilter.length === 0 ? (
          <p>There are no courses</p>
        ) : (
          coursesFilter.map((course) => (
            <div
              key={course.id}
              className="px-4 rounded-[30px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.25)] border-top-left-radius-20"
            >
              <div className="w-[312px] left-0 top-0 ">
                <div className="bg-white w-[312px] h-[216px] ">
                  <img src={course.image_url} alt={course.title} />
                </div>
                <hr />
                <div className="w-[280px] h-[149px]  left-4 top-[219]">
                  <div className="w-[280px] h-[70px]  left-0 top-0">
                    <div className="w-[280px]	h-[77px]  left:0 top:0px">
                      <p className="w-[211px]	h-[29px]  left:0 top:0px font-family-poppins text-left text-lg tracking-normal text-sky-900">
                        {course.title}
                      </p>
                      <p className="w-[280px]	h-[48px] left:0 top:29px font-family-poppins text-left text-sm tracking-normal text-black">
                        {course.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between  ">
                    <span className="mt-2 font-family-inter text-left text-xs text-sky-900 tracking-normal">
                      {course.puntuaction}
                    </span>
                    <strong className="px-5px top-0 font-family-poppins text-right text-lg text-sky-900 tracking-normal">
                      Valor: {course.price} $
                    </strong>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="h-[35px] w-[220px] mb-2 text-white bg-primary hover:bg-dark-primary dark:shadow-lg font-family-poppins rounded-full text-[15px] top-[2px] pb-2  py-2 text-center  "
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Courses
