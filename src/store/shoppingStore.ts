import {createStore} from 'zustand';
import { API } from './api';
import { IShopping, IResponse, IShoppingDetails, IShoppingByRevuSurprise, IPromShopping } from '../interfaces';

interface IShoppingStore {
    shoppings: IShopping[] | null;
    shoppingsDetails: IShoppingDetails | null;
    shoppingsByRevuSurprise: IShoppingByRevuSurprise[] | null,
    shoppingsBranches: IShopping[] | null,
    promShopping: IPromShopping[],
    isLoading: boolean;
    error: string | null;
    getShoppings: () => void;
    getShoppingsDetails: () => void;
    getShoppingsBranches: (business: string, branch: string) => void;
    getShoppingsByRevuSurprise: (id: string) => void;
    getPromShopping: (businesse:string, branch:string) => void;
    reset: () => void

}
export const shoppingStore = createStore<IShoppingStore>((set) => ({
    shoppings: null,
    shoppingsDetails: null,
    shoppingsBranches: null,
    shoppingsByRevuSurprise: null,
    promShopping: [],
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
    getShoppingsBranches: async (business: string, branch: string) => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>(`/shopping?businesse=${business}&branch=${branch}`, );
            set({ shoppingsBranches: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    getShoppingsByRevuSurprise: async (id: string) => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>(`/shopping/${id}`);
            set({ shoppingsByRevuSurprise: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    getPromShopping: async (businesse:string, branch:string) => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>(`/shopping/${businesse}/${branch}`);
            set({ promShopping: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    reset: () => {
        set({error:null});
    }
}));