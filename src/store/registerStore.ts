import {createStore} from 'zustand';
import { API } from './api';
import { IResponse } from '../interfaces';

interface IRegisterStore {
    registerResponse: IResponse | null;
    isLoading:boolean;
    error:string | null;
    register: (body:any) => void 
}

export const  registerStore = createStore<IRegisterStore>((set)=>({
    registerResponse: null,
    isLoading: false,
    error:null,
    register: async (body) => {
        try {
            set({isLoading:true});
            const {data} = await API.post<IResponse>('/register',body);
            set({registerResponse:data});
        } catch (e:any) {
            set({error:e?.response?.data.message});
        }
        set({isLoading:false});
    }
}));