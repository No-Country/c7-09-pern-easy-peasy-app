import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const modalRootElement = document.getElementById('register-login-modal-root')

const ModalLogin = ({ children, handlerModalLogin }) => {
  const newElement = document.createElement('div')

  const headerElement = document.querySelector('header')

  const style = document.createElement('style')
  style.innerHTML = `:root {
    --modal-height: ${headerElement.clientHeight}px;
  }`

  newElement.className =
    'modal fixed bg-[rgba(217,217,217,0.6)] flex justify-center items-center z-30 w-screen top-[var(--modal-height)] h-[calc(100vh-var(--modal-height))]'
  newElement.appendChild(style)
  newElement.onclick = handlerModalLogin

  useEffect(() => {
    modalRootElement.appendChild(newElement)
    document.body.style.overflow = 'hidden'
    return () => {
      modalRootElement.removeChild(newElement)
      document.body.style.overflow = 'auto'
    }
  }, [])

  return createPortal(children, newElement)
}

export default ModalLogin
