import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ItemDetail } from '../../components/funciones/ItemDetail';
import { Contenedortext } from '../../components/funciones/ItemDetail';
import { Slide, Slideshow } from '../../components/static/SlideShow';
import { MyContext } from '../../context';
import FormOpinion from '../../components/funciones/FormOpinion';
import { useAuth } from '../../auth/AuthProvider';
import RedesSociales from '../../components/static/EndPage';

const ProductoDetails = () => {
    const {
        productos,
        openModal,
        setPuntuacion,
        puntuacion,
    } = useContext(MyContext)

    const { id } = useParams();

    const auth = useAuth()
    console.log(auth.iduser)

    const productoId = productos.map(item => id.includes(item.Id_producto) && (
        console.log(item)

    ))



    return (
        <>
        <div className='container'>
            <ItemDetail id={id} 
            productoId = {productoId}
            />
            <section className='p-4'>
                <h2 className=''>More products</h2>
                <div className='slideshow-productos'>
                </div>
            </section>
            {openModal && (
                <section className="form_cortina">
                    <div className='open_form'>
                        <Contenedortext >
                            <FormOpinion
                                id={id}
                                setPuntuacion={setPuntuacion}
                                puntuacion={puntuacion}
                            />
                        </Contenedortext>
                    </div>
                </section>
            )}
            
        </div>
        <RedesSociales/>

        </>
        
    );
}


export default ProductoDetails;
