import axios from "axios";
import { getLocalStorage } from "../../localstorage";

const baseURL = 'http://localhost:8000';
const Authorization = `Bearer ${getLocalStorage('token_authorization')}`;


export const API =  axios.create({baseURL,headers:{Authorization},withCredentials:true});