import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ItemDetail, Contenedortext } from '../../components/ItemDetail';
import SubEncabezado from '../../components/encabezado';
import { Slide, Slideshow } from '../../components/slideshow';
import { MyContext } from '../../context';
import OpinionContenedor from '../../components/opinion';
import FormOpinion from '../../components/formOpinion';

const ProductoDetails = () => {


    const { productos, openModal, setOpenModal } = useContext(MyContext)
    const { id } = useParams();


    return (
        <div className='container '>
            <SubEncabezado>
                <h1 className='title'>Detalle de producto</h1>
            </SubEncabezado>
            <ItemDetail id={id} />
            <Contenedortext opiniones>
                <OpinionContenedor
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            </Contenedortext>
            <section className='p-4'>
                <SubEncabezado>
                    <h1 className='title'>Productos que te pueden interesar</h1>
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
            {openModal && (
                <section className="form_cortina">
                    <div className='open_form'>
                        <Contenedortext >
                            <FormOpinion />
                        </Contenedortext>
                    </div>
                </section>

            )


            }
        </div>
    );
}


export default ProductoDetails;
