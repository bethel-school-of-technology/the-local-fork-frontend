import React from "react";
import axios from "axios";

export default class Login extends React.Component {
  state = {
    name: "",
    password: "",
    password2: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handlepass = (event) => {
    this.setState({ password: event.target.value });
  };

  handlepass2 = (event) => {
    this.setState({ password2: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2,
    };

    axios
    .post(`https://jsonplaceholder.typicode.com/users`, { user }) //this is where the address to the backend will go
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
};

render() {
  return (
    <>
      <div>
     <h1>Sign In</h1>

     <form onSubmit={this.handleSubmit} >
       <div>
         <label>
           Name:
           <input
           id="name"
           type="text"
           name="name"
           className="form-input"
           placeholder="Enter Name"
           />
         </label>
       </div>
       <div>
         <label>
           Password:
           <input
           id="password"
           type="password"
           name="password"
           className="form-input"
           placeholder="Enter Password"
           />
         </label>
       </div>
       <div>
         <label>
           Comfirm Password:
           <input
           id="password2"
           type="password"
           name="password2"
           className="form-input"
           placeholder="Confirm Password"
           />
         </label>
         <button type="submit" >Sign In</button>
       </div>

     </form>
      </div>
    
    
    </>
  );
}}