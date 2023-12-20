import './home.css'
import imagen1 from '../../img/imagen1.jpg'
import imagen2 from '../../img/imagen2.jpg'
import imagen3 from '../../img/imagen3.jpg'
import Categories from '../../components/products/Categories'
import React, { useContext } from 'react'
import { Slideshow, Slide } from '../../components/static/SlideShow'
import { MyContext } from '../../context'
import Valores from '../../components/static/Values'
import RedesSociales from '../../components/static/EndPage'
import ComponentSales from '../../components/products/Sales'
import ComponentNewProducts from '../../components/products/NewProducts'
import styled from 'styled-components'

const Home = () => {

    const { productoSales, productosKnows } = useContext(MyContext)

    console.log(productoSales)

    return (
        <React.Fragment>
            <div className='container'>
                <ContenedorHv>
                    <Slideshow>
                        <Slide>
                            <img className='imagen_slide_principal' src={imagen1} alt='imagen' />
                        </Slide>
                        <Slide>
                            <img className='imagen_slide_principal' src={imagen2} alt='imagen' />
                        </Slide>
                        <Slide>
                            <img className='imagen_slide_principal' src={imagen3} alt='imagen' />
                        </Slide>
                    </Slideshow>
                    <Categories />
                </ContenedorHv>
                <ContenedorHv>
                    <ComponentSales
                        productoSales={productoSales}
                    />
                    <div className='row'>
                        <div className='anuncio-izq col-lg-6 col-md-12'>
                            <div>
                                <h1>40% sales</h1>
                                <p>productos tecnologicos</p>
                            </div>

                        </div>
                        <div className='anuncio-der col-lg-6 col-md-12'>
                            <div>
                                <h1>40% sales</h1>
                                <p>Productos para el hogar</p>
                            </div>
                        </div>
                    </div>
                </ContenedorHv>
                <ComponentNewProducts
                    productosKnows={productosKnows}
                />
                <Valores />
            </div>
            <RedesSociales />
        </React.Fragment>
    )
}

const ContenedorHv = styled.div`
height: 100vh;
`
export default Home