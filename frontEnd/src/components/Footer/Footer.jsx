import linkedinImg from '../../assets/linkedin.svg'

const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-y-8 gap-x-[100%] md:gap-x-[0] justify-evenly bg-primary py-5">
      <div className="w-[198px] h-[55px] rounded-3xl bg-logotipo-ez-footer bg-no-repeat bg-center bg-cover"></div>
      <div className="text-white text-sm basis-[180px]">
        <h3 className="mb-[19px] text-base">DESARROLLADORES</h3>
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
      <div className="text-white text-sm basis-[180px]">
        <h3 className="mb-[19px] text-base">DISEÑADORA</h3>
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
      <div className="text-white text-sm basis-[180px]">
        <h3 className="mb-[19px] text-base">TEAM LEADER</h3>
        <ul className="flex flex-col gap-[15px]">
          <li>
            <a href="" target="_blank">
              <img
                className="inline w-[24px]"
                src={linkedinImg}
                alt="linkedin icono"
              />
              &nbsp;Matias Torres
            </a>
          </li>
        </ul>
      </div>
      <div className="basis-full text-center text-white text-xs">
        <p>REALIZADO PARA FASE 1 DEL COHORTE 7 - NO COUNTRY TECH</p>
      </div>
    </footer>
  )
}

export default Footer
