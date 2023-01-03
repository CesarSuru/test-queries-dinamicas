export interface RespuestaGaleria {
  proyectos: Proyectos;
}

export interface Proyectos {
  data: ProyectosDatum[];
}

export interface ProyectosDatum {
  id: string;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  nombre_proyecto: string;
  galerias: Galerias;
}

export interface Galerias {
  data: GaleriasDatum[];
}

export interface GaleriasDatum {
  attributes: GaleriaAtributos;
}

export interface GaleriaAtributos {
  Titulo: string;
  Galeria_Imagenes: GaleriaImagenes;
}

export interface GaleriaImagenes {
  data: GaleriaImagenesDatum[];
}

export interface GaleriaImagenesDatum {
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  caption: string;
  formats: Formats;
  url: string;
}

export interface Formats {
  large?: Large;
  small: Large;
  medium?: Large;
  thumbnail: Large;
}

export interface Large {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export enum EXT {
  EXTJPG = '.JPG',
  Jpg = '.jpg',
  PNG = '.PNG',
}

export enum MIME {
  ImageJPEG = 'image/jpeg',
  ImagePNG = 'image/png',
}
