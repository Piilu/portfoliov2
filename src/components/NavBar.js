import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import "../style/navbar.css"
function NavBar(props) {
    return (
        <Navbar bg="light"  expand="lg">
            <Container>
                <Navbar.Brand href="/">Portfoolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">


                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="#first">Avaleht</Nav.Link>
                        <Nav.Link href="#about">Minust</Nav.Link>
                        <Nav.Link href="#project">Tööd</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-center ">
                        <Button className='btn-contact' style={{backgroundColor:"#00FF4C"}} href="#contact">Võta ühendust</Button>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;