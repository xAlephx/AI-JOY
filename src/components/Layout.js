import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'

function Layout() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    function handleClick() {
        setIsMenuActive(!isMenuActive);
    };
    function closeMobileMenu() {
        setIsMenuActive(false);
    };

    function ActiveMenu() {
        if (isMenuActive)
            return null
        else {
            return <><ScrollRestoration /><Outlet /><Footer /></>
        }
    }

    return (
        <div className='app'>
            <Header isMenuActive={isMenuActive} handleClick={handleClick} closeMobileMenu={closeMobileMenu} />
            <ActiveMenu />
        </div>
    )
}

export default Layout