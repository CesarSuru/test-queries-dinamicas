import { useQuery, gql } from "@apollo/client";

const  useBIDChinaTaiwan =(nombreProyecto:string, tipoDocumento1:string, tipoDocumento2:string) => {
  const proyecto = nombreProyecto;
  const tipo_documento1=tipoDocumento1;
  const  tipo_documento2=tipoDocumento2;
  const GET_BIDChina = gql`
  query ChinaBID($nombre_proyecto:String,$tipo_documento1:String,$tipo_documento2:String){
    proyectos(filters: {nombre_proyecto: { eq: $nombre_proyecto }, china_taiwan_bids: {or: [{ tipo_documento: { eq: $tipo_documento1 }}, { tipo_documento: { eq:$tipo_documento2 }}]  }}) {
      data{
        attributes{
          china_taiwan_bids(sort: "createdAt:desc"){
            data{
              id
               attributes{
                titulo
                tipo_documento
                contenido_china_taiwan_bids{
                  data{
                    attributes{ 
                     titulo 
                     documentos (sort: "createdAt:desc"){
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
    }`;

 const  result =  useQuery(GET_BIDChina,{ variables: { tipo_documento1,tipo_documento2, proyecto }});
    if (!result.loading) return result.data;
 };

export default useBIDChinaTaiwan;