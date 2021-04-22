import React, {useState} from 'react'
import Layout from '../components/layout'
import {AiFillHome, FaUserAlt, VscFeedback, FaTools, CgSmartHomeHeat, FaQuestionCircle, GrGallery, AiTwotoneMail, FaTimes} from 'react-icons/all';
import {IconContext} from 'react-icons';
import Contact from '../components/contact'
import { TestimonialsData } from '../components/testimonialsData';
import Testimonial from '../components/testimonialSlider'
import { ImagesData } from '../components/imagesData'
import ImageSlider from '../components/imageSlider'

const Test = () => {
    const [navOpen, setNavOpen] = useState(false)

    const handleNavClick = () => {
        setNavOpen(!navOpen)
    }
    return (  
        <Layout>
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
                <AiFillHome className="home-icon icons"/>
                <h1 className="responsive-menu-h1">Home</h1>
            </div>
            <div className="responsive-menu-icon">
                <FaUserAlt className="ourstory-icon icons"/>
                <h1 className="responsive-menu-h1">Our Story</h1>
            </div>
            <div className="responsive-menu-icon">
                <VscFeedback className="testimonial-icon icons"/>
                <h1 className="responsive-menu-h1">Testimonials</h1>
            </div>
            <div className="responsive-menu-icon">
                <FaTools className="development-icon icons"/>
                <h1 className="responsive-menu-h1">Development</h1>
            </div>
            <div className="responsive-menu-icon">
                <CgSmartHomeHeat className="guarenteedrent-icon icons"/>
                <h1 className="responsive-menu-h1">Guarenteed Rent</h1>
            </div>
            <div className="responsive-menu-icon">
                <FaQuestionCircle className="guarenteedrentfaq icons"/>
                <h1 className="responsive-menu-h1">Guarenteed Rent FAQ</h1>
            </div>
            <div className="responsive-menu-icon">
                <GrGallery className="gallery-icon icons"/>
                <h1 className="responsive-menu-h1">Gallery</h1>
            </div>
            <div className="responsive-menu-icon">
                <AiTwotoneMail className="contactus-icon icons"/>
                <h1 className="responsive-menu-h1">Contact Us</h1>
            </div>
            </div>
        </div>

        <Contact />

         <Testimonial testimony={TestimonialsData}/>

         <ImageSlider images={ImagesData} />
        </Layout>
    );
}
 
export default Test;