import React from "react"
import NavLinks from "./NavLinks"
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineCloseCircle} from "react-icons/ai"
import {Link} from 'react-router-dom'



export default function NavMobile(props){
const {logout} = props
const [open, setOpen] = React.useState(false)

const hamburgerIcon = <RxHamburgerMenu 
            className="hamburger" 
            size="40px" 
            onClick={()=>setOpen(!open)} />

const closeIcon = <AiOutlineCloseCircle
            className="closeIcon" 
            size="40px" 
            color="red"
            onClick={()=>setOpen(!open)} />


    return(
        <nav className="mainNav">
            <h2 className='mr-auto ml-10 mt-3'>
                <Link to="/">
                mathew-macias.dev
                </Link>
            </h2>
            {open? closeIcon : hamburgerIcon}
            {open && <NavLinks logout={logout}/>}
        </nav>
    )
}
