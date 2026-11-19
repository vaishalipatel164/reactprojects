import React from 'react'
import Template from './Template'
import signUpImg from "../../assets/singup-images.jpg"

function SignUp({setIsLoggedIn}) {
  return (
    <>
    <Template 
    title="Join the millions learning code with studymotion for free"
       desc1="Build skills for today, tommorow and beyond.."
       desc2="Education to future-proof your career."
       image={signUpImg}
       formtype="signup"
       setIsLoggedIn={setIsLoggedIn}
        />
    </>
  )
}

export default SignUp