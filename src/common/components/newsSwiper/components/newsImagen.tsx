import React from 'react';
import noticia1 from '../../../../images/noticia_1_0ea893a513.png';
import noticia2 from '../../../../images/noticia_2_4eeeda71ff.png';
import noticia3 from '../../../../images/noticia_3_221475fad5.png';
import noticia4 from '../../../../images/portada_enee_1_1ed9af5707.png';
import noticia5 from '../../../../images/noticia_5_a4988c5740.png';
import noticia6 from '../../../../images/noticia_6_07682b034a.png';
import noticia7 from '../../../../images/noticia_7_1e4fea83e4.png';
import noticia8 from '../../../../images/noticia_8_31f543684a.png';

const NewsImagen = ({ imageNewsProps }: { imageNewsProps: number }) => {
  const newsImagesArray = [
    noticia1,
    noticia2,
    noticia3,
    noticia4,
    noticia5,
    noticia6,
    noticia7,
    noticia8,
  ];

  const newsImages = newsImagesArray[imageNewsProps];

  return (
    <div className="h-[32rem] bg-black overflow-hidden">
      <img
        src={newsImages}
        alt=""
        className="w-full h-full transition duration-1000 ease-linear align-middle bg-cover bg-center object-cover"
      />
    </div>
  );
};

export default NewsImagen;
