import React from 'react'
import './Header.css'
import CTA from './CTA'
import { HeaderSocial } from './HeaderSocial'
import ME from '../../assets/me.png'
function Header() {
  return (
   <header>
    <div className=" container header_container ">
    <h4 className='5'>Hello I'm</h4>
    <h1 className='S'>Shafia Ansar</h1>
    <h4 className='text-white'>
      Front-end Developer
    </h4>
    <CTA/>
    <HeaderSocial/>

    <div className="me">
      <img src={ME}alt='me'/>
    </div>
    <a href='#contact' className='scroll_down'> Scroll Down </a>
    </div>
   </header>


  )
}

export default Header
