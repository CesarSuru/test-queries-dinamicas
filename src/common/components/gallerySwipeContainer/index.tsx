import React from 'react';
import { Gallery } from 'react-photoswipe-gallery';

import { GallerySwipeContainerProps } from '../gallerySwipe/types';

const GallerySwipeContainer = ({ children }: GallerySwipeContainerProps) => {
  return (
    <div>
      <Gallery
        withCaption
        withDownloadButton
        id="simple-gallery"
        options={{
          arrowPrevTitle: 'Test',
        }}>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 relative mb-12">
          {children}
        </div>
      </Gallery>
    </div>
  );
};

export default GallerySwipeContainer;
