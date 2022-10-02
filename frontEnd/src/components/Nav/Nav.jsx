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
      <img src="" alt="" />
      <button className='modal' onClick={handlerModalLogin}>Entrar</button>
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
