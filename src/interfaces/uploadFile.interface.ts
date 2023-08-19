type File = {
    documentType: string,
    base64: string
}

export interface IFile {
    businesseId: string,
    branchId: string,
    files: File[]
}