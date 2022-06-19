import { Link } from "react-router-dom";

export const ProductDetails = ({ product }) => {
 
    const img = product.file_photo[product.file_photo.length - 1].path
    return (
        <>
            <li >
                <img width={300} height={300} src={product.file_photo.length ? `https://core.sajayar.ir/${img}` : "/Assets/images/course-product.png"} alt="" />
                <Link to={`product/${product.id}`}>{product.title}</Link>
                <p>{product.price} تومان</p>

            </li>
        </>
    )
}