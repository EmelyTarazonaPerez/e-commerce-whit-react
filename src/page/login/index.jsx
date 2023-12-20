import { Link, Navigate } from 'react-router-dom';
import './login.css'
import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthProvider';
import { API_URL } from '../../auth/constants';
import fondo from '../../img/fondo.svg'
import logo from '../../img/logo.png'


const Login = () => {
    const [gmail, setGmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const auth = useAuth()

    async function handleSumit(e) {
        e.preventDefault()
        await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                gmail,
                password
            })
        })
            .then(res => res.json())
            .then(lectura => auth.setIdUser(lectura.user.id_usuario))
            .then(res => auth.setAuthenticated(true))
            .catch(error => setError("you are not registered"))
    }
    console.log(auth.isAuthenticated)
    if (auth.isAuthenticated) {
        return <Navigate to="/home" />
    }

    return (
        <section className="container ">
            <div className='row'>
                <div className='container-img col-md-4 col-lg-6'>
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
                                value={gmail}
                                required
                                onChange={(e) => setGmail(e.target.value)}></input>

                            <label className="form-label">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}></input>

                            <button className='btn-login btn btn-primary'>Login</button>
                            <p className='m-4 messageError'>{error}</p>
                            <p className='m-4 text-align-center'>If you are not registered, <Link to='/singup'>register here</Link></p>
                        </div>

                    </div>

                </form>
            </div>
        </section>

    )
}

export default Login;