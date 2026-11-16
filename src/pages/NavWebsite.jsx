import React, { useState } from 'react'
import Navbar from '../component/navwebsite/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/navwebsite/Home'
import LogIn from '../component/navwebsite/LogIn'
import SignUp from '../component/navwebsite/SignUp'
import Dashboard from '../component/navwebsite/Dashboard'

function NavWebsite() {

  const [isloggedIn, setIsLoggedIn] = useState (false);
  return (
    <>
    <div>
        <Navbar isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn}/>

        <Routes >
            <Route path='/' element={ <Home />} />
            <Route path='/login' element={ <LogIn />} />
            <Route path='/signup' element={ <SignUp />} />
            <Route path='/dashboard' element={ <Dashboard />} />
        </Routes>
    </div>
    </>
  )
}

export default NavWebsite