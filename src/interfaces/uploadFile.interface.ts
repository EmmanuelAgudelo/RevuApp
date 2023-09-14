type File = {
    documentType: string,
    base64: string
}

export interface IFile {
    businesseId: string,
    branchId: string,
    files: File[]
}

export type State = {
    id: string,
    _id: string,
}

export type StateReject = {
    message: string,
} & State;

export type UpdateFile = {
    base64: string,
} & State;