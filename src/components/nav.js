import React, {useState} from 'react';
import {Link} from 'gatsby'
import '../styles/nav.scss'


const Nav = () => {
    const [showNav, setShowNav] = useState()

    return(
        <nav id="nav-wrapper">
            <nav id="overlay-nav">
                <Link to="/">Home</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Writing</Link>
                <Link to="/">Volunteering and Community</Link>
            </nav>
        </nav>
    )
}

export default Nav

