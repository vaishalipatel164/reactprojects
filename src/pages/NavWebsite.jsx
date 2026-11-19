import React, { useState } from 'react'
import Navbar from '../component/navwebsite/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/navwebsite/Home'
import LogIn from '../component/navwebsite/LogIn'
import SignUp from '../component/navwebsite/SignUp'
import Dashboard from '../component/navwebsite/Dashboard'
import PrivateRoute from '../component/navwebsite/PrivateRoute'

function NavWebsite() {

  const [isLoggedIn, setIsLoggedIn] = useState (false);
  return (
    <>
    <div className='w-full min-h-screen bg-black flex flex-col overflow-x-hidden'>
        <Navbar 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn}/>

        <Routes >
            <Route path='/' element={ <Home isLoggedIn={isLoggedIn}/>} />
            <Route path='/login' element={ <LogIn setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/signup' element={ <SignUp setIsLoggedIn={setIsLoggedIn}  />} />
            <Route path='/dashboard' 
            element={ 
              <PrivateRoute isLoggedIn={isLoggedIn}>
                 <Dashboard />
              </PrivateRoute>
              } />
        </Routes>
    </div>
    </>
  )
}

export default NavWebsite