// import React from 'react';
// import axios from 'axios';


// export default class Reviews extends React.Component {
//     state = {
//         name: ''
//     };

// handleChange = event =>{
//     this.setState({ name: event.target.value});
// }

//     handleSubmit = event => {
//         event.preventDefault();
    
    
// const user = {
//     name: this.state.name
// }

// axios.get(`http://localhost:5000/restaurant/reviews`, { user })
//     .then(res => {
//         console.log(res);
//         console.log(res.data);
//     })

//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Person Name:
//                     {/* <input type='text' name='name' onChange={this.handleChange} /> */}
//                 </label>
//                 {/* <button type='submit'>Post</button> */}
//             </form>
//         );
        
//     }
// }


import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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

    axios.get(`http://localhost:5000/review/review/${review._id}`).then((res) => {
      // console.log(res);
    //   setData(res.data.reviewData[0]);
    setTitle(res.data.reviewData[0].title);
    setReview(res.data.reviewData[0].review);
    setRevId(res.data.reviewData[0]._id);
      console.log(res.data.reviewData);
      
    });
  }, []);

// const resData = JSON.parse(localStorage.getItem("restourantData"));
// console.log(resData.restaurants)
// // setreviewData(resData.restaurants)
// setData(resData.restaurants)
//   }, []);

  

//   if (!data) return null;
 
//   const currentRestaurants = data.map((rest, id) => (
//     <ul key={id}>
    
//      Restaurants "{rest.name}"
//     </ul>
//   ));

//   const currentReviews = data.map((rest, id ) => (
//     <ul key={id}>
//           "{rest.title}"
//           <br/>
//        ~ {rest.review} ~ 
      
//     </ul>
//   ));

  const edit = () => {
    //   console.log(data);
      const req = {
        review: review, 
        title: title
      };
      axios.put(`http://localhost:5000/review/updateReview/${review._id}`,req )
  } 
 
  // const currentRe = data[0].reviews.map((data, id ) => (
  //   <li key={id}>

  //     <h3>{data.review}</h3>
      
  //   </li>
    

  // ));
  

  return (
// {/* <ul> 
//    {currentReviews}
   
// </ul>

    <div>  
  <form>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title><h1></h1></Card.Title>
    <Card.Text>
    {title}
    <br/>
    <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
    </Card.Text>
    <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
    <Button type ="button" onClick={edit}  variant="primary">Edit review?</Button>
     
    
  </Card.Body>
  
</Card>
</form>
</div>
  );
}
export default Reviews;
