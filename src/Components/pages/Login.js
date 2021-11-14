import axios from "axios";
import React, { useState } from "react";
import "../Login.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    if (username !== "" && password !== "") {
      const req = {
        username,
        password,
      };

      axios.post("http://localhost:5000/users/login", req).then((result) => {
        const token = result.data;
        console.log(result);
        if (result.data.token) {
          localStorage.setItem("mytoken", JSON.stringify(token));
          history.push("/profile");
        } else {
          setMessage(result.data.message);
        }
      });
    }
  };

  return (
    <div className="login">
      <form onSubmit={signIn}>
        <h1 className="welcome">WELCOME</h1>
        <br />
        <input
          className="textfield"
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="textfield"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errormessage">{message}</p>
        <Button type="submit" className="submit">
          {" "}
          
          Sign In  
        </Button>

        <div className="signuplink">
          Not a member? <a href="/signup">Sign up</a>{" "}
        </div>
      </form>
    </div>
  );
};

export default Login;
