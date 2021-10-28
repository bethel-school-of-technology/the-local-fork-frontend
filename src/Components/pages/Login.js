import axios from "axios";
// import { useState, useEffect } from "react";
import React, { useState } from "react";
// import { withRouter } from "react-router";
// import { Link } from "react-router-dom"

const Login =  (({history}) => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const url = "http://localhost:5000/users";

const handleSubmit = async (e) => {
 e.preventDefault();
 console.log(username, password);
 let user = {
     username: username,
     password: password,
 };
 let response = await axios.post(`${url}/login`,user);

console.log(response);
if (response.data.status === 200) {
    const token = response.data
    localStorage.setItem("mytoken",JSON.stringify(token));
    history.push("/profile");
} else {
    history.push("/login")
    console.log('respones.data')
} 

};


return (<div>
    <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label>Username</label>
        <input type='text' name='username' onChange={(e) => setUsername(e.target.value) }/>
        <label>Password</label>
        <input type='password' name='password' onChange={(e) => setPassword(e.target.value) }/>
       {/* <Link to="/profile" > */}
        <button type="submit">Sign in</button>
        {/* </Link>   This is close to what I want but it breaks.  */ }
        
    </form>

</div>);

});


export default Login;




// This works without the history part.
// import axios from "axios";
// // import { useState, useEffect } from "react";
// import React, { useState } from "react";
// // import { Link } from "react-router-dom"



// const Login = () => {
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");

// const signIn = (e) => {
//     e.preventDefault();

//     if (username !== '' && password !== '') {
//         const req = {
//             username,
//             password
//         };

//         axios.post('http://localhost:5000/users/login', req).then(result => {
//             const token = result.data;
//             localStorage.setItem("mytoken",JSON.stringify(token));
//             history.push("profile");
//             console.log(result)
//         });
//     }else {
//     history.push("/login"); //THis isn't working...
// }
// };



// return (<div>
//     <form onSubmit={ signIn }>
//         <h1>Sign In</h1>
//         <label>Username</label>
//         <input type='text' name='username' onChange={(e) => setUsername(e.target.value) }/>
//         <label>Password</label>
//         <input type='password' name='password' onChange={(e) => setPassword(e.target.value) }/>
//        {/* <Link to="/profile" > */}
//         <button>Sign in</button>
//         {/* </Link>   This is close to what I want but it breaks.  */ }
        
//     </form>

// </div>);

// }


// export default Login;

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