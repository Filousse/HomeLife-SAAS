import React from 'react'
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"


const Header = () => {
    return (
        <Navbar>
        <Navbar.Brand >
        <Navbar.Brand className="justify-content-end">     
              <Link to="/">
                <img   
                    cursor= "pointer"
                    alt="disconnect"
                    src="./assets/img/back.png"
                    width="40"
                    height="40"
                    className="d-inline-block " 
                  />
              </Link>
            </Navbar.Brand>
        </Navbar.Brand>
    </Navbar> 
    );
};

export default Header;