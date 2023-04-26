import './categorias.css'
/* import portatil from '../../image/categories/portatil.jpg'*/
import audifonos from '../../img/Audifonos.avif'
import hogar from '../../img/Hogar.avif'
import relojes from '../../img/Relojes.avif'
import tecnologia from '../../img/Tecnologia.avif'

import { Link } from 'react-router-dom'

const Categories = ({ Tecnologia, Moda, Muebles, title }) => {
    return (
        <div categoria='categorias'>
            <div className='contenedor_bloque'>
                <div>
                    <Link to='/technology' className='bloque'>
                        <img className='imagen_categoria' src={audifonos} alt='imagen' />
                    </Link>
                    <h1 className='categories tecnologia'>{Tecnologia}</h1>
                </div>
                <div>
                    <Link className='bloque moda'>
                        <img className='imagen_categoria' src={hogar} alt='imagen' />
                    </Link>
                    <h1 className='categories'>{Moda}</h1>
                </div>
                <div>
                    <Link className='bloque muebles'>
                        <img className='imagen_categoria' src={relojes} alt='imagen' />
                    </Link>
                    <h1 className='categories'>{Muebles}</h1>
                </div>
                <div>
                    <Link className='bloque muebles'>
                        <img className='imagen_categoria' src={tecnologia} alt='imagen' />
                    </Link>
                    <h1 className='categories'>{Muebles}</h1>
                </div>
            </div>
        </div>
    )
}

export default Categories