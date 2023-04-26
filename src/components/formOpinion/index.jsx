import React, { useRef } from "react";
import './formOpinion.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FormOpinion = () => {
    const firstStart = useRef(null)
    
    let contador = 0;
    const calificar = (item) =>{
        contador = item.id[0]
        let nombre = item.id.substring(1)
        
        for (let i=0; i<firstStart.current.children.length; i++){
            if(i<contador){
                document.getElementById(i+1 +)
            }
        }
    }

    console.log(firstStart.current)
    return (
        <form className="form">
            <legend className="form_title">Dinos tu opinion</legend>
            <p className="form_paragraph">Fill in the fields</p>
            <div className="form_container">
                <div className="form_group">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                    </div>
                </div>
                <div className="form_group">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Correo</span>
                        <input type="gmail" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                    </div>
                </div>
                <div className="form_group">
                    <div className="row">
                        <label htmlFor="body" className="col form_label">Danos tu calificacion:</label>
                        <div className="col" ref={firstStart}>
                            <FontAwesomeIcon onClick={()=>calificar(firstStart.current.children[0])} id='1estrella' className='icono_star' icon={faStar} />
                            <FontAwesomeIcon onClick={()=>calificar(firstStart.current.children[1])} id='2estrella' className='icono_star' icon={faStar} />
                            <FontAwesomeIcon onClick={()=>calificar(firstStart.current.children[2])} id='3estrella' className='icono_star' icon={faStar} />
                            <FontAwesomeIcon onClick={()=>calificar(firstStart.current.children[3])} id='4estrella' className='icono_star' icon={faStar} />
                            <FontAwesomeIcon onClick={()=>calificar(firstStart.current.children[4])} id='5estrella' className='icono_star' icon={faStar} />
                        </div>
                    </div>
                </div>
                <label htmlFor='body' className="form_label">Opinion:</label>
                <input
                    name=""
                    type="text"
                    className="form_input"
                    placeholder=" ">
                </input>
                <button type='submit' className='btn btn-warning' >Create</button>
            </div>
        </form>
    )
}

export default FormOpinion