import React, {useState, useEffect, useRef} from 'react';
import {ImagesData} from './imagesData';


const ImageSlider = ({images}) => {
const [index, setIndex] = useState(0);  
const timeoutRef = useRef(null);
const sliderLength = images.length - 13;
const sliderDotLength = [1,2,3,4,5,6,7];
const delay = 5000;

const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => 
    setIndex((prevIndex) => prevIndex === sliderLength - 1 ? 0 : prevIndex + 1),
        delay, 
    )
    return () => {resetTimeout()};
}, [index]);


return ( <div className="gallery-slider">
     {ImagesData.map((image, alt, id) => {
    return(
        <img src={image.image} alt={alt.alt} key={id} className='gallery-img-slider' style={{ transform: `translate3d(${-index * 311.5}%, 0, 0)` }}/>)
    })}
    <div className="slider-dots">
        {sliderDotLength.map((_, idx) => (
          <div key={idx} className={`slider-dot${index === idx ? " active" : ""}`}   onClick={() => {
            setIndex(idx);
          }}></div>
        ))}
    </div>
</div> );
}
 
export default ImageSlider;