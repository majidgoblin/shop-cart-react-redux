import React from 'react';
import { Route, Routes   } from "react-router-dom";
import { Home } from './Pages/Home';
import { ProductInfo } from './Pages/ProductInfo';

function Routers() {
    return(
        <Routes>
            <Route path="/" element={<Home />} exact={true} />
            <Route path="product/:id" element={<ProductInfo />} exact={true} />
        </Routes>
    )
}

export default Routers ;