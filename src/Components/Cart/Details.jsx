import { useDispatch } from "react-redux"
import { addItem, deleteItem, minItem } from "../../Redux/Actions"

export const Details = ({ basket }) => {

    const dispatch = useDispatch()

    const handleAdd = (id) => {
        dispatch(addItem(id))
    }

    const handleMin = (id) => {
        dispatch(minItem(id))
    }

    const handleDel = (id) => {
        dispatch(deleteItem(id))
    }


    return (
        <>
            <li >
                <img className="cover" src={`https://core.sajayar.ir/${basket.img}`}  alt="" />
                <div className="items">
                    <p>{basket.title}</p>
                    <p> تعداد : {basket.count}  </p>
                    <p> قیمت : {basket.price}  </p>
                    <div>
                        <button onClick={() => handleAdd(basket.id)}>+</button>
                        <button onClick={() => handleMin(basket.id)}>-</button>
                        <button onClick={() => handleDel(basket.id)}><img src="/Assets/images/trash.png" /></button>
                    </div>
                </div>

                <hr />
            </li>
        </>
    )
}