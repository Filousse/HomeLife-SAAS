import React from 'react';
import { Container } from "react-bootstrap"

const Logo = () => { 
    return (
        <div className="content">
            <div className="cat">
            <div className="ears">
                <span></span>
                <span></span>
            </div>
            <div className="eyes">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="nose">
                <span></span>
                <span></span>
            </div>
            <div className="mouth">3</div>
            <div className="paws">
                <span></span>
                <span></span>
            </div>
            <div className="tail"></div>
            </div>
            <Container className="w-75 p-3 text-light text-center wall" >
                <h1 style={{"font-weight": "bold"}}>SWEET HOME</h1>
                <h3>Logiciel de gestion du quotidien des usagers du secteur social et médico social.</h3>
            </Container>
        </div>
    );
};
export default Logo;