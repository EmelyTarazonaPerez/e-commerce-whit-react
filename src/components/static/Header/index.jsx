import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const SubEncabezado = ({ children }) => {

    return (
        <Encabezado>
            {children}
            <Link  className="link_categories" to='/ListProducts'>See more</Link>
        </Encabezado>
    )

}
const Encabezado = styled.div`
    justify-content: space-between;
    text-align: center;
`;



export default SubEncabezado 