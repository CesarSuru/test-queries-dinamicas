export interface noticias_tarjetas {
    titulo_de_la_noticia: string;
    fecha_de_la_noticia: string;
    categoria_de_la_noticia: string;
}
export interface noticias {
    titulo_noticias: string;
    noticias_tarjetas: noticias_tarjetas[];
    sectionTitle: string;
}