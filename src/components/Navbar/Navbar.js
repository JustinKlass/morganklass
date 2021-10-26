import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    console.log(Math.random())
    return(
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Morgan Klass</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-end" 
                        style={{maxHeight: '250px', width: "100%"}}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Method</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar