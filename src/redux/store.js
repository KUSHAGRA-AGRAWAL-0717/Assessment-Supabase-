// src/store.js
import create from "zustand";

export const useStore = create((set) => ({
  items: [],
  setItems: (data) => set({ items: data }),
}));
