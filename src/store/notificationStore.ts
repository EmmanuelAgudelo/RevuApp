import { createStore } from 'zustand';
import { API } from './api';
import { INotification, IResponse } from '../interfaces';

interface INotificationStore {
    notificationsPartner: INotification[] | null;
    // notificationUser: INotifications[] | null;
    notifications: INotification[] | null;
    isLoading: boolean;
    error: string | null;
    getNotifications: () => void;
    getNotificationsPartner: () => void;
}
export const notificationStore = createStore<INotificationStore>((set) => ({
    notifications: null,
    notificationsPartner: null,
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
    getNotificationsPartner: async () => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>(`/notification/setting?recipient=PARTNER`);
            set({ notificationsPartner: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    reset: () => {
        set({ error: null });
    }
}));