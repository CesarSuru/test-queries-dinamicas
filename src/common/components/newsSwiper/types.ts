export interface Categoria {
    categoria: string;
 }

export interface AttributesCategoria {
   attributes: Categoria;
}
export interface CategoriaNoticia {
    data: AttributesCategoria;
}

export interface Attributes {
    titulo_de_la_noticia: string;
    fecha_de_la_noticia: string;
    categorias_noticia: CategoriaNoticia;
}

export interface noticias_tarjetas {
    attributes:Attributes;
}

export interface noticias {
    titulo_noticias: string;
    noticias_tarjetas: noticias_tarjetas[];
    sectionTitle: string;
}