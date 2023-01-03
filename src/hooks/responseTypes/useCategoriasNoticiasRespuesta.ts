export interface RespuestaCategoria {
  allStrapiCategoriaNoticia: AllStrapiCategoriaNoticia;
}

export interface AllStrapiCategoriaNoticia {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  categoria: string;
}

export interface Extensions {}
