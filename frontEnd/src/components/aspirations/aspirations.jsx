import { images } from './../../assets'

export const Aspirations = () => {
  return (
    <>
      <div className="w-full text-white bg-primary p-[40px]">
        <h2 className="text-[20px] sm:text-[40px] pb-[20px]">
          Qué esperar de los cursos de EZ
        </h2>
        <div className="flex flex-wrap justify-between gap-y-[20px]">
          <div className="md:basis-[49.5%] flex items-center gap-x-[10px]">
            <img src={images.queEsperar1} alt="Aprende a tu ritmo" />
            <div>
              <h3 className="text-[13px] sm:text-[24px] font-medium">
                Aprende a tu ritmo
              </h3>
              <p className="text-[12px] sm:text-[18px] font-light">
                Contamos con más de +1000 horas de contenido para que aprendas
                más allá de lo básico. Cursos teóricos y prácticos con
                proyectos.
              </p>
            </div>
          </div>
          <div className="md:basis-[49.5%] flex items-center gap-x-[10px]">
            <img src={images.queEsperar2} alt="Comparte con una comunidad" />
            <div>
              <h3 className="text-[13px] sm:text-[24px] font-medium">
                Comparte con una comunidad
              </h3>
              <p className="text-[12px] sm:text-[18px] font-light">
                Pregunta, pide opinión y ofrece soluciones. Comparte tu
                experiencia de aprendizaje con otros estudiantes de la comunidad
                tan apacionados en este mundo como tú.
              </p>
            </div>
          </div>
          <div className="md:basis-[49.5%] flex items-center gap-x-[10px]">
            <img
              src={images.queEsperar3}
              alt="Aprende de los mejores profesionales"
            />
            <div>
              <h3 className="text-[13px] sm:text-[24px] font-medium">
                Aprende de los mejores profesionales
              </h3>
              <p className="text-[12px] sm:text-[18px] font-light">
                Aprende de profesionales interesados en mundo laboral!
                <br />
                Aprende tips, métodos, y ¿Por qué no? algún truco.
              </p>
            </div>
          </div>
          <div className="md:basis-[49.5%] flex items-center gap-x-[10px]">
            <img src={images.queEsperar4} alt="El nivel se adapta a tí" />
            <div>
              <h3 className="text-[13px] sm:text-[24px] font-medium">
                El nivel se adapta a tí
              </h3>
              <p className="text-[12px] sm:text-[18px] font-light">
                Escoge según tu nivel. Contamos con cursos desde nivel inicial,
                avanzados y sobre temas particulares.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aspirations
