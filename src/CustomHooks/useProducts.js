import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';

export const useProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.post(`https://core.sajayar.ir/api/product/get-products`, {
            get_photo: 1,
            category_id:  null,
            limit: "10"

        })
            .then(function (response) {
                setProducts(response.data.result)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

        return products




}