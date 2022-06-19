import React from 'react';
import { useSelector } from "react-redux"

export const BasketContainer=({children})=>{

    const basket = useSelector(state => state.products.arr)
    const totalPrice = useSelector(state => state.products.totalPrice)


    return(
        React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { 
                    basket,
                    totalPrice,
                 })
            }
            return child
        })
    )
}