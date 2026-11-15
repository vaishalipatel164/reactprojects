import React from 'react'
import { useNavigate } from 'react-router-dom'

function Labs() {
    const navigate = useNavigate();
    function clickHandler() {
        navigate("/about");
    }
  return (
    <>
    <div>This is Labs Page</div>
    <button 
    className='border-amber-400 bg-amber-400 rounded px-2 mt-2' 
    onClick={clickHandler}>
    Move to About Page
    </button>
    </>
  )
}

export default Labs