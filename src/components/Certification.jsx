import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import web from '../assets/web design.png';
import figma from '../assets/figma.png';
import js from '../assets/js.png';
import python from '../assets/python.png';


const Certification = () => {

    const certifications= [
        {
          "date": "March 4, 2023 ",
          "title": "Web Design",
          "description": "a linkedin learning certification for the completion of web Design tutorial",
          "url": "https://www.linkedin.com/learning/certificates/9471965153693e1f4c3cf9b9c29bdbbfd56816127a258e19c527ebcfd9eccdc2",
          "imgSrc": `${web}`
        },
        {
          "date": "April 25, 2023 ",
          "title": "Python Essential training",
          "description": "a linkedin learning certification for the completion of Python training",
          "url": "https://www.linkedin.com/learning/certificates/428116f28280df8d8605e52f03efade919c304ad72838e36d88aa1cbae54b085",
          "imgSrc": `${python}`
        },
        {
          "date": "April 13, 2023 ",
          "title": "Introduction to JavaScript",
          "description": "a Sololearn certification for the completion of Introduction to JS",
          "url": "https://api2.sololearn.com/v2/certificates/CC-DQMDDIOX/image/png",
          "imgSrc": `${js}`
        },
        {
          "date": "March 6, 2023 ",
          "title":"Figma",
          "description": "a linkedin learning certification for the completion of the course",
          "url": "https://www.linkedin.com/learning/certificates/3367944f1b8973ab687c9d2d0ff1f2113b86fb79680ce5a70f873e8c3fd18f82",
          "imgSrc": `${figma}`
        }
      ]

  return (
    <div id='certification'>
      <h2>Certifications</h2>
      <section>
        <article>
            <Carousel
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              interval={2000}
              infiniteLoop={true}
              autoPlay={true}
            >
                {
                    certifications.map((i)=>(
                        <div key={i.title} className='workItem'>
                            <img src={i.imgSrc} alt={i.title} />
                            <aside>
                                <h3>{i.title}</h3>
                                <p>{i.description}</p>
                                <a href={i.url} target={'blank'}>View </a>
                            </aside>
                        </div>
                    ))
                }
            </Carousel>
        </article>
      </section>
    </div>
  )
}

export default Certification
