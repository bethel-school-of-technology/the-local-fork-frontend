import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Newres from "./Newres";
// import { Component } from "react";

function Reviews() {
  // const [reviewData, setreviewData] = useState([]);
  //   const [data, setData] = useState([]);
  const { restaurantId } = useParams();
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [revId, setRevId] = useState("");
  // const [restaurantId, setRestaurantId] = useState("")

//   const token ='mytoken'
console.log(revId);

  useEffect(() => {
// review-by-restaurant-curr-user
    axios.get(`http://localhost:5000/review/review-by-restaurant-curr-user/${restaurantId}`).then((res) => { //Restaurant ID
      console.log(res);
      setTitle(res.data.reviewData[0].title);
      setReview(res.data.reviewData[0].review);
      setRevId(res.data.reviewData[0]._id);
      // setRestaurantId(res.data.reviewData[0]._id);
        console.log(res.data.reviewData);
      // axios.get(`http://localhost:5000/review/${restaurantId}`).then((res) => { //Restaurant ID
      // console.log(res);



//       if (res) { // review exist
//  //   setData(res.data.reviewData[0]);
//  setTitle(res.data.reviewData[0].title);
//  setReview(res.data.reviewData[0].review);
//  setRevId(res.data.reviewData[0]._id);
//  // setRestaurantId(res.data.reviewData[0]._id);
//    console.log(res.data.reviewData);
//       } else {
//       //   // review not exist yet
//       }

   
      
    });
  }, []);

//   const save = () => {
//     //   console.log(data);
// if (revId) { // review exist
//   const req = {
//     review: review, 
//     title: title
//   };
//   axios.put(`http://localhost:5000/review/updateReview/${revId}`,req ) //Review ID
// } else { // review not exist, we are creating one
//   const req = {
//     review: review, 
//     title: title,
//     restaurantId: restaurantId,
//   };

//   // TODO send post to server to addReview route

// }

//   } 
 
  // const currentRe = data[0].reviews.map((data, id ) => (
  //   <li key={id}>

  //     <h3>{data.review}</h3>
      
  //   </li>
    

  // ));
  

  return (
    <div>
      <form>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
             
            </Card.Title>
            <Card.Text>
              {title}
              <br />
              <textarea
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Card.Text>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            {/* <Button type="button" onClick={save} variant="primary">
              Edit review?
            </Button> */}
          </Card.Body>
        </Card>
      </form>
    </div>
  );
}
export default Reviews;
