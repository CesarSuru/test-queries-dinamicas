import { gql, useQuery } from '@apollo/client';

const useQuienessomos = (nombreProyecto: String) => {
  const GET_ABOUT_US = gql`
  query aboutUs($nombreProyecto: String) {
    quienesSomosTitulo {
      data {
        id
        attributes {
          titulo_1
          titulo_2
          quienes_somos_contenidos(
            filters: { proyectos: { nombre_proyecto: { eq: $nombreProyecto } } }
            sort: "id:asc"
          ) {
            data {
              attributes {
                subtitulo
                contenido
              }
            }
          }
        }
      }
    }
  }
  `;
  const { data: result, loading } = useQuery(GET_ABOUT_US, { variables: { nombreProyecto } });
  return [result, loading];
};

export default useQuienessomos;
