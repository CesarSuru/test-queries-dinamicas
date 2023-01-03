import { Table } from '../common/components/dataTable/types';

const useGetOrderData = (edgeTender: any, edgeBID: any): Table[] => {
  var edgeData: Table[] = [];
  const basePath =
    process.env.GATSBY_STRAPI_API_URL || 'http://localhost:1337';
  let k = 0;
  if(edgeTender){
    if(edgeTender.proyectos.data.length>0){
      const dataTender=edgeTender.proyectos.data[0].attributes.licitacion_o_boletins.data
      for (let i = 0; i < dataTender.length;i++ ) {
        const dataTenderChild=dataTender[i].attributes.contenido_licitaciones_o_boletins.data;
        if (
          dataTenderChild !== null
        ) {
          for (let j = 0;j < dataTenderChild.length;j++) {
             {
              edgeData.push({
                id: k,
                title: dataTender[i].attributes.titulo,
                tipo_documento:dataTender[i].attributes.tipo_documento,
                description: dataTenderChild[j].attributes.documento.data.attributes.name.slice(
                  0,
                 dataTenderChild[j].attributes.documento.data.attributes.name.length - 4
                ),
                download:
                  basePath +dataTenderChild[j].attributes.documento.data.attributes.url,
              });
              k++;
            }
          }
        }
      }
    }
   
  }
  if(edgeBID){
    if(edgeBID.proyectos.data.length>0){
      const dataTenderB=edgeBID.proyectos.data[0].attributes.china_taiwan_bids.data
      for (let i = 0; i < dataTenderB.length;i++ ) {
        const dataTenderChildB=dataTenderB[i].attributes.contenido_china_taiwan_bids.data;
        if (
          dataTenderChildB !== null
        ) {
          for (let j = 0;j <dataTenderChildB.length;j++) {
            const dataTenderChilds=dataTenderChildB[j].attributes.documentos.data
            for (let jj = 0;jj <dataTenderChilds.length;jj++) {
             {
              edgeData.push({
                id: k,
                title: dataTenderB[i].attributes.titulo,
                tipo_documento:dataTenderB[i].attributes.tipo_documento,
                description: dataTenderChilds[jj].attributes.name.slice(
                  0,
                  dataTenderChilds[jj].attributes.name.length - 4
                ),
                download:
                  basePath +dataTenderChilds[jj].attributes.url,
              });
              k++;
            }
          }
        }
      }
        }
      }
    }
 
  return edgeData;
};

export default useGetOrderData;
