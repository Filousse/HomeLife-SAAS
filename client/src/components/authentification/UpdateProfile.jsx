import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert, Row } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
  const photoRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { currentUser, updateProfil } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  useEffect(() => {
    setEmail(currentUser.mail);
    setPassword(currentUser.password);
  },[currentUser.mail, currentUser.password ]);

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordConfirmRef.current.value  !== currentUser.password) {
      setError("Erreur de mot de passe !");
    }
    if(emailRef.current.value === "" && passwordRef.current.value === "" && photoRef.current.value === ""){
      return setError("Aucun champs n'a été modifié !")
    } else {
        setError("");
        updateProfil( photoRef.current.value, email, password, currentUser.id);
        setLoading(false);
        history.push("/")
    }
  }

  return (
    <>
    <Row className="row justify-content-center m-4">
       <Card className="w-75" style={{"maxWidth": "400px"}}>
        <Card.Body>
          <h2 className="text-center mb-4">Profil</h2>
          {error && <Alert variant="danger">{error}</Alert>} 
          <Form onSubmit={handleSubmit} >
          <Form.Group id="formFile" className="mb-3">
              <Form.Label>Modifier la photo de profil :</Form.Label>
                <Form.Control
                  type="file"
                  id="avatar" name="avatar"
                  accept="image/png, image/jpeg"
                  ref={photoRef} 
                />
                <label>png, jpeg</label>
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Modifier l'adresse email :</Form.Label>
                <Form.Control
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  ref={emailRef}
                />
            </Form.Group>
            <Form.Group id="profilPhoto">
              <Form.Label>Modifier le mot de passe :</Form.Label>
                <Form.Control
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    ref={passwordRef}
                />
            </Form.Group>
            <br></br>
            <Form.Group id="password-confirm" >
              <Form.Label>Confirmer votre mot de passe <strong style={{ color:"red" }}>*</strong></Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                required
                placeholder="mot de passe"
              />
            </Form.Group>
            <br></br>
            <Button disabled={loading} className="w-100" type="submit">
              Envoyer
            </Button>
          </Form>
        </Card.Body>
      </Card>
      </Row>
      <div className="w-100 text-center mt-2">
        <Link to="/">Annulé</Link>
      </div>
      <br></br>
    </>
  )
}