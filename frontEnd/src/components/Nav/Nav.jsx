import { useState } from 'react'
import { Link } from 'react-scroll'
import ModalLogin from '../Modal/ModalLogin'
import iconoWeb from '../../assets/iconoWeb.svg'
import iconCart from '../../assets/iconCart.svg'

const Nav = () => {
  const [showModal, setShowModal] = useState(false)

  const handlerModalLogin = (e) => {
    if (!e.target.className.includes('modal')) return
    setShowModal(!showModal)
  }

  return (
    <div className="flex justify-between flex-wrap space-x-20  items-center shadow-md p-3">
      <img src={iconoWeb} className="h-8 w-65 mr-2 sm:h-12" alt="EZ Logo" />

      <div className="block flex-grow text-md lg:flex lg:items-center lg:w-auto">
          <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
    <div className="lg:flex-grow" id="navbar-search">
          <Link
            to="projetcs"
            href="#responsive-header"
            class="cursor-pointer block mt-6 lg:inline-block lg:mt-0 text-gray-900 hover:text-hoverNav mr-6"
          >
            Nosotros
          </Link>
          <Link
            to="projetcs"
            href="#responsive-header"
            class="cursor-pointer block mt-6 lg:inline-block lg:mt-0 text-gray-900 hover:text-hoverNav mr-6"
          >
            Explorar cursos
          </Link>
          <Link
            to="projetcs"
            href="#responsive-header"
            class="cursor-pointer block mt-6 lg:inline-block lg:mt-0 text-gray-900 hover:text-hoverNav mr-6"
          >
            Opiniones
          </Link>
          <Link
            to="projetcs"
            href="#responsive-header"
            class="cursor-pointer block mt-6 lg:inline-block lg:mt-0 text-gray-900 hover:text-hoverNav mr-6"
          >
            Proyectos
          </Link>
        </div>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-primary dark:text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            name=""
            className="bg-white hover:bg-gray-100 text-primary font-ligth text-sm w-96 focus:ring-blue-500 focus:border-blue-500 p-4 pl-14 dark:bg-white dark:border-gray-600 dark:placeholder-primary dark:text-gray-800 dark:focus:ring-blue-500 shadow-lg dark:focus:border-blue-500 rounded-full"
            placeholder="HTML, CSS, JavaScript..."
          />
        </div>
        <div className=" flex space-x-4">
          <img className="w-65 h-6 sm:h-10" src={iconCart} alt="emptyCardImg" />
          <button
            className="modal bg-hoverNav hover:bg-gray-100 text-gray-800 font-ligth text-sm  xl:w-1/7 py-2 px-4 shadow-md border border-gray-300 rounded-full"
            onClick={handlerModalLogin}
          >
            Entrar
          </button>
        </div>
      </div>

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
