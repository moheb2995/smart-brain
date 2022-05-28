import React from "react";
import Tilt from "react-tilt";
import logo from './icons8-brain-64.png'

const Logo =()=>{
  return(
    <div>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 205 }} style={{ height: 150, width: 150 ,margin:20}} >
        <div className="Tilt-inner"> <img className="logo" src={logo}/> </div>
      </Tilt>
    </div>
  )
}
export default Logo