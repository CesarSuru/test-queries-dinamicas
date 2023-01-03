import React from 'react';
import { props } from './types';

const CarouselButtonControl = ({
  buttonControlParam,
  buttonControlPosition,
  buttonControlIcon,
  slideControl,
}: props) => {
  return (
    <button
      className={`${buttonControlParam} absolute top-30 bottom-20 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline ${buttonControlPosition}`}
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide={slideControl}>
      <span
        className={`${buttonControlIcon} inline-block bg-no-repeat"
          aria-hidden="true`}
      />
    </button>
  );
};

export default CarouselButtonControl;
