import {createStore} from 'zustand';
import { API } from './api';
import { IPromRating, IRating, IResponse } from '../interfaces';

interface IRatingStore {
    ratings: IRating[] | null;
    promRatings: IPromRating[];
    isLoading: boolean;
    error: string | null;
    findRating: () => void;
    getPromRating: (businesse:string, branch:string) => void;
    reset: () => void

}
export const ratingStore = createStore<IRatingStore>((set) => ({
    ratings: null,
    promRatings: [],
    isLoading: false,
    error: null,
    findRating: async () => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>('/rating/all');
            set({ ratings: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    getPromRating: async (businesse:string, branch:string) => {
        try {
            set({ isLoading: true })
            const { data } = await API.get<IResponse>(`/rating/${businesse}/${branch}`);
            set({ promRatings: data.data });
        } catch (e: any) {
            set({ error: e?.response?.data.message });
        }
        set({ isLoading: false })
    },
    reset: () => {
        set({error:null,promRatings:[]});
    }
}));