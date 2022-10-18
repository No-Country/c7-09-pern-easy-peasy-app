import userCeo from '../../assets/userCEO.jpg'

export const Ceo = () => {
  return (
    <>
      <div className="w-[70%] sm:mt-16 flex flex-wrap sm:flex-nowrap overflow-hidden ">
        <div className="sm:basis-1/2 flex flex-col sm:flex-row justify-end">
          <img
            className="min-h-[65%] max-h-[65%] sm:max-h-[100%] w-full overflow-hidden object-cover object-top rounded-t-[30px] sm:rounded-none sm:rounded-l-[30px]"
            src={userCeo}
            alt=""
          />
        </div>
        <div className="sm:basis-1/2 flex justify-center items-center flex-wrap p-[20px] rounded-b-[30px] sm:rounded-none sm:border-0 sm:rounded-r-[30px] sm:border-r border-r-[#256D85] drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)] border-b border-b-[#256D85]">
          <div className="">
            <blockquote className="text-sm  leading-[26.95px] md:text-2xl md:leading-[38.05px] font-light">
              Proponemos una educación accesible y de calidad. Creemos que
              respetar los tiempos y el ritmo de aprendizaje de cada persona es
              la <span className="underline text-primary">clave</span> para
              formar no solo excelentes profesionales sino colegas empaticos
            </blockquote>
          </div>
          <div className="w-full">
            <address>
              <h6 className="md:text-[24px] text-dark-primary text-end font-bold	italic">
                Zed Ramos
              </h6>
              <p className="md:text-[14px] text-primary text-end">
                CTO y Co-fundador EZ
              </p>
            </address>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ceo
