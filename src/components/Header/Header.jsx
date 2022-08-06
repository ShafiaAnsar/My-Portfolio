import React from 'react'
import './Header.css'
import CTA from './CTA'
import { HeaderSocial } from './HeaderSocial'
import ME from '../../assets/me.png'
function Header() {
  return (
   <header>
    <div className="container header_container "  />
    <h5 className='5'>Hello I'm</h5>
    <h1 className='S'>Shafia Ansar</h1>
    <h5 className='text-white'>
      Front-end Developer
    </h5>
    <CTA/>
    <HeaderSocial/>

    <div className="me">
      <img src={ME}alt='me'/>
    </div>
    <a href='#contact' className='scroll_down'> Scroll Down </a>
   </header>


  )
}

export default Header
