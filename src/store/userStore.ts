import {createStore} from 'zustand';
import { API } from './api';
import { IResponse, IUser, UpdateUser } from '../interfaces';


interface IUserStore {
    users: IUser | null;
    updateUserResponse: IResponse | null;
    isLoading:boolean;
    error:string | null;
    findUsers: () => void;
    updateUser: (id:string,body: UpdateUser) => void;
    reset : () => void;
}

export const userStore = createStore<IUserStore>((set)=>({
    users: null,
    updateUserResponse: null,
    isLoading: false,
    error: null,
    findUsers: async() =>{
        try {
            set({isLoading:true})
            const {data} = await API.get<IResponse>('/user/all');
            set({users:data.data});
        } catch (e:any) {
            set({error:e?.response?.data.message});
        }
        set({isLoading:false});
    },
    updateUser:async (id:string,body:UpdateUser) => {
        try {
            set({isLoading:true});
            const {data} = await API.put<IResponse>(`/user/${id}`,body);
            set({updateUserResponse:data});
        } catch (e:any) {
            set({isLoading:false}); 
        }
    },
    reset: () => {
        set({updateUserResponse:null});
    }
}));
