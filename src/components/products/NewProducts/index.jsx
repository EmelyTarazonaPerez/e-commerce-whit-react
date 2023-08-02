import React from "react"
import { Slide, Slideshow } from "../../static/SlideShow"
import { Link } from "react-router-dom"
import Encabezado from "../../static/Header"

function ComponentNewProducts({ productosKnows }) {
    return (
        <React.Fragment>   
        <Encabezado>
            <h2>New products</h2>
        </Encabezado>
            <div className='slideshow-productos'>
                <Slideshow >
                    {productosKnows.map(producto => (
                        <Slide producto key={producto.Id_producto} >
                            <div className="card card_contenido">
                                <img src={producto.imagen} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p>CATEGORY</p>
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p>${producto.precio}</p>
                                    <Link to={`/details/${producto.Id_producto}`}><button className='btn-warning btn-detalles btn-color-detalle'>Detail</button></Link>
                                </div>
                            </div>
                        </Slide>
                    ))}
                </Slideshow>
            </div>
            <Link className="link_categories" to='/ListProducts'>See more</Link>
        </React.Fragment>

    )
}

export default ComponentNewProducts;