import React from 'react';
import { ButtonCarouselProps } from '../types';

const ButtonCarousel = ({
  slideNavegation,
  navegationDescription,
  classButton,
  classSpan,
  onClick,
}: ButtonCarouselProps) => {
  return (
    <button
      className={classButton}
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide={`${slideNavegation}`}
      onClick={onClick}>
      <span aria-hidden="true" className={classSpan} />
      <span className="visually-hidden invisible lg:visible">
        {navegationDescription}
      </span>
    </button>
  );
};

export default ButtonCarousel;
