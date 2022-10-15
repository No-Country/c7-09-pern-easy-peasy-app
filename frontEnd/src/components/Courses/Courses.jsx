import { dataCards } from '../../data/data'
import Ordenamiento from './ordenamiento'
// css

const Courses = () => {
  return (
    <div>
      
      <Ordenamiento/>

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
