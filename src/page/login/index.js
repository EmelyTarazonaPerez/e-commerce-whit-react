import './login.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const [modalInfo, SetModalInfo] = useState(false)
    const [valueInput, SetValueInput] = useState({
        nombre: "",
        contraseña: "",
        correo:"",
    });

    const handleChange = (e) => {
        SetValueInput(
            {
                ...valueInput,
                [e.target.name]: e.target.value
            }
        )
    }

    function limpiarFormulario() {
        document.getElementById("myForm").reset();
      }

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
             fetch('http://localhost:4000/api/v1/users', {
            method: 'POST',
            body: JSON.stringify(valueInput),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json)
            .then(res => console.log(res))
            limpiarFormulario()
            SetModalInfo(true)
        } catch (error) {
            console.log('hubo un error')
        }     
    }

 

    return (
        <form  id="myForm" onSubmit={handleSubmit} className="container_login">
            <p className='icono_login'><FontAwesomeIcon icon={faUserAlt} /></p>
            <div className='container_form'>
                <label htmlFor='body' className='label_input'>User:</label>
                <input
                    name='nombre'
                    className='input_login'
                    onChange={handleChange}
                    type='text'
                >
                </input>
                <label htmlFor='body' className='label_input'>Gmail:</label>
                <input
                    name='correo'
                    className='input_login'
                    onChange={handleChange}
                    type='correo'
                ></input>
                 <label htmlFor='body' className='label_input'>Password:</label>
                <input
                    name='contraseña'
                    className='input_login'
                    onChange={handleChange}
                    type='password'
                ></input>
                <button  type='submit'  className='register_me'>Register me</button>
            </div>
            {
                modalInfo&& <div>
                    se ha registrado correctamente para logearse haga click en iniciar seccion
                </div>
            }
        </form>
    )
}

export default Login;