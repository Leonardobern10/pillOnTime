export type PillDataFormProps = {
  id?: number;
  name: string;
  quantity: string;
  freq: string;
  hour: string;
  obs?: string;
  delPill: (id: number) => void;
};
