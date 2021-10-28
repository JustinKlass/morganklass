import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return(
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand className='navBrand' href="#">Morgan Klass</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-end" 
                        style={{maxHeight: '250px', width: '100%'}}
                        navbarScroll
                    >
                        <Nav.Link className='navLink' href="#action1">Home</Nav.Link>
                        <Nav.Link className='navLink' href="#action2">Method</Nav.Link>
                        <Nav.Link className='navLink' href="#action2">About Me</Nav.Link>
                        <Nav.Link className='navLink' href="#action2">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar