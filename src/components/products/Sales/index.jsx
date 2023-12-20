import React from "react"
import { Slide, Slideshow } from "../../static/SlideShow"
import { Link } from "react-router-dom";
import Encabezado from "../../static/Header"
import CardProduct from "../../static/cardProduct/cardProduct";

function ComponentSales({ productoSales }) {
    return (
        <React.Fragment>
            <Encabezado>
                <h2 className=''>SALES</h2>
            </Encabezado>
            <div className='slideshow-productos'>
                <Slideshow >
                    {productoSales.map(item => (
                        <Slide producto key={item.idproducto} >
                            <CardProduct
                                id={item.idproducto}
                                image={item.image}
                                category={item.category.name}
                                name={item.name}
                                price={item.price}
                            />
                        </Slide>
                    ))}
                </Slideshow>
            </div>
        </React.Fragment>
    )
}

export default ComponentSales;