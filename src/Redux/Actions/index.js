import * as types from "../types"

export const addToCart=(data)=>{
    return{
            type:types.ADD_TO_CART,
            payload:data
    }
}

export const addItem=(id)=>{
    return{
        type:types.ADD_ITEM,
        payload:id
    }
}

export const minItem=(id)=>{
    return{
        type:types.MIN_ITEM,
        payload:id
    }
}

export const deleteItem=(id)=>{
    return{
        type:types.DELETE_ITEM,
        payload:id
    }
}

export const clear=()=>{
    return{
        type:types.CLEAR,
    }
} 

export const checkInBasket=(id)=>{
    return{
        type:types.CHEKBASKET,
        payload:id
    }
    
}