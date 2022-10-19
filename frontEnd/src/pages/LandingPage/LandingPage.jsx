import { useState } from 'react'
import Courses from '../../components/Courses/Courses'
import Routes from '../../components/NavCourses/NavCourses'
import ModalLogin from '../../components/Modal/ModalLogin'
import Slider from '../../components/Slider/Slider'
import cursosIcon from '../../assets/cursosIcon.svg'
import icon_ruta from '../../assets/icon_ruta.svg'
import StudenProjects from '../../components/studentProjects/studentProjects.jsx'
import UserStories from '../../components/userStories/UserStories.jsx'
import Welcome from '../../components/Welcome/Welcome'
import Aspirations from '../../components/aspirations/aspirations'
import Ceo from '../../components/CEO/ceo'
import Category from '../../components/Category/category'
// css

const LandingPage = () => {
  const [selected, setSelected] = useState('courses')
  const [showModal, setShowModal] = useState(false)

  const handlerClick = (e) => {
    setSelected(e.target.name)
  }

  const handlerModalLogin = (e) => {
    if (!e.target.className.includes('modal')) return
    setShowModal(!showModal)
  }

  return (
    <>
      {showModal && (
        <ModalLogin handlerModalLogin={handlerModalLogin}>
          <div className="relative w-4/5 gap-2.5 flex md:flex-nowrap md:justify-start flex-wrap justify-center z-40 bg-gray-1 h-[95%] overflow-auto p-[10px] rounded-[20px]">
            <div className="basis-[100%] h-[100%] md:basis-1/2 flex justify-center items-center">
              <div className="w-full h-full bg-register-image bg-no-repeat bg-center"></div>
            </div>
            <div className="basis-1/2 flex flex-col  gap-y-[10px]">
              <div className="w-full h-[92px] bg-logotipo-ez bg-no-repeat bg-center bg-[length:100%_230px]"></div>
              <p className="text-center text-base">
                APRENDE CON LOS MEJORES PROFESIONALES Y FORMA PARTE DE LA MEJOR
                COMUNIDAD
              </p>
              <input
                type="email"
                className="italic w-full p-[8px] rounded-[10px] border border-blue-1 outline-none border-solid"
                placeholder="Correo electronico"
              />
              <input
                type="password"
                className="italic w-full p-[8px] rounded-[10px] border border-blue-1 outline-none border-solid"
                name=""
                placeholder="Contraseña"
              />
              <input
                type="password"
                className="italic w-full p-[8px] rounded-[10px] border border-blue-1 outline-none border-solid"
                name=""
                placeholder="Repetir tu contraseña"
              />
              <label>
                Indicanos tu fecha de nacimiento{' '}
                <input
                  className="italic p-[8px] rounded-[10px] border border-blue-1 outline-none border-solid"
                  type="date"
                  name=""
                  id=""
                />
              </label>
              <label className="block text-sm text-black-80p">
                <input type="checkbox" name="" id="" />
                Acepta los{' '}
                <span className="underline text-blue-1">
                  términos y condiciones
                </span>{' '}
                de EZ
              </label>
              <button className="bg-primary rounded-[30px] p-[10px] text-white">
                CREAR CUENTA
              </button>
              <p className="italic text-center">
                ¿Ya tienes una cuenta?{' '}
                <button
                  className="text-primary font-medium"
                  onClick={handlerModalLogin}
                >
                  Inicia sesión
                </button>
              </p>
            </div>
            <button
              className="w-[48px] h-[48px] modal absolute top-2 right-2 bg-icon-close"
              onClick={handlerModalLogin}
            ></button>
          </div>
        </ModalLogin>
      )}

      <div className="flex flex-wrap md:flex-nowrap justify-center text-center md:justify-start md:text-justify pl-[20px] pr-[20px] bg-background">
        <div className="basis-[70%]">
          <p className="tracking-tight text-[32px] md:text-[5.5em] leading-[48px] md:leading-[95.11px] font-medium">
            {' '}
            <span className="font-bold italic text-primary">EZ </span>la
            plataforma que hace que aprender sea{' '}
            <span className="font-bold italic text-primary">Easy Peasy</span>
          </p>
          <div className="text-[18px] font-light leading-[38px]">
            <p>Aprende a tu ritmo cuando quieras y donde quieras</p>
            <p>
              HTML, CSS, JavaScript, Python, React, Go, Android, Flutter y mucho
              más.
            </p>
            <button
              className="modal text-white mt-[50px] rounded-[20px] bg-primary w-[258px] h-[52px]"
              onClick={handlerModalLogin}
            >
              ¡Registrate gratis!
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[456px] h-[456px]  rounded-[149px 136px 144px 137px] bg-handcoding bg-center bg-contain bg-no-repeat"></div>
      </div>

      <Welcome />

      <div className="mb-4 border-b container mx-auto px-20 lg:container lg:mx-auto border-x-hoverNav dark:border-x-hoverNav p-2">
        <ul className="flex flex-wrap flex-row -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-10 inline-flex">
            <img
              src={cursosIcon}
              alt="Aprende a tu ritmo"
              className="w-65 h-4 sm:h-8"
            />
            <button
              className="text-blue-600 rounded-t-lg border-b-2 border-blue-600 active border-x-0 border-t-0 dark:text-blue-500 dark:border-blue-500 group"
              name="courses"
              onClick={handlerClick}
            >
              Cursos
            </button>
          </li>
          <li className="mr-2 inline-flex">
            <img
              src={icon_ruta}
              alt="Aprende a tu ritmo"
              className="w-65 h-4 sm:h-8"
            />
            <button
              className="text-primary rounded-t-lg border-b-2 border-primary active dark:text-primary dark:border-primary group"
              name="routes"
              onClick={handlerClick}
            >
              Rutas
            </button>
          </li>
        </ul>
      </div>

      {selected === 'courses' && <Courses />}
      {selected === 'routes' && <Routes />}

      <Aspirations />

      <div className="place-content-end">
        <Category />
      </div>

      <Ceo />

      <div className="mt-[60px] mb-[60px]">
        <h2 className="text-center text-base md:text-[40px] leading-[25.36px] md:font-medium md:leading-[158.56%]">
          No solo lo decimos nosotros, lo dice la comunidad
        </h2>
        <div className="ml-auto mr-auto bg-primary h-[4px] rounded-[50px] md:w-[27%] md:h-[10px]"></div>
        <Slider>
          <UserStories />
        </Slider>
      </div>

      <div id="proyects" className="mb-[60px]">
        <h2 className="text-center text-base md:text-[40px] leading-[25.36px] md:font-medium md:leading-[158.56%]">
          Proyectos realizados por nuestros estudiantes
        </h2>
        <div className="ml-auto mr-auto bg-primary h-[4px] rounded-[50px] md:w-[27%] md:h-[10px]"></div>
        <Slider>
          <StudenProjects />
        </Slider>
      </div>
    </>
  )
}

export default LandingPage
