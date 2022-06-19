import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, checkInBasket } from './../../Redux/Actions/index';

export const Info = ({ details, basket }) => {


    const [active, setActive] = useState(false)
    const disPatch = useDispatch()


    useEffect(() => {
        setActive(basket.some(({ id }) => id === details.id))
    }, [{ active }])

    const handleClick = (id, title, price, img) => {
        disPatch(checkInBasket(id))
        disPatch(addToCart({ id, title, price, count: 1,img }))
        setActive(basket.some(({ id }) => id === details.id))
    }

    return details ? (

        <>
            <div className="product-info__container">
                {details.file_photo ?
                    <img  src={`https://core.sajayar.ir/${details.file_photo[details.file_photo.length - 1].path}`} alt="" />
                    : null}
                <div className="content">
                    <p>{details.title}</p>
                    <p>{details.price} تومان</p>
                    <p>{details.description}</p>
                    <button disabled={active} 
                    onClick={() => handleClick(details.id, details.title, details.price,details.file_photo[details.file_photo.length - 1].path)}
                     >افزودن به سبد خرید</button>
                </div>
            </div>
        </>
    )
        : <p>loading</p>
}