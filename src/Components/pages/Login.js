import React from "react";
import axios from "axios";

export default class Login extends React.Component {
constructor(props) {
  super(props)

  this.onChangeUserName = this.onChangeUserName.bind(this);
  this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  this.state = {
      username: '',
      password: ''
  }
}

onChangeUserName(e) {
  this.setState({ username: e.target.value })
}

onChangeUserPassword(e) {
  this.setState({ password: e.target.value })
}

onSubmit(e) {
  e.preventDefault()

  const userObject = {
      username: this.state.username,
      password: this.state.password
  };

  axios.post('http://localhost:5000/api/users/login', userObject)
      .then((res) => {
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      });

  this.setState({ username: '', password: '' })
}


render() {
  return (
      <div className="wrapper">
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label> UserName</label>
                  <input type="text" value={this.state.username} onChange={this.onChangeUserName} className="form-control" />
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="text" value={this.state.password} onChange={this.onChangeUserPassword} className="form-control" />
              </div>
              <div className="form-group">
                  <input type="submit" value="Login" className="btn btn-success btn-block" />
              </div>
          </form>
      </div>
  )
}
}




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