import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";


import Signup from "./Components/pages/SignUp";
import Delete from "./Components/pages/Delete";
import Put from "./Components/pages/PersonPut";
import Login from "./Components/pages/Login";
import Home from "./Components/pages/Home";
import Profile from "./Components/pages/ProfilePage";
import Favorites from "./Components/pages/Favorites";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/Put" exact component={Put} />
          <Route path="/Delete" exact component={Delete} />
          <Route path="/" exact component={Home} />
          <Route path="/favorites" exact component={Favorites} />


        </Switch>
      </Router>
    </>
  );
}

export default App;
