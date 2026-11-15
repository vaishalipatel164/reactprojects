import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/labs")
    }
  return (
    <>
    <div>This is Contact Page</div>
    <button 
    className='border-amber-400 bg-amber-400 rounded px-2 mt-2' 
    onClick={clickHandler}>
    Move to Labs Page
    </button>
    </>
  )
}

export default Contact