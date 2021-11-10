import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import Newres from "./Newres";
// import { Component } from "react";

function Reviews() {
  // const [reviewData, setreviewData] = useState([]);
  //   const [data, setData] = useState([]);

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [revId, setRevId] = useState("");
//   const token ='mytoken'
console.log(revId);

  useEffect(() => {

    axios.get(`http://localhost:5000/review/review/${revId}`).then((res) => {
      // console.log(res);
    //   setData(res.data.reviewData[0]);
    setTitle(res.data.reviewData[0].title);
    setReview(res.data.reviewData[0].review);
    setRevId(res.data.reviewData[0]._id);
      console.log(res.data.reviewData);
      
    });
  }, []);

  const edit = () => {
    //   console.log(data);
      const req = {
        review: review, 
        title: title
      };
      axios.put(`http://localhost:5000/review/updateReview/${revId}`,req )
  } 
 
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
              <h1></h1>
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
            <Button type="button" onClick={edit} variant="primary">
              Edit review?
            </Button>
          </Card.Body>
        </Card>
      </form>
    </div>
  );
}
export default Reviews;
