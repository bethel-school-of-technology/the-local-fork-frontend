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
    <div className="wrappe">
      <div>
      <h2>This is {data.username}'s Page</h2>
        {/* <li>First Name:   {data.firstname}</li>
        <li>Last Name:   {data.lastname}</li>
        <li>City:   {data.city}</li>
        <li>Tagline:  {data.tagline}</li>
        <li>Username:   {data.username}</li> */}
        <br/>
        <p>{data.firstname} {data.lastname}</p>
        {/* <li>Last Name:   {data.lastname}</li> */}
        <p>{data.city}</p>
        <p>{data.tagline}</p>
        <button >Click to see reviews</button>
        {/* <li>{data.username}</li> */}
      </div>
      <img className="logo" scr="https://the-local-fork.s3.us-east-2.amazonaws.com/TLFLogo.png" alt="logo" />
    </div>
  );
}
export default Profile;