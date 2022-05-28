import React from "react";

const ImageLink =({setinput,btnsubmit})=>{
  return(
  <div className="divP">
    
    <div className="div">
      <p className="xxlarg ma-b"><b>give me a photo</b></p>
      <div className="btn-in">
        <input className="input" type={'url'} placeholder="URL" onChange={e=>setinput(e.target.value)} autoFocus/>
        <button className="btn" onClick={btnsubmit}>detect</button>
      </div>
    </div>
  </div>
  )
}
export default ImageLink