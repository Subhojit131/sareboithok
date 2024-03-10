import React from 'react';
import {Link,NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <header className="text-grey-400 bg-gray-900 body-font">
            <div className='navbar'>
            <ul>
                <li><NavLink className={"nav-bar-link"} to ="/login">LOGIN</NavLink></li>
                <li><NavLink className={"nav-bar-link"} to ="/signup">SIGNUP</NavLink></li>
                <li><NavLink className={"nav-bar-link"} to ="/wishlist">WISHLIST</NavLink></li>
            </ul>
            </div>
            </header>
        </>
    )
}

export default Navbar