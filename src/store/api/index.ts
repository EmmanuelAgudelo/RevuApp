import axios from "axios";
import { getLocalStorage } from "../../localstorage";

const baseURL = import.meta.env.VITE_BASE_URL;
const Authorization = `Bearer ${getLocalStorage('token_authorization')}`;


export const API =  axios.create({baseURL,headers:{Authorization},withCredentials:true});