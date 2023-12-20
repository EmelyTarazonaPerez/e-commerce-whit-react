import React, { useContext, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import './checkbox.css'
import { Link } from 'react-router-dom';
import { MyContext } from '../../../context';
import RedesSociales from '../../static/EndPage';

const ListProducts = () => {

    const { productos } = useContext(MyContext)
    const [filtro, setFiltro] = useState([]);
    const [numberProductList, setNumberProductList] = useState(0);
    const [productosSeleccionados, setProductosSeleccionados] = useState({
        All: false,
        technology: false,
        furniture: false,
        accesories: false,
        clothes: false,
    });

    const handleOnCheckbox = e => {
        console.log(e.target.checked)
        console.log(e.target.value)

        setProductosSeleccionados({ ...productosSeleccionados, [e.target.value]: e.target.checked })
        console.log(productosSeleccionados)
        if (e.target.checked) {
            console.log('hola')
            setFiltro([...filtro, e.target.value])
            console.log(filtro.length)
        } else {
            setFiltro(filtro.filter(fil => fil !== e.target.value))
        }
    }

    useEffect(() => {
        setNumberProductList(productos.length)
    }, [productos]);

    useEffect(() => {
        if (filtro.length === 0) {
            setNumberProductList(productos.length)
            return
        }
        const productosFiltrados = productos.filter(item => filtro.includes(item.category.name))
        setNumberProductList(productosFiltrados.length);

    }, [filtro])

    return (
        <>
            <div className='container container-main'>
                <Row>
                    <ContenedorFiltro className='container'>
                        <h5>Check </h5>
                        <div class="mt-4 form-check">
                            <input
                                className="form-check-input"
                                onChange={handleOnCheckbox}
                                name='technology'
                                value='technology'
                                type='checkbox'
                                id='technology'
                            />
                            <label class="form-check-label" htmlFor="technology">
                                technology
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                className="form-check-input"
                                onChange={handleOnCheckbox}
                                name='clothes'
                                value='clothes'
                                type='checkbox'
                                id='clothes'
                            />
                            <label class="form-check-label" htmlFor="clothes">
                            clothes
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                className="form-check-input"
                                onChange={handleOnCheckbox}
                                name='furniture'
                                value='furniture'
                                type='checkbox'
                                id='furniture'
                            />
                            <label class="form-check-label" htmlFor="furniture">
                            furniture
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                className="form-check-input"
                                onChange={handleOnCheckbox}
                                name='accesories'
                                value='accesories'
                                type='checkbox'
                                id='accesories'
                            />
                            <label class="form-check-label" htmlFor="accesories">
                                accesories
                            </label>
                        </div>
                    </ContenedorFiltro>

                    <ListaProducto className='datosfiltrados'>
                        {
                            productos.map(item =>
                                (filtro.length === 0 || filtro.includes(item.category.name)) && (
                                    <div className="card card_contenido">
                                        <img src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p>$ {item.price}</p>
                                            <Link to={`/details/${item.idproducto}`}>
                                                <button className='btn-warning btn-detalles btn-color-detalle'>Detail</button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            )
                        }
                        {numberProductList === 0 && <h1>sorry no hemos encontrado el producto</h1>}

                    </ListaProducto>

                </Row>
            </div >
            <RedesSociales />
        </>
    );
}

const ContenedorFiltro = styled.div`
    text-align: initial;
    width: 16%;
    padding: 25px;
    height: max-content;
    background-color: #fff;
    margin-right: 35px;
    barder-radius: 43px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ListaProducto = styled.div`
    width: 80%;
    background-color: rgb(28 28 28 / 8%);
    padding: 25px;
    margin-bottom: 50px;
    border-radius: 5px;

    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 32px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`;

export default ListProducts;
