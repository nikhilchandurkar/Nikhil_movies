import React from 'react'
import AuthForm from './AuthForm'

const Auth = () => {
  const getData = (data)=>{
    console.log("auth",data);
  }
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false}/>
      
    </div>
  )
}

export default Auth;
