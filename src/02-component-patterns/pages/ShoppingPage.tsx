import { ProductCard } from "../components/index";
import "../styles/custom-styles.css";
import { products } from '../data/products';

const product = products[0]


const ShoppingPage = () => {

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

                <ProductCard
                    key={product.id}
                    className="bg-dark"
                    product={product}
                    initialValues={{
                        count: 4,
                        maxCount: 10,
                    }}

                >
                    {
                        ( {reset, isMaxCountReached, maxCount, increase, decrease, count } ) => (
                            <>
                                <ProductCard.Image className="img-class" />
                                <ProductCard.Title className="text-white" />
                                <ProductCard.Buttons className="btn-style" />

                                <button onClick={ reset } >Reset</button>
                                <button onClick={ decrease }>-2</button>
                                {
                                    !isMaxCountReached && <button onClick={ increase}>+2</button>
                                }
                                <span>{ count } { maxCount }</span>
                            </>
                        )
                    }
                </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage;
