type Percentage = {
    percentage: number,
    value: number,
}

type User = {
    names: string,
    last_names: string,
}

type Branch = {
    id: string,
    revu_surprise: string,
    value: number,
}

type Business = {
    branches: Branch[],
} & Percentage;

type RevuBranch = {
    id: string,
    number: number
}

type RevuBusiness = {
    id: string,
    name: string,
    branches: RevuBranch[],
}

type RevuSurprise = {
    id: string,
    businesse?: RevuBusiness,
    branch: string,
    description: string,
    rev_price?: number,
}

interface IDetails {
    tax: Percentage,
    payment_gateway: Percentage, 
    subtotal: number,
    total: number,
}

interface IDistribution {
    businesse: Business,
    company: Percentage,
    tax: Percentage,
    payment_gateway: Percentage,
}

interface IDistributionByRevuSurprise {
    businesse: Business,
}


interface IProduct {
    id: string,
    revu_surprise: RevuSurprise,
    price: number,
    amount: number,
    total: number,
}

export interface IShopping {
    id: string,
    created_at: string,
    products: IProduct[],
    detail: IDetails,
    distribution: IDistribution,
    user: User,
}

export interface IShoppingByRevuSurprise {
    id: string,
    created_at: string,
    products: IProduct[],
    distribution: IDistributionByRevuSurprise,
    user: User,
}

export interface IShoppingDetails {
    total: number,
    company: number,
    branches: number,
    tax: number,
    payment_gateway: number,
}

export interface IPromShopping{
    amount: number,
    month: string
}