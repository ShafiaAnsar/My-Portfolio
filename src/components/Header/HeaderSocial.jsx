import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

export const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='blank'><BsLinkedin/></a>
        <a href='https://github.com' target='blank'><FaGithub/></a>
        <a href='https://dribble.com' target='blank'><BsFacebook/></a>
    </div>
  )
}
