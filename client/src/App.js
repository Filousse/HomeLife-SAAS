import React from "react"
import Signup from "./components/authentification/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Login from "./components/authentification/Login"
import PrivateRoute from "./components/authentification/PrivateRoute"
import ForgotPassword from "./components/authentification/ForgotPassword"
import UpdateProfile from "./components/authentification/UpdateProfile"
import NewStaff from "./components/dashboard/NewStaff"
import CorrespondanceEducative from "./pages/Widgets/CorrespondanceEducative"
import WidgetEduc_1 from "./pages/Widgets/WidgetEduc_1"

function App() {

  return (
    <Container
      className="align-items-center justify-content-center"
      style={{ minHeight: "100vh", maxHeight: "600vh" }}
    >
    
      <div >
        <Router>
            <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/create-staff" component={NewStaff} />
              <PrivateRoute path="/Cahier de correspondance" component={CorrespondanceEducative} />
              <PrivateRoute path="/widgetEduc_1" component={WidgetEduc_1} />
              <Route exact path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App