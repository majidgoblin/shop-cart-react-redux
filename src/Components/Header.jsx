import { useState } from 'react';
import { Basket } from './Cart/Basket';
import { useSelector } from "react-redux"

export const Header = () => {

    const [show, setShow] = useState(false)
    const basket = useSelector(state => state.products.arr)

    return (
        <header className={show ? "show-basket" : ""}>
            <ul>
                <li>
                    <button onClick={() => { setShow(!show) }}>
                        <img src="/Assets/images/basket.jpg" />
                        {
                            basket.length > 0 &&
                                <span>{basket.length}</span>
                        }
                        <span></span>
                    </button>
                </li>
                <li>
                    <span className="logo">
                        <img src="/Assets/images/logo.jpg" />
                    </span>
                </li>
            </ul>

            <Basket />

        </header>
    )
}