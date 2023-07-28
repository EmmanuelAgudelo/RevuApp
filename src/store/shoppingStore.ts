import {createStore} from 'zustand';
import { API } from './api';
import { IShopping, IResponse, IShoppingDetails } from '../interfaces';

interface IShoppingStore {
    shoppings: IShopping[] | null;
    shoppingsDetails: IShoppingDetails | null;
    isLoading: boolean;
    error: string | null;
    getShoppings: () => void;
    getShoppingsDetails: () => void;
    reset: () => void

}
export const shoppingStore = createStore<IShoppingStore>((set) => ({
    shoppings: null,
    shoppingsDetails: null,
    isLoading: false,
    error: null,
    getShoppings: async () => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>('/shopping/all');
            set({ shoppings: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    getShoppingsDetails: async () => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>('/shopping/detail');
            set({ shoppingsDetails: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
   
    reset: () => {
        set({error:null});
    }
}));