import { create } from "zustand";
import { addPill, delPill, getAllPills } from "../services/pillService";
import { PillsStateType } from "../types/PillsStateType";

export const usePillsStore = create<PillsStateType>((set) => ({
  pills: [],
  count: 0,
  loadPills: async () => {
    const data = await getAllPills();
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
}));
