import { useState } from 'react'
import Courses from '../../components/Courses/Courses'
import Routes from '../../components/NavCourses/NavCourses'
import { images } from './../../assets'
import ModalLogin from '../../components/Modal/ModalLogin'
// css
import './landingPage.module.css'

const LandingPage = () => {
  const [selected, setSelected] = useState('courses')
  const [showModal, setShowModal] = useState(false)

  const handlerClick = (e) => {
    setSelected(e.target.name)
  }

  const handlerModalLogin = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      {showModal && (
        <ModalLogin>
          <div className="modal">
            <img src="" alt="" />
            <div>
              <p>
                APRENDE CON LOS MEJORES PROFESIONALES Y FORMA PARTE DE LA MEJOR
                COMUNIDAD
              </p>
              <input type="email" placeholder="Correo electronico" />
              <input type="password" name="" placeholder="Contraseña" />
              <input
                type="password"
                name=""
                placeholder="Repetir tu contraseña"
              />
              <label>Indicanos tu fecha de nacimiento</label>
              <input type="date" name="" id="" />
              <label>
                <input type="checkbox" name="" id="" />
                Acepta los términos y condiciones de EZ
              </label>
              <button>Crear cuenta</button>
              <p>
                ¿Ya tienes una cuenta?<button>Inicia sesión</button>
              </p>
            </div>
            <button onClick={handlerModalLogin}>X</button>
          </div>
        </ModalLogin>
      )}

      <div>
        <div>
          <p>EZ es una plataforma que hace que aprender sea Easy Peasy</p>
          <p>Aprende a tu ritmo cuando quieras y donde quieras</p>
          <p>
            HTML, CSS, JavaScript, Python, React, Go, Android, Flutter y mucho
            más.
          </p>
          <button onClick={handlerModalLogin}>¡Registrate gratis!</button>
        </div>
        <img src={images.handCoding} alt="hand-coding" />
      </div>

      <h2>Sabemos que tú decides a dónde quieres llegar</h2>
      <p>Por eso en EZ tú puedes personalizar tu ruta de aprendizaje</p>

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
            empaticos
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
