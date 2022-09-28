import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const modalRootElement = document.getElementById('register-login-modal-root')

const ModalLogin = ({ children }) => {
  const newElement = document.createElement('div')

  useEffect(() => {
    modalRootElement.appendChild(newElement)
    return () => modalRootElement.removeChild(newElement)
  }, [])

  return createPortal(children, newElement)
}

export default ModalLogin
