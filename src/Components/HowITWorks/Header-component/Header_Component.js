import React from 'react'
import '../Header-component/HeaderComponent.css'
import Navigate from '../../Naviagte-btns/Navigate'

const Header_Component = (props) => {
  return (
    <div className='works-header header-container'>
        <div className='top-margin'></div>
      <div className='works-header-content'>
        <h2>{props.heading}</h2>
        <div className='works-navigate-btns'>
          <Navigate text={props.text} path={props.path} />
        </div>
      </div>

    </div>
  )
}

export default Header_Component