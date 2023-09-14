import { createStore } from 'zustand';
import { API } from './api';
import { IFile, IResponse, State, StateReject, UpdateFile } from '../interfaces';


interface IUploadFileStore {
    uploadFilesResponse: IResponse | null;
    uploadFileAcceptResponse: IResponse | null;
    uploadFileRejectResponse: IResponse | null;
    updateFileResponse: IResponse | null;
    isLoading: boolean;
    error: string | null;
    uploadFiles: (body: IFile) => void;
    updateFile: (body: UpdateFile) => void;
    uploadFileAccept: (body: State) => void;
    uploadFileReject: (body: StateReject) => void;
    reset: () => void;
}

export const uploadFileStore = createStore<IUploadFileStore>((set) => ({
    uploadFilesResponse: null,
    uploadFileAcceptResponse: null,
    uploadFileRejectResponse: null,
    updateFileResponse: null,
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
    updateFile: async (body: UpdateFile) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/uploadFile/updateFile`, body);
            set({ updateFileResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    uploadFileAccept: async (body: State) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/uploadFile/accept`, body);
            set({ uploadFileAcceptResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    
    uploadFileReject: async (body: StateReject) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/uploadFile/reject`, body);
            set({ uploadFileRejectResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    reset: () => {
        set({ uploadFilesResponse: null, uploadFileAcceptResponse: null, uploadFileRejectResponse: null, updateFileResponse: null });
    }
}));
