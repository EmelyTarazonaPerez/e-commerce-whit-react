import React, { useEffect, useState } from "react"
import Count from "../count"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"


const ItemDetail = ({ id }) => {

    /*obtener detalle de un producto*/
    const [productoId, setProductoId] = useState([])

    useEffect(() => {
        const getDetails = () => {
            fetch('http://localhost:5000/api/v1/products/' + id)
                .then(res => res.json())
                .then(res => setProductoId(res))
        }
        getDetails()
    }, [id])

    return (
        <div className="container">
            {productoId.map(producto => (
                <div className='row'>
                    <Contenedortext className='col contenedor-imagen-destacado'>
                        <img className='imagen-detail' src={producto.imagen} alt='imagen' />
                    </Contenedortext>
                    <Contenedortext className='col'>
                        {/*detalle del producto*/}
                        <h3>{producto.nombre}</h3>
                        <small className='bg-info descuento-producto'>Hoy - {producto.oferta}%</small>
                        <hr></hr>
                        <div className="row">
                            <div className="col-3">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <span className="col-9" >0 opiniones</span>
                        </div>
                        <p >Precio:<strong className='letter-price'> $ {producto.precio}</strong></p>
                        <p className='title-envios'>Envio gratis a nivel nacional</p>
                        {/*contador*/}
                        <div><Count /></div>
                        {/*botones de compras*/}
                        <button className='btn btn-warning'>Añadir a carrito</button>
                        <button className='btn btn-comprar'>Comprar  ahora</button>
                        <hr></hr>
                        <h1 className="title">Especificaciones</h1>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </Contenedortext>
                </div>
            ))}
        </div>)}



const Contenedortext = styled.div`
border: 1px solid #e9e1e1;
background-color: #fff;
padding: 25px;
margin: 10px;

${props => props.opinion ? ' width: 100%;' : 'width: 652px;'}

`

export { ItemDetail, Contenedortext }
