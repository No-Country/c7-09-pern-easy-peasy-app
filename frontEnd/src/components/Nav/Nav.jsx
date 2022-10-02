import { useState } from 'react'
import { Link } from 'react-scroll'
import ModalLogin from '../Modal/ModalLogin'
// css
import navStyle from './nav.module.css'

const Nav = () => {
  const [showModal, setShowModal] = useState(false)

  const handlerModalLogin = (e) => {
    if(!e.target.className.includes('modal')) return;
    setShowModal(!showModal)
  }

  return (
    <div class='flex justify-around flex-wrap space-x-20 items-center shadow-lg bg-gray-300 p-3'>
      <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      {/* <img src="xxxx" /> */}
      <div class="font-bold-light text-lg space-x-10 tracking-normal">
        <Link to="proyects" href="#responsive-header" class="cursor-pointer block mt-6 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-6" smooth={true} offset={0} duration={1000}>
          Nosotros
        </Link>
        <Link to="proyects" href="#responsive-header" class="cursor-pointer block mt-6 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-6" smooth={true} offset={0} duration={1000}>
          Explorar cursos
        </Link>
        <Link to="proyects" href="#responsive-header" class="cursor-pointer block mt-6 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-6" smooth={true} offset={0} duration={1000}>
          Opiniones
        </Link>
        <Link to="proyects" href="#responsive-header" class="cursor-pointer block mt-6 lg:inline-block lg:mt-0 text-gray-900 hover:text-white" smooth={true} offset={0} duration={1000}>
          Proyectos
        </Link>
      </div>
      <input
        type="search"
        name=""
        class="bg-white hover:bg-gray-100 w-1/6 elementsm:w-3/4 md:w-20 lg:w-2 xl:w-1/4 text-gray-500 font-bold-light text-lg- italic py-2 px-4  shadow-md border border-gray-300 rounded-full"
        placeholder="HTML, CSS, JavaScript..."
      />
      <img src="" alt="" />
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-ligth text-sm  xl:w-1/7 py-2 px-4 shadow-md border border-gray-300 rounded-full" onClick={handlerModalLogin}>Entrar</button>
      {showModal && (
        <ModalLogin handlerModalLogin={handlerModalLogin}>
          <div className="relative w-4/5 gap-2.5 flex z-40 bg-white h-[95%] overflow-auto p-[10px]">
            <div className='basis-1/2'>
              <img src="" alt="" />
            </div>
            <div className='basis-1/2 flex flex-col  gap-y-[40px]'>
              <div>
                <img className='ml-auto mr-auto w-[312px] h-[88px] bg-[#878787] rounded-[20px]' src="" alt="Imagen?" />
              </div>
              <p className='text-center'>INGRESA PARA SEGUIR APRENDIENDO</p>
              <input type="email"
                className='w-full p-[8px] rounded-[10px] border border-black border-solid'
                placeholder="Correo electronico" />
                <div>
                <input type="password"
                  className='w-full p-[8px] rounded-[10px] border border-black border-solid'
                  name="" id="" placeholder="Contraseña" />
                <Link className='block text-right' to="#">¿Olvidaste la contraseña?</Link>
                </div>
                <label>
                  <input type="checkbox" name="" id="" />
                  Recordar usuario
                </label>
              <button className='bg-[#5f5d5d] rounded-[30px] p-[10px] text-white'>Ingresar</button>
            </div>
            <button className='modal absolute top-2 right-2' onClick={handlerModalLogin}>X</button>
          </div>
        </ModalLogin>
      )}
    </div>
  )
}

export default Nav
