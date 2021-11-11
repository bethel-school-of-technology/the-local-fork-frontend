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
  const { restaurantName } = useParams();
  const [restId, setRestId] = useState("");
  //console.log(restId)
  const [reviewData, setReviewData] = useState([]);
  //console.log(reviewData);

  // const loadData = async function getfbProfile(token) {
  //   try {
  //     const restaurant = await axios
  //       .get(`http://localhost:5000/restaurant/${restaurantName}`)
  //       .then((res) => {
  //         console.log(res);
  //         setData(res.data.data);
  //         setRestId(res.data.data._id);
  //         return res.data.data;
  //       });

  //     const review = Promise.all(
  //       restaurant.data.map(({ id }) => {
  //         axios
  //           .get(`http://localhost:5000/review/review/${restId}`)
  //           .then((reviewDataFound) => {
  //             console.log(reviewDataFound);
  //             setReviewData(reviewDataFound.data.reviewData);
  //           });
  //       })
  //     );

      // await axios.get(`http://localhost:5000/review/review/${restId}`).then((reviewDataFound)=>{
      //   console.log(reviewDataFound);
      //   setReviewData(reviewDataFound.data.reviewData)
      // })

      // const pages = Promise.all(user.data.accounts.data.map(({ id }) => axios.get(`https://graph.facebook.com/${id}`, {
      //   params: {
      //     access_token: token,
      //     fields: 'picture,name',
      //   },
      // })));
      // const fbProfile = await Promise.all([user, pages]);
      // debug(fbProfile);
  //   } catch (err) {
  //     // debug(err.stack);
  //   }
  // };

  useEffect(() => {
    //console.log(restaurantName);

    // loadData();

    axios
      .get(`http://localhost:5000/restaurant/${restaurantName}`)
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
  }, [restaurantName]);

  // const resData = JSON.parse(localStorage.getItem("restourantData"));
  // console.log(resData.restaurants)
  // // setreviewData(resData.restaurants)
  // setData(resData.restaurants)
  //   }, []);

  //   if (!data) return null;

  // const currentRestaurants = data.map((rest, id) =>  (
  //   <ul key={id}>

  //     "{rest.name}"
  //     {rest.hours}
  //     {rest.location}
  //     {rest.rating}
  //   </ul>
  // ));

  // const currentReviews = data[0].reviews.map((rest, id ) => (
  //   <li key={id}>
  //         <h1>{rest.name}</h1>
  //   <h1>{rest.username}</h1>
  //     <h1>{rest.review}</h1>

  //   </li>
  // ));

  // const currentRe = data[0].reviews.map((data, id ) => (
  //   <li key={id}>

  //     <h3>{data.review}</h3>

  //   </li>

  // ));

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://nightlife.ng/wp-content/uploads/2020/08/9540978_bardanfo_jpeg273c8b91416e05bf0daee14b46a8c03e.jpg"
          style={{ width: "18rem" }}
        />
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

          {/* {{Newres}}  */}
          <Button type="button" variant="primary">
            Add a review?
          </Button>
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

      {reviewData.map((review, id) => {
        return (
          <div key={id}>
            <h3>{review.title}</h3>
            <h5>{review.review}</h5>
            <Link to={`/reviews/${review.restaurantId}`}>Edit</Link>
          </div>
        );
      })}
    </div>
  );
}
export default Restaurants;
