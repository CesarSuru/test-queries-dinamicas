import React, { useState, FC } from 'react';
import ShowGatsbyImage from '../gatsbyImage';
import { props, edge } from './types';
import CarouselButtons from '../carouselButtons';

const ImagesSlide = ({
  edges,
  carouselWidth,
  carouselHeight,
  carouselMargin,
  carouselFloat,
}: props) => {
  const [show, setShow] = useState(0);
  return (
    <div className={`${carouselWidth} ${carouselMargin} ${carouselFloat}`}>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel">
        {edges.map((item: edge, index: number) => {
          return (
            <div className="carousel-inner overflow-hidden" key={index}>
              <div
                className={`carousel-item ${
                  index === show ? 'active' : ''
                } relative float-left w-full overflow-hidden`}>
                {item && item.node.Imagenes && item.node.Imagenes.localFile && (
                  <ShowGatsbyImage
                    file={item?.node.Imagenes.localFile ?? null}
                    alt={item.node.Imagenes.caption ?? ''}
                    className={`block bg-cover bg-center object-cover w-full ${carouselHeight}`}
                  />
                )}
              </div>
              <CarouselButtons
                indexPerPicture={edges.length}
                setShow={setShow}
                show={show}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagesSlide;
