import { createStore } from 'zustand';
import { API } from './api';
import { IBranches, IResponse } from '../interfaces';


interface IBranchStore {
    createBranchResponse: IResponse | null;
    updateBranchResponse: IResponse | null;
    isLoading: boolean;
    error: string | null;
    createBranch: (body: Omit<IBranches, 'status' | '_id'>) => void;
    updateBranch: (id: string, body: Pick<IBranches, 'city' | 'department'>) => void;
    reset: () => void;
}

export const branchStore = createStore<IBranchStore>((set) => ({
    createBranchResponse: null,
    updateBranchResponse: null,
    isLoading: false,
    error: null,
    createBranch: async (body: Omit<IBranches, 'status' | '_id'>) => {
        try {
            set({ isLoading: true })
            const { data } = await API.post<IResponse>('/branch/create', body);
            set({ createBranchResponse: data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    updateBranch: async (id: string, body: Pick<IBranches, 'city' | 'department'>) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/branch/${id}`, body);
            set({ updateBranchResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    reset: () => {
        set({ error: null, createBranchResponse: null , updateBranchResponse: null});
    }
}))