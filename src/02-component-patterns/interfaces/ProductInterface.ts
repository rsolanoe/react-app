import { ReactElement } from "react"


export interface ProductCardProps {
    children?: ReactElement | Array<ReactElement>//estudiar
    product: Product
    className?: string
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
    (Props: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element
    Image: (props: ProductImgProps) => JSX.Element
    Buttons: (Props: ProductBtnProps) => JSX.Element
}

export interface ProductTitleProps {
    title?: string
    className?: string
    style?: React.CSSProperties
}

export interface ProductImgProps {
    img?: string
    className?: string
}

export interface ProductBtnProps {
    className?: string
}