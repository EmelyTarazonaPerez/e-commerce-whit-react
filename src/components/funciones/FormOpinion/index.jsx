import React, { useRef, useState } from "react";
import './formOpinion.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FormOpinion = ({ id, puntuacion, setPuntuacion }) => {

    const firstStart = useRef(null)
    let [body, setBody] = useState({
        nombre: '',
        producto: id,
        reseña: '',
        correo: ''
    });

    function calificar(item) {
        let contador = item.id[0];
        let nombre = item.id.substring(1);
        for (let i = 0; i < firstStart.current.children.length; i++) {
            if (i < contador) {
                document.getElementById((i + 1) + nombre).style.color = "orange";
            }
            else {
                document.getElementById((i + 1) + nombre).style.color = "black";
            }
        }
        setPuntuacion(contador);
    }

    const handleChange = (e) => {
        setBody({
            ...body,
            [e.target.name]: e.target.value

        })
    }

    body.calificacion = puntuacion

    return (
        <form className="form">
            <legend className="form_title">Dinos tu opinion</legend>
            <p className="form_paragraph">Fill in the fields</p>
            <div className="form_container">
                <div className="form_group">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                        <input
                            name='nombre'
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleChange}>
                        </input>
                    </div>
                </div>
                <div className="form_group">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Correo</span>
                        <input
                            name="correo"
                            type="gmail"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleChange}>
                        </input>
                    </div>
                </div>
                <div className="form_group">
                    <div className="row">
                        <label htmlFor="body" className="col-4 form_label">Calificacion:</label>
                        <div className="col-4" ref={firstStart}>
                            <FontAwesomeIcon onClick={() => calificar(firstStart.current.children[0])} id='1estrella' className='icono_star' icon={faStar} />
                            <FontAwesomeIcon onClick={() => calificar(firstStart.current.children[1])} id='2estrella' className='icono_star' icon={faStar} />
                            <FontAwesomeIcon onClick={() => calificar(firstStart.current.children[2])} id='3estrella' className='icono_star' icon={faStar} />
                            <FontAwesomeIcon onClick={() => calificar(firstStart.current.children[3])} id='4estrella' className='icono_star' icon={faStar} />
                            <FontAwesomeIcon onClick={() => calificar(firstStart.current.children[4])} id='5estrella' className='icono_star' icon={faStar} />
                        </div>
                    </div>
                </div>
                <label htmlFor='body' className="form_label">Opinion:</label>
                <textarea
                    name="reseña"
                    type="text"
                    className="textarea"
                    placeholder=" "
                    onChange={handleChange}>
                </textarea>
                <div className="row">
                    <button type='submit' className='col btn btn-danger boton-opinion btn-comprar'>Salir</button>
                    <button type='submit' className='col btn btn-warning boton-opinion'>Opinar</button>
                </div>
            </div>
        </form>
    )
}

export default FormOpinion