export interface Table {
  id: number;
  title: string;
  tipo_documento: string;
  description: string;
  download: string;
}


export interface DataTableProps {
  dataTender: Table[];
  tableTitle: string;
}

export interface SearchProps {
  changeSearchValue: (value: string) => void;

}

export interface ButtonContainerMainProps {
  buttonLink: string;
  buttonContent: string;
}
