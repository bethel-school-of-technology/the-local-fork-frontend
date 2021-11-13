import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// import Newres from "./Newres";
// import { Component } from "react";

function Restaurants() {
  // const [reviewData, setreviewData] = useState([]);
  const [data, setData] = useState([]);
  //console.log(data)
  const { restaurantId } = useParams();
  const [restId, setRestId] = useState("");
  console.log(restId);
  const [reviewData, setReviewData] = useState([]);
  const [message, setMessage] = useState("Not signed in");
  //console.log(reviewData);

  useEffect(() => {
    //console.log(restaurantName);

    // loadData();

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
  }, [restaurantId]);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"

          // src="https://nightlife.ng/wp-content/uploads/2020/08/9540978_bardanfo_jpeg273c8b91416e05bf0daee14b46a8c03e.jpg"
          // style={{ width: "18rem" }}
        />{" "}
        <img />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            {data.name}
            {data._id}
            <br />
            Hours {data.hours} a day
          </Card.Text>
          <Card.Text>Address: {data.location}</Card.Text>
          <Card.Text>Rating {data.rating} stars</Card.Text>
          {reviewData.map((review, id) => {
            return (
              <div key={id}>
                <h3>{review.name}</h3>
                <h5>{review.review}</h5>
              </div>
            );
          })}
          {/* {{Newres}}  */}
          {/* <Button type="button" variant="primary">
            Add a review?
          </Button> */}
          <Link to={`/reviews/${restId}`} className="btn btn-primary">
            Add/Edit Review
          </Link>
        </Card.Body>
        {/* {reviewData.map((review, id)=>{
  return (
    <div>
    <h3>{review.title}</h3>
    <h5>{review.review}</h5>
    <Link to={`/Reviews/${review._id}`}>Edit</Link>
    </div>
  )
})} */}
      </Card>
    </div>
  );
}
export default Restaurants;
