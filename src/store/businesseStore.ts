import { createStore } from 'zustand';
import { API } from './api';
import { IBusinesse, IBusinesseForm, IBusinesseUser, IFormImage, IResponse } from '../interfaces';


interface IbusinesseStore {
    businesses: IBusinesse | null;
    businessesByOwner: IBusinesseUser | null;
    businessesByIdUser: IBusinesseUser | null;
    updateBusinessResponse: IResponse | null,
    uploadLogoResponse: IResponse | null,
    uploadCoverPhotoResponse: IResponse | null,
    isLoading: boolean;
    error: string | null;
    findBusinesses: () => void;
    findBusinessesByOwner: () => void;
    findBussinessesByIdUser: (id: string) => void;
    updateBusiness: (id: string, body: IBusinesseForm) => void;
    uploadLogo: (id: string, body: IFormImage) => void;
    uploadCoverPhoto: (id: string, body: IFormImage) => void;
    resetBusiness: () => void;
}

export const businesseStore = createStore<IbusinesseStore>((set) => ({
    businesses: null,
    businessesByOwner: null,
    businessesByIdUser: null,
    updateBusinessResponse: null,
    uploadLogoResponse: null,
    uploadCoverPhotoResponse: null,
    isLoading: false,
    error: null,
    findBusinesses: async () => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>('/businesse/all');
            set({ businesses: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    findBusinessesByOwner: async () => {
        try {
            const { data } = await API.get<IResponse>('/businesse/findByOwner');
            set({ businessesByOwner: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    findBussinessesByIdUser: async (id: string) => {
        try {
            set({ isLoading: true });
            const { data } = await API.get<IResponse>(`/businesse/${id}`);
            set({ businessesByIdUser: data.data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    updateBusiness: async (id: string, body: IBusinesseForm) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/businesse/${id}`, body);
            set({ updateBusinessResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    uploadLogo: async (id: string, body: IFormImage) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/businesse/${id}/upload/logo`, body);
            set({ uploadLogoResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    uploadCoverPhoto: async (id: string, body: IFormImage) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/businesse/${id}/upload/coverPhoto`, body);
            set({ uploadCoverPhotoResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    resetBusiness: () => {
        set({ updateBusinessResponse: null,  uploadCoverPhotoResponse: null, uploadLogoResponse:null });
    }
}));
