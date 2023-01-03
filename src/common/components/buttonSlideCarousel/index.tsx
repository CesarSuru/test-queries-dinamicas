import React from 'react';
import { ButtonSlideCarouselProps } from './types';

const ButtonSlideCarousel = ({
  slideIndexShow,
  isActive,
  isTrue,
  slideNumberShow,
  onClick,
}: ButtonSlideCarouselProps) => {
  return (
    // @ts-ignore
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={slideIndexShow}
      className={isActive}
      aria-current={isTrue}
      aria-label={`Slide ${slideNumberShow}`}
      onClick={onClick}
    />
  );
};

export default ButtonSlideCarousel;
