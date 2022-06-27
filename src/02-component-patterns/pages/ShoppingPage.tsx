import { ProductCard } from '../components/index';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: 'https://ih1.redbubble.net/image.650044758.0166/mug,standard,x334,right-pad,600x600,f8f8f8.u3.jpg'
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ProductCard product={ product }>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons  />
                </ProductCard>

                <ProductCard product={ product }>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons  />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage