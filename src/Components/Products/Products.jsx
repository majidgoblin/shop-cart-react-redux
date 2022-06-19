import { List } from './../List';
import { ProductDetails } from "./ProductDetails";

export const Products = ({ products }) => {


    return (
        <>
            <ul className="products__container">
                {
                    products?.length > 0 &&
                        <List 
                            resorceName="product"
                            items={products}
                            itemComponent={ProductDetails}
                        />
                }
            </ul>
        </>
    )
}