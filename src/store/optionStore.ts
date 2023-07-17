import { createStore } from "zustand";

interface IOption {
    option: string | null;
    isLoading: boolean;
    error: string | null;
    setOption: (value: string) => void;
}
export const optionStore = createStore<IOption>((set) => ({
    option: null,
    isLoading: false,
    error: null,
    setOption: async (value: string) => {
        try {
            set({ isLoading: true })
            set({ option: value });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    }
}))