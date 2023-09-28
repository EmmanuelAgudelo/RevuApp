import {createStore} from 'zustand';
import { API } from './api';
import {IResponse } from '../interfaces';

interface IFavoriteStore {
    amountFavorite: number;
    isLoading: boolean;
    error: string | null;
    getAmountFavorite: () => void;
    reset: () => void

}
export const FavoriteStore = createStore<IFavoriteStore>((set) => ({
    amountFavorite: 0,
    isLoading: false,
    error: null,
    getAmountFavorite: async () => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>('/favorite/amount');
            set({ amountFavorite: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false });
    },
    reset: () => {
        set({error:null});
    }
}));