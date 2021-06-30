import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Row } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login, errorAuthContext } = useAuth()
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
      errorAuthContext("")
    } catch (error){
      console.log(error);
    }
  }

  return (
    <>
    <Row className="justify-content-center m-4">
    <Card className="w-75" style={{"maxWidth": "400px"}}>
        <Card.Body className="card-body" >
          <h2 className="text-center mb-4">Se connecter</h2>
           {errorAuthContext && <Alert variant="danger">{errorAuthContext}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="" id="email">
              <Form.Label className="">Email :</Form.Label>
              <Form.Control className="" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className="" id="password">
              <Form.Label className="">Mot de passe :</Form.Label>
              <Form.Control className="" type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="" disabled={loading} className="w-100" type="submit">
              Connection
            </Button>
          </Form >
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Mot de passe oublié?</Link>
          </div>
        </Card.Body>
      </Card>
    </Row>
       
      <div className="w-100 text-center mt-2">
        Besoin d'un compte?  <Link to="/signup">S'inscrire</Link>
      </div>
      <br></br>
    </>
  )
}