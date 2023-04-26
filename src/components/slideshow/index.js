import React, { useRef } from "react";
import FlechaDerecha from '../../img/iconmonstr-angel-right-thin.svg'
import FlechaIzquierda from '../../img/iconmonstr-angel-left-thin.svg'
import styled from "styled-components";
import '../../page/home/home.css'


const Slideshow = ({ children }) => {
    const slideshow = useRef(null)

    const siguiente = () => {
        //comprobar si hay elementos hijos en el slideshow
        if (slideshow.current.children.length > 0) {
            const primerElemento = slideshow.current.children[0];
            //Establecemos transicion para el slideshow
            slideshow.current.style.transition = `800ms ease-out all`
            //tamaño del slideshow
            const tamañoSlide = slideshow.current.children[0].offsetWidth
            //Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`

            const transicion = () => {
                //Reiniciamos la posicion del slideshow
                slideshow.current.style.transition = 'none'
                slideshow.current.style.transform = `translateX(0)`
                //tomamos el primer elemento y lo mandamos al final
                slideshow.current.appendChild(primerElemento)
                //eliminamos el 
                slideshow.current.removeEventListener('transitionend', transicion)

            }
            //evento listener
            slideshow.current.addEventListener('transitionend', transicion)
        }
    }

    const anterior = () => {
        if (slideshow.current.children.length > 0) {
            //obtener el ultimo elemento del slideshow
            const index = slideshow.current.children.length - 1
            const ultimoElemento = slideshow.current.children[index]
            //insertar el ultimo elemento del slideshow en la posicion 0
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild)
            //tamaño del slideshow
            const tamañoSlide = slideshow.current.children[0].offsetWidth
            //mover el slideshow a la izquierda sin que el usuario se de cuenta
            slideshow.current.style.transition = 'none'
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`
            //desplazar el primer elemento del slideshow a la derecha
            setTimeout(() => {
                slideshow.current.style.transition = '800ms ease-out all'
                slideshow.current.style.transform = `translateX(0)`
            }, 30)
        }
    }

    return (
        <ContenedorPrincipal >
            <ContenedorSliderhow ref={slideshow}>
                {children}
            </ContenedorSliderhow>
            <Controles >
                <Boton onClick={anterior}>
                    <img className='controles-svg' src={FlechaIzquierda} alt='flechaIzquierda' />
                </Boton>
                <Boton derecho onClick={siguiente}>
                    <img className='controles-svg' src={FlechaDerecha} alt='flechaIzquierda' />
                </Boton>
            </Controles>
        </ContenedorPrincipal>

    )
}

const ContenedorPrincipal = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    position: relative;
    overflow: hidden;
`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3 ease all;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    ${props => props.producto ? ' min-width: 17%;' : ' min-width: 100%;'}
    ${props => props.producto ? ' margin: 0px 19px' : ' margin: 0px'}

`;

const ContenedorSliderhow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events:none;

`;

const Boton = styled.button`
    display: flex;    
    pointer-events: all;
    background: none;
    border:none;
    cursor: pointer;
    outline:none;
    width: 70px;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    path{
        filter:${props => props.derecho ? 'drop-shadow(-2px 0px 0px #ffff)' : 'drop-shadow(2px 0px 0px #ffff)'};

    }

    ${props => props.derecho ? 'right:0' : 'left:0'}
`;



export { Slide, Slideshow }