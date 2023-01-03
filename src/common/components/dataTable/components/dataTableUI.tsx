import React, { useState } from 'react';
import ButtonContainerMain from './buttonContainerMain';
import Search from './search';
import DataTable, { TableColumn } from 'react-data-table-component';
import { DataTableProps, Table } from '../types';

const Columns = [
  {
    name: 'TITULO',
    selector: (props: { title: string }) => props.title,
    sortable: false,
     maxWidth: '650px',
  },
  {
    name: 'DESCRIPCIÓN',
    selector: (props: { description: string }) => props.description,
    sortable: false,
     maxWidth: '650px',
  },
  {
    name: 'DESCARGAR',
    selector: (props: { download: string }) => props.download,
    center: true,
    cell: (props: { download: string }) => {
      const rowIdx = props.download;
      return (
        <ButtonContainerMain buttonContent={'Descargar'} buttonLink={rowIdx} />
      );
    },
  },
] as TableColumn<any>[];

const DataTableUI = ({ dataTender, tableTitle }: DataTableProps) => {
  const [SelectValue, setSelectValue] = useState('');

  const localizedTextsMap = {
    rowsPerPageText: 'Filas por página:',
    rangeSeparatorText: 'de',
    noRowsPerPage: false,
    selectAllRowsItem: false,
    selectAllRowsItemText: 'Todos',
  };
  const noDataComponent = 'No se encontraron datos';

  function changeSearchValue(value: string) {
    setSelectValue(value);
  }

  const tender: any = dataTender.filter((item: Table) => {
    if (
      item.title === SelectValue ||
      item.description === SelectValue ||
      item.tipo_documento.toLowerCase() === SelectValue.toLowerCase()
    ) {
      return item;
    } else if (
      item.title.toLowerCase().includes(SelectValue.toLowerCase()) ||
      item.description.toLowerCase().includes(SelectValue.toLowerCase())
    ) {
      return item;
    }
  });

  return (
    <>
      <Search changeSearchValue={changeSearchValue} />
      <DataTable
        title={tableTitle}
        columns={Columns}
        noDataComponent={noDataComponent}
        data={tender}
        sortIcon={null}
        pagination
        responsive={true}
        paginationComponentOptions={localizedTextsMap}
      />
    </>
  );
};

export default DataTableUI;
