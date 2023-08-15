import { createStore } from 'zustand';
import { API } from './api';
import { IFormImage, IResponse, IRevuSurprise } from '../interfaces';

interface IRevuSurpriseStore {
    createRevuSurpriseResponse: IResponse | null;
    revuSurprise: IRevuSurprise | null;
    updateStateResponse: IResponse | null;
    updateRevuSurpriseResponse: IResponse | null;
    uploadImageResponse: IResponse | null;
    isLoading: boolean;
    error: string | null;
    createRevuSurprise: (body: Omit<IRevuSurprise, 'id' | 'status' | 'revu_price'>) => void;
    findRevuSurprise: (business: string, branch: string) => void;
    updateRevuSurprise: (id: string, body: Omit<IRevuSurprise, 'status' | 'id'>) => void;
    updateState: (id: string) => void;
    uploadImage: (id: string, body: IFormImage) => void;
    reset: () => void
}

export const revuSurpriseStore = createStore<IRevuSurpriseStore>((set) => ({
    createRevuSurpriseResponse: null,
    revuSurprise: null,
    updateStateResponse: null,
    updateRevuSurpriseResponse: null,
    uploadImageResponse: null,
    isLoading: false,
    error: null,
    createRevuSurprise: async (body: Omit<IRevuSurprise, 'id' | 'status' | 'revu_price'>) => {
        try {
            set({ isLoading: true });
            const { data } = await API.post<IResponse>('/revuSurprise', body);
            set({ createRevuSurpriseResponse: data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false });
    },
    findRevuSurprise: async (business: string, branch: string) => {
        try {
            set({ isLoading: true });
            const { data } = await API.get<IResponse>(`/revuSurprise/${business}/${branch}`);
            set({ revuSurprise: data.data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    updateRevuSurprise: async (id: string, body: Omit<IRevuSurprise, 'status' | 'id'>) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/revuSurprise/${id}`, body);
            set({ updateRevuSurpriseResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    updateState: async (id: string) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/revuSurprise/${id}/changeState`);
            set({ updateStateResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    uploadImage: async (id: string, body: IFormImage) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/revuSurprise/${id}/uploadImage`, body);
            set({ uploadImageResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    reset: () => {
        set({ error: null, createRevuSurpriseResponse: null, updateStateResponse: null, updateRevuSurpriseResponse: null, uploadImageResponse: null, revuSurprise: null});
    }
}));