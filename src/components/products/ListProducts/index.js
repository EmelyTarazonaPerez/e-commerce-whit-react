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
        tecnologia: false,
        muebles: false,
        accesorios: false,
        ropa: false,
    });

    const handleOnCheckbox = e => {
        setProductosSeleccionados({ ...productosSeleccionados, [e.target.value]: e.target.checked })
        if (e.target.checked) {
            setFiltro([...filtro, e.target.value])
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
        const productosFiltrados = productos.filter(item => filtro.includes(item.filtro))
        setNumberProductList(productosFiltrados.length);

    }, [filtro])

    return (
        <>
            <div className='container container-main'>
                <Row>
                    <ContenedorFiltro className='container'>
                        <h5>Selectionar filtro</h5>
                        <div class="mt-4 form-check">
                            <input
                                className="form-check-input"
                                onChange={handleOnCheckbox}
                                name='tecnologia'
                                value='tecnologia'
                                type='checkbox'
                                id='tecnologia'
                            />
                            <label class="form-check-label" htmlFor="tecnologia">
                                Tecnologia
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                className="form-check-input"
                                onChange={handleOnCheckbox}
                                name='ropa'
                                value='ropa'
                                type='checkbox'
                                id='ropa'
                            />
                            <label class="form-check-label" htmlFor="ropa">
                                Ropa
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                className="form-check-input"
                                onChange={handleOnCheckbox}
                                name='muebles'
                                value='muebles'
                                type='checkbox'
                                id='muebles'
                            />
                            <label class="form-check-label" htmlFor="muebles">
                                Muebles
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                className="form-check-input"
                                onChange={handleOnCheckbox}
                                name='accesorios'
                                value='accesorios'
                                type='checkbox'
                                id='accesorios'
                            />
                            <label class="form-check-label" htmlFor="accesorios">
                                Accesorios
                            </label>
                        </div>
                    </ContenedorFiltro>

                    <ListaProducto className='datosfiltrados'>
                        {
                            productos.map(item =>
                                (filtro.length === 0 || filtro.includes(item.filtro)) && (
                                    <div className="card card_contenido">
                                        <img src={item.imagen} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p>{item.filtro}</p>
                                            <h5 className="card-title">{item.nombre}</h5>
                                            <p>$ {item.precio}</p>
                                            <Link to={`/details/${item.Id_producto}`}>
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
    grid-template-columns: repeat(3,1fr);
    gap: 32px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`;

export default ListProducts;
