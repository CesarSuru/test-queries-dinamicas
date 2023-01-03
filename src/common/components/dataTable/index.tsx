import React from 'react';
import DataTableUI from './components/dataTableUI';
import './styles/index.css';
import { DataTableProps } from './types';

const DataTable = ({ dataTender, tableTitle }: DataTableProps) => {
  return (
    <div className="bg-white whitespace-nowrap ContainerDataTable w-full m-auto">
      <DataTableUI dataTender={dataTender} tableTitle={tableTitle} />
    </div>
  );
};

export default DataTable;
