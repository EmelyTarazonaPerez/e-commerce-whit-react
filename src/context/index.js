import React, { createContext, useEffect, useState } from "react";
const MyContext = createContext()

const MyProvider = (props) => {
    const [puntuacion, setPuntuacion] = useState();   
    const [openModal, setOpenModal] = useState(false)
    const [productos, setProductos] = useState([]);
    const [productoSales, setProductosSales] = useState([])
    const [productosKnows, setProductosKnows] = useState([]);

    /*obtener lista de productos*/
    useEffect(() => {
        const getProducts = async () => {
           await fetch('http://localhost:5000/api/v1/products')
                .then(res => res.json())
                .then(res => setProductos(res))
        }
        getProducts()
    }, [])

     /*obtener detalle de un producto*/
     useEffect(() => {
        const getProductsSales = async () => {
           await fetch('http://localhost:5000/api/v1/sales')
                .then(res => res.json())
                .then(res => setProductosSales(res))
        }
        getProductsSales()
    }, [])


    useEffect(() => {
        const getProductsKnow = async () => {
           await fetch('http://localhost:5000/api/v1/productsKnow')
                .then(res => res.json())
                .then(res => setProductosKnows(res))
        }
        getProductsKnow()
    }, [])
    
    return (
        <MyContext.Provider value={{
            productos,
            setOpenModal,
            openModal,
            setPuntuacion,
            puntuacion,
            productoSales,
            productosKnows,
            setProductos,
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export { MyProvider, MyContext }