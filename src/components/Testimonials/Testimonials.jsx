import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'
// import Swiper core and required modules
import { Pagination,Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data =[{
  avatar: AVTR1,
  name:'Arslan Haroon',
  review:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dignissimos facere assumenda excepturi. Doloremque ipsum non culpa unde iure optio, ex fugit eaque, recusandae ipsa nisi laborum tempora distinctio aliquid?'
},
{
  avatar: AVTR2,
  name:'Ahsan Haroon',
  review:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dignissimos facere assumenda excepturi. Doloremque ipsum non culpa unde iure optio, ex fugit eaque, recusandae ipsa nisi laborum tempora distinctio aliquid?'
},{
  avatar: AVTR3,
  name:'Asad Haroon',
  review:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dignissimos facere assumenda excepturi. Doloremque ipsum non culpa unde iure optio, ex fugit eaque, recusandae ipsa nisi laborum tempora distinctio aliquid?'
},{
  avatar: AVTR4,
  name:'Afia Haroon',
  review:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dignissimos facere assumenda excepturi. Doloremque ipsum non culpa unde iure optio, ex fugit eaque, recusandae ipsa nisi laborum tempora distinctio aliquid?'
},]
function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container" modules={ [Pagination,Navigation]} spaceBetween={40} slidesPerView={1} navigation       pagination={{ clickable: true }}

       >
        {data.map(({avatar,review,name})=>{
          return(
<SwiperSlide   className='testimonial'>
          <div className="client_avatar">
            <img src={avatar} alt="Avatar one" />
          </div>
          <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
        </SwiperSlide  >
          )
        })}
        
        
      </Swiper>
    </section>
  )
}

export default Testimonials
