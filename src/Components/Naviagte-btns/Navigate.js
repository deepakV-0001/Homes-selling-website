import React from 'react'
import '../Naviagte-btns/navigate.css'
import { Link } from 'react-router-dom'

const Navigate = (props) => {
  return (
    <div className='navigate-container'>
        <Link className='blue home-blue' to="/" >Home</Link>
        <Link className='brown' to={`/${props.path}`}>{props.text}</Link>
    </div>
  )
}

export default Navigate