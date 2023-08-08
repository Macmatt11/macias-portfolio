import React from "react"
import {Link} from 'react-router-dom'
import 'tailwindcss/tailwind.css';

export default function Navigation(){
    return(
        <nav className ='nav flex p-3 font-sans'>
            <h2 className='mr-auto ml-10 mt-3'>
                <Link to="/">
                mathemacias.dev
                </Link>
                </h2>
                <Link to="/" className="link mr-3 p-3 hover:ease-in duration-150">
                Home
                </Link>
                <Link to= '/about' className="link mr-2 p-3 hover:ease-in duration-150">
                About
                </Link>
                <Link to= '/projects' className="link mr-2 p-3 hover:ease-in duration-150">
                Work
                </Link>
                <Link to= '/contact' className="link mr-2 p-3">
                Contact 
                </Link>
            </nav>
        
    )
}