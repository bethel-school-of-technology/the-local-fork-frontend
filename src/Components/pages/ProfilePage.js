import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Profile.css";

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
          <h2>Welcome, {data.firstname}!</h2>
          <br />
          <h4>{data.tagline}</h4>

          <table>
            <tr>
              <th>Name: </th>
              <td>
                {data.firstname} {data.lastname}
              </td>
            </tr>
            <tr>
              <th>Email: </th>
              <td>{data.email}</td>
            </tr>
            <tr>
              <th>City: </th>
              <td>{data.city}</td>
            </tr>
          </table>

          <div className="displayreviews">
            <p>All my reviews...</p>
            {reviewData.map((review, id) => {
              return (
                <div key={id}>
                  <h3 className="resName">{review.restaurantName}</h3>
                  <h5 className="review">{review.review}</h5>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <img
            className="profileimage"
            alt="logo"
            src="https://the-local-fork.s3.us-east-2.amazonaws.com/TLFProfile3.png"
          />
        </div>
      </div>
    </div>
  );
}
export default Profile;
