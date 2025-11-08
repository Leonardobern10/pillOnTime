import { create } from "zustand";
import {
  addPill,
  delPill,
  getAllPills,
  getPillsForToday,
  updatePill,
} from "../services/pillService";
import { PillDataFormProps } from "../types/PillDataFormProps";
import { PillsStateType } from "../types/PillsStateType";

export const usePillsStore = create<PillsStateType>((set) => ({
  pills: [],
  count: 0,

  loadPills: async () => {
    const data = await getAllPills();
    console.log(data);
    set({ pills: data || [], count: data?.length });
  },
  loadPillsToday: async () => {
    const data = await getPillsForToday();
    console.log(data);
    set({ pills: data || [], count: data?.length });
  },
  addPill: async (pill) => {
    await addPill(pill);
    const updated = await getAllPills();
    set({ pills: updated || [] });
  },
  delPill: async (id: number) => {
    await delPill(id);
    const updated = await getAllPills();
    set({ pills: updated || [] });
  },
  updatePill: async (id: number, newData: PillDataFormProps) => {
    await updatePill(id, newData);
    const updated = await getAllPills();
    set({ pills: updated || [] });
  },
}));
