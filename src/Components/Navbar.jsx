import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-end text-[#FDF7F7] gap-3'>
      <NavLink to='/'  className='hover:border-b-2 hover:border-[#ECFF0F] focus:border-b-2 focus:border-[#ECFF0F]'>Plugins</NavLink>
      <NavLink to='/dashboard' className='hover:border-b-2 hover:border-[#ECFF0F] focus:border-b-2 focus:border-[#ECFF0F]'>Dashboard</NavLink>
    </div>
  )
}

export default Navbar