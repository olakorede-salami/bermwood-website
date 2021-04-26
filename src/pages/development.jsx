import React from 'react';
import Layout from '../components/layout';
import Contact from '../components/contact';
import {FaTools} from 'react-icons/all';
import { ImagesData } from '../components/imagesData';
import ImageSlider from '../components/imageSlider';

const Development = () => {
    return(
        <Layout>
        <div className="developments">
        <div className="developments-top-div">
         <div className="developments-logo-header">
            <i class="fas fa-tools"></i>
            <FaTools className="development-tool" />
            <h1>DEVELOPMENT</h1>
         </div>
         <div className="developments-top-text">
            <p>Bermwood works closely with its clients offering a very hands on approach with every project,  to ensure that the clients exact vision becomes a reality.</p>
            <p>Regarding proficiency and quality we aim to exceed all expectations, and as as our testimonials allude, this is an ambition that is frequently fulfilled.</p>
            <p>We have a dedicated in-house team of trusted tradesmen with a plethora of experience to ensure that you are  able to create a home tailored to your taste. All our tradesmen are fully qualified and are appropriately insured against any professional or public liability. They are individuals that take pride in their work ensuring  that all works are completed to the highest possible standard.</p>
         </div>
         <div className="development-services">
             <h3 className="developments-h3">Our Development services are as follows:</h3>
            <ul className="development-list development-list-one">
                <li>Loft Conversions</li>
                <li>Home Extensions </li>
                <li>New Kitchen Installations </li>
                <li>Bathroom Fit-outs </li>
                <li>Basement Extensions</li>
                <li>Landscaping</li>
                <li>Land acquisition &#38; new builds</li>
            </ul>
         </div>
         <div className="development-choose">
             <h3 className="developments-h3">Why Choose Bermwood...</h3>
            <ul className="development-list">
                <li>Highly competitive rates</li>
                <li>Schedule of works provided from day one</li>
                <li>We do all the liaising and running around on your behalf</li>
                <li>NICEIC qualified electricians and gas safety engineers</li>
                <li>We spend a significant amount of time understanding your vision and goals for the project.</li>
                <li>Up to £10m public liability insurance</li>
            </ul>
         </div>
        </div>
         <div className="developments-slide-show">
         <ImageSlider images={ImagesData} />
         </div>
         <h3 className="developments-contact-h3">For any enquiries, please fill in the contact form below</h3>
        <Contact />
         </div>
        </Layout>
    )
}

export default Development