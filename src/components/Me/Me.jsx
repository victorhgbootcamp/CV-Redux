import React from "react";
import "./Me.scss";



const Me = ({ me }) => {

  return (

    <div className="portada">

      <div className="foto">
        <img src={me.image} alt="" />
      </div>

      <div>
        <p>📆 {me.birthDate}</p>
        <p>🏠 {me.cp} {me.city}</p>
        <p className="icono"><img src="./icons8-teléfono-celular-48.png" width="21px" alt=""/>{me.phone}</p>
        <p>📧 
          <a href={"mailto:" + me.email}>
            victor.hernandez@bootcamp-upgrade.com</a>
        </p>
        
        <p>
          <a className="icono" href={me.gitHub}><img src="./icons8-github-64.png" width="21px" alt=""/>
            GitHub
          </a>
          </p>
          

      </div>

    </div>
  )
}

export default Me