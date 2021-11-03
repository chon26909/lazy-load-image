import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Image = ({item}) => {
    return (
        <div className="image-item" >
            <LazyLoadImage
                alt={item.name}
                src={item.image_url}
                height={200}
                width={300}
                effect="blur"
                threshold={300}
            />
            <div className="text">{item.name}</div>
        </div>
    )
}

export default Image
