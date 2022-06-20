import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as Icons from "react-icons/fa";
import {navItems} from './NavItems';
import './Navbar.css'
import Button from './Button'
import Dropdown from './Dropdown'

const Navbar = () => {
  const [dropDown, setDropdown] = useState(false)
  return (
    <>
      <nav className='navbar'>
            
              <Link to="/" className='navbar-logo'>
                NATURE
              <Icons.FaTree />
              </Link>
              <ul className='nav-items'>
                {navItems.map((item) =>{
                  if(item.title === 'Services'){
                    return(
                    <li key={item.id} className={item.cName}  onMouseEnter={()=> setDropdown(true)} onMouseLeave={()=> setDropdown(false)}>
                    <Link to={item.path}>{item.title}</Link>
                    {dropDown && <Dropdown />}
                  </li>
                )}
                return(
                  <li key={item.id} className={item.cName}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
                  
})}
              </ul>
              <Button />
      </nav>
    </>
  )
}

export default Navbar