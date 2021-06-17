import React, { useState } from "react"
import { Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Header() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
 const history = useHistory()

  async function handleLogout() {
    setError("")
    try {
      await logout()
       history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
      <div  style={{
        overflow: "hidden",
        backgroundColor: "#D1F2EB",
        position: "fixed", 
        top: 0, 
        left: 0, 
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "40px",
      }}>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong  style={{flex:6}} >Compte de {currentUser.name }</strong> 
          <Link style={{flex: 2}} to="/update-profile" >
            Modifier mon profil
          </Link>
          <Button style={{flex:2}} variant="link" onClick={handleLogout}>
              Se déconnecter
          </Button>
      </div>
  )
}