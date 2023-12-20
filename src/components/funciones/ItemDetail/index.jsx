import React, { useEffect, useRef, useState } from "react"
import Count from "../Count"
import './itemDetail.css'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCreditCard, faEye, faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import SendACart from "../../funciones/SendACart"
import avatar from '../../../img/avatar.svg'
import Star from "../../../Star"

const ItemDetail = ({ productoId, id }) => {

    const [opinion, setOpinion] = useState([])
    const [stars, setStars] = useState()

    useEffect(() => {
        function promedioScore(params) {
            let array = []
            opinion.forEach(item => array.push(item.calificacion))
            setStars(Math.trunc(array.reduce((anterior, actual) => anterior + actual, 0)))
        }
        promedioScore();
    }, [opinion]);

    useEffect(() => {
        const getOpinion = async () => {
            await fetch('http://localhost:5000/api/v1/review')
                .then(res => res.json())
                .then(res => setOpinion(res.filter(item => item.produto === Number(id))))
        }
        getOpinion()
        console.log(opinion)

    }, [id])


    function scrollPositionY() {
        window.addEventListener('scroll', function () {
            var panelIzquierda = document.getElementById("panelIzquierda");
            const altura = panelIzquierda.offsetHeight
            var scrollPosition = window.scrollY;
            var fixedElement = document.getElementById('fixed-element');
            var fixedPosition = altura; // Punto donde el elemento se fija
            if (scrollPosition > fixedPosition) {
                fixedElement.style.position = 'absolute';
                fixedElement.style.top = fixedPosition + 90 + 'px';
            } else {
                fixedElement.style.position = 'fixed';
                fixedElement.style.top = '110px';
                fixedElement.style.left = `${(window.screen.width / 2) + 20}px`// Vuelve a la posición inicial
            }
        });
    }

    useEffect(() => {
        scrollPositionY()
    }, []);


    return (
        <React.Fragment>
            <div>
                <ContainerImg className='contenedor-imagen-destacado'>
                    <div>
                        <img className='imagen-detail' src={productoId?.image} alt='imagen' />
                        <span className="bg-icon-review" title="¿Qué hay, bro?" tooltip-dir="left">
                            <FontAwesomeIcon className="icono-review" icon={faHeart} style={{ color: "#fa0000", }} />
                        </span>
                    </div>

                </ContainerImg>
                <ContainerDetails id='fixed-element'>
                    {/*detalle del producto*/}
                    <h1 className="name-product">{productoId?.name}</h1>
                    <h1 className='text-precio'> $ {productoId?.price}</h1>
                    <div className="row">
                        <Star
                            stars={stars}
                            review={opinion.length}
                        />
                    </div>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
                        in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <hr></hr>
                    <div className="row">
                        <p className="col-9">Color:</p>
                        <b className="col-3">{productoId?.detail.color}</b>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <p className="col-9">Marca:</p>
                        <b className="col-3">{productoId?.detail.drand}</b>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <p className="col-9">Garantia:</p>
                        <b className="col-3">{productoId?.detail.warranty}</b>
                    </div>
                    <hr></hr>

                    <p className='title-envios'>Envio gratis a nivel nacional</p>
                    <Count />
                    <div className="row">
                        <SendACart className='col-5'
                            imagen={productoId?.image}
                            precio={productoId?.price}
                            cantidad={productoId?.quantity}
                            nombre={productoId?.name}
                            idproducto={productoId?.idproducto}
                        />
                        <button className='col-5 btn btn-comprar'>
                            Pay
                            <FontAwesomeIcon icon={faCreditCard} />
                        </button>
                    </div>
                </ContainerDetails>
            </div>

            <ContainerImg id="panelIzquierda">
                <h4 className='p-4'>Costumer review</h4>
                {opinion.map(element => (
                    <div key={element.id_opinion} className="contenedor_opiniones">
                        <img className='avatar-svg' src={avatar} alt='avatar' />
                        <div>
                            <p className="tittle_name_usuario">{element.nombre}</p>
                            <p className="fecha_registro">{element.fecha_registro}</p>
                            <span className="score_opinion">{element.calificacion} estrellas</span>
                            <p>{element.reseña}</p>
                            <hr></hr>
                        </div>
                    </div>
                ))}
            </ContainerImg>
        </React.Fragment>
    )
}



const ContainerImg = styled.div`
    background-color: #fff;
    margin-bottom: 20px;

${props => props.opinion ? ' width: 100%;' : 'width: 691px;'}
`

const ContainerDetails = styled.div`
    width: 578px;
    padding: 25px;
    border-radius:25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: fixed;
    top: 110px;
    left: 980px;

`


export { ItemDetail, ContainerImg }
