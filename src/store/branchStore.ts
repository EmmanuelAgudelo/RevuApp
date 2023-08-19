import { createStore } from 'zustand';
import { API } from './api';
import { IBranches, IResponse } from '../interfaces';
import { toastError } from '../helpers';


interface IBranchStore {
    createBranchResponse: IResponse | null;
    updateBranchResponse: IResponse | null;
    updateBranchActiveResponse: IResponse | null;
    updateBranchInactiveResponse: IResponse | null;
    isLoading: boolean;
    error: string | null;
    createBranch: (body: Omit<IBranches, 'status' | '_id' | 'legal_documents'>) => void;
    updateBranch: (id: string, body: Omit<IBranches, 'status' | '_id' | 'legal_documents'>) => void;
    updateBranchActive: (body: Pick<IBranches, 'id'>, id: string) => void;
    updateBranchInactive: (body: Pick<IBranches, 'id'>, id: string) => void;
    reset: () => void;
}

export const branchStore = createStore<IBranchStore>((set) => ({
    createBranchResponse: null,
    updateBranchResponse: null,
    updateBranchActiveResponse: null,
    updateBranchInactiveResponse: null,
    isLoading: false,
    error: null,
    createBranch: async (body: Omit<IBranches, 'status' | '_id' | 'legal_documents'>) => {
        try {
            set({ isLoading: true })
            const { data } = await API.post<IResponse>('/branch/create', body);
            set({ createBranchResponse: data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    updateBranch: async (id: string, body: Omit<IBranches, 'status' | '_id' | 'legal_documents'>) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/branch/${id}`, body);
            set({ updateBranchResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    updateBranchActive: async (body: Pick<IBranches, 'id'>, id: string) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/branch/${id}/active`, body);
            set({ updateBranchActiveResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    updateBranchInactive: async (body: Pick<IBranches, 'id'>, id: string) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/branch/${id}/inactive`, body);
            set({ updateBranchInactiveResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    reset: () => {
        set({ error: null, createBranchResponse: null, updateBranchResponse: null, updateBranchActiveResponse: null, updateBranchInactiveResponse: null });
    }
}))