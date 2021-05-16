import React, {useState} from 'react';
import { Link } from 'gatsby';
import '../style/header.css';
import {AiFillHome, FaUserAlt, VscFeedback, FaTools, CgSmartHomeHeat, FaQuestionCircle, GrGallery, AiTwotoneMail, FaTimes} from 'react-icons/all';
import {IconContext} from 'react-icons';


const Header = () => {
    
const [header, setHeader] = useState('header')
const [navOpen, setNavOpen] = useState(false);

const handleHoverEnter = () => {
    setHeader('header-hover')
}

const handleHoverLeave = () => {
    setHeader('header')
}



const handleNavClick = () => {
    setNavOpen(!navOpen)
}

return (
    <header className={header} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
        <div className="header-img-div">
        <Link to="/"><img src="https://i.ibb.co/1Q3kC50/Estates-2.png" alt="Bermwood Logo" className="header-logo"/></Link>
        </div>
        <nav>
        <ul className="nav-list">
            <li className="nav-link nav-hover"><Link to="/">Home</Link></li>
            <li className="nav-link about-us nav-hover">
            <Link to="/our-story">About Us</Link>
            <div className="dropdown dropdown-aboutus">
                <ul>
                    <li className="dropdown-link nav-hover dropdown-ourstory"><Link to="/our-story">Our Story</Link></li>
                    <li className="dropdown-link nav-hover dropdown-testimonials border-ignore"><Link to="/testimonials">Testimonials</Link></li>
                </ul>    
            </div>
            </li>
            <li className="nav-link nav-hover">
            <Link to="/development">Our Services</Link>
            <div className="dropdown dropdown-outservices">
                <ul>
                    <li className="dropdown-link nav-hover"><Link to="/development">Development</Link></li>   
                    <div>
                    <li className="dropdown-link nav-hover border-ignore"><Link to="/guarenteed-rent">Guarenteed Rent</Link>
                    <div className="dropdown second">
                        <ul>
                            <li className="dropdown-link nav-hover"><Link to="/guarenteed-rent">Guarenteed Rent</Link></li>
                            <li className="dropdown-link nav-hover border-ignore faq"><Link to="/guarenteed-rent-faq">Guarenteed Rent FAQ</Link></li>
                        </ul>
                    </div>
                    </li>    
                    </div> 
                </ul>
            </div>
            </li>
            <li className="nav-link nav-hover"><Link to="/gallery">Gallery</Link></li>
            <li className="nav-link nav-hover"><Link to="/contact-us">Contact Us</Link></li>
        </ul>
        <div className="burger" onClick={handleNavClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
            <div className={navOpen ? 'responsive-menu' : 'responsive-menu-hidden'}>
            <div className="close-button" onClick={handleNavClick}>
                <FaTimes className={navOpen ? 'responsive-menu-close' : 'responsive-menu-close-hidden'}/>
            </div>
            <div className="responsive-menu-icons">

            <div className="responsive-menu-icon"> 
            <Link to="/">
                <AiFillHome className="home-icon icons"/>
                <h1 className="responsive-menu-h1">Home</h1>
            </Link>
            </div>
            <div className="responsive-menu-icon">
            <Link to="/our-story">
                <FaUserAlt className="ourstory-icon icons"/>
                <h1 className="responsive-menu-h1">Our Story</h1>
            </Link>
            </div>
            <div className="responsive-menu-icon">
            <Link to="/testimonials">
                <VscFeedback className="testimonial-icon icons"/>
                <h1 className="responsive-menu-h1">Testimonials</h1>
            </Link>
            </div>
            <div className="responsive-menu-icon">
            <Link to="/development">
                <FaTools className="development-icon icons"/>
                <h1 className="responsive-menu-h1">Development</h1>
            </Link>
            </div>
            <div className="responsive-menu-icon">
            <Link to="/guarenteed-rent">
                <CgSmartHomeHeat className="guarenteedrent-icon icons"/>
                <h1 className="responsive-menu-h1">Guarenteed Rent</h1>
            </Link>
            </div>
            <div className="responsive-menu-icon">
            <Link to="/guarenteed-rent-faq">
                <FaQuestionCircle className="guarenteedrentfaq icons"/>
                <h1 className="responsive-menu-h1">Guarenteed Rent FAQ</h1>
            </Link>
            </div>
            <div className="responsive-menu-icon">
            <Link to="/gallery">
                <GrGallery className="gallery-icon icons"/>
                <h1 className="responsive-menu-h1">Gallery</h1>
            </Link>
            </div>
            <div className="responsive-menu-icon">
            <Link to="/contact-us">
                <AiTwotoneMail className="contactus-icon icons"/>
                <h1 className="responsive-menu-h1">Contact Us</h1>
            </Link>
            </div>
            </div>
        </div>
        </nav>
    </header>
)
}

export default Header