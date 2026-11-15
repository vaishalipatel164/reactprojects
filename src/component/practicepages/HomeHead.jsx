import React from 'react'
import { Outlet } from 'react-router-dom'

function HomeHead() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default HomeHead