import React from 'react';
import { CarouselContentProps } from './types';

const CarouselContentText = ({
  carouselContentProps,
}: CarouselContentProps) => {
  return (
    <h4 className="text-white text-center font-normal text-xl font-Monserrat mb-6 lg:mx-52 mx-10">
      {carouselContentProps}
    </h4>
  );
};

export default CarouselContentText;
