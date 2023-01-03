import React from 'react';
import { TittleTextContentProps } from '../types';

const TittleTextContent = ({
  tittle,
  styleProps,
  propsAnimation,
}: TittleTextContentProps) => {
  return (
    <h3
      className={`${styleProps} lg:text-3xl lg:mx-0 text-2xl mx-4 text-center font-Jakarta font-bold text-amber-500`}
      data-aos={propsAnimation}
      data-aos-duration="1200">
      {tittle}
    </h3>
  );
};

export default TittleTextContent;
