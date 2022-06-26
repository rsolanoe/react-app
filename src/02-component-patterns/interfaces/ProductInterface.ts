import { ReactElement } from "react"


export interface ProductCardProps {
    children?: ReactElement | Array<ReactElement>//estudiar
    product: Product
}

export interface Product {
    id: string
    title: string
    img?: string
}

export interface ProductContextProps {
    counter: number
    decrease: () => void
    increase: () => void
    product: Product
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element
    Image: ({ img }: { img?: string }) => JSX.Element
    Buttons: () => JSX.Element
}