import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { API_URL } from "../../auth/constants";
import registro from '../../img/registro.jpg';
import logo from '../../img/logo.png';
import '../login/login.css';


function Singnup() {
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [message, setMessage] = useState()
    const [errorResponse, setErrorResponse] = useState("")
    const auth = useAuth()

    async function handleSumit(e) {
        e.preventDefault()
        try {
            const response = await fetch(`${API_URL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre,
                    correo,
                    contraseña
                })
            });
            if (response.ok) {
                setMessage(false)
                setErrorResponse("User created successfully")
            } else {
                setMessage(true)
                setErrorResponse("Something went wrong")
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (auth.isAuthenticated) {
        return <Navigate to="/cart" />
    }

    return (
        <section class="container vh-100">
            <div className='row'>
                <div className=' vh-100 container-img col-md-4 col-lg-6'>
                </div>
                <form className="form col-md-6 col-lg-6 container-form" onSubmit={handleSumit}>
                    <div className="hijo-form">
                        <div className='container-logo'>
                            <img className="logo" src={logo} alt='logo' />
                        </div>
                        <h1 className='titulo-login'>Singup</h1>
                        {!!message && <div className="alert alert-info" role="alert">{errorResponse}</div>}
                        <label className="form-label">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            value={nombre}
                            required
                            onChange={(e) => setNombre(e.target.value)}></input>

                        <label className="form-label">Gmail</label>
                        <input
                            className="form-control"
                            type="text"
                            alue={correo}
                            required
                            onChange={(e) => setCorreo(e.target.value)}></input>

                        <label className="form-label">Password</label>
                        <input
                            className="form-control"
                            type="password"
                            value={contraseña}
                            required
                            onChange={(e) => setContraseña(e.target.value)}></input>

                        <button className='btn-singin btn btn-primary' type="sumit">Create user</button>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Singnup;