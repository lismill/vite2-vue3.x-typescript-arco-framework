export interface IData {
  data_type: string;
  name: string;
  value: string | number;
  tips?: string;
  header: {
    name: string;
    value: string | number;
    percent: string;
    status: string;
  };
  footer: {
    name: string;
    value: string | number;
    percent: string;
    status: string;
  };
}
