import { useState } from 'react'
import { Link } from 'react-scroll'
import ModalLogin from '../Modal/ModalLogin'
// css
import shoppingCart from '../../assets/shoppingCart.svg'
import iconoWeb from '../../assets/iconoWeb.svg'

const Nav = () => {
  const [showModal, setShowModal] = useState(false)

  const handlerModalLogin = (e) => {
    if (!e.target.className.includes('modal')) return
    setShowModal(!showModal)
  }

  return (
    <div className="flex justify-around flex-wrap space-x-20 items-center shadow-md bg-white p-3">
      <img src={iconoWeb} class="mr-1 h-10 sm:h-9" alt="EZ Logo" />
      <div className="font-bold-light text-lg space-x-10 tracking-normal">
        <Link
          to="proyects"
          href="#responsive-header"
          className="cursor-pointer block mt-6 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-6"
          smooth={true}
          offset={0}
          duration={1000}
        >
          Nosotros
        </Link>
        <Link
          to="proyects"
          href="#responsive-header"
          className="cursor-pointer block mt-6 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-6"
          smooth={true}
          offset={0}
          duration={1000}
        >
          Explorar cursos
        </Link>
        <Link
          to="proyects"
          href="#responsive-header"
          className="cursor-pointer block mt-6 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-6"
          smooth={true}
          offset={0}
          duration={1000}
        >
          Opiniones
        </Link>
        <Link
          to="proyects"
          href="#responsive-header"
          className="cursor-pointer block mt-6 lg:inline-block lg:mt-0 text-gray-900 hover:text-white"
          smooth={true}
          offset={0}
          duration={1000}
        >
          Proyectos
        </Link>
      </div>
      <div className='relative w-90%' >
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-primary dark:text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input
        type="search"
        name=""
        className="bg-white hover:bg-gray-100 text-primary font-ligth text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-primary dark:text-gray-800 dark:focus:ring-blue-500 shadow-md dark:focus:border-blue-500 rounded-full"
        placeholder="HTML, CSS, JavaScript..."
      />
      </div>
      <img
        className="w-25px inline-flex fill-primary"
        src={shoppingCart}
        alt="emptyCardImg"
      />
      <button
        class="bg-white hover:bg-gray-100 text-gray-800 font-ligth text-sm  xl:w-1/7 py-2 px-4 shadow-md border border-gray-300 rounded-full"
        onClick={handlerModalLogin}
      >
        Entrar
      </button>
      {showModal && (
        <ModalLogin handlerModalLogin={handlerModalLogin}>
          <div className="relative w-4/5 gap-2.5 flex z-40 bg-white h-[95%] overflow-auto p-[10px]">
            <div className="basis-1/2">
              <img src="" alt="" />
            </div>
            <div className="basis-1/2 flex flex-col  gap-y-[40px]">
              <div>
                <img
                  className="ml-auto mr-auto w-[312px] h-[88px] bg-[#878787] rounded-[20px]"
                  src=""
                  alt="Imagen?"
                />
              </div>
              <p className="text-center">INGRESA PARA SEGUIR APRENDIENDO</p>
              <input
                type="email"
                className="w-full p-[8px] rounded-[10px] border border-black border-solid"
                placeholder="Correo electronico"
              />
              <div>
                <input
                  type="password"
                  className="w-full p-[8px] rounded-[10px] border border-black border-solid"
                  name=""
                  id=""
                  placeholder="Contraseña"
                />
                <Link className="block text-right" to="#">
                  ¿Olvidaste la contraseña?
                </Link>
              </div>
              <label>
                <input type="checkbox" name="" id="" />
                Recordar usuario
              </label>
              <button className="bg-[#5f5d5d] rounded-[30px] p-[10px] text-white">
                Ingresar
              </button>
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
    </div>
  )
}

export default Nav
