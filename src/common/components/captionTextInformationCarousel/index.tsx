import React from 'react';
import { CaptionTextInformationCarouselProp } from './types';

const CaptionTextInformationCarousel = ({
  text,
  description,
}: CaptionTextInformationCarouselProp) => {
  return (
    <div className="carousel-caption CaptionTextInformationCarousel">
      <h5 className="text-xl font-Monserrat"> {text} </h5>
      <p className="font-Monserrat">{description}</p>
    </div>
  );
};

export default CaptionTextInformationCarousel;
