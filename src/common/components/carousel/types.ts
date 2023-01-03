export interface Props {
    data: Data[];
}

export interface Data {
    attributes: Attribute;
}

export interface Attribute{
    portadas: Cover
}

export interface Cover{
    data: DataCover[]
}

export interface DataCover{
    attributes: AttributeCover
}

export interface AttributeCover{
    titulo: string
    subtitulo: string
    enlace_boton: string
    Imagenes: Image
}

export interface Image{
    data: DataImage
}

export interface DataImage{
    attributes: AttributeImage
}

export interface AttributeImage{
    url: string
    caption: string
}