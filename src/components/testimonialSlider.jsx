import React, {useState} from 'react'
import {TestimonialsData} from './testimonialsData'
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/all'

const TestimonialSlider = ({testimony}) => {
    const [current, setCurrent] = useState(0);
    const length = testimony.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    console.log('testimony',current, length)


    return ( <div className="testimonial-slide">
         <AiFillCaretLeft className="left-arrow" onClick={prevSlide}/>
         <AiFillCaretRight className="right-arrow" onClick={nextSlide}/>
        {TestimonialsData.map((testimonial, index) => {
            return (
                <div className={index === current ?  'testimonials active' : 'testimonials'} key={index}>
                    {index === current &&  (
                    <div className="testimony">
                        <div className="testimony-top">
                            <p>{testimonial.description}</p>
                        </div>
                        <div className="testimony-bottom">
                            <p>{testimonial.name}</p>
                        </div>
                    </div>
                    )}
                </div>
                
            )
        })}
    </div> );
}
 
export default TestimonialSlider;