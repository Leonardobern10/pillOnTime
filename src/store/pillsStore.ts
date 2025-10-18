import { create } from "zustand";
import { addPill, getAllPills } from "../services/pillService";
import { PillsStateType } from "../types/PillsStateType";

export const usePillsStore = create<PillsStateType>((set) => ({
  pills: [],
  count: 0,
  loadPills: async () => {
    const data = await getAllPills();
    set({ pills: data || [], count: data?.length });
  },
  addPill: async (pill) => {
    await addPill(pill);
    const updated = await getAllPills();
    set({ pills: updated || [] });
  },
}));
