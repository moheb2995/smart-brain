import './App.css'
import React, { useState } from 'react';
import Nav from './component/Nav'
import Logo from './component/Logo'
import ImageLink from './component/ImageLink'
import FaceRecognition from './component/FaceRecognition'
import Rank from './component/Rank'
import Clarifai from 'clarifai'
import Login from './component/Login'

function App() {

const [url,seturl]=useState('')
const [input,setinput]=useState('')
const [box,setbox]=useState([])
const [login,setlogin]=useState(true)
const [user,setuser]=useState('')
const [pass,setpass]=useState('')

const goHome = () =>user == 'moheb' && pass == 1234 ? setlogin(false) : setlogin(true)
const app = new Clarifai.App({apiKey: '6d68ee988b8745aebf0a69aa09ce5fbb',apiEndpoint: "https://api.clarifai.com"})

const btnsubmit =()=>{
  seturl(input)
  app.models.predict(Clarifai.FACE_DETECT_MODEL,url) 
  .then(res =>setstateBox(faceLocation(items(res))))
  .catch(err => console.log(err))
}
const items = (data) =>{
  return(
    data.outputs[0].data.regions.map((item)=>item.region_info.bounding_box)
  )
} 

function faceLocation(faces){
const img = document.getElementById('img')
const w = img.width
const h = img.height
return(
faces.map((clarifaiFace)=>{
return(
  {
    leftCol: clarifaiFace.left_col * w,
    topRow : clarifaiFace.top_row * h,
    rightCol : w - Number(clarifaiFace.right_col * w),
    bottomRow : h - Number(clarifaiFace.bottom_row * h),
  }
)}))}

function setstateBox(box){
  console.log(box)
  setbox(box)
}

console.log('box:',box);

return (
<div>
  {
    login ? <Login setpass={setpass} setuser={setuser} goHome={goHome}/> : 
    <div className="App">
      
      <div className="logoo"><Logo/></div>
      <div className="sss"><Nav setlogin={setlogin}/></div>
      
      {/* <Rank/> */}
      <ImageLink setinput={setinput} btnsubmit={btnsubmit} />
      <div className="position">
      <div style={{position : 'absolute'}}>
        <FaceRecognition box={box} url={url}/>
      </div>
      </div>
    </div>
  }
</div>
)}
export default App;
