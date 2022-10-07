import { useState } from 'react'
import { Link } from 'react-scroll'
import ModalLogin from '../Modal/ModalLogin'
import loginImage from '../../assets/inicioSesioIlusstracion.svg'
import iconClose from '../../assets/iconClose.svg'
// css
import navStyle from './nav.module.css'

const Nav = () => {
  const [showModal, setShowModal] = useState(false)

  const handlerModalLogin = (e) => {
    if (!e.target.className.includes('modal')) return
    setShowModal(!showModal)
  }

  return (
    <div>
      <img src="" />
      <div className={navStyle.linkNav}>
        <Link to="proyects" smooth={true} offset={0} duration={1000}>
          Nosotros
        </Link>
        <Link to="proyects" smooth={true} offset={0} duration={1000}>
          Explorar cursos
        </Link>
        <Link to="proyects" smooth={true} offset={0} duration={1000}>
          Opiniones
        </Link>
        <Link to="proyects" smooth={true} offset={0} duration={1000}>
          Proyectos
        </Link>
      </div>
      <input
        type="search"
        name=""
        id=""
        placeholder="HTML, CSS, JavaScript..."
      />
      <img src={''} alt="" />
      <button className="modal" onClick={handlerModalLogin}>
        Entrar
      </button>
      {showModal && (
        <ModalLogin handlerModalLogin={handlerModalLogin}>
          <div className="relative w-4/5 gap-2.5 flex md:flex-nowrap md:justify-start flex-wrap justify-center z-40 bg-gray-1 h-[95%] overflow-auto p-[10px] rounded-[20px]">
            <div className="basis-[100%] h-[100%] md:basis-1/2 flex justify-center items-center">
              <div className="w-full h-full bg-login-image bg-no-repeat bg-center"></div>
            </div>
            <div className="md:basis-1/2 flex flex-col  gap-y-[30px]">
              <div className="w-full h-[92px] bg-logotipo-ez bg-no-repeat bg-center bg-[length:100%_230px]"></div>
              <p className="text-center text-base">
                INGRESA PARA SEGUIR APRENDIENDO
              </p>
              <input
                type="email"
                className="italic w-full p-[8px] rounded-[10px] border border-blue-1 outline-none border-solid"
                placeholder="Correo electronico"
              />
              <div>
                <input
                  type="password"
                  className="italic w-full p-[8px] rounded-[10px] border border-blue-1 outline-none border-solid"
                  name=""
                  id=""
                  placeholder="Contraseña"
                />
                <Link
                  className="block text-xs text-right text-blue-1 cursor-pointer"
                  to="#"
                >
                  ¿Olvidaste la contraseña?
                </Link>
              </div>
              <label className="text-sm text-black-80p">
                <input
                  type="checkbox"
                  className="border-red-500 text-red-500"
                  name=""
                  id=""
                />
                &nbsp;&nbsp;Recordar usuario
              </label>
              <button className="bg-primary rounded-[30px] p-[10px] text-white">
                INGRESAR
              </button>
              <p className="italic text-center">
                ¿No tienes una cuenta?{' '}
                <button className="text-primary font-medium">Registrate</button>
              </p>
            </div>
            <button
              className="w-[48px] h-[48px] modal absolute top-2 right-2 bg-icon-close"
              onClick={handlerModalLogin}
            ></button>
          </div>
        </ModalLogin>
      )}
    </div>
  )
}

export default Nav
