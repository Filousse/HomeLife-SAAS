import React from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory, Link } from "react-router-dom"
import { Navbar, Badge, Nav } from "react-bootstrap"


export default function Header(props) {
  const team = props.team
  const { currentUser } = useAuth()
  const { logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    try {
      await logout()
      history.push("/home")
    } catch {
      console.log("Failed to log out")
    }
  }

  const handleStaffSetting = () => {
    history.push("/create-staff")
  }

  const getClass = (team) =>{
    switch(team){
        case 'Equipe educative': {
            return {"backgroundColor": "#61a6fb"}
        }
        case 'Equipe Médical': {
            return  {"backgroundColor": "#28da69"}
        }
        case 'Administrateur': {
             return  {"backgroundColor": "#e826b1"}
        }
        default:
        return  {"backgroundColor": "#e826b1"}
    }
  }

  return (
        <Navbar style={getClass(team)}  expand="md">
            <Navbar.Brand>
              <Link to="/update-profile"> 
                <img   
                    alt=""
                    src="./assets/img/avatarIMG.jpeg"
                    width="40"
                    height="40"
                    className="d-inline-block align-top" 
                  />
              </Link>   
            </Navbar.Brand>
            <Navbar.Text className="text-light" >
             Bonjour {currentUser.name}  
            </Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">     
              <Nav.Link className="text-light" href="#Service" active="active" ></Nav.Link>
              { team == "Administrateur" && 
               <Nav.Link className="text-light" onClick={handleStaffSetting} >Personnels</Nav.Link>
              }   
              { team == ""  && 
               <Nav.Link className="text-light" onClick={handleStaffSetting} >Personnels</Nav.Link>
              }   
                <Nav.Link className="text-light" href="#Contact">Usagers</Nav.Link>
                <Nav.Link className="text-light" href="#Contact">Notification  <Badge class="badge-warning">4</Badge></Nav.Link>
                <Navbar.Brand>
                  <Link style={{"{margin":"20px"}}>
                    <img   
                        onClick={handleLogout}
                        cursor= "pointer"
                        alt="disconnect"
                        src="./assets/img/logout.png"
                        width="25"
                        height="25"
                        className="d-inline-block " 
                      />
                  </Link>
                </Navbar.Brand>
            </Navbar.Collapse>
        </Navbar> 
  )
}