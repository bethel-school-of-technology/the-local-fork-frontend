import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Figure } from "react-bootstrap";
import FigureImage from "react-bootstrap/esm/FigureImage";
import { Link } from "react-router-dom";
import "../Restaurant.css";

// import Newres from "./Newres";
// import { Component } from "react";

function Restaurants() {
  const [data, setData] = useState([]);
  //console.log(data)
  const { restaurantId } = useParams();
  const [restId, setRestId] = useState("");
  console.log(restId);
  const [reviewData, setReviewData] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  //console.log(reviewData);

  useEffect(() => {

    axios
      .get(`http://localhost:5000/restaurant/${restaurantId}`)
      .then((res) => {
        setData(res.data.data);
        setRestId(res.data.data._id);
        return axios.get(
          `http://localhost:5000/review/review/${res.data.data._id}`
        );
      })
      .then((reviewDataFound) => {
        console.log(reviewDataFound);
        setReviewData(reviewDataFound.data.reviewData);
      });
      //setSignedIn = localStorage.getItem('myToken')
  }, [restaurantId]);

  return (
    <div className="container">
      <div className="main-content">
      <Figure>

        {data.image?.length > 0 &&
          <FigureImage
          className="image"
            width={171}
            height={180}
            alt="171x180"
            src={data?.image[0]}
            style={{ width: "20rem" }}
          />}

        <Figure.Caption>

          <div><h1>{data.name}</h1></div>
          
          <br /><br/>
          {/* {data.hours} Hours a Day
          <br /> */}
          <p>Address: {data.location}</p>
          <br /><br />
          <h2>What diners thought</h2>
          {/* Rating {data.rating} stars
          <br /> */}
          {reviewData.map((review, id) => {
            return (
              <div key={id}>
                <h3>{review.name}</h3>
              
                <h5>{review.review}</h5>

              </div>
              
            );
          })}
          <Link to={`/reviews/${restId}`} className="btn btn-primary">Add/Edit Review</Link>
        </Figure.Caption>
      </Figure>


    </div>
    </div>
  );
}
export default Restaurants;
