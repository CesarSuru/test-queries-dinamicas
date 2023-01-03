import { gql, useQuery } from '@apollo/client';

const useDetalleInformacion = (nombreProyecto: String, id: Number) => {
  const GET_SINGLE_DETAIL = gql`
  query detail ($nombreProyecto: String, $id: ID) {
    proyectos (filters: { nombre_proyecto: { eq: $nombreProyecto } }) {
      data {
        attributes {
          detalle_informacions (filters : {noticias_tajeta: {id:{eq:$id}}}){
            data {
              attributes {
                titulo
                descripcion
                imagen{
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
  const { data: result, loading } = useQuery(GET_SINGLE_DETAIL, { variables: { nombreProyecto, id } });
  return [result, loading];
};

export default useDetalleInformacion;


