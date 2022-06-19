import { Details } from "./Details"
import { List } from './../List';
import { clear } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

export const BasketDetails = ({ basket, totalPrice }) => {

    const dispatch = useDispatch()

    const handlePay = () => {
        dispatch(clear())
    }

    return (
        <div className="basket_container">
            <ul >
                {
                    basket ?
                        <List
                            resorceName="basket"
                            items={basket}
                            itemComponent={Details}
                        />
                        : null
                }

            </ul>

            <div className="pay-btn">
                <p> مبلغ قابل پرداخت : {totalPrice} تومان </p>
                <button onClick={handlePay}>پرداخت</button>
            </div>


        </div>
    )
}