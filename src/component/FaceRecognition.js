import React from 'react'

const FaceRecognition = ({url,box}) => {
return (
  <div className='position'>
    <img src={url} id='img' />
    {
      box.map((box)=>
        <div className='bounding-box' 
          style={{
            top: box.topRow ,
            right: box.rightCol,
            bottom: box.bottomRow ,
            left: box.leftCol
          }}
        >
        </div>
      )
    }
  </div>
)
}
export default FaceRecognition
