import React from 'react';
import { Nav, Navbar, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"

const Header = () => {
    const history = useHistory()

    const handleSignIn= () => {
        history.push("/signup")
    }

    const handleLogin= () => {
        history.push("/login")
    }

    return (
        <Navbar  fixed="top" bg="info" variant="light" expand="md">
        <Navbar.Brand>
            <Button onClick={handleLogin} size="sm" style={{"marginRight":"10px"}} variant="light" >Se connecter</Button>
            <Button onClick={handleSignIn} size="sm" variant="warning" >Essai Gratuit</Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#Service" active="active" style={{"color":"white"}}>Nos services</Nav.Link>
            <Nav.Link href="#Widget" style={{"color":"white"}}>Nos Widgets</Nav.Link>
            <Nav.Link href="#Contact" style={{"color":"white"}}>Nous contacter</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar> 
    );
};

export default Header;