import React from 'react'
import invertis from '../assets/invertis.jpg';
import bdm from '../assets/bdm.png';

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Education Qualification</h2>
      <section>
        <TestimonialCard name={"Invertis University (Bareilly)"} feedback={"Currently pursuing BCA (3rd year) securing overall 85%"} img={invertis}/>
        <TestimonialCard name={"BDM Public School (CBSE)"} feedback={"Completed My Intermediate Education (2021) and secured 94.8%"} img={bdm}/>
        <TestimonialCard name={"BDM Public School (CBSE)"} feedback={"Completed My High School Education (2019) and secured 88.6%"} img={bdm}/>
      </section>
    </div>
  )
}

const TestimonialCard=({name,feedback,img})=>(
    <article>
        <img src={img} alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial
