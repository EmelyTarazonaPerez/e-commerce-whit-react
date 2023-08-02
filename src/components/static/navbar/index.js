import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbarStore.css'
import { Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const NavbarStore = () => {
    return (
        <>
            <DisplaySpaceBetween>
                <Navbar collapseOnSelect expand="lg" variant="white" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Descubre" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Tecnologia</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Muebles</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Ropa</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Accesorios</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </DisplaySpaceBetween>

            <Outlet></Outlet>
        </>

    )
}

const DisplaySpaceBetween = styled.div`
margin-bottom:37px;
background-color: #41464b;

`



export default NavbarStore