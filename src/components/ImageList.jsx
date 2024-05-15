import './imagelist.css';
import React from 'react';
import ImageShow from './ImageShow';

function ImageList({ images }){
    const renderedElement = images.map((image) => {
            return <ImageShow key={image.id} image={image}/>
    });  

    return <div className='image-list'>{renderedElement}</div>
    
}

export default ImageList