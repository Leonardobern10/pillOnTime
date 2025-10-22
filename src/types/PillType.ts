import { PillDataFormProps } from "./PillDataFormProps";

export type PillType = {
  id: number;
  name: string;
  quantity: string;
  freq: string;
  hour: string;
  obs?: string;
  delPill: (id: number) => void;
  updatePill: (id: number, newData: PillDataFormProps) => void;
  onList?: boolean;
};
