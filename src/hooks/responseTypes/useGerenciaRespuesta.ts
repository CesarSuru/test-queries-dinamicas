export interface RespuestaGerencia {
  allStrapiGerencia: AllStrapiGerencia;
}

export interface AllStrapiGerencia {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  Imagen_gerencia: ImagenGerencia[];
}

export interface ImagenGerencia {
  localFile: LocalFile;
}

export interface LocalFile {
  childImageSharp: ChildImageSharp;
}

export interface ChildImageSharp {
  gatsbyImageData: GatsbyImageData;
}

export interface GatsbyImageData {
  layout: string;
  placeholder: Placeholder;
  images: Images;
  width: number;
  height: number;
}

export interface Images {
  fallback: Fallback;
  sources: Source[];
}

export interface Fallback {
  src: string;
  srcSet: string;
  sizes: string;
}

export interface Source {
  srcSet: string;
  type: string;
  sizes: string;
}

export interface Placeholder {
  fallback: string;
}

export interface Extensions {}
