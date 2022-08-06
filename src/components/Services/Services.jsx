import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
function Services() {
  return (
    <section id='services' >
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
          <h3>UI/UX Design</h3>
          </div>
          
            <ul className="service_list">
              <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p> <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p> <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p> <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </ul>
        
          </article>    
          <article className='service'>
          <div className="service_head">
          <h3>Web Devellopment</h3>
          </div>
          
            <ul className="service_list">
              <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p> <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p> <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p> <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </ul>
        
          </article> <article className='service'>
          <div className="service_head">
          <h3>Content Creation</h3>
          </div>
          
            <ul className="service_list">
              <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p> <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p> <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p> <li>
                <BiCheck className='service_list-icon'/>
              </li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </ul>
        
          </article> 
      </div>
    </section >
  )
}

export default Services