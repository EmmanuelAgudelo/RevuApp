import { createStore } from 'zustand';
import { API } from './api';
import { INotification, INotificationSettings, IResponse } from '../interfaces';

type Role = 'PARTNER' | 'USER';

interface INotificationStore {
    notificationsPartner: INotificationSettings[] | null;
    // notificationUser: INotifications[] | null;
    notifications: INotification[] | null;
    updateStateResponse: IResponse | null;
    updateNotificationResponse: IResponse | null;
    isLoading: boolean;
    error: string | null;
    getNotifications: () => void;
    getNotificationsPartner: (role: Role) => void;
    updateNotification: (id: string, body: Pick<INotification, 'message'>) => void;
    updateState: (id: string) => void;
    reset: () => void;
}

export const notificationStore = createStore<INotificationStore>((set) => ({
    notifications: null,
    notificationsPartner: null,
    updateStateResponse: null,
    updateNotificationResponse: null,
    isLoading: false,
    error: null,
    getNotifications: async () => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>('/notification');
            set({ notifications: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    getNotificationsPartner: async (role: Role) => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>(`/notification/setting?recipient=${role}`);
            set({ notificationsPartner: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    updateNotification: async (id: string, body: Pick<INotification, 'message'>) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/notification/setting/${id}`, body);
            set({ updateNotificationResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    updateState: async (id: string) => {
        try {
            set({ isLoading: true });
            const { data } = await API.put<IResponse>(`/notification/setting/${id}/changeState`);
            set({ updateStateResponse: data });
        } catch (e: any) {
            set({ isLoading: false });
        }
    },
    reset: () => {
        set({ error: null , updateStateResponse: null, updateNotificationResponse: null});
    }
}));