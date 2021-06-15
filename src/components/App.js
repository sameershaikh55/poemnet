import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Home from "./Views/Home";
import './App.css'
import { PostProvider } from "../contexts/postContext";


function App() {
  return (
    <div
      className='app'
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" >
        
        <Router>
          <AuthProvider>
            <PostProvider>

              <Switch>
                {/* <PrivateRoute  path="/dashboard" component={Dashboard} /> */}
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />


              </Switch>
            </PostProvider>
          </AuthProvider>
        </Router>
        
      </div>
    </div>
  );
}

export default App;