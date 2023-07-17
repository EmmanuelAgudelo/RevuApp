interface ICreatedBy {
    id: string,
    names: string,
    last_names: string,
    role: string,
}

interface IAnsweredBy {
    id: string,
    names: string,
    last_names: string,
    role: string,
}

export interface ISupport {
    id: string
    question: string,
    created_by: ICreatedBy,
    is_answered: boolean,
    status: boolean,
    created_at: string,
    answer?: string,
    answer_by?: IAnsweredBy,
}


export type UpdateSupport = Pick<ISupport, 'answer'>

export type CreateSupport = Pick<ISupport, 'question'>