import './App.scss';
import About from "./components/About/About"
import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experience"
import Me from "./components/Me/Me"
import More from "./components/More/More"
import { CV } from "./CV/CV"
import { useDispatch, useSelector } from 'react-redux';
import { clickAbout, clickEducation, clickExperience, clickMore } from './redux/cv/cv.actions';



const {me, aboutMe, education, experience, languages, habilities} = CV;

function App() {
  const dispatch = useDispatch();
  const menu = useSelector(state => {
    return state.menuBlock.menu}
  )

  return (

    <div className="app">
    <div className='cabecera'>
    <h3>Hola, soy:</h3>
    <h1>{me.name} {me.adress}</h1>
    <h3>Full Stack Developer</h3>
    </div>
    <Me me={me} />
    <div className='botones'>

    <div className='boton1' onClick={() => dispatch(clickExperience())}>
    <img src="icons8-conocimiento-del-cliente-80.png" width="50px" alt=""/>
    <span>Experiencia</span>
    </div>
    <div className='boton2' onClick={() => dispatch(clickEducation())}>
    <img src="./icons8-estudiante-masculino-50.png" width="50px" alt=""/>
    <span>Educación</span>
    </div>
    
    <div className='boton3' onClick={() => dispatch(clickMore())}>
    <img src="icons8-skills-64.png" width="50px" alt=""/>  
    <span>Habilidades</span>
    </div>

    <div className='boton4' onClick={() => dispatch(clickAbout())}>
    <img src="icons8-sobre-nosotros-64.png" width="50px" alt=""/>
    <span>Sobre mí</span>
    </div>
        
          
    </div>
    {menu === 1 ? (
        <Experience experience={experience} />
      ) : menu === 2 ? (
        <Education education={education} />
      ) : menu === 3 ? (
        <More languages={languages} habilities={habilities} />
      ) : menu === 4 ? (
        <About aboutMe={aboutMe} />
      ) : (
        ""
      )}
      
    </div>
  );
}

export default App;