import React, { FC } from 'react';
import { props } from './types';
import ButtonSlideCarousel from '../buttonSlideCarousel';
import './styles/index.css';

const CarouselButtons = ({ indexPerPicture, setShow, show }: props) => {
  let buttons: FC[] = [];

  for (let i = 0; i < indexPerPicture; i++) {
    buttons.push(() => (
      <ButtonSlideCarousel
        slideIndexShow={i}
        isActive={i === show ? 'active' : ''}
        isTrue={i === show ? 'true' : ''}
        slideNumberShow={i}
        onClick={() => {
          setShow(i);
        }}
        key={i}
      />
    ));
  }

  return (
    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      {buttons.map((Component: FC, index: number) => (
        <Component key={index} />
      ))}
    </div>
  );
};

export default CarouselButtons;
