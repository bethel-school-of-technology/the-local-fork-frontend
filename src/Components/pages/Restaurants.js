// import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



function Restaurants() {
  const [reviewData, setreviewData] = useState([]);
  const [data, setData] = useState([]);
  console.log(data)

  useEffect(() => {

const resData = JSON.parse(localStorage.getItem("restourantData"));
console.log(resData.restaurants)
setreviewData(resData.restaurants.reviews)
setData(resData.restaurants)
  }, []);

  

//   if (!data) return null;
 
  const reView = reviewData.map((rest, id) => (
    <li key={id}>
    
      <h1>{rest.review}</h1>
    </li>
  ));

//   const currentReviews = post[0].reviews.map((rest, id ) => (
//     <li key={id}>
//           <h1>{rest.name}</h1>
//     <h1>{rest.username}</h1>
//       <h1>{rest.review}</h1>
      
//     </li>
    

//   ));
//   const currentRe = data[0].reviews.map((data, id ) => (
//     <li key={id}>

//       <h3>{data.review}</h3>
      
//     </li>
    

//   ));
  

  return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://nightlife.ng/wp-content/uploads/2020/08/9540978_bardanfo_jpeg273c8b91416e05bf0daee14b46a8c03e.jpg" style={{ width: "18rem"}} />
  <Card.Body>
    <Card.Title><h1>{data.name}</h1></Card.Title>
    <Card.Text>
    Hours {data.hours} a day
    </Card.Text>
    <Card.Text>
    Address: {data.location}
    </Card.Text>
    <Card.Text>
   Rating {data.rating} stars
    </Card.Text>
    <Button type ="button"   variant="primary">Add a review?</Button>
  </Card.Body>
  {reView}
</Card>

  );
}
export default Restaurants;


