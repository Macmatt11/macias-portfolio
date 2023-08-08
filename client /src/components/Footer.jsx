import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {Link} from 'react-router-dom'



export default function Footer(){
    return(
        <footer className='footer'>
            <span className='company mt-4 mr-auto ml-10'>© 2023 Your Company, Inc. All rights reserved.</span>
            <a className='icon3 mt-4' href='https://linkedin.com/in/mathew-macias'><BsLinkedin/></a>
            <a className='icon3 mt-4' href='https://github.com/Macmatt11'><BsGithub/></a>
            <Link className = 'icon3 mt-4 mr-16' to='/contact'><AiOutlineMail/></Link>
        </footer>
    )
}