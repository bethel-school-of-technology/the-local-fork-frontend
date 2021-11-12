import React from "react";
import axios from "axios";
import "../SignUp.css";
import { Button } from "react-bootstrap";

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
      // city: this.state.city,
      username: this.state.username,
      password: this.state.password,
      // tagline: this.state.tagline,
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
            {/* <input
              type="text"
              value={this.state.city}
              onChange={this.onChangeCity}
              className="form-control"
              placeholder="City"
            /> */}
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
            {/* <input
              type="text"
              value={this.state.tagline}
              onChange={this.onChangeTagline}
              className="form-control"
              placeholder="Tagline"
            /> */}
          </div>
          <div className="form-group">
            <Button
              type="submit"
              value="Login"
              className="submit"
            >
              Sign Up
            </Button>
            {/* <input type="submit" value="Login" className="btn btn-success btn-block" /> */}
          </div>
        </form>
      </div>
    );
  }
}

// export default class Signup extends React.Component {
//   state = {
//     firstname: "",
//     lastname: "",
//     email: "",
//     city: "",
//     username: "",
//     password: "",
//     tagline:""
//   };

//   handleFirstName = (event) => {
//     this.setState({ firstname: event.target.value })
//   }

//   handleLastName = (event) => {
//     this.setState({ lastname: event.target.value })
//   }

//   handleEmail = (event) => {
//     this.setState({ email: event.target.value })
//   }

//   handleCity = (event) => {
//     this.setState({ city: event.target.value })
//   }

//   handleUserName = (event) => {
//     this.setState({ username: event.target.value })
//   }

//   handlePassword = (event) => {
//     this.setState({ password: event.target.value })
//   }

//   handleTagline = (event) => {
//     this.setState({ tagline: event.target.value })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const users = {
//       firstname: this.state.firstname,
//       lastname: this.state.lastname,
//       email: this.state.email,
//       city: this.state.city,
//       username: this.state.username,
//       password: this.state.password,
//       tagline: this.state.tagline
//     }

//     axios
//       .post(`http://localhost:5000/api/users/signup`, { users }) //this is where the address to the backend will go
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {
//     return (

//       <div>
//         <h1>Sign Up</h1>
//       <form onSubmit={this.handleSubmit}>
//         <div>
//           <label>
//             First Name:
//             <input
//               id="firstname"
//               type="text"
//               name="firstname"
//               className="form-input"
//               placeholder="Enter your first name"
//               onChange={this.handleFirstName}
//             />
//           </label>
//         </div>

//         <div>
//           <label>Last Name
//           <input
//             id="lastname"
//             type="text"
//             name="name"
//             className="form-input"
//             placeholder="Enter your last name"
//             onChange={this.handleLastName}
//           />
//           </label>
//         </div>

//         <div>
//           <label>Email
//           <input
//             id="email"
//             type="email"
//             name="email"
//             className="form-input"
//             placeholder="Enter your email"
//             onChange={this.handleEmail}
//           />
//           </label>
//         </div>

//         <div>
//           <label>City
//           <input
//             id="name"
//             type="name"
//             name="city"
//             className="form-input"
//             placeholder="Enter your city"
//             onChange={this.handleCity}
//           />
//           </label>
//         </div>

//         <div>
//           <label>Username
//           <input
//             id="username"
//             type="name"
//             name="username"
//             className="form-input"
//             placeholder="Enter your username"
//             onChange={this.handleUserName}
//           />
//           </label>
//         </div>

//         <div>
//           <label>Password
//           <input
//             id="password"
//             type="password"
//             name="password"
//             className="form-input"
//             placeholder="Enter your password"
//             onChange={this.handlePassword}
//           />
//           </label>
//         </div>

//         <div>
//           <label>TagLine
//           <input
//             id="tagline"
//             type="name"
//             name="tagline"
//             className="form-input"
//             placeholder="Create a Tagline"
//             onChange={this.handleTagline}
//           />
//           </label>
//           <button type="submit">New Profile</button>

//         </div>
//       </form>
//       </div>
//     )
//   }
// }
