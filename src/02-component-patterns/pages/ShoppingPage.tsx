import { ProductCard } from "../components/index";
import "../styles/custom-styles.css";
import useShoppingCart from '../hooks/useShoppingCart';
import { products } from '../data/products';


const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div>
            <h1>Shopping Store</h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        className="bg-dark"
                        product={product}
                        onChange={ onProductCountChange }
                        value={ shoppingCart && shoppingCart[product.id]?.count || 0 }
                    >
                        <ProductCard.Image className="img-class" />
                        <ProductCard.Title className="text-white" />
                        <ProductCard.Buttons className="btn-style" />
                    </ProductCard>
                ))}
            </div>

            <div className="shopping-cart">
                {
                    shoppingCart !== undefined 
                    && (
                        Object.values(shoppingCart).map( item => (
                            <ProductCard
                            style={{ width: "120px" }}
                            className="bg-dark"
                            product={item}
                            key={item.id}
                            value={ item.count }
                            onChange={ onProductCountChange }
                            >
                                <ProductCard.Image className="img-class" />
                                <ProductCard.Buttons 
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }} 
                                    className="btn-style" 
                                />
                            </ProductCard>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default ShoppingPage;
