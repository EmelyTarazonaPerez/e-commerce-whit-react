import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ItemDetail } from '../../components/funciones/ItemDetail';
import { Contenedortext } from '../../components/funciones/ItemDetail';
import { Slide, Slideshow } from '../../components/static/SlideShow';
import { MyContext } from '../../context';
import FormOpinion from '../../components/funciones/FormOpinion';
import { useAuth } from '../../auth/AuthProvider';
import RedesSociales from '../../components/static/EndPage';
import { Simulate } from 'react-dom/test-utils';
import ComponentNewProducts from '../../components/products/NewProducts';

const ProductoDetails = () => {
    const {
        productos,
        openModal,
        setPuntuacion,
        puntuacion,
    } = useContext(MyContext)

    const { id } = useParams();

    const auth = useAuth()
    console.log(id)

    const similarProducts = () => {

    }
    let nuevo = []
    productos.forEach(item => id.includes(item.Id_producto) && (
        nuevo.push(item)
    ))
    console.log(nuevo[0])
    let similitud = nuevo[0].nombre.split(' ')[0]
    let string = nuevo[0].nombre

    console.log(string.includes(similitud))

    productos.forEach(item => item.nombre.includes(similitud) && (
        console.log(item)
    ))

    return (
        <>
            <div className='container'>
                {productos.forEach(item => id.includes(item.Id_producto) && (
                    <>{nuevo.push(item)}
                        <ItemDetail id={id}
                            nombre = {item.nombre}
                            foto = {item.imagen}
                            descripcion = {item.descripcion}
                            color = {item.detalle.Color}
                            garantia = {item.detalle.Garantia}
                            marca = {item.detalle.Marca}
                            precio = {item.detalle.precio}
                        />
                    </>
                ))}

                <ComponentNewProducts

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
            <RedesSociales />

        </>

    );
}


export default ProductoDetails;
