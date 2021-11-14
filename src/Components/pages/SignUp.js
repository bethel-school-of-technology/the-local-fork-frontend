import React from "react";
import axios from "axios";
import "../SignUp.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeTagline = this.onChangeTagline.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      city: "",
      username: "",
      password: "",
      tagline: "",
    };
  }

  onChangeFirstName(e) {
    this.setState({ firstname: e.target.value });
  }

  onChangeLastName(e) {
    this.setState({ lastname: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeCity(e) {
    this.setState({ city: e.target.value });
  }

  onChangeUserName(e) {
    this.setState({ username: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onChangeTagline(e) {
    this.setState({ tagline: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      city: this.state.city,
      username: this.state.username,
      password: this.state.password,
      tagline: this.state.tagline,
    };

    axios
      .post("http://localhost:5000/users/signup", userObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      city: "",
      username: "",
      password: "",
      tagline: "",
    });
  }

  render() {
    return (
      <div className="wrapper">
        <form className="form" onSubmit={this.onSubmit}>
          <h2 className="join">Join the Foodies</h2>
          <div className="form-group">
            {/* <label> First Name</label> */}
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.onChangeFirstName}
              className="form-control2"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            {/* <label>Last Name</label> */}
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.onChangeLastName}
              className="form-control2"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            {/* <label>Email</label> */}
            <input
              type="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
              className="form-control2"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            {/* <label>City</label> */}
            <input
              type="text"
              value={this.state.city}
              onChange={this.onChangeCity}
              className="form-control2"
              placeholder="City"
            />
          </div>
          <div className="form-group">
            {/* <label>UserName</label> */}
            <input
              type="text"
              value={this.state.username}
              onChange={this.onChangeUserName}
              className="form-control2"
              placeholder="Username"
            />
          </div>{" "}
          <div className="form-group">
            {/* <label>Password</label> */}
            <input
              type="password"
              value={this.state.password}
              onChange={this.onChangePassword}
              className="form-control2"
              placeholder="Password"
            />
          </div>{" "}
          <div className="form-group">
            {/* <label>Tagline</label> */}
            <input
              type="text"
              value={this.state.tagline}
              onChange={this.onChangeTagline}
              className="form-control2"
              placeholder="Tagline"
            />
          </div>
          <div className="form-group">
            <Button type="submit" value="Login" className="submit">
              Sign Up
            </Button>
          </div>
          
          <div className="lg">
          Signed up? <a href="/login">Login</a>{" "}
          </div>
        </form>
      </div>
    );
  }
}
