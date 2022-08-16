import React from "react";
import '../More/More.scss'

const More = ({languages, habilities}) => {

    return (
        <div className="more">

      <div className="languages">
      <h3>Idiomas</h3>
        {languages.map((item) =>{
            return (
              
            <div key={JSON.stringify(item)}>
            
              <p><strong>{item.language}</strong></p>
              <p>{item.level}</p>
            </div>
            
            )})}
    </div>

    <div className="habilidades">
    <h3>Tecnologias</h3>
    <div className="tecnologias">
        {habilities.map((item2) =>{
            return (
            <div key={JSON.stringify(item2)}>
              <p>{item2}</p>
             </div>
            )})}
    </div>

</div>
    </div>
  



    )
}

export default More