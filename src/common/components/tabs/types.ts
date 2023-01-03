export interface TabsProps {
  tabsValuesArray: any[];
  newsGridArray: NoticiasTajetas[];
}

export interface NoticiasTajetas {
  activa: boolean;
  titulo_de_la_noticia: string;
  fecha_de_la_noticia: Date;
  parent: Parent;
}

export interface Parent {
  categoria: string;
}
