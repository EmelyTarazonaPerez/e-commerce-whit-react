import React, { useEffect, useState } from 'react'
import './carrito.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../auth/AuthProvider';

const Cart = () => {
    const auth = useAuth()
    console.log(auth.iduser)
    const [cartList, setCartList] = useState([]);
    const [UpdateCartList, setUpdateCartList] = useState(false)

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/v1/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.text())
            .then(res => console.log(res))
        setUpdateCartList(true)
    }

    useEffect(() => {
        const getCart = async () => {
            await fetch('http://localhost:5000/api/v1/cart')
                .then(res => res.json())
                .then(res => setCartList(res.filter(item => item.idusuario === Number(auth.iduser))))
        }
        getCart()
        setUpdateCartList(false)
    }, [UpdateCartList]);

    return (
        <div className='container container-pag-cart'>
            <div className='row'>
                <div className='col-8 '>
                    <h1 className='title-pag'>Shopping cart</h1>
                    <div className='border-table'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartList.map(cartItem => (
                                    <tr key={cartItem.Id_pedido}>
                                        <td><img className='imagen-cart' src={cartItem.imagen} alt='imagen' /></td>
                                        <td className='td-infor'>{cartItem.nombre}</td>
                                        <td className='td-infor'>{cartItem.cantidad}</td>
                                        <td className='td-infor'>{cartItem.precio}</td>
                                        <td className='td-infor container-action'>
                                            <button className='button-cart' onClick={() => handleDelete(cartItem.Id_pedido)}><FontAwesomeIcon className='delete-icono' icon={faXmarkSquare} /></button>
                                            <button className='btn-pagar'>PAY</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className='col-4 container-ad'>
                </div>
            </div>
        </div>
    )
}

export default Cart;