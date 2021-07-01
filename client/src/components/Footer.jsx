import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => 

<footer 
className="bg-dark w-100" >
    <Container className="fluid text-center text-md-left p-2">
        <Row>
            <Col className="md-6 mt-md-0">
                <h5 className="text-uppercase text-light">Sweet Home</h5>
                <p className="text-light">Logiciel de gestion des dossiers de l'usager du secteur social et médicaux-social.</p>
            </Col>
            <Col className="md-3 mb-md-0 mb-3 ">
                <h5 className="text-uppercase text-light">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                </ul>
            </Col>
        </Row>
    </Container>
    <div className="footer-copyright text-center py-3">© 2021 Copyright:
        <a href="https://github.com/Filousse">  ThibaultBrasseur.dev</a>
    </div>
</footer>

export default Footer