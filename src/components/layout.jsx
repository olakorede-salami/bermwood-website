import React from 'react'
import Footer from './footer'
import Header from './header'
import '../style/layout.css'

const Layout = ({children}) => {
    return ( 
    <div className="layout-div">
        <Header />
        {children}
        <Footer />
    </div> );
}
 
export default Layout;