import React from "react";
import Topbar from "./components/Topbar";
import Homepage from "./pages/Homepage";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        
        <Route path="/register">{currentUser ? <Register /> : <Register />}</Route>
        <Route path="/login">{currentUser ? <Login /> : <Login />}</Route>
    
       
        <Route path="/write">{currentUser ? <Write /> : <Write />}</Route>
        <Route path="/settings">{currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
