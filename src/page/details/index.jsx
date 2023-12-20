import React, { useContext, useState, useEffect } from 'react';
import { ItemDetail } from '../../components/funciones/ItemDetail';
import { ContainerImg } from '../../components/funciones/ItemDetail';
import { MyContext } from '../../context';
import FormOpinion from '../../components/funciones/FormOpinion';
import RedesSociales from '../../components/static/EndPage';
import { useParams } from 'react-router-dom';

const ProductoDetails = () => {
    const {
        openModal,
        setPuntuacion,
        puntuacion,
    } = useContext(MyContext)

    const { id } = useParams();
    const [productoId, setProductoId] = useState()

    useEffect(() => {
        const productoID = async () => {
            await fetch('http://localhost:5000/api/v1/products/' + id)
                .then(res => res.json())
                .then(res => setProductoId(res))
        }
        productoID()
    }, [id])

    console.log(productoId)
    return (
        <>
            <div className='container'>
                <ItemDetail
                    productoId={productoId}
                    id={id}>
                </ItemDetail>
                <section className='p-4'>
                    <h2 className=''>More products</h2>
                    <div className='slideshow-productos'>
                    </div>
                </section>
                 { openModal && (
                    <section className="form_cortina">
                        <div className='open_form'>
                            <ContainerImg >
                                <FormOpinion
                                    id={id}
                                    setPuntuacion={setPuntuacion}
                                    puntuacion={puntuacion}
                                />
                            </ContainerImg>
                        </div>
                    </section>
                 ) }
            </div>
            <RedesSociales />
        </>
    );
}


export default ProductoDetails;
