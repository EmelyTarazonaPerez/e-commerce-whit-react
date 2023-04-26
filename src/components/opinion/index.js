import React from "react";

const OpinionContenedor = (props) => {
    
    const changeModalState = () =>{
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <div>
            <h1 className='title'>Opiniones</h1>
            <p>Sin opiniones todavía</p>
            <button onClick={changeModalState} className='btn btn-warning'>Agregar opinion</button>
            
        
        </div>
    )
}

export default OpinionContenedor