import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductCardHOCProps } from '../interfaces/ProductInterface';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';


export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})