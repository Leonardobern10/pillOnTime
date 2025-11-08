import { PillDataFormProps } from "./PillDataFormProps";

export type PillsStateType = {
  pills: PillDataFormProps[];
  count: number;
  loadPills: () => Promise<void>;
  loadPillsToday: () => Promise<void>;
  addPill: (pill: PillDataFormProps) => Promise<void>;
  delPill: (id: number) => Promise<void>;
  updatePill: (id: number, newData: PillDataFormProps) => Promise<void>;
};
