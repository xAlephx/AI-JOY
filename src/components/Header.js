import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import './Header.css'

export default function Header( { isMenuActive, handleClick, closeMobileMenu } ) {
    const activeLink = ({isActive}) => isActive ? 'nav-links active-link' : 'nav-links';
    
    return (
        <div className="header">
            <nav className="navbar">
                <div className="navbar-container">
                    <NavLink to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <FontAwesomeIcon icon={faCircleNodes} className='logo-Icon' />AI-JOY
                    </NavLink>
                </div>
                <div className="menu-icon">
                    <FontAwesomeIcon icon={isMenuActive ? faTimes : faBars} className={isMenuActive ? 'cross' : 'burger' } onClick={handleClick}/>
                </div>
                <ul className={isMenuActive ? 'nav-menu active' : 'nav-menu deactive'}>
                    <li className="nav-item">
                        <NavLink to='/' className={activeLink} onClick={closeMobileMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/products' className={activeLink} onClick={closeMobileMenu}>
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/careers' className={activeLink} onClick={closeMobileMenu}>
                            Careers
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/aboutUs' className={activeLink} onClick={closeMobileMenu}>
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/contactUs' className={activeLink} onClick={closeMobileMenu}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}