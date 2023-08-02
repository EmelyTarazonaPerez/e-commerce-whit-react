import { Link, Navigate } from 'react-router-dom';
import './login.css'
import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthProvider';
import { API_URL } from '../../auth/constants';
import fondo from '../../img/fondo.svg'
import logo from '../../img/logo.png'


const Login = () => {
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")

    const auth = useAuth()

    async function handleSumit(e) {
        try {
            e.preventDefault()
            await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    correo,
                    contraseña
                })
            })
                .then(res => res.json())
                .then(res => auth.setIdUser(res.user[0].id_usuario))
            auth.setAuthenticated(true)
        } catch (error) {
            console.log(error)
        }
    }
    if (auth.isAuthenticated) {
        return <Navigate to="/cart" />
    }

    return (
        <section className="container vh-100">
            <div className='row'>
                <div className='vh-100 container-img col-md-4 col-lg-6'>
                    <img className="fondo" src={fondo} alt='fondo' />
                </div>
                <form className="form col-md-6 col-lg-6 container-form" onSubmit={handleSumit}>
                    <div>
                        <div className="hijo-form">
                            <div className='container-logo'>
                                <img className="logo" src={logo} alt='logo' />
                            </div>
                            <h1 className='titulo-login'>Login</h1>
                            <label className="form-label">Gmail</label>
                            <input
                                className="form-control"
                                type="text"
                                value={correo}
                                required
                                onChange={(e) => setCorreo(e.target.value)}></input>

                            <label className="form-label">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                value={contraseña}
                                required
                                onChange={(e) => setContraseña(e.target.value)}></input>

                            <button className='btn-login btn btn-primary'>Login</button>
                            <p className='m-4'>If you are not registered, <Link to='/singup'>register here</Link></p>
                        </div>

                    </div>

                </form>
            </div>
        </section>

    )
}

export default Login;