import React from "react"
import { Slide, Slideshow } from "../../static/SlideShow"
import { Link } from "react-router-dom"
import Encabezado from "../../static/Header"
import CardProduct from "../../static/cardProduct/cardProduct"

function ComponentNewProducts({ productosKnows }) {
    return (
        <React.Fragment>
            <Encabezado>
                <h2>New products</h2>
            </Encabezado>
            <div className='slideshow-productos'>
                <Slideshow >
                    {productosKnows.map(item => (
                        <Slide producto key={item.idproduct} >
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
            <Link className="link_categories" to='/ListProducts'>See more</Link>
        </React.Fragment>

    )
}

export default ComponentNewProducts;