import axios from "axios";
// import { useState, useEffect } from "react";
import React, { useState } from "react";
// import { withRouter } from "react-router";
// import { Link } from "react-router-dom"
import "../Login.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";


const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState( "" );



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
          // setMessage(result.data.message);
       } else {
        // history.push("/login");
        setMessage(result.data.message);
      }
      });
    } 
  };

  // useEffect(() => {
  //     // storing input name
  //     localStorage.setItem("mytoken", JSON.stringify(token));
  //   }, [token]);

  return (
    <div className="login">
      {/* <div><img className="foodimage" src="https://the-local-fork.s3.us-east-2.amazonaws.com/food.svg" alt=""/></div>  */}
      <form onSubmit={signIn}>
        <h1 className="welcome">WELCOME</h1>
        <br />
        <br />
        {/* <label>Username:</label> */}
        <br />
        <input
          className="textfield"
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <label>Password:</label> */}
     
        <input
          className="textfield"
          type="password"
          name="password"
          placeholder="Password"
          
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{message}</p>
        {/* <Link to="/profile" > */}
        
        
       
        <Button type="submit" className="submit"> 
        {/* {message}  */}
          Sign in
        </Button>
       
        {/* </Link>   This is close to what I want but it breaks.  */}
        <div className="signuplink">
          Not a member? <a href="/signup">Sign up</a>{" "}
        </div>
      </form>
    </div>
  );
};

export default Login;

// export default class Login extends React.Component {
//   state = {
//    username: "",
//     password: ""
//   };

//   handleUsername = (event) => {
//     this.setState({ username: event.target.value });
//   };

//   handlePassword = (event) => {
//     this.setState({ password: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const user = {
//       username: this.state.username,
//       password: this.state.password

//     };

//     axios
//     .post(`http://localhost:5000/api/users/login`, { user }) //this is where the address to the backend will go
//     .then((res) => {
//       console.log(res);
//       console.log(res.data);
//     });
// this.setState({ username: '', password: '' })
// };

// render() {
//   return (
//     <>
//       <div>
//      <h1>Sign In</h1>

//      <form onSubmit={this.handleSubmit} >
//        <div>
//          <label>
//            Username:
//            <input
//           //  id="name"
//            type="text"
//            name="username"
//            value={this.state.username}
//            className="form-input"
//            placeholder="Enter Name"
//            onChange={this.handleUsername}
//            />
//          </label>
//        </div>
//        <div>
//          <label>
//            Password:
//            <input
//           //  id="password"
//            type="password"
//            name="password"
//            value={this.state.password}
//            className="form-input"
//            placeholder="Enter Password"
//            onChange={this.handlePassword}
//            />
//          </label>
//          <button type="submit" value="Login" >Sign In</button>
//        </div>
//      </form>
//       </div>

//     </>
//   );
// }}

//Check the set and the handle changess.
