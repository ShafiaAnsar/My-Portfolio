import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        {/* Frontend Development */}
        <article className='service'>
          <div className='service_head'>
            <h3>Frontend Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>HTML - Crafting the structure of your web applications.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>CSS - Styling and designing your web pages to perfection.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Javascript - Implementing interactive and dynamic features.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>React - Building efficient and scalable user interfaces.</p>
            </li>
          </ul>
        </article>

        {/* Backend Development */}
        <article className='service'>
          <div className='service_head'>
            <h3>Backend Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>NodeJs - Creating server-side applications and APIs.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>MongoDB - Designing and managing databases for your applications.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>VueJs - Building dynamic and reactive user interfaces.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Python - Developing robust and scalable back-end solutions.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
