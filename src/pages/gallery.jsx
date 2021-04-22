import React from 'react';
import Layout from '../components/layout'
import {ImagesData} from '../components/imagesData'

const Gallery = () => {
    return(
        <Layout>
            <div className="gallery">
                <h1>Gallery</h1>
                <div className="gallery-img-div">
                {ImagesData.map((image, alt, id) => {
                    return(
                    <img src={image.image} alt={alt.alt} key={id} className='gallery-img'/>)
                })}
                </div>
            </div>
        </Layout>
    )
}

export default Gallery