import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

export const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/shafia-ansar-886888212/' target='blank'><BsLinkedin/></a>
        <a href='https://github.com/ShafiaAnsar' target='blank'><FaGithub/></a>
        <a href='facebook.com/shafia.ansar.5' target='blank'><BsFacebook/></a>
    </div>
  )
}
