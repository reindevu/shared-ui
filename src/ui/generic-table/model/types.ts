export type GenericTableColumnType = {
  title: string;
  key: string;
  width?: number;
  dataIndex: string;

  render?: (row: any) => React.ReactNode;
};