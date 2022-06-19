import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';

export const useCategories = () => {

    const [categories, setCategory] = useState([])

    useEffect(() => {
        axios.post(`https://core.sajayar.ir/api/product-category/get-categories`, {
            only_have_products: 1
        })
            .then(function (response) {
                setCategory(response.data.result)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    return categories




}