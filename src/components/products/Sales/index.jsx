import React from "react"
import { Slide, Slideshow } from "../../static/SlideShow"
import { Link } from "react-router-dom";
import Encabezado from "../../static/Header"

function ComponentSales({ productoSales }) {
    return (
        <React.Fragment>
            <Encabezado>
                <h2 className=''>SALES</h2>
            </Encabezado>
            <div className='slideshow-productos'>
                <Slideshow >
                    {productoSales.map(item => (
                        <Slide producto key={item.Id_producto} >
                            <div className="card card_contenido">
                                <img src={item.imagen} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p>{item.filtro}</p>
                                    <h5 className="card-title">{item.nombre}</h5>
                                    <p>${item.precio}</p>
                                    <Link to={`/details/${item.Id_producto}`}><button className='btn-warning btn-detalles btn-color-detalle'>Detail</button></Link>
                                </div>
                            </div>
                        </Slide>
                    ))}
                </Slideshow>
            </div>
        </React.Fragment>
    )
}

export default ComponentSales;