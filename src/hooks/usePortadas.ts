import { gql, useQuery } from '@apollo/client';
const usePortadas = (nombreProyecto: String) => {
  const GET_COVER = gql`
  query cover ($nombreProyecto: String) {
    proyectos (filters :{nombre_proyecto:{eq: $nombreProyecto}}) {
      data {
        attributes {
          portadas (sort : "id:asc"){
            data {
              id
              attributes {
                titulo
                subtitulo
                enlace_boton
                Imagenes{
                  data{
                    attributes{
                      url
                      caption
                      
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
  const { data: result, loading } = useQuery(GET_COVER, { variables: { nombreProyecto } });
  return [result, loading];
};

export default usePortadas;