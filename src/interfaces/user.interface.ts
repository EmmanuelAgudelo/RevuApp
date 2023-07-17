export interface IUser {
    id:string;
    names:string,
    last_names:string;
    email:string;
    cellphone:string;
    document_type?:string;
    document:string;
    status: boolean;
    role:string;
    created_at:string;
}

export interface IPassword{
    password:string,
    newPassword: string,
    confirmPassword: string;
}
export type UpdateUser = Pick<IUser, 'names' | 'last_names' | 'cellphone' | 'document_type'>