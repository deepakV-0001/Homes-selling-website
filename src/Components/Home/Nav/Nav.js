import React, { useState } from 'react'
import '../Nav/nav.css'
import { NavLink } from 'react-router-dom'
import logo from '../Nav/logo-main.svg'
import { IoReorderThreeSharp } from 'react-icons/io5'


const Nav = () => {

  const [showMenu, setShowMenu] = useState(false);

  const activeNav = ({ isActive }) => {
    return {

      color: isActive ? '#c8543f' : '#3d6c6f'
    }
  }
  return (
    <div className='nav-bar'>
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className={`nav-options ${showMenu ? 'good' : ''}`}>
        <li className='nav-resp-icon' ><IoReorderThreeSharp onClick={() => setShowMenu(!showMenu)} /></li>

        <ul className='nav-icons' >
          <li>< NavLink to="/" style={activeNav} >Home</ NavLink></li>
          <li><NavLink to="/how-it-works" style={activeNav}>How it Works</NavLink></li>
          <li><NavLink to="/for-agents" style={activeNav}>For Agents</NavLink></li>
          <li><NavLink to="/about-us" style={activeNav}>About us</NavLink></li>
          <li><NavLink to="/blog" style={activeNav}>Blog</NavLink></li>
          <li><NavLink to="/contact" style={activeNav}>Contact us</NavLink></li>

          <ul className='nav-btns' >
            <li className='nav-login' >login</li>
            <li className='nav-signup' >sign up</li>
          </ul>
        </ul>




      </div>
    </div>
  )
}

export default Nav