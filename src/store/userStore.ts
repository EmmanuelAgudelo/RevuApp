import { createStore } from 'zustand';
import { API } from './api';
import { IPassword, IResponse, IUser, UpdateUser } from '../interfaces';


interface IUserStore {
    users: IUser | null;
    partners: IUser[] | null;
    userById: IUser | null;
    numberOfUsers: number | null,
    numberOfPartners: number | null,
    updateUserResponse: IResponse | null;
    updateUserStateResponse: IResponse | null;
    updatePasswordResponse: IResponse | null;
    isLoading: boolean;
    error: string | null;
    findUsers: () => void;
    getnumberOfUsers: () => void;
    getnumberOfPartners: () => void;
    findPartners: () => void;
    findUserById: (id: string) => void;
    updateUser: (id: string, body: UpdateUser) => void;
    updateUserState: (id: string) => void;
    updatePassword: (body: Omit<IPassword, 'confirmPassword'>) => void;
    reset: () => void;
}

export const userStore = createStore<IUserStore>((set) => ({
    users: null,
    partners: null,
    userById: null,
    numberOfUsers: 0,
    numberOfPartners: 0,
    updateUserResponse: null,
    updateUserStateResponse: null,
    updatePasswordResponse: null,
    isLoading: false,
    error: null,
    findUsers: async () => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>('/user/all');
            set({ users: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false });
    },
    getnumberOfUsers: async () => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>('/user/numberOfUsers');
            set({ numberOfUsers: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false });
    },
    getnumberOfPartners: async () => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>('/user/numberOfPartners');
            set({ numberOfPartners: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false });
    },
    findUserById: async (id: string) => {
        try {
            set({ isLoading: true });
            const { data } = await API.get<IResponse>(`/user/${id}`);
            set({ userById: data.data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    findPartners: async () => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>('/user/partners');
            set({ partners: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false });
    },
    updateUser: async (id: string, body: UpdateUser) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/user/${id}`, body);
            set({ updateUserResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    updateUserState: async (id: string) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/user/${id}/changeState`);
            set({ updateUserStateResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    updatePassword: async (body: Omit<IPassword, 'confirmPassword'>) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/user/updatePassword`, body);
            set({ updatePasswordResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
            set({ updatePasswordResponse: e });
        }
    },
    reset: () => {
        set({ updateUserResponse: null, updateUserStateResponse: null, updatePasswordResponse: null });
    },
}));
