import React from 'react'
import CV from '../../assets/CV.pdf'
import ShafiaCV from '../../assets/ShafiaCV.pdf'
function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn '>Download CV</a>
      <a href='#contact' className='btn btn-primary'> Lets Talk  </a>

    </div>
  )
}

export default CTA
