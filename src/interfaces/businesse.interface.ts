export interface IBusinesse {
    id?: string;
    owner: string;
    name: string;
    category: string;
    department: string;
    city: string;
    address: string;
    phone: string;
    banking_information: string;
    files: string;
    status: boolean;
}

export interface IOwner {
    id?: string
    names: string;
    last_names: string;
    document: string;
    document_type?: string;
    email: string;
    created_at?: string;
    cellphone: string
}

export interface IBranches {
    id: string;
    _id: string;
    number: number;
    department: string;
    city: string;
    address: string;
    phone: string;
    card_number: string;
    status: string;
}

export interface IBusinesseUser {
    id: string;
    owner: IOwner | string;
    name: string;
    category: string;
    status: boolean;
    branches: IBranches[] | [];
}

export interface IBusinesseForm {
    name: string;
    category: string;
}

export interface IFormImage {
    base64: string | null | ArrayBuffer,
    format: string
}