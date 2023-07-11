import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Navbar() {
  return (
    <div>
        <div className='navbar'>
      <NavLink exact to="/"
      style={{color:"BLACK",padding:"10px",margin:"auto",}}
      activeStyle={{color:"BLUE"}}>
        Home
      </NavLink>
      <NavLink to="/About"
      style={{color:"BLACK",padding:"10px",margin:"auto",}}
      activeStyle={{color:"BLUE"}}>
        About
      </NavLink>
      <NavLink to="/Animals"
      style={{color:"BLACK",padding:"10px",margin:"auto",}}
      activeStyle={{color:"BLUE"}}>
        Animals
      </NavLink>
      <NavLink to="/Centers"
      style={{color:"BLACK",padding:"10px",margin:"auto",}}
      activeStyle={{color:"BLUE"}}>
        centers
      </NavLink>
      <NavLink to="/Adoptions"
      style={{color:"BLACK",padding:"10px",margin:"auto",}}
      activeStyle={{color:"BLUE"}}>
        Adoptions
      </NavLink>
    </div>
    </div>
  )
}

export default Navbar