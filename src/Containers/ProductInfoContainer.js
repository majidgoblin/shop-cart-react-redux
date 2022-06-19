import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const ProductInfoContainer = ({ id,children }) => {

    const [details, setDetails] = useState({})
    const basket = useSelector(state => state.products.arr)

    useEffect(() => {
        axios.post(`https://core.sajayar.ir/api/product/get-product`, {
            id,
            get_photo: 1,
        })
            .then(function (response) {
                setDetails(response.data.result)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { details,basket })
            }
            return child
        })
    )

}