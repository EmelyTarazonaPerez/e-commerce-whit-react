import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {  useState } from "react";
import { useAuth } from "../../../auth/AuthProvider";

function SendACart({ imagen, precio, nombre, cantidad, idproducto }) {

    const auth = useAuth()
    const [bodyObjetoCart, ] = useState({

        imagen: imagen,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        idusuario: auth.iduser,
        idproducto: idproducto,
    });

    const InsertCard = async () => {
        await fetch('http://localhost:5000/api/v1/cart', {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(bodyObjetoCart),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    const message = () => {
        alert('producto guardado')
        InsertCard()
    }

    return (
        <button onClick={message} className='btn btn-cart'>Add to cart <FontAwesomeIcon icon={faCartShopping} /></button>
    )
}

export default SendACart