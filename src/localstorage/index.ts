type key = "token_authorization";


export const getLocalStorage = (key:key):string =>{
    return localStorage.getItem(key)??'';
}

export const setLocalStorage = (key:key,value:string):void => {
    localStorage.setItem(key,value);
}

export const removeLocalStorage = (key:key):void => {
    localStorage.removeItem(key);
}