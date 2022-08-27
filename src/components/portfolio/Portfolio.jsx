import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.jpeg'
import IMG7 from '../../assets/portfolio7.jpeg'
import IMG8 from '../../assets/portfolio8.jpeg'
const data =[{
  id :1,
  image :IMG1,
  title:' Linkedin Clone',
  github:'https://github.com/ShafiaAnsar/Linkedin-clone',
  demo:'https://linkedin-clone-7befc.web.app/'
},
{
  id :2,
  image :IMG2,
  title:' Dashboard App',
  github:' https://github.com/ShafiaAnsar/Dashboardapp',
  demo:'https://dashboard-app-8bd18.web.app/'
},{
  id :3,
  image :IMG3,
  title:'Amazon Clone',
  github:'https://github.com/ShafiaAnsar/Amazon-clone',
  demo:'https://clone-80044.web.app/'
},{
  id :4,
  image :IMG4,
  title:'GPT-3 App',
  github:'https://github.com/ShafiaAnsar/Dashboardapp',
  demo:'https://gpt-app-b0298.web.app/'
},
{
  id :5,
  image :IMG5,
  title:'Portfolio',
  github:'https://https://github.com/ShafiaAnsar/My-Portfolio',
  demo:'https://my-portfolio-36ba3.web.app/'
},{
  id :6,
  image :IMG6,
  title:'Render App',
  github:'https://github.com/ShafiaAnsar/Render-app',
  demo:'https://render-app-46fd4.web.app/'
},
{
  id :7,
  image :IMG7,
  title:'Ecommerce website',
  github:'https://github.com/ShafiaAnsar/Ecommerce-website',
  demo:'https://ecommerce-website-ac5e1.web.app//'
},
{
  id :8,
  image :IMG8,
  title:'Snapchat Clone ',
  github:'https://github.com/ShafiaAnsar/Snapchat-clone',
  demo:'https://snapchat-clone-86d6e.web.app//'
}]
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
       {
        data.map(({id,image,title,github,demo})=>
        {
          return(
            <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target="blank">Github</a>
                <a href={demo} className='btn btn_primary' target="blank">Live Demo</a>
              </div>
            </article>
          )
        })
       }
        
      </div>
    </section >
  )
}

export default Portfolio