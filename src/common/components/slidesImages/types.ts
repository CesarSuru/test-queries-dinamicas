import { ImageDataLike } from "gatsby-plugin-image";

export interface props {
    edges: edge[];
    carouselWidth: string;
    carouselHeight: string;
    carouselMargin: string;
    carouselFloat: string;
};

export interface props2 {
    edges: edge[];
}

export interface edge {
    node: node;
    i: number;
}

export interface node {
    Imagenes: imagenes;
}

export interface imagenes {
    localFile: ImageDataLike | null;
    caption: string;
}

export interface localFile {
    childImageSharp: childImageSharp;
}

export interface childImageSharp {
    gatsbyImageData: gatsbyImageData;
}

export interface gatsbyImageData {
    layout:          string;
    backgroundColor: string;
    images:          images;
    width:           number;
    height:          number;
}

export interface images {
    fallback: fallback;
    sources:  source[];
}

export interface fallback {
    src:    string;
    srcSet: string;
    sizes:  string;
}

export interface source {
    srcSet: string;
    type:   string;
    sizes:  string;
}