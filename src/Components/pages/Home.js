import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
// import Button from 'react-bootstrap/Button';
import CardGroup from "react-bootstrap/CardGroup";
// import { getNodeText, getRoles } from "@testing-library/dom";

const Res = "http://localhost:5000/restaurant/";
const Search = "http://localhost:5000/restaurant/search";

export default function Home() {
  const [post, setPost] = useState(null);
  console.log(post);
  // const [name, setName] = useState('');
  //   console.log(post);   THIS IS THE WORKING ONE

  useEffect(() => {
    axios.get(Res).then((response) => {
      setPost(response.data.restaurants);
      //   setName(response)
    });
  }, []);

  const getRes = (name) => {
    console.log(name);

    axios.get(`${Res}/${name}`).then((response) => {
      console.log(response);
      localStorage.setItem("restourantData", JSON.stringify(response.data));
    });
  };

  const goRes = () => {
    window.location.href = "http://localhost:3000/reviews";
  };

  // const both = () => {
  // getRes(); goRes();
  // };

  if (!post) return null;
  console.log(post);

  const currentReviews = post[0].reviews.map((rest, id) => (
    <li key={id}>
      {rest.username}
      {rest.review}
    </li>
  ));

  const currentRests = post.map((rest, id) => (
    <ul key={id}>
      <Card>
        <Card.Img
          variant="top"
          src="https://twohealthykitchens.com/wp-content/uploads/2015/12/Christmas-Salad-Recipe-Wreath.jpg"
          style={{ width: "12rem" }}
        />
        <Card.Body>
          <Card.Title>{rest.name}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={() => getRes(rest.name)}>Click me</button>
          {/* <button  onClick={() => getRes(rest.name),goRes} >Click me</button> */}

          <button onClick={goRes}>Click me</button>
        </Card.Footer>
      </Card>

      {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{rest.name}</Card.Title>
    <Card.Text>
    {currentReviews}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
    </ul>
  ));

  //This was working without the goRes..
  //
  {
    /* <button  onClick={both}>Click me</button> */
  }

  return <ul>{currentRests}</ul>;
}
