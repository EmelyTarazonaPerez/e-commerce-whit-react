import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {  useState } from "react";
import { useAuth } from "../../../auth/AuthProvider";

function SendACart({ imagen, precio, nombre, cantidad, idproducto }) {

    const auth = useAuth()

    const objeto = {
        imagen: imagen,
        name: nombre,
        price: precio,
        quantity: cantidad,
        idusuario: auth.iduser,
        idproducto: idproducto,
    }


    console.log('component enviar a carritos' + auth.iduser)


    console.log(objeto)

    const InsertCard = async () => {
        await fetch('http://localhost:5000/api/v1/cart', {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(objeto),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    const message = () => {
        if(auth.iduser) {
            alert('saved product')
            InsertCard()
        }
        else {
            alert('please register to add products to cart')
        }
    }

    return (
        <button onClick={message} className='btn btn-cart'>Add to cart <FontAwesomeIcon icon={faCartShopping} /></button>
    )
}

export default SendACart