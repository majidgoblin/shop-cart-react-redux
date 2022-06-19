import axios from "axios"
import React, { useEffect, useState } from "react"
import { useProducts } from './../CustomHooks/useProducts';
import { useCategories } from './../CustomHooks/useCategories';

export const AllProductsContainer = ({ children }) => {

    const [products, setProducts] = useState([])
    const [actveIndex, setActive] = useState(null)

    const prds = useProducts(null);
    const categories = useCategories();

    const handleAllProduct = () => {
        setProducts(prds)
        setActive(null)
    }

    const changeProduct = (cat,index) => {
        
        setActive(index)

        axios.post(`https://core.sajayar.ir/api/product/get-products`, {
            get_photo: 1,
            category_id: cat,
            limit: "10"

        })
            .then(function (response) {
                setProducts(response.data.result)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    useEffect(() => {
        setProducts(prds)
    }, [prds])


    return (
        <>
            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            categories,
                            products,
                            actveIndex,
                            handleAllProduct,
                            changeProduct
                        })
                    }
                    return child
                })
            }
        </>
    )
}