import React from 'react'
import Footer from './footer'



import '../styles/layout.scss'


const Layout = ({children}) => {
    return(
        <main className="site-wrapper">
            <main className="site-content">
                {children}
            </main >
            <Footer />
        </main>
    )
}


export default Layout


