import React from 'react';

import SectionTitle from '../sectionTitle';
import GallerySwipeContainer from '../gallerySwipeContainer';
import GallerySwipeItem from '../gallerySwipeItem';
import { GallerySwipeProps } from './types';
import './styles/index.css';

const GallerySwiper = ({ galeria }: GallerySwipeProps) => {
  return (
    <div>
      <SectionTitle title={galeria.Titulo} description={''} />
      <div className="lg:w-[1400px] mx-auto md:w-[95%]">
        <GallerySwipeContainer>
          {galeria.Galeria_Imagenes.data.map(
            ({ attributes: { formats, caption } }, index) => (
              <GallerySwipeItem
                key={index}
                index={index}
                imageType="static"
                imageUrl={formats.small.url}
                src={formats.small.url}
                alt={caption}
                width={formats.small.width}
                height={formats.small.height}
                caption={caption}
              />
            )
          )}
        </GallerySwipeContainer>
      </div>
    </div>
  );
};

export default GallerySwiper;
