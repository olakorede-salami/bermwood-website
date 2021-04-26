import React from 'react';
import '../style/pages.css'
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.GATSBY_YOUR_SERVICE_ID, process.env.GATSBY_YOUR_TEMPLATE_ID, e.target, process.env.GATSBY_OUR_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    return(
        <div className="contact">
        <div className="contact-form-div">
        <form  onSubmit={sendEmail} action="" className="contact-form">
        <h2>Get In Touch</h2>
        <input className="inputs" type="text" placeholder="Full Name:" name="name"/>
        <select className="select" name="touch">
            <option value="" disabled selected>How did you hear about us?</option>
            <option value="google">Google</option>
            <option value="instagram">Instagram</option>
            <option value="word-of-mouth">Word of Mouth</option>
        </select>
        <input className="inputs"type="text" placeholder="Contact No:" name="number"/>
        <input className="inputs"type="email" placeholder="Email:" name="email"/>
        <textarea className="textarea" placeholder="Message:" name="message"/>
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
    )
}

export default Contact