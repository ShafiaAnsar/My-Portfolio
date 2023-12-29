import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG7 from '../../assets/portfolio7.jpeg'
import IMG9 from '../../assets/portfolio9.jpeg'
import IMG10 from '../../assets/portfolio10.jpg'
import IMG11 from '../../assets/portfolio11.jpg'
import IMG12 from '../../assets/portfolio12.jpg'
import IMG22 from '../../assets/portfolio22.png'

const data =[
  {
  id :1,
  image :IMG10,
  title:' Messenger-NextJs Clone',
  github:'https://github.com/ShafiaAnsar/Messenger-nextjs',
  demo:'https://messenger-clone-ochre.vercel.app/'
},
{
  id :2,
  image :IMG11,
  title:' Spotify Clone',
  github:'https://github.com/ShafiaAnsar/Spotify',
  demo:'https://music-app-rouge-rho.vercel.app'
},
{
  id :3,
  image :IMG9,
  title:'Messenger-React',
  github:' https://github.com/ShafiaAnsar/Messenger',
  demo:'https://messenger-b064a.web.app/'
},
{
  id :4,
  image :IMG12,
  title:'Netflix Clone',
  github:' https://github.com/ShafiaAnsar/Netflix',
  demo:'https://movie-streaming-app-nine.vercel.app/'
},
{
  id :5,
  image :IMG1,
  title:' Linkedin Clone',
  github:'https://github.com/ShafiaAnsar/Linkedin-clone',
  demo:'https://linkedin-clone-7befc.web.app/'
},
{
  id :6,
  image :IMG22,
  title:' Dashboard App',
  github:' https://github.com/ShafiaAnsar/Dashboardapp',
  demo:'https://dashboard-app-8bd18.web.app/'

},
{
  id :7,
  image :IMG2,
  title:'Airbnb',
  github:' https://github.com/ShafiaAnsar/Airbnb',
  demo:'https://rent-website-o95srni6x-shafiaansar.vercel.app/'
},
{
  id :8,
  image :IMG3,
  title:'Amazon Clone',
  github:'https://github.com/ShafiaAnsar/Amazon-clone',
  demo:'https://clone-80044.web.app/'
},{
  id :9,
  image :IMG4,
  title:'GPT-3 App',
  github:'https://github.com/ShafiaAnsar/Dashboardapp',
  demo:'https://gpt-app-b0298.web.app/'
},
{
  id :10,
  image :IMG5,
  title:'Portfolio',
  github:'https://https://github.com/ShafiaAnsar/My-Portfolio',
  demo:'https://my-portfolio-36ba3.web.app/'
},
{
  id :12,
  image :IMG7,
  title:'Ecommerce website',
  github:'https://github.com/ShafiaAnsar/Ecommerce-website',
  demo:'https://ecommerce-website-ac5e1.web.app//'
},]
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
