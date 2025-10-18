import { create } from "zustand";
import { addPill, getAllPills } from "../services/pillService";
import { PillsStateType } from "../types/PillsStateType";

export const usePillsStore = create<PillsStateType>((set) => ({
  pills: [],
  loadPills: async () => {
    const data = await getAllPills();
    set({ pills: data || [] });
  },
  addPill: async (pill) => {
    await addPill(pill);
    const updated = await getAllPills();
    set({ pills: updated || [] });
  },
}));
