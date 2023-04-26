import './home.css'
import imagen1 from '../../img/imagen1.png'
import imagen2 from '../../img/imagen2.png'
import imagen3 from '../../img/imagen3.png'
import Categories from '../../components/categorias'
import audifonos from '../../img/Audifonos.avif'
import { useContext } from 'react'
import { Slideshow, Slide } from '../../components/slideshow'
import Count from '../../components/count'
import SubEncabezado from '../../components/encabezado'
import { MyContext } from '../../context'
import { Link } from 'react-router-dom'

const Home = () => {

    const {productos} = useContext(MyContext)


    return (
        <main className='home'>
            <div className='container'>
                <section>
                    <Slideshow>
                        <Slide>
                            <a href="wwww.youtube.com">
                                <img src={imagen1} alt='imagen' />
                            </a>
                        </Slide>
                        <Slide>
                            <a href="wwww.youtube.com">
                                <img src={imagen2} alt='imagen' />
                            </a>
                        </Slide>
                        <Slide>
                            <a href="wwww.youtube.com">
                                <img src={imagen3} alt='imagen' />
                            </a>
                        </Slide>
                    </Slideshow>
                </section>
                <section>
                    <SubEncabezado>
                        <h1 className='title'>Categorias</h1>
                    </SubEncabezado>
                    <Categories
                        title="Categorias"
                        Tecnologia='Tecnologia'
                        Moda='Moda'
                        Muebles='Muebles' />
                </section>
                <section>
                    <SubEncabezado>
                        <h1 className='title'>Tecnologia</h1>
                    </SubEncabezado>
                    <div className='slideshow-productos'>
                        <Slideshow >
                            {productos.map(producto => (
                                <Slide producto key={producto.Id_producto} >
                                    <div className="card card_contenido">
                                        <img src={producto.imagen} className="card-img-top" alt="..." />
                                        <div className="card-body card_borde">
                                            <h5 className="card-title">{producto.nombre}</h5>
                                            <p className="card-text">Price: ${producto.precio}</p>
                                            <p className="card-text categoria-card"><small className="text-muted">{producto.categoria}</small></p>
                                            <Link to={`/details/${producto.Id_producto}`}><button className='btn btn-warning btn-detalles'> Detalle</button></Link>
                                        </div>
                                    </div>
                                </Slide>
                            ))}
                        </Slideshow>
                    </div>
                </section>
                <section>
                    <SubEncabezado>
                        <h1 className='title'>Producto destacado</h1>
                    </SubEncabezado>
                    <div className='row bg-white p-4'>
                        <div className='col contenedor-imagen-destacado'>
                            <img className='imagen-destacado' src={audifonos} alt='imagen' />
                        </div>
                        <div className='col contenedor-info'>
                            {/*detalle del producto*/}
                            <h3>Combo 2 Pares de Audífonos Inalámbricos L21 Pro</h3>
                            <small className='bg-info descuento-producto'>Hoy -19%</small>
                            <hr></hr>
                            <p >Precio:<strong className='letter-price'> $ 150.000</strong></p>
                            <p className='title-envios'>Envio gratis a nivel nacional</p>
                            {/*contador*/}
                            <div> <Count /></div>
                            {/*botones de compras*/}
                            <button className='btn btn-warning'>
                                Añadir a carrito
                            </button>
                            <button className='btn btn-comprar'>
                                Comprar  ahora
                            </button>
                        </div>
                    </div>
                </section>
              
            </div>
        </main>
    )
}

export default Home