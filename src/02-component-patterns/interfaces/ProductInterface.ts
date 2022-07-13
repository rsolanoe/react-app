import { ReactElement } from "react"

export interface onChangeArg {
    product: Product;
    count: number
}

export interface InitialValues {
    count?: number
    maxCount?: number
}

export interface ProductCardProps {
    // children?: ReactElement | Array<ReactElement>//estudiar
    children: ( args: ProductCardHandlers) => JSX.Element 
    product: Product
    className?: string
    style?: React.CSSProperties
    onChange?: ( args: onChangeArg ) => void
    value?: number
    initialValues?: InitialValues
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
    maxCount?: number
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

interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increase: () => void;
    decrease: () => void;
    reset: () => void;
}