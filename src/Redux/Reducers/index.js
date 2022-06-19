import { act } from "react-dom/test-utils";

const initialState = {
    arr: [],
    totalPrice: 0,
    exist: false
}
export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case ("ADD_TO_CART"):

            let price = +state.totalPrice;
            price += +action.payload.price;

            return ({
                ...state,
                totalPrice: price,
                arr: [...state.arr, action.payload]
            })
        case ("ADD_ITEM"):
            const pId = action.payload;
            const item = [...state.arr]

            let obj = item.find(({ id }) => id === pId)
            obj.count = obj.count + 1;
            state.totalPrice += +obj.price

            return ({
                ...state,
                arr: item
            })
        case ("MIN_ITEM"):
            const mId = action.payload;

            let mItem = [...state.arr]

            let mobj = mItem.find(({ id }) => id === mId)
            state.totalPrice -= +mobj.price;

            if (mobj.count === 1) {
                mItem = mItem.filter(({ id }) => id !== mId)
            }
            else {
                mobj.count = mobj.count - 1;
                // state.totalPrice -= +mobj.price;
            }


            return ({
                ...state,
                arr: mItem
            })
        case ("DELETE_ITEM"):

            const dId = action.payload;

            const dItem = [...state.arr]
            let newArr = dItem.filter(({ id }) => id !== dId)

            let dobj = dItem.find(({ id }) => id === dId)
            let currentPrice = dobj.count * +dobj.price

            state.totalPrice -= +currentPrice

            return ({
                ...state,
                arr: newArr
            })
        case ("CLEAR"):
            return ({
                arr: [],
                totalPrice: 0
            })
        case ("CHEKBASKET"):

            const allItems = [...state.arr]
            state.exist = allItems.some(({ id }) => id === action.payload)
            return state

        default:
            return state
    }
}
