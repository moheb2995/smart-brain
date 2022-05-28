import React from "react";

const Nav =({setlogin})=>{
  return(
    <nav>
      <h2 onClick={()=>setlogin(true)}>sing out</h2>
    </nav>
  )
}
export default Nav