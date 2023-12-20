import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { API_URL } from "../../auth/constants";
import logo from '../../img/logo.png';
import '../login/login.css';


function Singnup() {
    const [name, setName] = useState("")
    const [gmail, setGmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState()
    const [errorResponse, setErrorResponse] = useState("")
    const auth = useAuth()

    async function handleSumit(e) {
        e.preventDefault()
        const status = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                gmail,
                password
            })
        })
        if (status.status === 406) {
            console.log("email already exists")
            setErrorResponse("email already exists")
        }
        if (status.ok) {
            setMessage("Registered Successfully")
            setErrorResponse(" ")
        }
    }

    if (auth.isAuthenticated) {
        return <Navigate to="/cart" />
    }

    return (
        <section class="container">
            <div className='row'>
                <div className='container-img col-md-4 col-lg-6'>
                </div>
                <form className="form col-md-6 col-lg-6 container-form" onSubmit={handleSumit}>
                    <div className="hijo-form">
                        <div className='container-logo'>
                            <img className="logo" src={logo} alt='logo' />
                        </div>
                        <h1 className='titulo-login'>Singup</h1>
                        <label className="form-label">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}></input>

                        <label className="form-label">Gmail</label>
                        <input
                            className="form-control"
                            type="text"
                            alue={gmail}
                            required
                            onChange={(e) => setGmail(e.target.value)}/>

                        <label className="form-label">Password</label>
                        <input
                            className="form-control"
                            type="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}></input>

                        <button className='btn-singin btn btn-primary' type="sumit">Create user</button>
                        <span className="messageError">{errorResponse}</span>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Singnup;