import React from 'react'
import Img from "../assets/59cfcea786465c009ce38a85c6adab04.jpg";
import './about.css';



const About = () => {
  return (
    <section className='about-us'>
    <div className='title'>
      <p>About Us</p>
    </div>

  <div className='about-1'>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt, quod facere commodi ab nam corrupti cumque fuga totam maxime necessitatibus iusto dolores veniam odio adipisci dolor doloribus aut voluptas!</p>
      <img src={Img } className='right-image'/>
  </div>
  <div className='about-1'>
      
      <img src={Img } className='left-image'/>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt, quod facere commodi ab nam corrupti cumque fuga totam maxime necessitatibus iusto dolores veniam odio adipisci dolor doloribus aut voluptas!</p>
  </div>
  </section>
  )
}

export default About