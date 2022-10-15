import userGaren from '../../assets/userGaren.jpg'
import userJanna from '../../assets/userJanna.jpg'
import userThresh from '../../assets/userThresh.jpg'
import userNasus from '../../assets/userNasus.jpg'
import { CardUserStories } from './CardUserStories'

export const UserStories = () => {
  return (
    <>
      <CardUserStories
        image={userJanna}
        name={'Janna'}
        text={
          <blockquote className="">
            “<span className="font-bold">EZ</span> no solo me dio las
            herramientas para insertarme en el mundo IT, sino una comunidad en
            la cual apoyarme”
          </blockquote>
        }
      />
      <CardUserStories
        image={userGaren}
        name={'Garen'}
        text={
          <blockquote className="">
            “Gracias a <span className="font-bold">EZ</span> pude actualizarme
            en tecnologías especificas, y formarme como Full Stack”
          </blockquote>
        }
      />
      <CardUserStories
        image={userNasus}
        name={'Nasus'}
        text={
          <blockquote className="">
            “Vengo de la rama del diseño, gracias a{' '}
            <span className="font-bold">EZ</span>, hoy puedo desempeñarme como
            UI&motion”
          </blockquote>
        }
      />
      <CardUserStories
        image={userThresh}
        name={'Maria'}
        text={
          <blockquote className="">
            “Luego de 8 meses de mucho aprendizaje logré conseguir mi primer
            trabajo como Backend, gracias a{' '}
            <span className="font-bold">EZ</span>”
          </blockquote>
        }
      />
    </>
  )
}

export default UserStories
