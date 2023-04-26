import React, { createContext, useEffect, useState } from "react";
const MyContext = createContext()

const MyProvider = (props) => {


    const [openModal, setOpenModal] = useState(false)
    const [productos, setProductos] = useState([]);

    /*obtener lista de productos*/
    useEffect(() => {
        const getProducts = () => {
            fetch('http://localhost:5000/api/v1/products/')
                .then(res => res.json())
                .then(res => setProductos(res))
        }
        getProducts()
    }, [])

     /*obtener detalle de un producto*/

    return (
        <MyContext.Provider value={{
            productos,
            setOpenModal,
            openModal,
            
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export { MyProvider, MyContext }