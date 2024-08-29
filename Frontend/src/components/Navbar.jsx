import React from 'react'
import Logo from '../assets/Logo.png'


const Navbar = () => {
  return (
    <>
      <header className='header'>
        <div className="logo">
          <img src={Logo} alt="" />
          <h3> | Help Center</h3>
        </div>
        <div >
          <button className='btn'>Submit a request</button>
        </div>
      </header>
    </>
  )
}

export default Navbar
