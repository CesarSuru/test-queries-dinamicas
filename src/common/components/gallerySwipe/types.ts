import { GaleriaAtributos } from '../../../hooks/responseTypes/useGaleriaRespuesta';

export interface GallerySwipeContainerProps {
  children: JSX.Element | JSX.Element[];
}

export interface Images {
  id: number;
  imageUrl: string;
  caption: string;
  alt: string;
}

export interface GallerySwipeProps {
  galeria: GaleriaAtributos;
}
