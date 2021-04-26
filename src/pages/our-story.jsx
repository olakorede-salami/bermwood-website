import React from 'react';
import Layout from '../components/layout';
import '../style/header.css'

const OurStory = () => {
    return(
        <Layout>
            <div className="our-story-main-div">
            <h1 className="our-story-title">Our Story</h1>
            <div className="our-story-background">
            <div className="our-story-overlay">
            <div className="our-story-content">
            <p className="our-story-paragraph">"Since its inception in 2019, Bermwood has earned its reputation as a leading Real Estate Development Company in and around Inner-city London. We pride ourselves on providing high quality finishes, whether it be a minor plumbing job or large residential development the same level of care and attention to detail is applied. Working with a strong team of industry professionals, we have a proven track record in unlocking value in sites and translating client visions into reality.</p>
            <p className="our-story-paragraph">Whether you are looking to invest in new build and refurbishment schemes, collaborate on bespoke projects, or are an existing landowner with a joint venture idea, Bermwood has the collective skills and experience to bring your idea to life. Do not hesitate to contact us for a no obligations consultation."</p>
            <div className="our-story-ceo">
            <h4>Founding Director, Levi Owusu</h4>
            <p>(Insert Signature)</p>
            </div>
            </div>
            </div>
            </div>
            </div>
        </Layout>
    )
}

export default OurStory