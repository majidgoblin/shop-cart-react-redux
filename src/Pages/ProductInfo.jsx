import { useParams } from 'react-router-dom';
import { Header } from '../Components/Header';
import { Info } from '../Components/Products/Info';
import { ProductInfoContainer } from '../Containers/ProductInfoContainer';

export const ProductInfo = () => {

    const { id } = useParams();

    return (
        <>
            <Header />
            <ProductInfoContainer id={id}>
                <Info />
            </ProductInfoContainer>
        </>
    )
}