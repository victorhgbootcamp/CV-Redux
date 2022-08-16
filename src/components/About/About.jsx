import React from 'react'
import "./About.scss"
const About = ({aboutMe}) => {
   
  return (
    <div>
    <div className="about">
        {aboutMe.map((item) =>{
            return (
            <div key={JSON.stringify(item)}>
              <p>{item.info}</p>
            </div>
            )})}
    </div>
    </div>
  )
}

export default About;
