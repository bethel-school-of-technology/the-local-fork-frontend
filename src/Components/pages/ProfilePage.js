// From the office hours.
import React, { useState, useEffect } from "react";
// import axios from 'axios';

function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("mytoken"));
    console.log(userData.user);
    setData(userData.user);
  }, []);

  return (
    <ul>
      <h2>This is {data.username}'s Page</h2>
      <div>
        <p>{data.firstname} {data.lastname}</p>
        {/* <li>Last Name:   {data.lastname}</li> */}
        <p>{data.city}</p>
        <p>{data.tagline}</p>
        {/* <li>{data.username}</li> */}
      </div>
    </ul>
  );
}
export default Profile;