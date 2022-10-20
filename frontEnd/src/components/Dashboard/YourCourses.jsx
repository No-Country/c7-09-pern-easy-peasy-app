import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchYourCourses } from '../../slices/users'

const YourCourses = () => {
  const dispatch = useDispatch()
  const { user, courses } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchYourCourses())
  }, [])

  return (
    <div className="w-full min-h-screen p-[20px]">
      <h1 className="mb-[20px] text-[28px] font-normal">
        Hola <span className="text-primary font-bold">{user?.firstname}</span>,
        continua aprendiendo
      </h1>
      <div className="flex justify-between">
        <div className="basis-[70%]">
          {courses.map((course) => (
            <div
              key={course.id}
              className="shadow-[0px_4px_6px_rgba(0,0,0,0.25)] bg-white mb-4 overflow-hidden rounded-[20px] flex text-[12px]"
            >
              <img
                className="w-[206px] h-[160px]"
                src={course.image}
                alt={course.title}
              />
              <div className="w-full min-h-full flex flex-col justify-between">
                <div className="ml-[20px] min-h-[140px] justify-between flex flex-col">
                  <p className="">{course.tag}</p>
                  <h2 className="font-bold text-[24px] text-primary">
                    {course.title}
                  </h2>
                  <p className="">Nivel: {course.level}</p>
                  <div className="flex justify-between items-center">
                    <div className="h-full flex items-end">
                      <span className="mr-[20px]">
                        {course.modules} Módulos
                      </span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="justify-self-end px-[10px]">
                      <button className="bg-primary text-white w-[104px] p-[10px] rounded-[30px]">
                        Continuar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[13px] bg-[rgba(37,109,133,0.2)]"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="basis-[28%] text-[14px] p-[10px] rounded-[20px] shadow-[0px_4px_6px_rgba(0,0,0,0.25)]">
          <h2 className="pt-[10px] pb-[10px] text-[16px] font-medium">
            Lecturas que te pueden interesar
          </h2>
          <div className="flex flex-col gap-y-2">
            <div className="p-[10px] rounded-[10px] border border-solid border-[rgba(37,109,133,0.3)]">
              <p>Diferencia entre página web, sitio web y servidor web</p>
            </div>
            <div className="p-[10px] rounded-[10px] border border-solid border-[rgba(37,109,133,0.3)]">
              <p>7 Alternativas a la etiqueta{'<div>'}</p>
            </div>
            <div className="p-[10px] rounded-[10px] border border-solid border-[rgba(37,109,133,0.3)]">
              <p>5 trucos HTML de los que nadie habla</p>
            </div>
            <div className="p-[10px] rounded-[10px] border border-solid border-[rgba(37,109,133,0.3)]">
              <p>Escribir HTML teniendo en cuenta la accesibilidad</p>
            </div>
            <div className="p-[10px] rounded-[10px] border border-solid border-[rgba(37,109,133,0.3)]">
              <p>7 proyectos para practicar HTML y CSS para principiantes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourCourses
