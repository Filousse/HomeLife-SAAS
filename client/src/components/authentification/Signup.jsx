import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const nameRef = useRef()
  const surnameRef = useRef()
  const photoRef = useRef()
  const groupRef =useRef()
  const fonctionRef = useRef() 
  const emailRef = useRef()
  const emailConfirmRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Vérifier la confirmation de votre mot de passe !")
    }
    if (emailRef.current.value !== emailConfirmRef.current.value) {
      return setError("Vérifier la confirmation de votre email !")
    }
    if (passwordRef.current.value.length < 6){
      return setError("Passwords to much small")
    }
    try {
      setError("")
      setLoading(true)
          await signup(
            surnameRef.current.value,
            nameRef.current.value,
            photoRef.current.value,
            groupRef.current.value,
            fonctionRef.current.value,
            emailRef.current.value, 
            passwordRef.current.value
          )
          history.push("/")
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }

  return (
    <>
    <br></br>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Créer votre compte :</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Noms <strong style={{color:"#F2420E"}}>*</strong></Form.Label>
              <Form.Control type="name" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="surname">
              <Form.Label>prénoms <strong style={{color:"#F2420E"}}>*</strong></Form.Label>
              <Form.Control type="surname" ref={surnameRef} required />
            </Form.Group>
            <Form.Group id="file">
              <Form.Label>Photo de profil <strong style={{color:"#F2420E"}}>*</strong></Form.Label>
              <Form.Control
                  type="file"
                  id="avatar" name="avatar" title = "Choose a video please"
                  accept="image/png, image/jpeg"
                  ref={photoRef} 
                  required
              />
              <label>png, jpeg</label>
            </Form.Group>
            <Form.Group id="group">
              <Form.Label>Sélectionner votre équipe <strong style={{color:"#F2420E"}}>*</strong></Form.Label>           
              <Form.Control ref={groupRef} as="select" required >
                <option>Educatif</option>
                <option>Medical</option>
                <option>Sanitaire</option>
                <option>Administratif</option>
                <option>Direction</option>
              </Form.Control>
            </Form.Group>
            <Form.Group id="fonction">
              <Form.Label>Sélectionner votre poste professionelle <strong style={{color:"#F2420E"}}>*</strong></Form.Label>
              <Form.Control type="fonction" ref={fonctionRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email <strong style={{color:"#F2420E"}}>*</strong></Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="email-confirm">
              <Form.Label>Confirmation de votre email <strong style={{color:"#F2420E"}}>*</strong></Form.Label>
              <Form.Control type="email" ref={emailConfirmRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Mot de passe <strong style={{color:"#F2420E"}}>*</strong></Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirmation de votre mot de passe <strong style={{color:"#F2420E"}}>*</strong></Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Créer mon compte
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <div>Vous possédez un compte? </div>
         <Link to="/login">Se connecter</Link> 
      </div>
    </>
  )
}