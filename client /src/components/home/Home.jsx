import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaFilePdf} from 'react-icons/fa'
import './home.css'

export default function Home(){
    return(
        <div className='homeContainer'>
            <h1 className='workTitle'>
                FullStack Javascript 
                <br/>
                Web Developer
            </h1>
            <br/>
            <p className='homeP'>
                Hi, I'm Mathew Macias, A Passionate Full Stack Web 
                Developer
                <br/>
                Based in Phoenix, Arizona 
            </p>
            <div className='social-media'>
            <a className='icon1' href='https://linkedin.com/in/mathew-macias'><BsLinkedin/></a>
            <a className='icon2' href='https://github.com/Macmatt11'><BsGithub/></a>
            <a className='icon2' href='https://drive.google.com/file/d/1CIfWf-Rh7f7kxdeOPIh4mb1tD9LPOMzy/view?usp=sharing'><FaFilePdf/></a>
            </div>
            <br/>
            <h2 className='techStack'>Tech Stack</h2>
            <ul className='homeUl'>
                <li>
                    <img className= 'techImg relative top-3 left-2.5'  src='https://img.icons8.com/?size=2x&id=20909&format=png'/>
                </li>
                <li>
                    <img className= 'techImg relative top-3 left-2.5' src='https://img.icons8.com/?size=2x&id=7gdY5qNXaKC0&format=png'/>
                </li>
                <li>
                    <img className= 'techImg relative top-3 left-2.5'  src='https://img.icons8.com/?size=2x&id=CIAZz2CYc6Kc&format=png'/>
                </li>
                <li>
                    <img className= 'techImg relative top-3 left-2.5' src='https://img.icons8.com/?size=2x&id=108784&format=png'/>
                </li>
                <li>
                    <img className= 'techImg relative top-3 left-2.5' src='https://img.icons8.com/?size=2x&id=NfbyHexzVEDk&format=png'/>
                </li>
                <li>
                    <img className= 'techImg relative top-3 left-2.5' src='https://img.icons8.com/?size=2x&id=84710&format=png'/>
                </li>
                <li>
                    <img className= 'techImg relative top-3 left-2.5' src='https://img.icons8.com/?size=2x&id=20906&format=png'/>
                </li>
                <li >
                    <img className= 'techImg relative top-1.8 left-2.5'src='https://adeeb-dev.onrender.com/static/media/mongoDB.2178943141ba7e7fae4e.png'/>
                </li>
            </ul>

            <img src='https://media.licdn.com/dms/image/C5603AQFIimKvqrKzuA/profile-displayphoto-shrink_800_800/0/1573765572816?e=1694649600&v=beta&t=vHDkEpk-o8NG0APLAJP_WR7F0lmA7wgB1mWHaMQUwxA' className='floatingImg rounded-full shadow-2xl'/>
            
        </div>
    )
}