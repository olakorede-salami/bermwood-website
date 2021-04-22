import React from 'react';
import '../style/pages.css'


const Contact = () => {
    return(
        <div className="contact">
        <div className="contact-background">
        <div className="contact-overlay">
        <div className="contact-form-div">
        <form action="" className="contact-form">
        <h2>Get In Touch</h2>
        <input className="inputs"type="text" placeholder="Full Name:" />
        <select className="select" name="get-in-touch">
            <option value="" disabled selected>How did you hear about us?</option>
            <option value="google">Google</option>
            <option value="instagram">Instagram</option>
            <option value="word-of-mouth">Word of Mouth</option>
        </select>
        <input className="inputs"type="text" placeholder="Contact No:" />
        <input className="inputs"type="email" placeholder="Email:" />
        <textarea className="textarea" placeholder="Message:" />
        <button className="developments-button" type="submit">Send</button>
        </form>
        </div>
        <div className="contact-info">
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
    )
}

export default Contact