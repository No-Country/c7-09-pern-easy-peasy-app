import { motion } from 'framer-motion'
import { useRef } from 'react'

const Slider = ({ children }) => {
  const divSliderRef = useRef()

  return (
    <motion.div
      id="opiniones"
      ref={divSliderRef}
      className="max-w-[calc(100vw)] overflow-hidden"
    >
      <motion.div
        drag="x"
        dragConstraints={divSliderRef}
        className="min-w-[calc(100vw-17px)] w-fit flex md:justify-between gap-x-[30px] mt-[60px] italic text-base leading-[25.36px] p-[10px]"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Slider
