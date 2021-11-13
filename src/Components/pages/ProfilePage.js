// From the office hours.
import axios from "axios";
import React, { useState, useEffect } from "react";
// import axios from 'axios';
import "../Profile.css";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Profile() {
  const [data, setData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  
  useEffect(() => {
  const userData = JSON.parse(localStorage.getItem("mytoken"));
  console.log(userData.user);
  setData(userData.user);
  axios
  .get(`http://localhost:5000/review/myreview/`, {
  headers: {
  Authorization: `${userData.token}`,
  },
  })
  .then((res) => {
  
  if (res.data.reviewData) {
  setReviewData(res.data.reviewData);

  }
  });
  }, []);


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
          <h3>{data.tagline}</h3>
          <p>Name: {data.firstname} {data.lastname}</p>
          <p>Email: {data.email}</p>
          <p>City: {data.city}</p>
         
          {/* <li>{data.username}</li> */}
          {reviewData.map((review, id) => {
            return (
              <div key={id}>
                <h3>{review.restaurantName}</h3>
                <h5>{review.review}</h5>
              </div>
            );
          })}
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
