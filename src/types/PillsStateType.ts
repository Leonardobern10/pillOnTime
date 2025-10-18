import { PillDataFormProps } from "./PillDataFormProps";

export type PillsStateType = {
  pills: PillDataFormProps[];
  loadPills: () => Promise<void>;
  addPill: (pill: PillDataFormProps) => Promise<void>;
};
