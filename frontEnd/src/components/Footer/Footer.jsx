import linkedinImg from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-y-8 gap-x-[100%] md:gap-x-[0] justify-evenly text-black bg-[#d9d9d9] py-5">
      <div className="w-[198px] h-[55px] rounded-3xl bg-[#878787]">
        <img src="" alt="" />
      </div>
      <div className="text-black text-sm">
        <h3 className="mb-[19px] text-center text-base">DESARROLLADORES</h3>
        <ul className="flex flex-col gap-[15px]">
          <li>
            <a href="" target="_blank">
              <img
                className="inline w-[24px]"
                src={linkedinImg}
                alt="linkedin icono"
              />
              &nbsp;Carlos Mejía
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <img
                className="inline w-[24px]"
                src={linkedinImg}
                alt="linkedin icono"
              />
              &nbsp;Eliz Longart
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <img
                className="inline w-[24px]"
                src={linkedinImg}
                alt="linkedin icono"
              />
              &nbsp;Erick Seis
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <img
                className="inline w-[24px]"
                src={linkedinImg}
                alt="linkedin icono"
              />
              &nbsp;Jonatan Di Vincenzo
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <img
                className="inline w-[24px]"
                src={linkedinImg}
                alt="linkedin icono"
              />
              &nbsp;Jorge Camargo
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <img
                className="inline w-[24px]"
                src={linkedinImg}
                alt="linkedin icono"
              />
              &nbsp;Ricardo Jorge
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <img
                className="inline w-[24px]"
                src={linkedinImg}
                alt="linkedin icono"
              />
              &nbsp;Stiven Morales
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <img
                className="inline w-[24px]"
                src={linkedinImg}
                alt="linkedin icono"
              />
              &nbsp;Yeminson Sanchez
            </a>
          </li>
        </ul>
      </div>
      <div className="text-black text-sm">
        <h3 className="mb-[19px] text-center text-base">DISEÑADORA</h3>
        <ul className="flex flex-col gap-[15px]">
          <li>
            <a href="" target="_blank">
              <img
                className="inline w-[24px]"
                src={linkedinImg}
                alt="linkedin icono"
              />
              &nbsp;Maria Galeano
            </a>
          </li>
        </ul>
      </div>
      <div className="text-black text-sm">
        <h3 className="mb-[19px] text-center text-base">EXPLORA</h3>
        <span>Ingresar a la plataforma</span>
      </div>
      <div className="basis-full text-center text-black text-xs">
        <p>REALIZADO PARA FASE 1 DEL COHORTE 7 - NO COUNTRY TECH</p>
      </div>
    </footer>
  )
}

export default Footer
