import './comment.css'


const RedesSociales = () => {
    return (
        <div className='bloque_redes_sociales'>
            <div className='container p-4'>
                <div className='row'>
                    <div className='col contacto p-4'>
                        <h1>Contacto</h1>
                        <p>tienda@mitienda.com.co</p>
                        <p>3104922805</p>
                        <p>Contacto via formulario</p>
                    </div>
                    <div className='col p-4'>
                        <div className='row'>
                            <div className='col suscribete'>
                                <h1>Suscribirse</h1>
                                <p>Te mantendremos al tanto de promociones, nuevos productos y ofertas</p>
                                <input className='input-suscribirse p-2' placeholder='escribe tu correo...'></input>
                                <button className='btn btn-warning m-4 col'>Suscribirse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RedesSociales;