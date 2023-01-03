import { useQuery, gql } from '@apollo/client';

import { RespuestaGaleria } from './responseTypes';

const useGaleria = (nombreProyecto: string): [RespuestaGaleria, boolean] => {
  const Obtener_Galeria = gql`
    query Galeria($nombreProyecto: String) {
      proyectos(filters: { nombre_proyecto: { eq: $nombreProyecto } }) {
        data {
          id
          attributes {
            nombre_proyecto
            galerias {
              data {
                attributes {
                  Titulo
                  Galeria_Imagenes {
                    data {
                      attributes {
                        caption
                        formats
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

  const { data: galeria, loading } = useQuery(Obtener_Galeria, {
    variables: { nombreProyecto },
  });

  return [galeria, loading];
};

export default useGaleria;
