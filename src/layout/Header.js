import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Col } from 'react-bootstrap';

function Header(){
    return(
        <>
        <Navbar bg="dark" className="navbar-sticky-" expand="lg" sticky="top">
            <Navbar.Brand href="#home">PinterestClone</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about-us">Latest</Nav.Link>
                {/* <Form inline>
                    <Form.Row>
                        <Col xs={7} md={12}>
                        <Form.Control placeholder="City" />
                        </Col>
                    </Form.Row>
                </Form> */}
                </Nav>                                    
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}


export default Header;