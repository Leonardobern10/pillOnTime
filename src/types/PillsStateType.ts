import { PillDataFormProps } from "./PillDataFormProps";

export type PillsStateType = {
  pills: PillDataFormProps[];
  count: number;
  loadPills: () => Promise<void>;
  addPill: (pill: PillDataFormProps) => Promise<void>;
};
