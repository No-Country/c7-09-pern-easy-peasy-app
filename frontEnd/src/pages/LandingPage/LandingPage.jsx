import { useState } from 'react'
import Courses from '../../components/Courses/Courses'
import Routes from '../../components/NavCourses/NavCourses'
import { images } from './../../assets'
import ModalLogin from '../../components/Modal/ModalLogin'
import userCeo from '../../assets/userCEO.jpg'
import userGaren from '../../assets/userGaren.jpg'
import userJanna from '../../assets/userJanna.jpg'
import userThresh from '../../assets/userThresh.jpg'
import userNasus from '../../assets/userNasus.jpg'
import cursoImage from '../../assets/curso-no-available.svg'
import Slider from '../../components/Slider/Slider'
import cursosIcon from '../../assets/cursosIcon.svg'
import iconRuta from '../../assets/iconRuta.svg'
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
                <button className="text-primary font-medium">
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

      <div className="flex flex-wrap md:flex-nowrap justify-center text-center md:justify-start md:text-justify pl-[20px] pr-[20px]">
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
      <div className="leading-[37px] sm:text-center md:text-right lg:text-justify xl:text-center">
        <h2 className="font-bold text-[3em] text-left">
          Sabemos que tú decides a dónde quieres llegar
        </h2>
        <h3 className="text-[2em] text-left">
          Por eso en EZ tú puedes personalizar tu ruta de aprendizaje
        </h3>
      </div>
      <div class="border-b border-x-hoverNav dark:border-x-hoverNav">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-10 inline-flex">
            <img
              src={cursosIcon}
              alt="Aprende a tu ritmo"
              className="w-65 h-4 sm:h-8"
            />
            <button
              class="text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group"
              name="courses"
              onClick={handlerClick}
            >
              Cursos
            </button>
          </li>
          <li className="mr-2 inline-flex">
            <img
              src={iconRuta}
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

      <div className="w-full text-white bg-primary p-[40px]">
        <h2 className="text-[20px] sm:text-[40px] pb-[20px]">
          Qué esperar de los cursos de EZ
        </h2>
        <div className="flex flex-wrap justify-between gap-y-[20px]">
          <div className="md:basis-[49.5%] flex items-center gap-x-[10px]">
            <img src={images.queEsperar1} alt="Aprende a tu ritmo" />
            <div>
              <h3 className="text-[13px] sm:text-[24px] font-medium">
                Aprende a tu ritmo
              </h3>
              <p className="text-[12px] sm:text-[18px] font-light">
                Contamos con más de +1000 horas de contenido para que aprendas
                más allá de lo básico. Cursos teóricos y prácticos con
                proyectos.
              </p>
            </div>
          </div>
          <div className="md:basis-[49.5%] flex items-center gap-x-[10px]">
            <img src={images.queEsperar2} alt="Comparte con una comunidad" />
            <div>
              <h3 className="text-[13px] sm:text-[24px] font-medium">
                Comparte con una comunidad
              </h3>
              <p className="text-[12px] sm:text-[18px] font-light">
                Pregunta, pide opinión y ofrece soluciones. Comparte tu
                experiencia de aprendizaje con otros estudiantes de la comunidad
                tan apacionados en este mundo como tú.
              </p>
            </div>
          </div>
          <div className="md:basis-[49.5%] flex items-center gap-x-[10px]">
            <img
              src={images.queEsperar3}
              alt="Aprende de los mejores profesionales"
            />
            <div>
              <h3 className="text-[13px] sm:text-[24px] font-medium">
                Aprende de los mejores profesionales
              </h3>
              <p className="text-[12px] sm:text-[18px] font-light">
                Aprende de profesionales interesados en mundo laboral!
                <br />
                Aprende tips, métodos, y ¿Por qué no? algún truco.
              </p>
            </div>
          </div>
          <div className="md:basis-[49.5%] flex items-center gap-x-[10px]">
            <img src={images.queEsperar4} alt="El nivel se adapta a tí" />
            <div>
              <h3 className="text-[13px] sm:text-[24px] font-medium">
                El nivel se adapta a tí
              </h3>
              <p className="text-[12px] sm:text-[18px] font-light">
                Escoge según tu nivel. Contamos con cursos desde nivel inicial,
                avanzados y sobre temas particulares.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] sm:mt-16 flex flex-wrap sm:flex-nowrap overflow-hidden ">
        <div className="sm:basis-1/2 flex flex-col sm:flex-row justify-end">
          <img
            className="min-h-[65%] max-h-[65%] sm:max-h-[100%] w-full overflow-hidden object-cover object-top rounded-t-[30px] sm:rounded-none sm:rounded-l-[30px]"
            src={userCeo}
            alt=""
          />
        </div>
        <div className="sm:basis-1/2 flex justify-center items-center flex-wrap p-[20px] rounded-b-[30px] sm:rounded-none sm:border-0 sm:rounded-r-[30px] sm:border-r border-r-[#256D85] drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)] border-b border-b-[#256D85]">
          <div className="">
            <blockquote className="text-sm  leading-[26.95px] md:text-2xl md:leading-[38.05px] font-light">
              Proponemos una educación accesible y de calidad. Creemos que
              respetar los tiempos y el ritmo de aprendizaje de cada persona es
              la <span className="underline text-primary">clave</span> para
              formar no solo excelentes profesionales sino colegas empaticos
            </blockquote>
          </div>
          <div className="w-full">
            <address>
              <h6 className="md:text-[24px] text-dark-primary text-end font-bold	italic">
                Zed Ramos
              </h6>
              <p className="md:text-[14px] text-primary text-end">
                CTO y Co-fundador EZ
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="mt-[60px] mb-[60px]">
        <h2 className="text-center text-base md:text-[40px] leading-[25.36px] md:font-medium md:leading-[158.56%]">
          No solo lo decimos nosotros, lo dice la comunidad
        </h2>
        <div className="ml-auto mr-auto bg-primary h-[4px] rounded-[50px] md:w-[27%] md:h-[10px]"></div>
        <Slider>
          <div className="min-w-[212px] max-w-[212px] rounded-[30px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
            <img className="pointer-events-none" src={userJanna} alt="" />
            <div className="p-[15px] pt-[10px]">
              <blockquote className="">
                “<span className="font-bold">EZ</span> no solo me dio las
                herramientas para insertarme en el mundo IT, sino una comunidad
                en la cual apoyarme”
              </blockquote>
              <address className="text-right text-sm font-medium leading-[22.19px]">
                <h6>Janna</h6>
              </address>
            </div>
          </div>
          <div className="min-w-[212px] max-w-[212px] rounded-[30px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
            <img className="pointer-events-none" src={userGaren} alt="" />
            <div className="p-[15px] pt-[10px]">
              <blockquote className="">
                “Gracias a <span className="font-bold">EZ</span> pude
                actualizarme en tecnologías especificas, y formarme como Full
                Stack”
              </blockquote>
              <address className="text-right text-sm font-medium leading-[22.19px]">
                <h6>Garen</h6>
              </address>
            </div>
          </div>
          <div className="min-w-[212px] max-w-[212px] rounded-[30px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
            <img className="pointer-events-none" src={userNasus} alt="" />
            <div className="p-[15px] pt-[10px]">
              <blockquote className="">
                “Vengo de la rama del diseño, gracias a{' '}
                <span className="font-bold">EZ</span>, hoy puedo desempeñarme
                como UI&motion”
              </blockquote>
              <address className="text-right text-sm font-medium leading-[22.19px]">
                <h6>Nasus</h6>
              </address>
            </div>
          </div>
          <div className="min-w-[212px] max-w-[212px] rounded-[30px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
            <img className="pointer-events-none" src={userThresh} alt="" />
            <div className="p-[15px] pt-[10px]">
              <blockquote className="">
                “Luego de 8 meses de mucho aprendizaje logré conseguir mi primer
                trabajo como Backend, gracias a{' '}
                <span className="font-bold">EZ</span>”
              </blockquote>
              <address className="text-right text-sm font-medium leading-[22.19px]">
                <h6>Maria</h6>
              </address>
            </div>
          </div>
        </Slider>
      </div>

      <div id="proyects" className="mb-[60px]">
        <h2 className="text-center text-base md:text-[40px] leading-[25.36px] md:font-medium md:leading-[158.56%]">
          Proyectos realizados por nuestros estudiantes
        </h2>
        <div className="ml-auto mr-auto bg-primary h-[4px] rounded-[50px] md:w-[27%] md:h-[10px]"></div>
        <Slider>
          <div className="text-white leading-[31.07px] text-[20px] bg-primary flex flex-wrap justify-center min-w-[290px] max-w-[312px] min-h-[312px] max-h-[312px] rounded-[30px]">
            <div className="w-full flex justify-center items-end">
              <img className="pointer-events-none" src={cursoImage} alt="" />
            </div>
            <div className="w-full flex flex-col justify-center items-start pl-[20px]">
              <h6 className="font-medium">Nombre del proyecto</h6>
              <p>Alumno</p>
            </div>
          </div>
          <div className="text-white leading-[31.07px] text-[20px] bg-primary flex flex-wrap justify-center min-w-[290px] max-w-[312px] min-h-[312px] max-h-[312px] rounded-[30px]">
            <div className="w-full flex justify-center items-end">
              <img className="pointer-events-none" src={cursoImage} alt="" />
            </div>
            <div className="w-full flex flex-col justify-center items-start pl-[20px]">
              <h6 className="font-medium">Nombre del proyecto</h6>
              <p>Alumno</p>
            </div>
          </div>
          <div className="text-white leading-[31.07px] text-[20px] bg-primary flex flex-wrap justify-center min-w-[290px] max-w-[312px] min-h-[312px] max-h-[312px] rounded-[30px]">
            <div className="w-full flex justify-center items-end">
              <img className="pointer-events-none" src={cursoImage} alt="" />
            </div>
            <div className="w-full flex flex-col justify-center items-start pl-[20px]">
              <h6 className="font-medium">Nombre del proyecto</h6>
              <p>Alumno</p>
            </div>
          </div>
          <div className="text-white leading-[31.07px] text-[20px] bg-primary flex flex-wrap justify-center min-w-[290px] max-w-[312px] min-h-[312px] max-h-[312px] rounded-[30px]">
            <div className="w-full flex justify-center items-end">
              <img className="pointer-events-none" src={cursoImage} alt="" />
            </div>
            <div className="w-full flex flex-col justify-center items-start pl-[20px]">
              <h6 className="font-medium">Nombre del proyecto</h6>
              <p>Alumno</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default LandingPage
