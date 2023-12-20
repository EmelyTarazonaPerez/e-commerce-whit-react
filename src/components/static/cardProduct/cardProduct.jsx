import { Link } from "react-router-dom";
import './card.css'

const CardProduct = ({ id, image, name, price, category }) => {
    return (
        <div className="card card_contenido">
            <div className="container_image">
                <div>
                    <img  className='img_product object card-img-top' src={image}  alt="..." />
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p><span className="icon_dollar">$</span>{price}</p>
                <Link to={`/details/${id}`}><button className='btn-warning btn-detalles btn-color-detalle'>Detail</button></Link>
            </div>
        </div>
    )
}

export default CardProduct;