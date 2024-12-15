import React  from 'react'
// import {Link} from 'react-router-dom'
import './navbar.css';
import {NavLink} from 'react-router-dom'


function Navbar(){
  
    return(
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/product'>Products</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/search'>Search</NavLink>
            <NavLink to='/eventhandle'>Event</NavLink>
            <NavLink to='/lifecycle'>Lifecycle</NavLink>
            <NavLink to='/update'>Update</NavLink>
            <NavLink to='/shouldcomp'>Shouldcomp</NavLink>
            <NavLink to='/parentcomp'>Unmount</NavLink>
            <NavLink to='/propsstate'>propsSate</NavLink>
            <NavLink to='/fetchapi'>FetchAPI</NavLink>
            <NavLink to='/useEffect'>useEffect</NavLink>
            <NavLink to='/unmount1'>unmount1</NavLink>
            <NavLink to='/useEff'>UseEff</NavLink>
           
        </nav>
    )
}

export default Navbar;