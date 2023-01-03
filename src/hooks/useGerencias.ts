import { useQuery, gql } from '@apollo/client';

// import { useStaticQuery, graphql } from 'gatsby';

/* const useGerencias = () => {
  const result = useStaticQuery(graphql`
    query {
      allStrapiGerencia {
        nodes {
          Imagen_gerencia {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  blurredOptions: { width: 100 }
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                  aspectRatio: 0.7
                )
              }
            }
          }
        }
      }
    }
  `);

  return result;
}; */

const useGerencias = (nombreProyecto: string) => {
  const Obtener_Gerencias = gql`
    query gerencia($nombreProyecto: String) {
      proyectos(filters: { nombre_proyecto: { eq: $nombreProyecto } }) {
        data {
          attributes {
            nombre_proyecto
            gerencias {
              data {
                attributes {
                  Imagen_gerencia {
                    data {
                      attributes {
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

  const { data: gerencias, loading } = useQuery(Obtener_Gerencias, {
    variables: { nombreProyecto },
  });

  return [gerencias, loading];
};

export default useGerencias;
