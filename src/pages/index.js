import React, {useRef} from 'react';
// import { Link } from 'gatsby'; 
// import Layout from '../components/layout';
import '../style/pages.css';
// import Testimonial from '../components/testimonialSlider';
// import { TestimonialsData } from '../components/testimonialsData';
// import { ImagesData } from '../components/imagesData';
// import ImageSlider from '../components/imageSlider';
// import Seo from '../components/seo';

const LandingPage = () => { 

//   const refScroll = useRef(null)
//   const scrollDown = () => {
//     window.scrollTo({
//       top: refScroll.current.offsetTop,
//       behavior: "smooth"
//     })
//   }

  return (
    <React.Fragment>
      <div className="coming-soon">
        <iframe className="coming-soon-vid" src="https://streamable.com/e/94q43o?autoplay=1" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
        <h1>Coming Soon</h1>
        
      </div>
    </React.Fragment>
    // <Layout>
    //   <div className="landing-main">
    //     <div className="dream-div">
    //       <h1>Developing Dreams Together</h1>
    //       <p>At Bermwood we are a certified mixed-use property management and development company, dedicated to translating client visions into reality. Covering a vast amount of services across the real estate industry from property management and maintenance, to large-scale development opportunities. Over the years, we’ve assisted a number of landlords in their everyday maintenance and property management needs and we strive to learn from each experience in order to deliver higher quality results in the future. </p>
    //     </div>
    //     <div className="arrow-slider">
    //       <img  onClick={scrollDown}className="arrow" src="https://i.ibb.co/3MGt02b/Arrow.png"/>
    //     </div>
    //   </div>
    // <div ref={refScroll} className="dream-big">
    //   <div className="dream-big-text">
    //   <h1>'Dream Big'</h1>
    //   <p>The quote above is ironic as not only is this our ethos but it is the very ideal that is practiced throughout our daily operations.  A client approaches us with a dream. Whether this dream is to have a working  sink, rent or sell their property or if it is to convert their loft into a man cave, it makes no difference. Because at Bermwood the client specification knows no boundaries as subject to planning permission we aim to meet all such visions and bring them to life.</p>
    //   <Link to="/our-story"><button className="btn">Learn More</button></Link>
    //   </div>
    // </div>      
    // <div className="landing-testimonials">
    //   <div className="testimonials-div">
    //     <h1>Testimonials</h1>
    //     <p>"Extremely impressed with the transformation of my house. Bermwood genuinely helped turn my house into a home  my son loves it! The conversion was done to the highest standard and better than I imagined. I know now that if i was to sell my house i should be able to get more than i paid"</p>
    //     <Link to="/testimonials"><button className="btn">View More</button></Link>
    //   </div>
    //   <Testimonial testimony={TestimonialsData}/>
    // </div>
    // <div className="landing-gallery">
    // <h1 className="landing-gallery-text">Gallery</h1>
    // <div className="landing-gallery-div-images">
    // <ImageSlider images={ImagesData} />
    // </div>
    // </div>
    // <div className="footer-image" />
    // </Layout>
  )
}

export default LandingPage