import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "../Tasks/Products";
import Product from "../Tasks/Product";
import Cart from "../Tasks/Cart";


const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Product/:id" element={<Product />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>
        </>
    )
}
export default Router