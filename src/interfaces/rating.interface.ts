export interface IRating {
    id:string,
    businesse: string,
    branch: string,
    user:string,
    rating: number,
    comment?: string,
    status:boolean,
    created_at:string
}

export interface IPromRating{
    ratings: number,
    average: number,
    year: number,
    month: number
}