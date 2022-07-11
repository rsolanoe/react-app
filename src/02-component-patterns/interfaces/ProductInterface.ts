import { ReactElement } from "react"

export interface onChangeArg {
    product: Product;
    count: number
}

export interface ProductCardProps {
    children?: ReactElement | Array<ReactElement>//estudiar
    product: Product
    className?: string
    style?: React.CSSProperties
    onChange?: ( args: onChangeArg ) => void
    value?: number
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
    (Props: ProductCardProps): ReactElement,
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
    style?: React.CSSProperties
}

export interface ProductBtnProps {
    className?: string
    style?: React.CSSProperties
}

export interface ProductInCart extends Product {
    count: number;
}