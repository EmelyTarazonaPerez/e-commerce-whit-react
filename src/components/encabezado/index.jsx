import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const SubEncabezado = ({ children }) => {

    return (
        <Encabezado>
            {children}
            <Link to="/ListProducts" className='link'>ver mas</Link>
        </Encabezado>
    )

}
const Encabezado = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;



export default SubEncabezado 