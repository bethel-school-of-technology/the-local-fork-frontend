import React from "react";
import axios from "axios";

export default class Signup extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
    city: "",
    name: "",
  };


  handleChange = (event) => {
    this.setState({ fristname: event.target.value });
  };

  handleCh = (event) => {
    this.setState({ lastname: event.target.value });
  };

  handleC = (event) => {
    this.setState({ email: event.target.value });
  };

  handlepass = (event) => {
    this.setState({ password: event.target.value });
  };

  handlepass2 = (event) => {
    this.setState({ password2: event.target.value });
  };

  handlecity = (event) => {
    this.setState({ city: event.target.value });
  };

  handlename = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      firstname: this.state.fristname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      city: this.state.city,
      name: this.state.name,
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

      <div>
        <h1>Sign Up</h1>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              id="firstname"
              type="text"
              name="firstname"
              className="form-input"
              placeholder="Enter your first name"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          <label>Last Name
          <input
            id="lastname"
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your last name"
            onChange={this.handleCh}
          />
          </label>
        </div>

        <div>
          <label>Email
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            onChange={this.handleC}
          />
          </label>
        </div>

        <div>
          <label>Password
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            onChange={this.handlepass}
          />
          </label>
        </div>

        <div>
          <label>Confirm Password
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm password"
            onChange={this.handlepass2}
          />
          </label>
        </div>

        <div>
          <label>City
          <input
            id="name"
            type="name"
            name="name"
            className="form-input"
            placeholder="Enter your city"
            onChange={this.handlecity}
          />
          </label>
        </div>

        <div>
          <label>TagLine
          <input
            id="name3"
            type="name"
            name="name"
            className="form-input"
            placeholder="Enter tagline"
            onChange={this.handlename}
          />
</label>
          <button type="submit">New Profile</button>
        </div>
      </form>
      </div>
    );
  }
}











