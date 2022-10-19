import { dataCourses } from '../../data/data'
import Ordenamiento from './ordenamiento'
// css

const Courses = () => {
  return (
    <div>
      <Ordenamiento />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-8 md: grid-flow-row ">
        {dataCourses.length === 0 ? (
          <p>There are no courses</p>
        ) : (
          dataCourses.map((course) => (
            <div
              key={course.id}
              className="border-solid border-2 rounded-[15px] bg-white-400 inline-block lg:max-w-lg md:max-w-md sm:max-w-sm"
            >
              <div>
                <img src={course.imgUrl} alt={course.title} />
              </div>
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
