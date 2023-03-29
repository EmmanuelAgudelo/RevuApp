import {createStore} from 'zustand';
import { API } from './api';
import { IBusinesse, IResponse } from '../interfaces';


interface IbusinesseStore {
    businesses: IBusinesse | null;
    businessesByOwner: IBusinesse | null;
    isLoading:boolean;
    error:string | null;
    findBusinesses: () => void;
    findBusinessesByOwner: () => void;
}

export const businesseStore = createStore<IbusinesseStore>((set)=>({
    businesses: null,
    businessesByOwner: null,
    isLoading: false,
    error: null,
    findBusinesses: async() =>{
        try {
            set({isLoading:true})
            const {data} = await API.get<IResponse>('/businesse/all');
            set({businesses:data.data});
        } catch (e:any) {
            set({error:e?.response?.data.message});
        }
        set({isLoading:false})
    },
    findBusinessesByOwner: async() =>{
        try {
            const {data} = await API.get<IResponse>('/businesse/findByOwner');
            set({businessesByOwner:data.data});
        } catch (e:any) {
            set({error:e?.response?.data.message});
        }
        set({isLoading:false})
    }
}));
