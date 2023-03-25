import {createStore} from 'zustand';
import { API } from './api';
import { ILogin,IUser, IResponse, IResetPassword } from '../interfaces';


type response = IResponse | null;

interface IAuthStore {
    authentication: 'verifying' | 'unauthenticated' | IUser;
    login: response;
    logout: response;
    code: response;
    recoverPassword: response;
    resetPassword:response;
    isLoading:boolean,
    error: string | null;
    validateAuthentication: () => void;
    validateLogin: (body:ILogin) => void;
    validateLogout: () => void;
    validateCode: (code:string) =>void;
    validateRecoverPassword:(email:string) => void;
    validateResetPassword:(body:IResetPassword) => void
}

export const authStore = createStore<IAuthStore>((set)=>({
    authentication: 'verifying',
    login: null,
    logout: null,
    code: null,
    recoverPassword:null,
    resetPassword: null,
    isLoading:false,
    error: null,
    validateAuthentication: async()=>{
        try {
            const {data} =  await API.get<IResponse>('/auth/validateToken');
            set({authentication:data.data});
        } catch (e) {
            set({authentication:'unauthenticated'});
        }
    },
    validateLogin: async(body:ILogin)=>{
        try {
            set({isLoading:true});
            const {data} =  await API.post<IResponse>('/auth/login',body);
            set({login:data});
        } catch (e:any) {
            set({error:e?.response?.data.message});
        }
        set({isLoading:false});
    },
    validateLogout:async () => {
        try {
          const {data} =  await API.delete<IResponse>('/auth/logout');
          set({logout:data});
        } catch (e:any) {
            set({error:e?.response?.data.message});
        }
    },
    validateCode: async(code:string) =>{
        try {
            const {data} =  await API.get<IResponse>(`/auth/validateCode/${code}`);
            set({code:data});
        } catch (e:any) {
            set({error:e?.response?.data.message});
        }
    },
    validateRecoverPassword: async(email:string) => {
        try {
            set({isLoading:true});
            const {data} = await API.post<IResponse>('/auth/recoverPassword',{email});
            set({recoverPassword:data});
        } catch (e:any) {
            set({error:e?.response?.data.message});
        }
        set({isLoading:false});
    },
    validateResetPassword: async (body:IResetPassword) => {
        try {
            set({isLoading:true});
            const {data} = await API.put<IResponse>('/auth/resetPassword',body);
            set({resetPassword:data});
        } catch (e:any) {
            set({error:e?.response?.data.message});
        }
        set({isLoading:false});
    }
}));
    