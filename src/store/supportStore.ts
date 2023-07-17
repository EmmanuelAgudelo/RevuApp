import { createStore } from "zustand";
import { CreateSupport, ISupport, UpdateSupport } from "../interfaces/support.interface";
import { IResponse } from "../interfaces";
import { API } from "./api";

interface ISupportStore {
    supports: ISupport[] | null;
    supportsByCreator: ISupport[] | null;
    updateAnswerResponse: IResponse | null;
    createSupportResponse: IResponse | null;
    isLoading: boolean;
    error: string | null;
    createSupport: (body: CreateSupport) => void;
    findSupports: () => void;
    findSupportsByCreator: () => void;
    updateAnswer: (id: string, body: UpdateSupport) => void;
    reset: () => void;
}

export const supportStore = createStore<ISupportStore>((set) => ({
    supports: null,
    supportsByCreator: null,
    updateAnswerResponse: null,
    createSupportResponse: null,
    isLoading: false,
    error: null,
    createSupport: async (body: CreateSupport) => {
        try {
            set({ isLoading: true });
            const { data } = await API.post<IResponse>(`/support`, body);
            set({ createSupportResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    findSupports: async () => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>('/support/all');
            set({ supports: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    findSupportsByCreator: async () => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>('/support/byCreator');
            set({ supportsByCreator: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    updateAnswer: async (id: string, body: UpdateSupport) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/support/${id}`, body);
            set({ updateAnswerResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    reset: () => {
        set({ updateAnswerResponse: null, createSupportResponse: null });
    }
}));