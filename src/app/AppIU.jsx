import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarStore from "../components/static/navbar";
import Home from "../page/home"
import ProtectedRouter from "../auth/ProtectedRouter"
import Login from "../page/login";
import Singnup from "../page/singnup"
import ListProducts from "../components/products/ListProducts"
import ProductoDetails from "../page/details"
import './App.css'
import StarRating from "../Star";

function AppIU() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<NavbarStore />}>
                    <Route path='home' element={<Home />} />
                    <Route path='cart' element={<ProtectedRouter />} />
                    <Route path='login' element={<Login />} />
                    <Route path='singup' element={<Singnup />} />
                    <Route path='ListProducts' element={<ListProducts />} />
                    <Route path='details/:id' element={<ProductoDetails />} />
                    
                    <Route path='StarRating' element={<StarRating />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppIU;
