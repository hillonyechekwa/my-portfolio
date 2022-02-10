import React from 'react'
import Nav from './nav'
import Footer from './footer'



import '../styles/layout.scss'


const Layout = ({children}) => {
    return(
        <main className="site-wrapper">
            <Nav />
            <main className="site-content">
                {children}
            </main >
            <Footer />
        </main>
    )
}


export default Layout


