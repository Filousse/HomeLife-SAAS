import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Row } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { updatePassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setMessage("")
      setError("")
      setLoading(true)
      await updatePassword(emailRef.current.value)
      setMessage("Un lien vous a été envoyé par mail.")
    } catch {
      setError("Votre email n'est pas valide!")
    }
    setLoading(false)
  }

  return (
    <>
    <Row className="justify-content-center m-4">
    <Card className="w-75" style={{"maxWidth": "400px"}}>
        <Card.Body>
          <h2 className="text-center mb-4">Mot de passe oublié!</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email :</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Envoyer
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Se connecter</Link>
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