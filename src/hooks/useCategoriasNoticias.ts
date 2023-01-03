import { useQuery, gql } from '@apollo/client';

const useCategoriasNoticias = (nombreProyecto: string) => {
  const Obtener_CategoriaNoticias = gql`
    query categoriasNoticias($nombre_proyecto: String) {
      proyectos(filters: { nombre_proyecto: { eq: $nombre_proyecto } }) {
        data {
          attributes {
            nombre_proyecto
            categorias_noticias {
              data {
                attributes {
                  categoria
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data: categoriaNoticas, loading } = useQuery(
    Obtener_CategoriaNoticias,
    {
      variables: { nombreProyecto },
    }
  );

  return [categoriaNoticas, loading];
};

export default useCategoriasNoticias;
