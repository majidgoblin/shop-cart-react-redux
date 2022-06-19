import { AllCategories } from '../Components/Categories/AllCategories';
import { AllProductsContainer } from '../Containers/AllProductsContainer';
import { Products } from '../Components/Products/Products';
import { Header } from '../Components/Header';

export const Home = () => {
    return (
        <>
        <Header />
        <AllProductsContainer >
            <AllCategories />
            <Products />
        </AllProductsContainer >
        </>

    )
}