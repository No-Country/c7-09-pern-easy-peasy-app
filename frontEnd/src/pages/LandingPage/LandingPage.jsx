import { useState } from 'react'
import Courses from '../../components/Courses/Courses'
import Routes from '../../components/NavCourses/NavCourses'
import { images } from './../../assets'
import ModalLogin from '../../components/Modal/ModalLogin'
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
          <div className="relative w-4/5 gap-2.5 flex z-40 bg-white h-[95%] overflow-auto p-[10px]">
            <div className="basis-1/2">
              <img src="" alt="" />
            </div>
            <div className="basis-1/2 flex flex-col  gap-y-[20px]">
              <div>
                <img
                  className="ml-auto mr-auto w-[312px] h-[88px] bg-[#878787] rounded-[20px]"
                  src=""
                  alt="Imagen?"
                />
              </div>
              <p className="text-center">
                APRENDE CON LOS MEJORES PROFESIONALES Y FORMA PARTE DE LA MEJOR
                COMUNIDAD
              </p>
              <input
                type="email"
                className="w-full p-[8px] rounded-[10px] border border-black border-solid"
                placeholder="Correo electronico"
              />
              <input
                type="password"
                className="w-full p-[8px] rounded-[10px] border border-black border-solid"
                name=""
                placeholder="Contraseña"
              />
              <input
                type="password"
                className="w-full p-[8px] rounded-[10px] border border-black border-solid"
                name=""
                placeholder="Repetir tu contraseña"
              />
              <label>
                Indicanos tu fecha de nacimiento{' '}
                <input
                  className="p-[8px] rounded-[10px] border border-black border-solid"
                  type="date"
                  name=""
                  id=""
                />
              </label>
              <label className="block">
                <input type="checkbox" name="" id="" />
                Acepta los{' '}
                <span className="underline font-bold">
                  términos y condiciones
                </span>{' '}
                de EZ
              </label>
              <button className="bg-[#5f5d5d] rounded-[30px] p-[10px] text-white">
                Crear cuenta
              </button>
              <p>
                ¿Ya tienes una cuenta?{' '}
                <button className="font-bold">Inicia sesión</button>
              </p>
            </div>
            <button
              className="modal absolute top-2 right-2"
              onClick={handlerModalLogin}
            >
              X
            </button>
          </div>
        </ModalLogin>
      )}

      <div className="flex">
        <div className="basis-3/4">
          <p className="text-[4.5em]  leading-[72px]">
            {' '}
            <span className="font-bold italic">EZ </span>es una plataforma que
            hace que aprender sea{' '}
            <span className="font-bold italic">Easy Peasy</span>
          </p>
          <div className="text-[18px] font-light leading-[38px]">
            <p>Aprende a tu ritmo cuando quieras y donde quieras</p>
            <p>
              HTML, CSS, JavaScript, Python, React, Go, Android, Flutter y mucho
              más.
            </p>
            <button
              className="modal text-white mt-[50px] rounded-[20px] bg-[#262626] w-[258px] h-[52px]"
              onClick={handlerModalLogin}
            >
              ¡Registrate gratis!
            </button>
          </div>
        </div>
        <div className="rounded-[100%]">
          <img
            className="rounded-[100%]"
            src={images.handCoding}
            alt="hand-coding"
          />
        </div>
      </div>
      <div class="leading-[37px] sm:text-center md:text-right lg:text-justify xl:text-center">
        <h2 class="font-bold text-[3em] text-left">
          Sabemos que tú decides a dónde quieres llegar
        </h2>
        <h3 class="text-[2em] text-left">
          Por eso en EZ tú puedes personalizar tu ruta de aprendizaje
        </h3>
      </div>
      <button name="courses" onClick={handlerClick}>
        Cursos
      </button>
      <button name="routes" onClick={handlerClick}>
        Rutas
      </button>

      {selected === 'courses' && <Courses />}
      {selected === 'routes' && <Routes />}

      <div>
        <h2>Qué esperar de los cursos de EZ</h2>
        <div>
          <div>
            <img src={images.queEsperar1} alt="Aprende a tu ritmo" />
            <h3>Aprende a tu ritmo</h3>
            <p>
              Contamos con más de +1000 horas de contenido para que aprendas más
              allá de lo básico. Cursos teóricos y prácticos con proyectos.
            </p>
          </div>
          <div>
            <img src={images.queEsperar2} alt="Comparte con una comunidad" />
            <h3>Comparte con una comunidad</h3>
            <p>
              Pregunta, pide opinión y ofrece soluciones. Comparte tu
              experiencia de aprendizaje con otros estudiantes de la comunidad
              tan apacionados en este mundo como tú.
            </p>
          </div>
          <div>
            <img
              src={images.queEsperar3}
              alt="Aprende de los mejores profesionales"
            />
            <h3>Aprende de los mejores profesionales</h3>
            <p>
              Aprende de profesionales interesados en mundo laboral!
              <br />
              Aprende tips, métodos, y ¿Por qué no? algún truco.
            </p>
          </div>
          <div>
            <img src={images.queEsperar4} alt="El nivel se adapta a tí" />
            <h3>El nivel se adapta a tí</h3>
            <p>
              Escoge según tu nivel. Contamos con cursos desde nivel inicial,
              avanzados y sobre temas particulares.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <div>
          <blockquote>
            Proponemos una educación accesible y de calidad. Creemos que
            respetar los tiempos y el ritmo de aprendizaje de cada persona es la
            clave para formar no solo excelentes profesionales sino colegas
            empáticos
          </blockquote>
          <address>
            <h6>Zed Ramos</h6>
            <p>CTO y Co-fundador EZ</p>
          </address>
        </div>
      </div>
      <div>
        <h2>No solo lo decimos nosotros, lo dice la comunidad</h2>
        <div>
          <img src="" alt="" />
          <div>
            <blockquote>
              EZ no solo me dio las herramientas para insertarme en el mundo IT,
              sino una comunidad en la cual apoyarme
            </blockquote>
            <address>
              <h6>Maria</h6>
            </address>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <blockquote>
              Gracias a EZ pude actualizarme en tecnologías especificas, y
              formarme como Full Stack
            </blockquote>
            <address>
              <h6>Pedro</h6>
            </address>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <blockquote>
              Vengo de la rama del diseño, gracias a EZ, hoy puedo desempeñarme
              como UI&motion
            </blockquote>
            <address>
              <h6>Miguel</h6>
            </address>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <blockquote>
              Luego de 8 meses de mucho aprendizaje logré conseguir mi primer
              trabajo como Backend, gracias a EZ
            </blockquote>
            <address>
              <h6>Maria</h6>
            </address>
          </div>
        </div>
      </div>
      <div id="proyects">
        <h2>Proyectos realizados por nuestros estudiantes</h2>
        <div>
          <div>
            <img
              src="https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg"
              alt=""
            />
            <h6>Nombre del proyecto</h6>
            <p>Alumno</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg"
              alt=""
            />
            <h6>Nombre del proyecto</h6>
            <p>Alumno</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg"
              alt=""
            />
            <h6>Nombre del proyecto</h6>
            <p>Alumno</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg"
              alt=""
            />
            <h6>Nombre del proyecto</h6>
            <p>Alumno</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
