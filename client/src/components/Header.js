import React from 'react';
//import {Link} from 'react-router-dom';
import Logo from '../images/imdb-logo.jpg'; 
import {Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap';

const Header =()=>{
    return(
        <Navbar className="navbar" variant="dark" bg="dark">
            <Container className="nav-container">
                <Navbar.Brand className="logo-div" to="/"><img className="logo" src={Logo} /></Navbar.Brand>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2 search-input"
                        aria-label="Search"
                    />
                </Form>
                <Nav className="nav">
                    <Nav.Link className="link">ImdbPro</Nav.Link>
                    <Nav.Link className="link">Watchlist</Nav.Link>
                    <Nav.Link className="link">Login</Nav.Link>
                    
                </Nav>
            </Container>
        </Navbar>        
    )
}

export default Header;