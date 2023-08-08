import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'


export default function NavLinks(props){
    const{logout}=props
    return(
    <ul className='ul'>
        <li className='navLi'>
            <Link  to="/" className="link2 mr-3 p-3 hover:ease-in duration-150">Home</Link>
        </li>
        <li className='navLi'>
            <Link to= '/about' className="link2 mr-2 p-3 hover:ease-in duration-150">About</Link>
        </li>
        <li className='navLi'>
            <Link to= '/projects' className="link2 mr-2 p-3 hover:ease-in duration-150">Work</Link>
        </li>
        <li className='navLi'>
        <Link  to= '/contact' className="link2 mr-2 p-3">Contact</Link>
        </li>
    </ul>
    )
}