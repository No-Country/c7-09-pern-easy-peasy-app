import { useState } from 'react'
import { Link } from 'react-scroll'
import ModalLogin from '../Modal/ModalLogin'

const Nav = () => {
  const [showModal, setShowModal] = useState(false)

  const handlerModalLogin = () => {
    setShowModal(!showModal)
  }

  return (
    <div>
      <img src="" />
      <Link
        style={{ cursor: 'pointer' }}
        to="proyects"
        smooth={true}
        offset={0}
        duration={1000}
      >
        Nosotros
      </Link>
      <Link
        style={{ cursor: 'pointer' }}
        to="proyects"
        smooth={true}
        offset={0}
        duration={1000}
      >
        Explorar cursos
      </Link>
      <Link
        style={{ cursor: 'pointer' }}
        to="proyects"
        smooth={true}
        offset={0}
        duration={1000}
      >
        Opiniones
      </Link>
      <Link
        style={{ cursor: 'pointer' }}
        to="proyects"
        smooth={true}
        offset={0}
        duration={1000}
      >
        Proyectos
      </Link>
      <input
        type="search"
        name=""
        id=""
        placeholder="HTML, CSS, JavaScript..."
      />
      <img src="" alt="" />
      <button onClick={handlerModalLogin}>Entrar</button>
      {showModal && (
        <ModalLogin>
          <div className="modal">
            <img src="" alt="" />
            <div>
              <p>INGRESA PARA SEGUIR APRENDIENDO</p>
              <input type="email" placeholder="Correo electronico" />
              <input type="password" name="" id="" placeholder="Contraseña" />
              <Link to="#">¿Olvidaste la contraseña?</Link>
              <label>
                <input type="checkbox" name="" id="" />
                Recordar usuario
              </label>
              <button>Ingresar</button>
            </div>
            <button onClick={handlerModalLogin}>X</button>
          </div>
        </ModalLogin>
      )}
    </div>
  )
}

export default Nav
