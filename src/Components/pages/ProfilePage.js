// From the office hours.
import React, { useState, useEffect } from "react";
// import axios from 'axios';
import "../Profile.css";
import { Button } from "react-bootstrap";

function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("mytoken"));
    console.log(userData.user);
    setData(userData.user);
  }, []);

  return (
    <div className="main">
      <div className="main_container">
        <div className="main_content">
          <h2>This is {data.username}'s Page</h2>
          {/* <li>First Name:   {data.firstname}</li>
        <li>Last Name:   {data.lastname}</li>
        <li>City:   {data.city}</li>
        <li>Tagline:  {data.tagline}</li>
        <li>Username:   {data.username}</li> */}
          <br /><br />
          <p>{data.tagline}</p>
          <p>Name: {data.firstname} {data.lastname}</p>
          {/* <li>Last Name:   {data.lastname}</li> */}
          <p>City: {data.city}</p>
          <button>Click to see reviews</button>
          {/* <li>{data.username}</li> */}
        </div>
        <div className="profileimage">
          <img
            alt="logo"
            src="https://the-local-fork.s3.us-east-2.amazonaws.com/TLFLogo.png"
            // src="https://the-local-fork.s3.us-east-2.amazonaws.com/Restaurant.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Profile;
