import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";

import Home from "./Components/pages/Home";
import Signup from "./Components/pages/SignUp";
import Get from "./Components/pages/Get";
import Delete from "./Components/pages/Delete";
import Put from "./Components/pages/PersonPut";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Get" exact component={Get} />
          <Route path="/" exact component={Signup} />
          <Route path="/Put" exact component={Put} />
          <Route path="/Delete" exact component={Delete} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
