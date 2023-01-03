import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import LabelNews from './components/labelNews';
import NewsDecription from './components/newsDescription';
import NewsImagen from './components/newsImagen';
import OverlayNews from './components/overlayNews';
import TittleNews from './components/tittleNews';
import DateNews from './components/dateNews';
import { noticias } from './types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../styles/global.css';
import './styles/index.css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import SectionTitle from '../sectionTitle';

const NewsSwiper = ({
  titulo_noticias,
  noticias_tarjetas,
  sectionTitle,
}: noticias) => {
  return (
    <>
      <SectionTitle title={sectionTitle} />
      <div className="lg:w-[1400px] m-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={true}
          className="mySwiper mt-10 mb-10 overflow-hidden"
          data-swiper-autoplay="2000">
          {noticias_tarjetas.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="zoom w-full shadow-lg relative overflow-hidden bg-no-repeat">
                  <NewsImagen ImageNewsProps={index} />
                  <div className="w-full h-auto absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                    <div className="flex justify-start items-end h-full transition duration-500">
                      <div className="bg-black w-full bg-opacity-70 pt-5">
                        <LabelNews
                          LabelNewsProps={item.categoria_de_la_noticia}
                        />
                        <TittleNews
                          TittleNewsProps={item.titulo_de_la_noticia}
                        />
                        <DateNews DateNewsProps={item.fecha_de_la_noticia} />
                        <NewsDecription
                          NewsDescriptionProps={'Descripción Noticia'}
                        />
                      </div>
                    </div>
                  </div>
                  <OverlayNews />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default NewsSwiper;