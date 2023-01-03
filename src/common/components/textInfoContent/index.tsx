import React, { useState } from 'react';
import { Attributes, Data, AboutUs } from './types';
import TittleTextContent from './components/tittleTextContent';
import ContainerContentText from './components/containerContentText';
import ButtonCarousel from './components/buttonCarousel';
import './styles/index.css';

const TextInfoContent = ({  titulo_1,  titulo_2, quienes_somos_contenidos}: AboutUs) => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="ContainerTextContent">
        <section className="SectionTextContent">
          <TittleTextContent
            tittle={titulo_1}
            styleProps=""
            propsAnimation="zoom-in-left"
          />
          <TittleTextContent
            tittle={titulo_2}
            styleProps="mb-10"
            propsAnimation="zoom-in-right"
          />
          <div
            id="carouselExampleInterval"
            className="carousel slide relative carousel-dark"
            data-bs-ride="carousel">
            <div className="carousel-inner active CarouselContainerText">
              {quienes_somos_contenidos.map((item, index) => {
                return (
                  <ContainerContentText
                    key={index}
                    subtittle={item.attributes.subtitulo}
                    content={item.attributes.contenido}
                    isActive={index === active ? 'active' : ''}
                  />
                );
              })}
            </div>
            <div />

            <ButtonCarousel
              slideNavegation="prev"
              navegationDescription="Anterior"
              classButton="carousel-control-prev ButtonSlideCarousel left-0"
              classSpan="carousel-control-prev-icon ButtonSpan"
              onClick={() => {
                if (active === -1) {
                  setActive(3);
                } else {
                  setActive(active - 1);
                }
              }}
            />
            <ButtonCarousel
              slideNavegation="next"
              navegationDescription="Siguiente"
              classButton="carousel-control-next ButtonSlideCarousel right-0"
              classSpan="carousel-control-next-icon ButtonSpan"
              onClick={() => {
                if (active === 3) {
                  setActive(0);
                } else {
                  setActive(active + 1);
                }
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default TextInfoContent;
