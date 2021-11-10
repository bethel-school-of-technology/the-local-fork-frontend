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
  //   const token ='mytoken'
  //   console.log(data)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/review/review/617e82a3eaffff441598afd7`)
      .then((res) => {
        // console.log(res);
        //   setData(res.data.reviewData[0]);
        setTitle(res.data.reviewData[0].title);
        setReview(res.data.reviewData[0].review);
        console.log(res.reviewData);
      });
  }, []);

  const edit = () => {
    //   console.log(data);
    const req = {
      review: review,
      title: title,
    };
    axios.put(
      `http://localhost:5000/review/updateReview/61853129f0503bc8655c0df9`,
      req
    );
  };

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

