import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <div className="header">
            <nav className="navbar">
                <div className="navbar-container">
                    <NavLink to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <FontAwesomeIcon icon={faCircleNodes} className='logo-Icon' />AI-JOY
                    </NavLink>
                </div>
                <div className="menu-icon">
                    <FontAwesomeIcon icon={click ? faTimes : faBars} className={click ? 'cross' : 'burger' } onClick={handleClick}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu deactive'}>
                    <li className="nav-item">
                        <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/careers' className='nav-links' onClick={closeMobileMenu}>
                            Careers
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/aboutUs' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/contactUs' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}