import {createStore} from 'zustand';
import { API } from './api';
import { IResponse,IRegister } from '../interfaces';

interface IRegisterStore {
    registerResponse: IResponse | null;
    isLoading:boolean;
    error:string | null;
    register: (body:Omit<IRegister, 'id' | 'tyc'>) => void;
    reset: () => void
}

export const registerStore = createStore<IRegisterStore>((set)=>({
    registerResponse: null,
    isLoading: false,
    error:null,
    register: async (body:Omit<IRegister, 'id' | 'tyc'>) => {
        try {
            set({isLoading:true});
            const {data} = await API.post<IResponse>('/register',body);
            set({registerResponse:data});
        } catch (e:any) {
            set({error:e?.response?.data.message});
        }
        set({isLoading:false});
    },
    reset: () => {
        set({error:null,registerResponse:null});
    }
}));