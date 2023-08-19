import { createStore } from 'zustand';
import { API } from './api';
import { IFile, IResponse } from '../interfaces';


interface IUploadFileStore {
    uploadFilesResponse: IResponse | null;
    isLoading: boolean;
    error: string | null;
    uploadFiles: (body: IFile) => void;
    reset: () => void;
}

export const uploadFileStore = createStore<IUploadFileStore>((set) => ({
    uploadFilesResponse: null,
    isLoading: false,
    error: null,
    uploadFiles: async (body: IFile) => {
        try {
            set({ isLoading: true })
            const { data } = await API.post<IResponse>('/uploadFile/legalDocuments', body);
            set({ uploadFilesResponse: data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    reset: () => {
        set({uploadFilesResponse: null});
    }
}));
