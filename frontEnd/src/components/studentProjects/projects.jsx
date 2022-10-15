export const Projects = ({ img, projectName, studentName }) => {
  return (
    <div className="text-white leading-[31.07px] text-[20px] bg-primary flex flex-wrap justify-center min-w-[290px] max-w-[312px] min-h-[312px] max-h-[312px] rounded-[30px]">
      <div className="w-full flex justify-center items-end">
        <img className="pointer-events-none" src={img} alt="" />
      </div>
      <div className="w-full flex flex-col justify-center items-start pl-[20px]">
        <h6 className="font-medium">{projectName}</h6>
        <p>{studentName}</p>
      </div>
    </div>
  )
}

export default Projects
