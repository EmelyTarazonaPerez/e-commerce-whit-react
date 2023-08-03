import React from 'react'
import './categorias.css'
import audifonos from '../../../img/Audifonos.avif'
import hogar from '../../../img/Hogar.avif'
import tecnologia from '../../../img/Tecnologia.avif'

import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className=''>
            <h1 className='titulo_categorias'>Browse categories</h1>
            <div className='contenedor_bloque'>
                <div>
                    <Link  className='bloque'>
                        <img className='imagen_categoria' src={tecnologia} alt='imagen' />
                    </Link>
                    <h1 className='titulo-categoria'>Technology</h1>
                    <Link  to='/ListProducts' className='link_categories'>See More</Link>
                </div>
                <div>
                    <Link  className='bloque moda'>
                        <img className='imagen_categoria' src={hogar} alt='imagen' />
                    </Link>
                    <h1 className='titulo-categoria'>Fashion</h1>
                    <Link to='/ListProducts' className='link_categories'>See More</Link>
                </div>
                <div>
                    <Link  className='bloque muebles'>
                        <img className='imagen_categoria' src={audifonos} alt='imagen' />
                    </Link>
                    <h1 className='titulo-categoria'>Others</h1>
                    <Link to='/ListProducts' className='link_categories'>See More</Link>
                </div>
            </div>
        </div>
    )
}

export default Categories