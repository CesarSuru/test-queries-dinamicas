import React from 'react';
import ImagesSlide from '../common/components/slidesImages';
import useCarouselImages from '../hooks/useCarouselImages';

import 'tw-elements';

export const SlideImagesFunction = () => {
  const carouselImages = useCarouselImages();
  const nodeCarouselImages = carouselImages.allStrapiPortada.edges;
  return (
    <>
      <ImagesSlide
        edges={nodeCarouselImages}
        carouselWidth="w-[500px]"
        carouselHeight="h-[500px]"
        carouselFloat="float-left"
        carouselMargin="ml-16"
      />
    </>
  );
};

export default SlideImagesFunction;