import React from 'react';
import Layout from '../components/layout'
import Contact from '../components/contact'
const ContactUs = () => {
    return(
        <Layout>
            <div>
                <h1 className="contact-page-header">Contact Us</h1>
                <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.0503606971115!2d-0.07694428396404165!3d51.49394331950758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876036a7583d23b%3A0x893b264450ac3f0b!2sArtesian%20House%2C%20136%20Grange%20Rd%2C%20Bermondsey%2C%20London%20SE1%203GF!5e0!3m2!1sen!2suk!4v1615317121737!5m2!1sen!2suk" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
                <div className="contact-page-content">
                <Contact />
                <div className="contact-page-bermwood">
                    <div className="contact-page-bermwood-touch">
                    <h2>BERMWOOD TOUCH</h2>
                    <p>Whether it’s a single room design project, a loft conversion or a complete from scratch new build home, Bermwood can design and manage all aspects of your home development. Contact us now for a free no obligation quote.</p>
                    </div>
                    <div>
                    <p>Artesian House</p>
                    <p>Grange Road,</p>
                    <p>London</p>
                    <p>SE1 3GF</p>
                    <br />
                    <p>Email: info@bermwoodestates.com</p>
                    <p>Phone: +44 (0) 7387179122 / +44 (0)7576283535</p>
                    </div>
                </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs