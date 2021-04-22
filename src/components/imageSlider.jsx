import React, {useState} from 'react'
import {ImagesData} from './imagesData'
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/all'


const ImageSlider = ({images}) => {
const [current, setCurrent] = useState(0);
const length = images.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
}

console.log('image', current, length)


return ( <div className="testimonial-slide">
     <AiFillCaretLeft className="left-arrow-1" onClick={prevSlide}/>
     <AiFillCaretRight className="right-arrow-2" onClick={nextSlide}/>
     {ImagesData.map((image, alt, id) => {
    return(
        <img src={image.image} alt={alt.alt} key={id} className='gallery-img'/>)
    })}
</div> );
}
 
export default ImageSlider;