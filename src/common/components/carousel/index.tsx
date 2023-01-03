import React, { useState, FC } from 'react';
import ShowGatsbyImage from '../gatsbyImage';
import {Props, DataCover } from './types'
import CarouselButtons from '../carouselButtons';
import TittleMovingAnimated from '../tittleMovingAnimated';
import CarouselContentText from '../carouselContentText';
import './styles/index.css';
const Carousel = ({ data }: Props) => {
  const [show, setShow] = useState(0);
  return (
    <div className="w-full m-auto">
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel">
        {data[0]?.attributes.portadas.data.map((item: DataCover , index: number) => {
          return (
            <div
              className="carousel-inner w-full h-full overflow-hidden"
              key={index}>
              <div
                className={`carousel-item ${
                  index === show ? 'active' : ''
                } relative float-left w-full overflow-hidden`}>
                <div className="ContainerBannerCarousel">
                  <div className="WidthDimensionBorderBox">
                    <TittleMovingAnimated
                      tittleMainCarousel={item.attributes.titulo}
                    />
                    <CarouselContentText
                      carouselContentProps={item.attributes.subtitulo}
                    />
                  </div>
                </div>
                {item && item.attributes.Imagenes && (
                  <ShowGatsbyImage
                    file={item.attributes.Imagenes.data.attributes.url}
                    className="block bg-cover bg-center object-cover w-full h-[900px]"
                  />
                )}
              </div>
              <CarouselButtons
                indexPerPicture={data[0].attributes.portadas.data.length}
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

export default Carousel;
