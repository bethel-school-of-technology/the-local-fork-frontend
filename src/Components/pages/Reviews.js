import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Review.css";

import { FaStar } from "react-icons/fa";

// import { useState } from "react/cjs/react.development";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

// import Newres from "./Newres";
// import { Component } from "react";

function Reviews({ history }) {
  // const [reviewData, setreviewData] = useState([]);
  //   const [data, setData] = useState([]);
  const { restaurantId } = useParams();
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  // const [rating, setRating] = useState("");
  const [revId, setRevId] = useState("");
  const userData = JSON.parse(localStorage.getItem("mytoken"));
  const [restaurant, setRestaurant] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  // const token = localStorage.getItem("mytoken");
  // if (token !== null) {
  //   setSignedIn(true);
  // }

  console.log(revId);

  useEffect(() => {
    // if (signedIn === false) {
    //   history.push("/login");
    // } else  {
      axios
        .get(`http://localhost:5000/restaurant/${restaurantId}`)
        .then((res) => {
          setRestaurant(res.data.data);
        });

      axios
        .get(`http://localhost:5000/review/singlereview/${restaurantId}`, {
          headers: {
            Authorization: `${userData.token}`,
          },
        })
        .then((res) => {
          //Restaurant ID
 
          console.log(restaurantId);
          if (res.data.reviewData) {
            setTitle(res.data.reviewData.title);
            setReview(res.data.reviewData.review);
            setRevId(res.data.reviewData._id);
            console.log(res.data.reviewData);
          }
        });
      // };
  }, [restaurantId]);

  const save = () => {
    if (revId) {
      const req = {
        review: review,
        restaurantName: restaurant.name,
      };
      axios.put(`http://localhost:5000/review/updateReview/${revId}`, req, {
        headers: {
          Authorization: `${userData.token}`,
        },
      });
    } else {
      // where review does not exist, create one
      const req = {
        review: review,
        name: userData.firstname,
        restaurantName: restaurant.name,
        restaurantId: restaurantId,
      };
      axios.post(`http://localhost:5000/review/addNewReview`, req, {
        headers: {
          Authorization: `${userData.token}`,
        },
      });
    }
    history.push(`/restaurants/${restaurantId}`);
  };

  const deleteReview = () => {
    axios.delete(`http://localhost:5000/review/delete/${revId}`, {
      headers: {
        Authorization: `${userData.token}`,
      },
    });
    history.push(`/restaurants/${restaurantId}`);
  };

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-content">
          <h2>Don't be shy... Leave a review!</h2>
          <h5>Restaurant name:</h5>
          <h3>{restaurant.name}</h3>

          <textarea
            value={review}
            placeholder="Review"
            onChange={(e) => setReview(e.target.value)}
          />
          <br />
          <Button
            type="submit"
            className="subm"
            onClick={save}
            // onClick={()=>save}
            alert="Thank you!"
          >
            Submit
          </Button>
          <Button
            type="submit"
            className="subm"
            onClick={deleteReview}
            variant="dark"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}


export default Reviews;
