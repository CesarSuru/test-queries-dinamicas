import { useQuery, gql } from "@apollo/client";

const  useLicitaciones =(nombreProyecto:string, tipoDocumento:string) => {
  const nombre_proyecto = nombreProyecto;
  const tipo_documento=tipoDocumento;
  const GET_LICITACIONES = gql`
  query Licitaciones($nombre_proyecto:String,$tipo_documento:String){
    proyectos(filters: {nombre_proyecto: { eq: $nombre_proyecto }, licitacion_o_boletins: {tipo_documento: { eq: $tipo_documento }}}) {
      data{
        attributes{
          licitacion_o_boletins(sort: "createdAt:desc"){
            data{
              id
               attributes{
                titulo
                tipo_documento
                contenido_licitaciones_o_boletins(sort: "createdAt:desc"){
                  data{
                    attributes{  
                     documento{
                      data{
                        attributes{
                        name
                        url
                        createdAt
                      } 
                    }
                    }}
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

  const  result =  useQuery(GET_LICITACIONES,{ variables: { tipo_documento, nombre_proyecto }});
  if (!result.loading) return result.data;
};

export default useLicitaciones;
