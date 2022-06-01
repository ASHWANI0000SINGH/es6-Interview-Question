import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        {/* <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink> */}
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <Link to="/contact">Contact</Link>


    </div>
  )
}

export default Nav