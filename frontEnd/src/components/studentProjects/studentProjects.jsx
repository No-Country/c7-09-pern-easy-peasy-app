import Projects from '../projects/projects.jsx'
import cursoImage from '../../assets/curso-no-available.svg'

export const StudentProjects = () => {
  return (
    <div className="grid grid-cols-4 gap-24 sm:gap-24 md:gap-24 lg:gap-24-4 xl:gap-24 items-stretch">
      <Projects
        img={cursoImage}
        projectName={'Nombre del proyecto'}
        studentName={'Yerik Ruíz'}
      />
      <Projects
        img={cursoImage}
        projectName={'Nombre del proyecto'}
        studentName={'Jorge Gutierrez'}
      />
      <Projects
        img={cursoImage}
        projectName={'Nombre del proyecto'}
        studentName={'Stivenson Mendoza'}
      />
      <Projects
        img={cursoImage}
        projectName={'Nombre del proyecto'}
        studentName={'Eliezcar Páez'}
      />
    </div>
  )
}

export default StudentProjects
