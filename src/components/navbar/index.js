import './navbarStore.css'
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

const NavbarStore = () => {
    return (
        <>
            <Navbar className='navbar_icono' variant="black" expand="lg">
                <Container>
                    <Navbar.Brand as={Link}></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav  className="justify-content-end">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    )
}


export default NavbarStore