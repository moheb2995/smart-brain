import React from 'react'

const Login = ({goHome,setuser,setpass}) => {
return (
  <div>
    <h1 className='h'>welcome</h1>
  <div className='card '>
    <input className='in' type="text" onChange={e=>setuser(e.target.value)} placeholder='user name' /><br/>
    <input className='in' type="password" onChange={e=>setpass(e.target.value)} placeholder='password'/><br/>
    <button className='in' onClick={()=>goHome()}>login</button>
  </div>
  </div>
)
}

export default Login