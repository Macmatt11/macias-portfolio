import React from 'react'
import './about.css'


export default function About(){
    return(
        <div className='aboutContainer'>
            <img className='aboutImg rounded-2xl' src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80'/>
            <h2 className='aboutMe text-xl'>About Me</h2>
            <h1 className='driven'>Driven Full Stack Web Developer
                Based in the desert of Phoenix, AZ 
            </h1>
            <p className='aboutP'>Hi, I'm Mathew Macias, an aspiring full-stack web developer eager to create meaningful and impactful solutions. As a new developer, I'm enthusiastic about problem-solving and have already begun cultivating valuable skills in teamwork, adaptability, and goal-oriented flexibility. I take great pride in my strong work ethic and strive to maintain professionalism in all aspects of my work. Constant learning and improvement are key priorities for me as I embark on this exciting journey in web development. While I haven't yet had the opportunity to mentor or lead others, I'm genuinely excited about the prospect of sharing my knowledge and helping others grow in the future. I'm committed to continuous growth and look forward to making a positive contribution in the web development community. </p>
        </div>
    )
}