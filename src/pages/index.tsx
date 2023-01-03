import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import 'aos/dist/aos.css';
import 'tw-elements';
import {
  DataTable,
  Header,
  LinkSubsection,
  NewsSwiper,
  TextInfoContent,
  Carousel,
  GallerySwiper,
} from '../common/components';
import {
  useBIDChinaTaiwan,
  useGetOrderData,
  useLicitaciones,
  useNoticias,
  usePortadas,
  useQuienessomos,
  useGaleria,
} from '../hooks';

const Index = () => {
  const [cover, loadingCover] = usePortadas("Principal");
  const [aboutUs, loadingAboutUs] = useQuienessomos("Principal");
  const [noticias, loadingNoticias]= useNoticias("Principal");
  const edgeTender = useLicitaciones("Principal", "Licitaciones");
  const edgeBID = useBIDChinaTaiwan("Principal", "BID", "China / Taiwán");
  const tableData = useGetOrderData(edgeTender, edgeBID);
  const nodeNoticias = noticias?.proyectos.data[0]?.attributes.noticias_tajetas.data;
  console.log(nodeNoticias);
  const [galeria, cargandoGaleria] = useGaleria("Principal");

  let AOS: any = null;
  useEffect(() => {
    AOS = require('aos');
    AOS.init();
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  const [domLoaded, setDomLoaded] = useState<boolean>(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <Header />
      {!loadingCover && cover.proyectos?.data && (
        <Carousel data={cover.proyectos.data} />
      )}
      <LinkSubsection />
      {!loadingAboutUs && aboutUs?.quienesSomosTitulo.data && (
        <TextInfoContent
          titulo_1={aboutUs.quienesSomosTitulo.data.attributes.titulo_1}
          titulo_2={aboutUs.quienesSomosTitulo.data.attributes.titulo_2}
          quienes_somos_contenidos={aboutUs.quienesSomosTitulo.data.attributes.quienes_somos_contenidos.data}
        />
      )}
    {/*}  <NewsSwiper
        titulo_noticias={nodeNoticias.titulo_noticias}
        noticias_tarjetas={nodeNoticias.noticias_tajetas}
        sectionTitle="Noticias"
      />*/}
       {!loadingNoticias && nodeNoticias && (
        <NewsSwiper
        titulo_noticias="Noticias"
        noticias_tarjetas={nodeNoticias}
        sectionTitle="Noticias"
       />
       )}
      {!cargandoGaleria && galeria.proyectos && (
        <GallerySwiper
          galeria={
            galeria.proyectos.data[0].attributes.galerias.data[0].attributes
          }
        />
      )}

      {domLoaded && (
        <DataTable dataTender={tableData} tableTitle="Documentos" />
      )}
    </>
  );
};

export default Index;
