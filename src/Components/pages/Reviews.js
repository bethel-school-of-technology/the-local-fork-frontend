import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { FaStar } from "react-icons/fa";

// import { useState } from "react/cjs/react.development";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

// import Newres from "./Newres";
// import { Component } from "react";

function Reviews({history}) {
  // const [reviewData, setreviewData] = useState([]);
  //   const [data, setData] = useState([]);
  const { restaurantId } = useParams();
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  // const [rating, setRating] = useState("");
  const [revId, setRevId] = useState("");
  const userData = JSON.parse(localStorage.getItem("mytoken"));
  const [restaurant, setRestaurant] = useState([]);

  //  const stars = Array(5).fill(0);
  //  const [currentValue, setCurrentValue] = useState(0);
  //  const [hoverValue, setHoverValue] = useState(undefined);
  //  //DELETE REVIEW
  //  // const [reviews, setReviews] = useState('');

  //  const handleClick = (value) => {
  //    setCurrentValue(value);
  //  };

  //  const handleMouseOver = (value) => {
  //    setHoverValue(value);
  //  };

  //  const handleMouseLeave = () => {
  //    setHoverValue(undefined);
  //  };
  // const [restaurantId, setRestaurantId] = useState("")

  //   const token ='mytoken'
  console.log(revId);

  useEffect(() => {
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
          // setRating(res.data.reviewData.rating);
          setRevId(res.data.reviewData._id);
          // setRestaurantId(res.data.reviewData[0]._id);
          console.log(res.data.reviewData);
        }

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
  }, [restaurantId]);

  const save = () => {
    //   console.log(data);
    if (revId) {
      // review exist
      const req = {
        review: review,
        restaurantName: restaurant.name,

        // rating: rating
      };
      axios.put(`http://localhost:5000/review/updateReview/${revId}`, req, {
        headers: {
          Authorization: `${userData.token}`,
        },
      }); //Review ID
    } else {
      // review not exist, we are creating one
      const req = {
        review: review,
        name: userData.firstname,
        restaurantName: restaurant.name,
        // rating: rating,
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
  
  //             </Card.Title>
  //             <Card.Text>
  //               {title}
  //               <br />
  //               <textarea
  //                 value={title}
  //                 onChange={(e) => setTitle(e.target.value)}
  //               />
  //             </Card.Text>
  //             <textarea
  //               value={review}
  //               onChange={(e) => setReview(e.target.value)}
  //             />
  //             <Button type="button" onClick={save} variant="primary">
  //               Save Review
  //             </Button>
  //             <Button type="button" onClick={deleteReview} className="btn-dangerous" variant="primary">
  //            Delete Review
  //             </Button>
  //           </Card.Body>
  //         </Card>
  //       </form>
  //     </div>
  //   );
  // }

  return (
    <div style={styles.container}>
      <br />
      <h2>Don't be shy... Leave a review!</h2>
      <h3>{restaurant.name}</h3>
      {/* <div style={styles.stars}>
      {stars.map((_, index) => {
        return (
          <FaStar
            // key={index}
            // size={24}
            // style={{
            //   marginRight: 10,
            //   cursor: "pointer",
            // }}
            // color={
            //   (hoverValue || currentValue) > index
            //     ? colors.orange
            //     : colors.grey
            // }
            // onClick={() => handleClick(index + 1)}
            // onMouseOver={() => handleMouseOver(index + 1)}
            // onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div> */}
      {/* <input value={title} placeholder="Name" onChange={(e) => setTitle(e.target.value)} style={styles.input}></input> */}

      <textarea
        value={review}
        placeholder="Review"
        onChange={(e) => setReview(e.target.value)}
        style={styles.textarea}
      />
      <Button onClick={save} alert="Thank you!" style={styles.button}>
        Submit
      </Button>
      <Button onClick={deleteReview} variant="dark" style={styles.button}>
        Delete
      </Button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "20px 0",
    minHeight: 100,
    padding: 10,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
  input: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "10px 0",
    minHeight: 10,
    padding: 10,
  },
};
export default Reviews;
