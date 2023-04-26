import React from 'react';
import styled from 'styled-components';
import ItemCard from '../ItemCard';


const ListProducts = () => {
    return (
        <main className='container p-4'>
            <p className='litter'>Todos los productos</p>
            <div className='row'>
                <ContenedorFiltro className='col-4 '>
                    <div className='card p-5 '>
                        <h4>Filtros</h4>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Tecnologia
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Muebles
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Moda
                            </label>
                        </div>
                    </div>
                </ContenedorFiltro>
                <ListaProducto className='col-8'>
                    <ItemCard />
                </ListaProducto>
            </div>
        </main>

    );
}

const ContenedorFiltro = styled.div`
width: max-content;
`;

const ListaProducto = styled.div`
    width: min-content;
    margin-left: 57px;
    background-color: #876CEB;
    padding: 25px;
    border-radius: 5px;
`;

export default ListProducts;
