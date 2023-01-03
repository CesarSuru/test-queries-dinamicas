import { gql, useQuery } from '@apollo/client';

const useNoticias = (nombreProyecto: String) => {
  const GET_NEWS=gql`
  query Galeria($nombreProyecto: String) {
    proyectos(filters: { nombre_proyecto: { eq: $nombreProyecto } }) {
      data {
        id
        attributes {
          nombre_proyecto
          noticias_tajetas (sort : "id:asc"){
            data{
              attributes{
                activa
                titulo_de_la_noticia
                fecha_de_la_noticia
                categorias_noticia{
                  data{
                    attributes{
                      categoria
                    }
                  }
                }
              }
            }
          }
          
        }
      }
    }
  }
  `;
  const { data: result, loading } = useQuery(GET_NEWS, { variables: { nombreProyecto } });
  return [result, loading];
};

export default useNoticias;
