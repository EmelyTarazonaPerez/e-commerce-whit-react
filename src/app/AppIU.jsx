import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarStore from '../components/navbar';
import Cart from '../page/cart/carrito';
import Login from '../page/login';
import Home from '../page/home';
import RedesSociales from '../components/finalPag';
import ListProducts from "../components/listProducts";
import ProductoDetails from "../page/details";
import Valores from "../components/Valores";

function AppIU() {
    return (
        <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<NavbarStore />}>
                            <Route path='home' element={<Home />} />
                            <Route path='cart' element={<Cart />} />
                            <Route path='login' element={<Login />} />
                            <Route path='ListProducts' element={<ListProducts />} />
                            <Route path='details/:id' element={<ProductoDetails />} />
                        </Route>
                    </Routes>                 
                </BrowserRouter>
        </div>
    );
}

export default AppIU;
