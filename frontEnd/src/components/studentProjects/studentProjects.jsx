import Projects from './projects.jsx'
import cursoImage from '../../assets/curso-no-available.svg'

export const StudentProjects = () => {
  return (
    <>
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
    </>
  )
}

export default StudentProjects
