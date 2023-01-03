import React from 'react';
import { Item } from 'react-photoswipe-gallery';

import ShowGatsbyImage from '../gatsbyImage';
import { GallerySwipeItemProps } from './types';

const GallerySwipeItem = ({
  alt,
  imageUrl,
  caption,
  height,
  index,
  src,
  width,
  imageType = 'dynamic',
}: GallerySwipeItemProps) => {
  const classList =
    index === 0
      ? 'bg-black grid relative row-start-1 zoom row-end-3 object-center bg-center object-cover overflow-hidden bg-no-repeat mx-auto h-[30rem] w-full'
      : index === 9
      ? 'bg-black grid relative zoom object-center bg-center object-cover overflow-hidden bg-no-repeat col-start-3 row-start-3 row-end-5 mx-auto h-[30rem] w-full'
      : 'bg-black grid relative zoom object-center bg-center object-cover overflow-hidden bg-no-repeat  mx-auto h-[14.7rem] md:h-[14.5rem] w-full';

  return (
    <div className={classList}>
      <Item
        id={index}
        original={imageType === 'static' ? `http://127.0.0.1:1337${src}` : src}
        thumbnail={imageType === 'static' ? `http://127.0.0.1:1337${src}` : src}
        width={width}
        height={height}
        alt={alt}
        caption={caption}>
        {({ ref, open }) => (
          <>
            <ShowGatsbyImage
              file={imageType === 'dynamic' ? imageUrl : src}
              alt={caption}
              objectFit="cover"
              imageType={imageType}
            />
            <div
              className="mask absolute bg-black w-full h-full overflow-hidden opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-opacity-50 bg-cover grid place-content-center"
              ref={ref as React.RefObject<HTMLDivElement>}
              onClick={open}>
              <i className="text-6xl lg:text-5xl text-white fa-solid fa-image"></i>
            </div>
          </>
        )}
      </Item>
    </div>
  );
};

export default GallerySwipeItem;
