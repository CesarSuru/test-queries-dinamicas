import React from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

import { Props } from './types';

const ShowGatsbyImage = ({
  file,
  alt = 'Image',
  className = 'h-full object-cover',
  objectFit = 'fill',
  imageType = 'dynamic',
}: Props) => {
  const image = getImage(file as ImageDataLike);
  return (
    <>
      {image && imageType === 'dynamic' ? (
        <GatsbyImage
          image={image}
          alt={alt}
          className={className}
          objectFit={objectFit}
        />
      ) : (
        <img
          src={`http://127.0.0.1:1337${file}`}
          alt={alt}
          className={className}
        />
      )}
    </>
  );
};

export default ShowGatsbyImage;
