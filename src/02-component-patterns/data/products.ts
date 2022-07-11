import { Product } from "../interfaces/ProductInterface";

const productA = {
    id: "1",
    title: "Coffee Mug - Card",
    img: "https://ih1.redbubble.net/image.650044758.0166/mug,standard,x334,right-pad,600x600,f8f8f8.u3.jpg",
};

const productB = {
    id: "2",
    title: "Coffee Mug - Meme",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd1Q1dsJGfKj7cwBOX88a0_ksWhtqrnLALjA&usqp=CAU",
};

export const products: Product[] = [productA, productB];