import React from 'react'
import'./Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I  have</h5>
      <h2>My Experience</h2>
      <div className="experience_container container">
        <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
        <article className='experience_detail'>
            <BsPatchCheckFill    className='experience_detail-icon'/>
            <div><h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_detail'>
            <BsPatchCheckFill    className='experience_detail-icon'/>
            <div><h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article
          className='experience_detail'>
            <BsPatchCheckFill    className='experience_detail-icon'/>
            <div><h4>Javascript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article
          className='experience_detail'>
            <BsPatchCheckFill    className='experience_detail-icon'/>
            <div><h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
          <article className='experience_detail'>
            <BsPatchCheckFill    className='experience_detail-icon'/>
            <div><h4>NodeJs</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          
          <article className='experience_detail'>
            <BsPatchCheckFill    className='experience_detail-icon'/>
            <div><h4>Mongodb</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_detail'>
            <BsPatchCheckFill    className='experience_detail-icon'/>
            <div><h4>NextJs</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article
          className='experience_detail'>
            <BsPatchCheckFill    className='experience_detail-icon'/>
            <div><h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
        </div>
        </div>
      
    </section>
  )
}

export default Experience
