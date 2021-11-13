// From the office hours.
import axios from "axios";
import React, { useState, useEffect } from "react";
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
        //Restaurant ID

        // console.log(restaurantId);
        if (res.data.reviewData) {
          setReviewData(res.data.reviewData);

          // console.log(res.data.reviewData);
          // console.log(reviewData);
        }
      });

  }, []);

  
  
    
  
  // useEffect(() => {
  // };
  //   axios.get(`http://localhost:5000/review/review/617e82a3eaffff441598afd7`).then((res) => {
  //     // console.log(res);
  //   //   setData(res.data.reviewData[0]);
  //  setData(res.data);
  //     console.log(res)
      
  //   });
  // }, []);
  return (
    <ul>
      <h2>This is {data.username}'s Page</h2>
  
      <div>
        <li>First Name:   {data.firstname}</li>
        <li>Last Name:   {data.lastname}</li>
        <li>City:   {data.city}</li>
        <li>Tagline:  {data.tagline}</li>
        <li>Username:   {data.username}</li>
        <br/>
       
  
        {/* <li>Last Name:   {data.lastname}</li> */}
       
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
    </ul>
  );
}
export default Profile;