export interface Attributes{
    contenido: string;
    subtitulo: string;
}
export interface Data {
    attributes: Attributes;
}
export interface AboutUs {
    titulo_1: string;
    titulo_2: string;
    quienes_somos_contenidos: Data[];
};

export interface TittleTextContentProps {
    tittle: string;
    styleProps: string;
    propsAnimation: string;
}

export interface ContainerContentTextProps {
    subtittle: string;
    content: string;
    isActive: string;
}

export interface ContentTextProps {
    subtittle: string;
    content: string;
  }

  export interface ButtonCarouselProps {
    slideNavegation: string;
    navegationDescription: string;
    classButton: string;
    classSpan: string;
    onClick: () => void;
  }