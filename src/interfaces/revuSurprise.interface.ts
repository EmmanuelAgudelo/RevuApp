type Images = {
    url: string,
    _id: string,
}

export interface IRevuSurprise {
    id: string,
    price: number,
    amount: number,
    description: string,
    start_pickup_time: string,
    end_pickup_time: string,
    images: Images[],
    revu_price?: number,
    businesse?: string,
    branch?: string,
    status?: boolean,
}

export type ImagesUpload = [{
    base64: string,
    format: string
}]