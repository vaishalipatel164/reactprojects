import React from 'react'
import Template from './Template'
import loginImg from "../../assets/login-images.jpg"

function LogIn({setIsLoggedIn}) {
  return (
   <>
   <Template 
   title="welcome back"
   desc1="Build skills for today, tommorow and beyond."
   desc2="Education to future-proof your career."
   image={loginImg}
   formtype="login"
   setIsLoggedIn={setIsLoggedIn}
    />
   </>
  )
}

export default LogIn